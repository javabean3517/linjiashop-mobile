<!-- <template>
  <div>
    <img class="user-poster" src="@/assets/img/banner.jpg" >
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" @click="toOrder(1)"/>
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" @click="toOrder(2)"/>
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" @click="toOrder(3)"/>
        已发货
      </van-col>
      <van-col span="6">
        <van-icon name="bag-o" @click="toOrder(4)"/>
        已完成
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link to="order" />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="location-o" title="收货地址" is-link to="address"/>
      <van-cell icon="star-o" title="喜欢的商品" is-link to="favorite"/>
      <van-cell icon="points" title="我的积分" is-link @click="sorry"/>
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link @click="sorry" />
      <van-cell icon="gift-o" title="我收到的礼物" is-link  @click="sorry"/>
      <van-cell icon="setting-o" title="设置" is-link to="setting"/>
    </van-cell-group>
    <br><br>
    <van-tabbar v-model="activeFooter">
      <van-tabbar-item icon="home-o"  replace to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="search"  replace to="/search">发现</van-tabbar-item>
      <van-tabbar-item icon="cart-o"  replace to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o"  replace to="/user">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template> -->


<template>
  <div class="user-container">
    <!-- 用户基本信息面板 -->
    <div class="user-card">
      <!-- 用户头像、姓名 -->
      <div style="    display: flex; justify-content: space-around;width: 100%; ">
        <div style=" width:35;">
          <van-image round width="5rem" height="5rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            style="margin-left: 5%;" />
        </div>

        <div style="width: 65%; padding-top: 5px; ">
          <div class="username">
            <span>{{ user.nickName }}</span>
            <van-tag size="mini" color="#fff" text-color="#32AE57">{{ user.productName }}</van-tag>
          </div>
          <div style="margin-top: 8px;">
            <div style="font-size: 13px;">
              套餐过期：{{ user.classExpiredTime }}
            </div>
            <div style="font-size: 13px; margin-top: 4px;">
              剩余流量：{{ user.transferLeft }}
            </div>
            <div style="font-size: 13px; margin-top: 4px; padding-bottom: 12px;">
              下次重置：{{ user.nextResetDate }}
            </div>
          </div>
        </div>

      </div>
      <!-- <div @click="copyLink"
        style="padding: 8px; line-height: 20px; font-size: 13px;font-weight: 600;  width: 98%;word-break:break-all;">
        我的订阅：<img style="margin: 0px; padding: 0px; height: 16px;width: 16px;" src="../../assets/img/复制.png" />
        {{ user.link }}
      </div> -->
      <!-- <van-cell >
        <template #icon>
          <img :src="list.photo" alt="" class="avatar">
        </template>
<template #title>
          <span class="username">34339***m</span>
        </template>
<template #label>
          <van-tag color="#fff" text-color="#32AE57">土豪套餐</van-tag>
        </template>
</van-cell> -->
      <!-- 动态、关注、粉丝 -->
    </div>
    <!-- <van-cell-group class="action-card">
      <van-cell icon="gold-coin-o" title="我的订单" value="查看全部订单" is-link @click="logout"/>
    </van-cell-group> -->
    <div class="user-data">
      
        <div class="user-data-item"  @click="importLink">
          <!-- <a href="https://www.baidu.com"> -->
            <img style="width: 32px;height: 32px;" src="../../assets/img/ios.png" alt="">

            <span style="margin-top: 8px;">IOS导入</span>
          <!-- </a> -->
        </div>
      
      <div class="user-data-item"  @click="importLink">
        <img style="width: 32px;height: 32px;" src="../../assets/img/android.png" alt="">
        <span style="margin-top: 8px;">安卓导入</span>
      </div>
      <div class="user-data-item"  @click="importLink">
        <img style="width: 32px;height: 32px;" src="../../assets/img/windows.png" alt="">

        <span style="margin-top: 8px;">windows导入</span>
      </div>
    </div>

    <!-- 操作面板 -->
    <van-cell-group class="action-card">
      <van-cell icon="exchange" title="我的订阅" value="点击复制" @click="copyLink" />
      <van-cell icon="orders-o" title="我的订单" is-link @click="logout" />

      <div style="width: 100%; height: 8px; background-color: rgb(245, 245, 245)"></div>
      <van-cell icon="points" title="可用设备" value="3台" />
      <van-cell icon="bar-chart-o" title="网络带宽" value="1000Mbps" />
      <div style="width: 100%; height: 8px; background-color: rgb(245, 245, 245)"></div>

      <van-cell icon="friends-o" title="联系客服" is-link @click="logout" />
      <van-cell icon="question-o" title="使用教程" is-link @click="logout" />
      <van-cell icon="down" title="软件下载" is-link @click="logout" />

      <!-- <div style="width: 100%; height: 8px; background-color: rgb(245, 245, 245)"></div> -->
      <van-cell icon="warning-o" title="退出登录" is-link @click="onLogout" />

    </van-cell-group>
    <!-- <div style="position: absolute; z-index: 999;left: 0;bottom: 0;">
            <van-tabbar v-model="activeFooter" active-color="#32AE57">
                <van-tabbar-item icon="home-o" replace to="/index">首页</van-tabbar-item>
                <van-tabbar-item icon="question-o" replace to="/教程">教程</van-tabbar-item>
                <van-tabbar-item icon="cart-o" replace to="/cart">购物车</van-tabbar-item>
                <van-tabbar-item icon="user-o" replace to="/user">我的</van-tabbar-item>
            </van-tabbar>
        </div> -->
  </div>
</template>

<script src="./user.js"></script>

<style lang="less">
.user-container {
  width: 100%;

  .user-card {

    background-color: #32AE57;
    color: white;
    padding-top: 10px;

    .van-cell {
      background: #32AE57;
      color: white;

      &::after {
        display: none;
      }

      .avatar {
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }

      .username {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }

  .user-data {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    padding: 20px 0;
    color: #323233;
    font-weight: 500;

    .user-data-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33.33%;
    }
  }
}

.user {
  &-poster {
    width: 100%;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
