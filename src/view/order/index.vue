<template>
  <div>
    <van-nav-bar
            title="我的订单"
            left-arrow
            @click-left="onClickLeft"
    />
    <van-tabs v-model="activeNav" @click="clickNav">
      <van-tab v-for="nav in navList" :title="nav.name" v-bind:key="nav.id">
      </van-tab>
    </van-tabs>
    <div class="order_list">
    <van-list v-model="loading"
              :finished="finished"
              :immediate-check="false"
              finished-text="没有更多了"
              @load="getData">
      <van-panel v-for="(item, index) in orderList"
                 :key="index"
                 :title="'订单编号: ' + item.orderSn"
                 :status="item.statusName"
                 @click.native="toOrderDetail(item.orderSn)"
      >
        <van-card v-for="(orderItem, index2) in item.items"
                  :key="index2"
                  :title="orderItem.title"
                  :desc="orderItem.descript"
                  :price="orderItem.price"
                  :num="orderItem.count"
                  @click.stop="toGoods(orderItem)"
                  :thumb="orderItem.imageUrl">
        </van-card>
        <div class="total">合计: {{item.totalPrice}} </div>



      </van-panel>

    </van-list>
    </div>



  </div>
</template>

<script src="./orders.js"></script>

<style lang="less">
  .order_list {
    .van-panel {
      margin-top: 5px;
    }

    .van-card {
      background-color: #fff;
    }

    .total {
      text-align: right;
      padding: 10px;
    }

    .footer_btn {
      text-align: right;
      .van-button {
        margin-left: 10px;
      }
    }
  }
</style>
