import loginApi from '@/api/login'
import store from '@/store'
import storage  from '@/utils/storage'
import {Loading, Row, Col, Icon, Cell, CellGroup,Field,Button,Toast,
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
            isTgShow:false,
            uuid:'',
            showLoading: false,
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
            tgLink:'',
            tgCode:'',
            modeType:'l',
            modeName : '账号登录',
            tips:'没有账号？',
            buttonName:'登  录',
            account:'',
            pwd:'',
            base64:'222',
            imageCode:'',
            pwd2:''

        }
    },
    mounted(){
      this.init()
    },
    methods:{
        logOrReg(){
            if(this.imageCode === ''){
                Toast({duration:1000,message:'请输入图形验证码'})
                return
            }
            this.showLoading = true

            if(this.modeType=='l'){
                loginApi.loginByPass(this.account,this.pwd,this.uuid,this.imageCode).then(response=>{
                    store.dispatch('app/toggleToken',response.content.token)
                    store.dispatch('app/toggleUser',response.content)
                    this.resetForLogin()
                    if(this.redirect){
                        this.$router.push({path: this.redirect})
                    }else {
                        this.$router.push({path: '/index'})
                    }
                    this.showLoading = false
                }).catch(err=>{
                    this.showLoading = false
                    this.getCaptcha()
                    Toast(err)
                })
            }

            if(this.modeType=='r'){
                if(this.pwd2!=this.pwd){
                    Toast('两次输入密码不一致！')
                    return
                }
                loginApi.register(this.account,this.pwd,this.uuid,this.imageCode).then(response=>{
                    store.dispatch('app/toggleToken',response.content.token)
                    store.dispatch('app/toggleUser',response.content)
                    this.resetForLogin()
                    if(this.redirect && this.redirect.indexOf('login')<0){
                        this.$router.push({path: this.redirect})
                    }else {
                        this.$router.push({path: '/index'})
                    }
                    this.showLoading = false
                }).catch(err=>{
                    this.showLoading = false
                    this.getCaptcha()
                    Toast(err)
                })
            }

        },
        changeMode(){
            this.account=''
            this.imageCode=''
            this.pwd=''
             this.pwd2=''
            if(this.modeType=='r'){
                this.modeName = '账号登录'
                this.modeType = 'l'
                this.tips = '没有账号？'
                this.buttonName = '登  录'
                return
            }
            if(this.modeType=='l'){
                this.modeName = '账号注册'
                this.modeType = 'r'
                this.tips = '<<<返回登录'
                this.buttonName = '注册并登录'
                return
            }
        },
        onClickTab({ title }){
            this.getCaptcha()
            this.getTgLink()
            
            this.imageCode = ''
            this.link = ''
            this.tgCode = ''
            this.account = ''
            this.pwd = ''
            this.pwd2=''
            this.modeType = 'l'
            this.tips = '没有账号？'
            this.buttonName = '登  录'

            return true
        },
        getCaptcha(){
            loginApi.getCaptcha().then(res=>{
                this.imageCode = ''
                this.uuid = res.content.uuid
                this.base64 = res.content.base64
            })
        },
        init(){
            if(store.state.app.user.nickName){
                this.$router.push({path: '/index'})
                return
            }
            if(this.$route.query.redirect){
                this.redirect = this.$route.query.redirect
            }
            this.getCaptcha()
            this.getTgLink()
        },
        onSubmit(){

        },
        toLoginByPassword(){
            this.show1 = false;
            this.show2 = true;
        },
        getTgLink(){
            loginApi.getBotLink().then(res=>{
                if(res.content==undefined||res.content=='null'||res.content==null){
                    return
                }
                this.isTgShow = true
                this.token = res.content.token
                this.tgLink = res.content.link+res.content.token
            }).catch(err=>{
                Toast(21321321321)
            })
        },
        toTg(){
            this.showLoading = true
            window.open(this.tgLink, '_blank');
            this.showLoading = false
           
        },
        
        loginByTg(){
            console.log(this.tgCode)
            console.log(this.token)
            this.showLoading = true
            if(this.tgCode === ''){
                Toast({duration:1000,message:'请输入TG验证码'})
                return
            }
            if(this.imageCode === ''){
                Toast({duration:1000,message:'请输入图形验证码'})
                return
            }
            loginApi.loginByTg(this.token,this.tgCode,this.uuid,this.imageCode).then(response=>{
                store.dispatch('app/toggleToken',response.content.token)
                store.dispatch('app/toggleUser',response.content)
                this.resetForLogin()
                if(this.redirect){
                    this.$router.push({path: this.redirect})
                }else {
                    this.$router.push({path: '/index'})
                }
                this.showLoading = false
            }).catch( (err) => {
                Toast({duration:1000,message:err})
                this.getCaptcha()
                this.showLoading = false
            })
        },
        loginByLink(){
            if(this.imageCode === ''){
                Toast({duration:1000,message:'请输入图形验证码'})
                return
            }
            this.showLoading = true
            loginApi.loginByLink(this.link,this.uuid,this.imageCode).then( response=> {
                store.dispatch('app/toggleToken',response.content.token)
                store.dispatch('app/toggleUser',response.content)
                this.resetForLogin()
                this.showLoading = false
                if(this.redirect){
                    this.$router.push({path: this.redirect})
                }else {
                    this.$router.push({path: '/index'})
                }
            }).catch( (err) => {
                this.showLoading = false
                this.getCaptcha()
                Toast({duration:1000,message:err})
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
