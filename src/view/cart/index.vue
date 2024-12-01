<template>
  <div class="cart" style="background-color: white;">
    <van-nav-bar
            title="购物车"
            left-arrow
            left-text="返回"
            @click-left="onClickLeft"
    />
    <van-checkbox-group class="card-goods" v-model="checkedCartItem" v-if="isLogin && cartList.length>0">
      <div  v-for="item in cartList"
             :key="item.id"    
             class="card-goods__item">
      <van-checkbox disabled :name="item.id" ></van-checkbox>
        <van-card
          style="margin-left:15px;"
          :title="item.name"
          :desc="item.descript"
          :price="formatPrice(item.price)"
          :thumb="item.img"
        >
        </van-card>
      </div>


    </van-checkbox-group>
    <van-submit-bar
            v-show="!showEdit"
      :price="totalPrice"
      :disabled="!checkedCartItem.length"
      :button-text="submitBarText"
      @submit="submit"
      v-if="isLogin && cartList.length>0"
    >
      <!-- <van-checkbox v-model="checkedAll" disabled @click="checkAll" style="padding: 0 10px;">全选</van-checkbox> -->
    </van-submit-bar>
      <van-submit-bar
              v-show="showEdit"
              :price="totalPrice"
              :disabled="!checkedCartItem.length"
              button-text="删除"
              @submit="remove"
              v-if="isLogin && cartList.length>0"
      >
      <van-checkbox v-model="checkedAll" @click="checkAll" style="padding: 0 10px;">全选</van-checkbox>
    </van-submit-bar>
    <div class="no-data" v-if="isLogin && cartList.length ===0 ">
      <p style="text-align: center;color:lightgray">
        <van-icon name="cart-o" style="text-align: center" size="3rem"/><br>
        购物车还是空的</p>
      <van-button type="default" block round @click="toHome">去逛逛</van-button>
    </div>
    <div class="no-data" v-if="!isLogin" >
      <p style="text-align: center;color:lightgray">
        <van-icon name="cart-o" style="text-align: center" size="3rem"/><br>
        还没有登录</p>
      <van-button type="primary" block round @click="toLogin">立即登录</van-button>
    </div>
    <div style="position: absolute; z-index: 999;left: 0;bottom: 0;">
            <van-tabbar v-model="activeFooter" active-color="#32AE57">
                <van-tabbar-item icon="home-o" replace to="/index">首页</van-tabbar-item>
                <van-tabbar-item icon="question-o" replace to="/教程">教程</van-tabbar-item>
                <van-tabbar-item icon="cart-o" replace to="/cart">购物车</van-tabbar-item>
                <van-tabbar-item icon="user-o" replace to="/user">我的</van-tabbar-item>
            </van-tabbar>
        </div>
  </div>
</template>

<script src="./cart.js"></script>

<style lang="less">
  .cart{
    .no-data{
      margin-top:60%;
    }
  }
  .van-submit-bar{
   bottom:48px;
  }
.card-goods {
  background-color: #fff;

  &__item {
    position: relative;
    background-color: #fafafa;

    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }

    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }

    .van-card__price {
      color: #f44;
    }
  }
}
</style>
