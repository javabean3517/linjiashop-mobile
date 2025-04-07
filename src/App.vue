<template>
  <div id="app">
    <div v-bind:class="{ 'pc1': ispc }">
            <router-view/>
            <div style="position: absolute; z-index: -100;left: 0;bottom: 0;">
              <van-tabbar z-index=99999900000 style="z-index: 99999000000" v-model="activeFooter" active-color="#32AE57" v-bind:class="{ 'pc2': ispc }">
                  <van-tabbar-item icon="home-o"  to="/index">首页</van-tabbar-item>
                  <van-tabbar-item icon="question-o"  to="/doc">教程</van-tabbar-item>
                  <van-tabbar-item icon="cart-o"  to="/cart">购物车</van-tabbar-item>
                  <van-tabbar-item icon="user-o"  to="/user">我的</van-tabbar-item>
              </van-tabbar>
          </div>
    </div>

  </div>
  
</template>

<script>
export default {
  data() {
        return {
            ispc:false,
            activeFooter: 0,
        }
    },
    mounted() {
      console.log('appappappappappappappapp')
      if(navigator.userAgent.indexOf("Windows")>-1){
        this.ispc = true
        window.onload=function(){
          document.body.style.zoom="80%";
        }
      }else{
        this.ispc = false
      }

      this.$router.push('/index');
      window.addEventListener('beforeunload', this.handleBeforeUnload);

    },
    watch: {
      '$route'(to, from) {
        if(to.path.indexOf('/index')>-1){
          this.activeFooter = 0
        }
        if(to.path.indexOf('/doc')>-1){
          this.activeFooter = 1
        }
        if(to.path.indexOf('/cart')>-1){
          this.activeFooter = 2
        }
        if(to.path.indexOf('/login')>-1){
          this.activeFooter = 3
        }
        console.log('to:'+to.path)
        console.log('from:'+from.path)

      }
    },
    methods:{
      handleBeforeUnload(event) {
        this.activeFooter = 0
        sessionStorage.clear()
      }
    }
}
</script>
<style>
body {
  font-size: 16px;
  background-color: white;
  -webkit-font-smoothing: antialiased;
  
}
.pcborder{
  /* height: 100vh; */
  /* box-sizing: border-box; */
  border: 1px solid red
}
.pc1{
  width: 25%; height: 100%; margin: 0 auto; position: relative;
}
.pc2{
  width: 26%; bottom: 0px; left: 37%;
}
.full-border {
  border: 1px solid #000; /* 设置边框为1px实线黑色 */
  padding: 3px; /* 内边距，可根据需要调整 */
  box-sizing: border-box; /* 确保边框不影响内部元素的布局 */
  height: 100vh; /* 高度设置为视口高度，使其填满整个屏幕 */
  
  margin: 0; /* 移除默认边距 */
}
</style>
