import categoryApi from '@/api/category'
import goodsApi from '@/api/goods'
import topicApi from '@/api/topic'
import wechatApi from '@/api/wechat'
import store from '@/store'
import storage from '@/utils/storage'
const baseApi = process.env.VUE_APP_BASE_API
import userApi from '@/api/user'
import {
    ActionSheet,
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
    Tag,
    Sidebar,
    SidebarItem,
    GridItem,
    Grid
} from 'vant';

export default {
    components: {

        [Grid.name]: Grid,

        [GridItem.name]: GridItem,

        [ActionSheet.name]: ActionSheet,
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
            user: undefined,
            tenantName:'',
            ispc: false,
            loading: false,
            finished: false,
            navList: [],
            banners: [],
            hotList: [],
            newList: [],
            activeFooter: 0,
            activeNav: 0,
            total: 0,
            listQuery: {
                page: 1,
                limit: 50,
                idCategory: undefined
            },
            count: 0,
            isLoading: false,
            browserHeight: 0,
            tg:'',
            bot:'',
            website:'',
            actionShow: false,
            downShow: false
        }
    },
    mounted() {
        this.init()
        this.updateBrowserHeight();
        window.addEventListener('resize', this.updateBrowserHeight);
        if (navigator.userAgent.indexOf("Windows") > -1) {
            this.ispc = true
        } else {
            this.ispc = false
        }
        const tenant = storage.get('tenant')
        console.log('tenant:'+tenant)
        
        this.tenantName = JSON.parse(tenant).name
        

    },
    methods: {
        clickIos() {
            console.log(1111111111111111)
            Toast('请联系客服索要外服苹果ID下载')
        },
        updateBrowserHeight() {
            this.browserHeight = window.innerHeight;
        },
        init() {
            userApi.getUserInfo().then(response => {
                this.user = response.content
                this.message = this.user.link
                this.tg = this.user.contract
                this.botUsername = this.user.botUsername
                this.website = this.user.website
            }).catch((err) => {
                console.log('获取用户基本新失败', err)
                this.$router.replace({ path: 'login', query: { redirect: 'user' } })
            })
        },

        onCopy1: function (e) {
            Toast('复制成功')
            // console.log(e)
        },
        onError: function (e) {
            Toast('复制失败')
        },
        clickNav(index, title) {
            console.log(index)
            console.log(title)

        },
        clickSwipe(index, p2) {
            console.log(index)
            console.log(p2)
        },

    }
};
