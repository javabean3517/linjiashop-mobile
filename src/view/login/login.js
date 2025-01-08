import loginApi from '@/api/login'
import store from '@/store'
import storage  from '@/utils/storage'
import { Row, Col, Icon, Cell, CellGroup,Field,Button,Toast,
    Tabbar,Tag,Tab, Tabs,Form,
    TabbarItem,Dialog,Collapse, CollapseItem} from 'vant';

export default {
    components: {
        [Form.name]: Form,
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [Tag.name]: Tag,
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Field.name]: Field,
        [Button.name]: Button,
        [Toast.name]: Toast,
        [Dialog.name]: Dialog,
        [Collapse.name]: Collapse,
        [CollapseItem.name]: CollapseItem,
    },
    data() {
        return {
            tgCodeDisabled: false,
            tgLoginDisabled: true,
            token:'',
            mobile:'',
            smsCode:'',
            password:'',
            activeFooter:3,
            show1:false,
            show2:true,
            redirect:'',
            hasSendSms: false,
            second: 60,
            activeName : -1,
            active: 0,
            link:'',
            tgCode:''
        }
    },
    mounted(){
      this.init()
    },
    methods:{
        init(){
            if(store.state.app.user.nickName){
                this.$router.push({path: '/index'})
                return
            }
            if(this.$route.query.redirect){
                this.redirect = this.$route.query.redirect
            }
        },
        onSubmit(){

        },
        toLoginByPassword(){
            this.show1 = false;
            this.show2 = true;
        },
        toTg(){
            loginApi.getBotLink().then(res=>{
                console.log(res.content.token)
                this.token = res.content.token
                // window.location.replace()(res.content.link+res.content.token,'_blank')

                setTimeout(() => {
                    var adPopup = window.open('about:blank', '_blank', 'width=' + window.screen.width + ', height=' + window.screen.height)
                    adPopup.location = res.content.link+res.content.token;
                }, 500)
            })
           
        },
        loginByTg(){
            console.log(this.tgCode)
            console.log(this.token)

            if(this.tgCode === ''){
                Toast({duration:1000,message:'请输入验证码'})
                return
            }
            if(this.token === ''){
                Toast({duration:1000,message:'请获取验证码'})
                return
            }
            loginApi.loginByTg(this.token,this.tgCode).then(response=>{
                console.log("response:"+JSON.stringify(response))
                console.log("content:"+JSON.stringify(response.content))

                store.dispatch('app/toggleToken',response.content.token)
                store.dispatch('app/toggleUser',response.content)
                console.log("token:"+response.content.token)
                this.$router.push({path: '/index'})
                // if(this.redirect){
                //     this.$router.push({path: this.redirect})
                // }else {
                //     this.$router.push({path: '/index'})
                // }
            }).catch( (err) => {

            })
        },
        loginByLink(){
            loginApi.loginByLink(this.link).then( response=> {
                store.dispatch('app/toggleToken',response.content.token)
                store.dispatch('app/toggleUser',response.content)
                this.resetForLogin()
                if(this.redirect){
                    this.$router.push({path: this.redirect})
                }else {
                    this.$router.push({path: '/index'})
                }
            }).catch( (err) => {
                console.log(233333)
                this.$dialog.showToast(err)
            })
        },
        toRegister(){
            this.show2 = false;
            this.show1 = true;
        },
        resetForLogin(){
            //登录成功后初始化数据状态
            //清空缓存中的地址信息
            storage.set('chosenAddressId','')
        },
        loginOrRegister(){
            loginApi.loginOrReg(this.mobile,this.smsCode).then( response=> {
                console.log(232432432423)
                store.dispatch('app/toggleToken',response.content.token)
                store.dispatch('app/toggleUser',response.content)
                if(response.data.initPassword){
                    Toast({duration:8000,message:'欢迎新用户，请谨慎保管您的初始密码：'+response.data.initPassword})
                }
                this.resetForLogin()
                if(this.redirect){
                    this.$router.push({path: this.redirect})
                }else {
                    this.$router.push({path: '/index'})
                }
            }).then( (err) => {
                // Toast.fail(err)
            })
        },
        loginByPass(){
            loginApi.loginByPassword(this.mobile,this.password).then( response=> {
                store.dispatch('app/toggleToken',response.content.token)
                store.dispatch('app/toggleUser',response.content)
                this.resetForLogin()
                if(this.redirect){
                   this.$router.push({path: this.redirect})
                }else {
                   this.$router.push({path: '/index'})
                }
            }).catch( err=>{
                console.log("err:"+err)
                Toast(err)
            })
        },
        sendSms(){
            this.hasSendSms = true
            loginApi.sendSmsCode(this.mobile).then( response => {
                this.setTimeOut()
            })
        },
        setTimeOut () {
            let timer = setTimeout(() => {
                this.setTimeOut()
                if(this.second > 0) {
                    this.second--
                }
            }, 1000)
            if(this.second <= 0) {
                this.hasSendSms = false
                this.second = 60
                clearTimeout(timer)
            }
        }
    }
};
