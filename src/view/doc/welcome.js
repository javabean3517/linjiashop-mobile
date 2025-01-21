import categoryApi from '@/api/category'
import goodsApi from '@/api/goods'
import topicApi from '@/api/topic'
import wechatApi from '@/api/wechat'
import store from '@/store'
import storage  from '@/utils/storage'
const baseApi = process.env.VUE_APP_BASE_API
import {
    Card,
    Cell,
    CellGroup,
    Col,
    Icon,
    Lazyload,
    Row,
    Tab,
    Tabbar,
    TabbarItem,
    Tabs,
    Toast,
    Divider,
    Panel,
    Image,
    List,
    Tag ,
    Sidebar,
    SidebarItem 
} from 'vant';

export default {
    components: {
        [Sidebar.name]: Sidebar,
        [SidebarItem.name]: SidebarItem,
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [Card.name]: Card,
        [Toast.name]: Toast,
        [Divider.name]: Divider,
        [List.name]: List,
        [Panel.name]: Panel,
        [Image.name]: Image,
        [Tag.name]: Tag,
        Lazyload


    },
    data() {
        return {
            ispc: false,
            loading: false,
            finished: false,
            navList: [],
            banners: [],
            hotList: [],
            newList: [],
            activeFooter: 0,
            activeNav: 0,
            total:0,
            listQuery: {
                page: 1,
                limit: 50,
                idCategory: undefined
            },
            count: 0,
            isLoading: false,
        }
    },
    mounted() {
        let activeNav = sessionStorage.getItem('activeNav')
        if(activeNav && activeNav.length>0){
            this.activeNav = activeNav
        }
        this.init()
        if(navigator.userAgent.indexOf("Windows")>-1){
            this.ispc = true
          }else{
            this.ispc = false
          }

    },
    methods: {
        init() {
            this.queryCates()
            this.queryGoods()
        },
        queryCates(){
            let navList = sessionStorage.getItem('navList')
            if(navList && navList.length>0){
                
                this.navList = JSON.parse(navList)
                return
            }
            categoryApi.getAllCategories().then(response => {
                this.navList = response.content
                sessionStorage.setItem('navList',JSON.stringify(response.content))
            }).catch((err) => {
                Toast.fail(err);
            })
        },

        queryGoods() {
            let key = 'hotList-'+this.activeNav
            let hotList = sessionStorage.getItem(key)
            if(hotList && hotList.length>0){
                this.hotList = JSON.parse(hotList)
                return
            }
            goodsApi.search(this.activeNav).then(response => {
                let list = response.content
                this.hotList = list
                sessionStorage.setItem(key ,JSON.stringify(this.hotList))

            }).catch((err) => {
                Toast(err)
            })

        },
        clickNav(index, title) {
            console.log(index)
            console.log(title)

        },
        clickSwipe(index, p2) {
            console.log(index)
            console.log(p2)
        },
        viewGoodsDetail(id) {
            this.$router.push({path: '/goods/'+id})
        },
        formatPrice(price) {
            return (price / 100).toFixed(2)
        },
        toTopic(id) {
            this.$router.push({path: '/topic/'+id})
        },
        processOpenid() {
            let url = window.location.href;
            if (url.indexOf('code') > -1) {
                const code = url.split('code=')[1].split("&")[0];
                wechatApi.getWxOpenId({
                    "code": code
                }).then(res => {
                    store.dispatch('app/toggleToken',res.data.token)
                    store.dispatch('app/toggleUser',res.data.user)
                    storage.set('chosenAddressId','')
                })

            } else {
                this.redirectForCode();
            }
        },
        redirectForCode() {
            wechatApi.getWxSign({
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
};
