import categoryApi from '@/api/category'
import goodsApi from '@/api/goods'
import topicApi from '@/api/topic'
import wechatApi from '@/api/wechat'
import store from '@/store'
import storage from '@/utils/storage'
const baseApi = process.env.VUE_APP_BASE_API
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
            tg: 'https://t.me/ionoionoi',
            email: 'niuniuwork387@gmail.com',
            nntg: 'https://t.me/sixvpnbot',
            nngp: 'https://t.me/niuniu6vpn',
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
            // this.queryCates()
            // this.queryGoods()
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
