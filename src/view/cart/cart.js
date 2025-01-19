import cartApi from '@/api/cart'
import order  from '@/api/orders'
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast, NavBar, Tabbar, TabbarItem,Stepper, Button, Icon  } from 'vant';
const baseApi = process.env.VUE_APP_BASE_API
import storage from '@/utils/storage'
export default {
    components: {
        [Card.name]: Card,
        [Checkbox.name]: Checkbox,
        [SubmitBar.name]: SubmitBar,
        [CheckboxGroup.name]: CheckboxGroup,
        [NavBar.name]: NavBar,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Stepper.name]: Stepper,
        [Button.name]: Button,
        [Icon.name]: Icon
    },

    data() {
        return {
            ispc : false,
            totalPrice: 2600,
            isLogin:false,
            activeFooter: 2,
            checkedCartItem: [],//当前选中的购物车项目id
            allCartItem:[], // 用户所有的购物车项目id列表
            cartList: [],
            checkedAll: true,
            showEdit: false,
            rightText:'编辑',
            totalPrice:0,
            activedUser:{},
            currentUser:{},
            activedType:''
        }
    },
    mounted(){
        if(navigator.userAgent.indexOf("Windows")>-1){
            this.ispc = true
          }else{
            this.ispc = false
          }
      this.init()
    },
    computed: {
        submitBarText() {
            const count = this.checkedCartItem.length;
            return '结算' + (count ? `(${count})` : '');
        },
        totalPrice() {
                return this.cartList.reduce((total, item) => total + (this.checkedCartItem.indexOf(item.id) !== -1 ? (parseFloat(item.price)*item.count) : 0), 0)
        }
    },

    methods: {
        onClickLeft() {
            this.$router.go(-1);
          },
        init(){
            const user = storage.getUser()
            console.log('user:'+JSON.stringify(user))
            this.isLogin = user.nickName
            console.log('user:'+this.isLogin)
            // if(!this.isLogin){
            //     this.toLogin()
            //     return
            // }

            if(this.isLogin) {
                const that = this
                cartApi.queryByUser().then(response => {
                    let cartList = response.content.vos
                    for (const index in cartList) {
                        this.checkedCartItem.push(cartList[index].id )
                    }
                    that.totalPrice = Number(cartList[0].price.split(".")[0])
                    console.log('index:'+that.totalPrice )
                    this.cartList = cartList
                    console.log('cartList:'+JSON.stringify(this.cartList))
                    this.activedUser = response.content.activedUser
                    this.currentUser = response.content.currentUser
                    this.activedType = response.content.activedType
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        
        submit() {
            order.save(this.cartList[0].id).then( response => {
                let order = response.content
                console.log(order)
                this.$router.push({path:'payment',query:{orderSn:order.paymentId,totalPrice:order.price}})
            })
            //提交订单后跳转支付
            // this.$router.push({path:'payment',query:{}})
            // this.$router.push({path:'checkout',query: {ids: this.checkedCartItem }})
        },
        formatPrice(price) {
            return (price / 100).toFixed(2);
        },
        stepperEvent(item, arg) {
            const count = arg[0];
            cartApi.update(item.id,count)
        },
        toHome() {
            this.$router.push('/')
        },
        toLogin() {
            this.$router.push({path:'login', query: {redirect:'cart'}})
        },
        checkAll( ) {
            if(this.checkedAll === true){
                this.checkedCartItem = this.allCartItem
            }else{
                this.checkedCartItem = []
            }
            return
            if (this.checkedCartItem.length === this.cartList.length) {
                this.allCartItem = this.checkedCartItem
                this.checkedCartItem = []
            } else {
                this.checkedCartItem = this.allCartItem
            }
        },
        onClickRight(){
            console.log('aa')
            if(this.showEdit === true){
                this.showEdit = false
                this.rightText = '编辑'
            }else {
                this.showEdit = true
                this.rightText = '完成'
            }
        },
        remove(){
            cartApi.remove(this.checkedCartItem).then(response =>{
                this.init()
            })
        }
    }
};
