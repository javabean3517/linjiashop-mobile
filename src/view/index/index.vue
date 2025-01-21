<template>

    <div style="background-color: white;height: 100%; width: 100%;">
        <div style="width: 100%;position: fixed;top:0px; z-index: 9999;">
            <div>
                <div style="width: 100%; height: 100px;background-color: white;">
                    <img style=" height: 100px;" v-bind:class="{ 'pc1': ispc, 'mobile1': !ispc }" src="../../assets/img/logo.png">

                </div>
            </div>

        </div>



        <div
            style="display: flex; justify-content: space-between; width: 100%;background-color: white; position: absolute;top:90px; left: 0px;">

            <div style="width: 20%;">
                <van-sidebar v-model="activeNav" @change="clickNav">
                    <van-sidebar-item v-for="nav in navList" :title="nav.name" v-bind:key="nav.id" :name="nav.id" />
                </van-sidebar>
            </div>
            <div style="width: 78%;background-color: white;">
                <div @click="viewGoodsDetail(goods.id)" v-for="(goods, index) in hotList" :key="index"
                    style="display: flex; width: 94%; height: 108px;background-color: #F7F8FA;  border-radius: 10px; margin: 8px auto;">
                    <div style="height: 100%;width: 36%;  display: flex; justify-content: space-between;">
                        <div style="margin: 12px">
                            <img style="height: 80px; width: 80px;" :src="goods.img" />
                        </div>

                    </div>
                    <div style="height: 100%;width: 64%; padding-left: 10px; padding-top: 4px; position: relative;">
                        <div style="margin: 3px 0;padding-top: 2px; font-weight: 400; font-size: 17px; color: #323233;">{{
                            goods.name }} </div>
                        <div style="margin-top: 6px; color: #969799; font-size: 13px;">
                            套餐流量：<span style="font-weight: 500;">{{ goods.bandwidth }}</span>
                            <!-- <span style="margin-left: 10%;">限速：100Mbps</span> -->
                        </div>
                        <div v-if="goods.type !== 2" style="margin-top: 3px;color: #969799; font-size: 13px;">
                            套餐时长：{{ goods.time }}</div>
                        <p v-if="goods.type === 2" style="margin: 3px 0;color: #969799; font-size: 12px;">该套餐仅限标准套餐用户购买
                        </p>
                        <p style="margin: 3px 0;color: #969799; font-size: 12px;"></p>


                        <div
                            style="width: 100%;left: 10px;color: red; font-size: 13px;font-weight: 500;margin-top: 8px;">
                            ￥<span style="font-size: 16px; color:red">{{ goods.price }}</span>
                            <!-- <span style="font-size: 13px;text-decoration: line-through;color: #969799;margin-left: 12px; font-weight: 400;">6.60</span> -->
                            <!-- <span
                                style="font-size: 13px;color: #969799;margin-left: 48%;font-weight: 400;">库存:999+</span> -->
                        </div>
                    </div>
                </div>
                <!-- <div style="width: 100%; height: 50px;">
                </div> -->
            </div>
        </div>
        <!-- <router-view></router-view>
        <div style="position: absolute; z-index: 999;left: 0;bottom: 0;">
            <van-tabbar v-model="activeFooter" active-color="#32AE57">
                <van-tabbar-item icon="home-o"  to="/index">首页</van-tabbar-item>
                <van-tabbar-item icon="question-o"  to="/教程">教程</van-tabbar-item>
                <van-tabbar-item icon="cart-o"  to="/cart">购物车</van-tabbar-item>
                <van-tabbar-item icon="user-o"  to="/user">我的</van-tabbar-item>
            </van-tabbar>
        </div> -->

    </div>
</template>

<script src="./welcome.js"></script>

<style lang="less">
.pc1{
    width: 25%;
}
.mobile1{
    width: 100%;
}
</style>
