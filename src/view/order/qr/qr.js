import payApi from '@/api/pay'
import {Button, Cell, CellGroup, NavBar, Radio, RadioGroup, Toast} from 'vant'
import wx from 'weixin-js-sdk'
import storage from '@/utils/storage'
export default {
    components: {
        [NavBar.name]: NavBar,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio,
        [Button.name]: Button,
        [Toast.name]: Toast
    },

    data() {
        return {
            user:{},
            order: {},
            payType: 'alipay',
            ispc: false,
            timer:undefined,
            usdtOrder:{}
        };
    },
    mounted() {
        if(navigator.userAgent.indexOf("Windows")>-1){
            this.ispc = true
          }else{
            this.ispc = false
          }
        this.init()
        
    },
    beforeDestroy() {
      //清除定时器
      clearInterval(this.timer);

    },
    computed: {},
    methods: {
        init() {
            let orderSn = this.$route.query.orderSn
            payApi.qrPay(orderSn).then(res=>{
                this.usdtOrder = res
            }).catch(e=>{
                console.log(e)
            })
            console.log('orderSn:'+orderSn)
            this.timer = setInterval(()=>{
              payApi.queryResult(orderSn).then(res=>{
                console.log(res.content)
                if(res.content==true){
                  Toast('支付成功')
                  this.$router.push({ path: 'payment/callback/'+orderSn})
                }
              }).catch(e=>{

              })
            },3000)

        },
        onClickLeft() {
            this.$router.go(-1);
          },

        formatPrice(price) {
            return (price / 100).toFixed(2);
        },
        onCopy1: function (e) {
            Toast('地址复制成功')
          },
        onError1: function (e) {
            Toast('复制失败')
          },
        onCopy2: function (e) {
            Toast('金额复制成功')
          },
        onError2: function (e) {
            Toast('复制失败')
          },
    }
};
