import order  from '@/api/orders'
import cartApi from '@/api/cart'

import {Card, Cell, CellGroup, Checkbox, CheckboxGroup, NavBar, SubmitBar, Tabbar, TabbarItem, Toast} from 'vant';
import storage from '@/utils/storage'
const baseApi = process.env.VUE_APP_BASE_API
export default {
    components: {
        [Card.name]: Card,
        [Checkbox.name]: Checkbox,
        [SubmitBar.name]: SubmitBar,
        [CheckboxGroup.name]: CheckboxGroup,
        [NavBar.name]: NavBar,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup
    },

    data() {
        return {
            totalPrice: 2600,
            activeFooter: 2,
            checkedGoods: [],
            checkeAllCarts: [],
            cartList: [],
            idCartList:[],
            checkedAll: true,
            addr: undefined,
            message:''
        };
    },
    mounted() {
        this.idCartList = this.$route.query.ids
        if (typeof this.idCartList === 'string') {
            this.idCartList = new Array(this.idCartList);
        }
        this.init()
    },
    computed: {
        addrText(){
          if(this.addr){
              return this.addr.name+'('+this.addr.tel+')'
          }else{
              return ''
          }
        },
        submitBarText() {
            const count = this.checkedGoods.length;
            return '提交订单' + (count ? `(${count})` : '')
        },
        totalPrice() {
            return this.cartList.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? (parseFloat(item.price) * item.count) : 0), 0)
        }
    },

    methods: {
        init() {
            cartApi.queryByUser().then(response => {
                let cartList = response.content
                // console.log('cartList:'+JSON.stringify(cartList))
                for (const index in cartList) {
                    this.checkedGoods.push(cartList[index].id )
                }
                // this.allCartItem = this.checkedCartItem
                this.cartList = cartList
                console.log('cartList:'+JSON.stringify(this.cartList))
            }).catch((err) => {
                console.log(err)
            })
            // const chosenAddressId = storage.get('chosenAddressId')
            // order.queryByUser({chosenAddressId:chosenAddressId,idCarts:this.idCartList.join(',')}).then(response => {
            //     this.cartList = cartList
            // }).catch((err) => {
            //     Toast(err)
            // })
        },
        submit() {
            // if(!this.addr || !this.addr.id){
            //     this.$router.push({path:'address'})
            //     return
            // }
            order.save({id:1}).then( response => {
                let order = response.data
                this.$router.push({path:'payment',query:{orderSn:order.orderSn,totalPrice:order.totalPrice}})
            })

            // let order = response.data
            this.$router.push({path:'payment',query:{}})
        },
        formatPrice(price) {
            return (price / 100).toFixed(2);
        },
        stepperEvent(item, arg) {
            let count = arg[0];
            cart.update({id: item.id, count: count})
        },
        checkAll() {
            if (this.checkedGoods.length === this.cartList.length) {
                this.checkeAllCarts = this.checkedGoods
                this.checkedGoods = []
            } else {
                this.checkedGoods = this.checkeAllCarts
            }
        },
        chooseAddress(){

        }
    }
};
