import userApi from '@/api/user'
import store from '@/store'

import { Cell,ActionSheet,Grid,GridItem , CellGroup, Col, Icon, Row, Tabbar, TabbarItem, Toast, Dialog, Image,Tag } from 'vant';
import storage  from '@/utils/storage'
export default {
    components: {
        [Grid.name]: Grid,

        [GridItem.name]: GridItem,

        [ActionSheet.name]: ActionSheet,
        [Tag.name]: Tag,
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Toast.name]: Toast,
        [Dialog.name]: Dialog,
        [Image.name]: Image,

    },
    data() {
        return {
            tg:'',
            bot:'',
            website:'',
            actionShow: false,
            activeFooter: 3,
            user: {},
            downShow: false,
            message: '测试内容',
            actions : [
                { name: '选项一' },
                { name: '选项二' },
                { name: '选项三' },
              ]
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        clickIos(){
            console.log(1111111111111111)
            Toast('请联系客服索要外服苹果ID下载')
        },
        onCopy: function (e) {
            this.actionShow = false
            Toast('复制成功，请使用clash/小火箭手动导入订阅')
            this.actionShow = false
          },
          onError: function (e) {
            this.actionShow = false

            Toast('复制失败')
          },
          onCopy1: function (e) {
            Toast('复制成功')
          },
          onError1: function (e) {
            Toast('复制失败')
          },

          onCopy2: function (e) {
            Toast('复制客服邮箱成功')
          },
          onError2: function (e) {
            Toast('复制失败')
          },
        copyLink(){
            navigator.clipboard.writeText(this.user.link).then(() => {
                Toast('复制成功')
                // alert('辅助成功');
              }).catch(err => {
                Toast('复制失败'+err)
              });
        
        
        },
        importLink(){
            window.open(this.user.importLink)
        },
        init() {
            userApi.getUserInfo().then(response => {
                const url = window.location.href
                this.user = response.content
                this.message = this.user.link
                this.tg = this.user.contract
                this.botUsername = this.user.botUsername
                this.website = this.user.website
                console.log(JSON.stringify(this.user))
                store.dispatch('app/toggleUser', response.content)
            }).catch((err) => {
                console.log('获取用户基本新失败', err)
                this.$router.replace({ path: 'login', query: { redirect: 'user' } })
            })
        },
        sorry() {
            Toast('敬请期待')
        },
        toOrder(status) {
            this.$router.push({ path: 'order', query: { status: status } })
        },
        processOpenid() {
            let url = window.location.href;
            if (url.indexOf('code') > -1) {
                const code = url.split('code=')[1].split("&")[0];
                userApi.getWxOpenId({
                    "code": code
                }).then(res => {

                })

            } else {
                this.redirectForCode();
            }
        },
        service(){
            this.$dialog.alert({
                title: '联系客服',
                message: 'TG：https://t.me/ionoionoi  \n邮箱：niuniuwork387@gmail.com ',
                confirmButtonColor: '#32AE57'
              }).then(() => {
                // on close
              });
        },
        onLogout() {
            this.$dialog.confirm({
                title: '提示',
                message: '确认退出登录？',
                confirmButtonColor: '#32AE57'
            }).then(() => {
                store.dispatch('app/toggleUser', {})
                store.dispatch('app/toggleToken', '')

                this.$router.push({ path: '/index' })
            }).catch(() => {
                console.log('点击了取消')
            })

        },
        redirectForCode() {
            userApi.getWxSign({
                "url": window.location.href
            }).then(res => {
                const rr = res.data;
                const redirectUrl = window.location.href;
                let param = 'appid=' + rr.appId
                param += '&response_type=code'
                param += '&scope=snsapi_base'
                param += '&redirect_uri=' + encodeURIComponent(redirectUrl)
                param += '&state=linjiashop#wechat_redirect'
                console.log('url:', 'https://open.weixin.qq.com/connect/oauth2/authorize?' + param)
                window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?' + param
            }).catch(err => {

            })
        }
    }
}
