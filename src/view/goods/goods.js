import goods from '@/api/goods'
import cart from '@/api/cart'
import favorite from '@/api/favorite'
import storage from '@/utils/storage'

import {
  Cell,
  CellGroup,
  Col,
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon,
  Icon,
  Sku,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Tag,
  Toast,
  Button,
  NavBar
} from 'vant';

const baseApi = process.env.VUE_APP_BASE_API

export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Sku.name]: Sku,
    [Button.name]: Button,
    [NavBar.name]: NavBar
  },

  data() {
    return {
      ispc : false,
      showLoading: true,
      goodsName :'',
      ifLike: false,
      likeColor: 'black',
      cartCount: '',
      showSku: false,
      sku:{},
      offline: false,
      goods: {
        name: '',
        price: 0,
        express: '免运费',
        remain: 0,
        thumb: []
      }
    };
  },
  created() {
    if(navigator.userAgent.indexOf("Windows")>-1){
      this.ispc = true
    }else{
      this.ispc = false
    }

    this.init()
  },
  computed: {

  },
  methods: {
    init() {
      let id = this.$route.params.id
      goods.getGoods(id).then(response => {

        let goods = response.content
        if(goods.sku==undefined){
          Toast.fail('该商品已下架')
          this.$router.go(-1)
          return
        }
        this.offline = false
        this.goods = goods
        this.goodsName = goods.name
        this.sku = goods.sku
        this.showLoading = false

        // const user = storage.getUser()
        // if(user.nickName) {
        //     //获取当前用户购物车商品数量
        //     cart.count().then(response => {
        //         this.cartCount = response.data ===0?'':response.data
        //     }).catch((err) => {

        //     })
        //     //判断当前用户是否收藏该产品
        //     favorite.ifLike(this.goods.id).then(response => {
        //         if (response.data === true) {
        //             this.likeColor = 'red'
        //             this.ifLike = true
        //         }
        //     }).catch((err) => {

        //     })
        // }
      }).catch((err) => {
        this.showLoading = false
        console.log('err', err)
        Toast(err)
      })

    },
    toHome() {
      this.$router.push('/index')
    },
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2)
    },

    goToCart() {
      this.$router.push('/cart');
    },
    addCart() {
      this.showSku = true
      
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    buy() {
      this.showSku = true
    },
    sorry() {
      Toast('敬请期待')
    },
    like() {
      if (this.ifLike === false) {
        favorite.add(this.goods.id).then(response => {
          Toast('收藏成功')
          this.ifLike = true
          this.likeColor = 'red'
        })
      } else {
        favorite.dislike(this.goods.id).then(response => {
          Toast('取消收藏成功')
          this.ifLike = false
          this.likeColor = 'black'
        })

      }
    },
    onBuyClicked(skuData) {
      let cartData = { id: skuData.selectedSkuComb.id}
      cart.add(cartData).then( response => {
          this.$router.push('/cart');
          this.showSku = false
      })
    },
    onAddCartClicked(skuData) {
      // console.log(JSON.stringify(skuData))
      // let cartData = { id: skuData.selectedSkuComb.id}
      // cart.add(cartData).then(response => {
      //   console.log(response)
      //   Toast.success('已加入到购物车')
      //   this.showSku = false
      //   this.cartCount += response.data
      // })
      let cartData = { id: skuData.selectedSkuComb.id}
      cart.add(cartData).then( response => {
          this.$router.push('/cart');
          this.showSku = false
      })

    }
  }
};
