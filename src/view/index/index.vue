<template>

    <div  style="background-color: white;height: 100%;">
        <div style="width: 100%;position: fixed;top:0px;left: 0px; z-index: 9999;">
            <div style=" display: flex;">
                <!-- <div style="width: 35%;height: 50px;background-color: white;" >
                    <img style="width: 100%;height: 60px;" src="../../assets/img/logo.png" alt="">
                </div> -->
                <van-tabs sticky color="#32AE57" v-model="activeNav" @click="clickNav" style="width: 100%;">
                    <van-tab v-for="nav in navList" :title="nav.name" v-bind:key="nav.id" :name="nav.id">
                    </van-tab>
                </van-tabs>
            </div>
            <div style="width: 100%; height: 100px;background-color: white;">
                <img style="width: 100%; height: 100px;" src="../../assets/img/logo.png">

            </div>
        </div>



        <div style="width: 100%;background-color: white; position: absolute;top:140px; left: 0px;">
            <div  @click="viewGoodsDetail(goods.id)" v-for="(goods,index) in hotList" :key="index" style="display: flex; width: 94%; height: 108px;background-color: #F7F8FA;  border-radius: 10px; margin: 8px auto;">
                <div style="height: 100%;width: 30%;  display: flex; justify-content: center;">
                    <img style="height: 90px; width: 90px; margin: 5px auto; text-align: center;" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d3a36269683536a9d46a044392ed37ab.png"/>
                </div>
                <div style="height: 100%;width: 70%; padding-left: 10px; padding-top: 4px; position: relative;">
                    <p style="margin: 3px 0;padding-top: 2px; font-weight: 500; font-size: 15px; color: #323233;">{{ goods.name }}  </p>
                    <p style="margin: 3px 0; color: #969799; font-size: 12px;">
                        每月流量：<span style="font-weight: 500;color: red;">{{ goods.bandwidth }}GB</span>
                        <!-- <span style="margin-left: 10%;">限速：100Mbps</span> -->
                    </p>
                    <p v-if="goods.type!==2" style="margin: 3px 0;color: #969799; font-size: 12px;">可用设备：{{goods.device}}台</p>
                    <p v-if="goods.type===2" style="margin: 3px 0;color: #969799; font-size: 12px;">该套餐仅限标准套餐用户购买</p>
                    <p style="margin: 3px 0;color: #969799; font-size: 12px;"></p>

                
                    <div style="width: 100%;left: 10px;color: black; font-size: 13px;font-weight: 500;margin-top: 7px;">
                        ￥<span style="font-size: 16px; color:#323233">{{ goods.price }}</span>
                        <!-- <span style="font-size: 13px;text-decoration: line-through;color: #969799;margin-left: 12px; font-weight: 400;">6.60</span> -->
                        <span style="font-size: 13px;color: #969799;margin-left: 48%;font-weight: 400;">库存:999+</span>
                    </div>
                </div>
            </div>
            <div style="width: 100%; height: 50px;">
        </div>
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

<script src="./welcome.js"></script>

<style lang="less">

</style>
