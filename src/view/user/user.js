import userApi from '@/api/user'
import store from '@/store'

import { Cell, CellGroup, Col, Icon, Row, Tabbar, TabbarItem, Toast, Dialog, Image,Tag } from 'vant';

export default {
    components: {
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
            activeFooter: 3,
            user: {}
        }
    },
    mounted() {
        this.init()
    },
    methods: {
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
                console.log(JSON.stringify(this.user))
                store.dispatch('app/toggleUser', response.content)
                // if(response.data.refreshWechatInfo === false){
                //     return ;
                // }
                // if (url.indexOf('localhost') > -1 || url.indexOf('127.0.0.1') > -1) {
                //     console.log('开发环境不获取openid')
                // } else {
                //     const userAgent = window.navigator.userAgent.toLowerCase()
                //     //使用微信访问本系统的时候获取微信openid，否则不获取
                //     if (userAgent.indexOf('micromessenger') >-1) {
                //         this.processOpenid()
                //     }
                // }
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
