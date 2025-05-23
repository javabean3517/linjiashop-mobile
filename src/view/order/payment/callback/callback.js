import payApi from '@/api/pay'
import {Button, NavBar, Toast,Icon} from 'vant'
export default {
    components: {
        [NavBar.name]: NavBar,
        [Button.name]: Button,
        [Toast.name]: Toast,
        [Icon.name]: Icon
    },
    data() {
        return {
            result:'查询中',
            isSuccess:false,
            orderSn:''
        };
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            // this.result="支付成功"
            // this.isSuccess = true
            const orderSn = this.$route.params.orderSn
            payApi.queryResult(orderSn).then(res => {
                if(res.content === true){
                    this.result="支付成功"
                    this.isSuccess = true
                }else{
                    this.isSuccess = false
                    this.result="支付失败"
                }
            }).catch(err=>{
                this.isSuccess = false
                this.result=err
                    
            })
        },
        toIndex(){
            this.$router.push('/index')
        },
        toOrder(){
            this.$router.push('/user')
            // this.$router.push('/order/detail/'+this.orderSn)
        }
    }
};
