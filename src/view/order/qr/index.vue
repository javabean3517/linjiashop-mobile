<template>
    <div style="padding: 10px;">
        <van-nav-bar title="收银台" left-arrow left-text="返回" @click-left="onClickLeft" />

        <div style="font-size: 16px; font-weight: 600; padding: 10px; margin: 5px 0;">
            订单号：{{usdtOrder.order.paymentId}}
        </div>
        <!-- <div
            style="width: 100%; background-color: #E1F4FF; font-size: 11px; color:  rgba(0,0,0,0.6); height: 28px; line-height: 28px; text-align: center;">
            截图保存二维码，打开支付宝扫一扫
        </div> -->


        <div style="width: 100%;text-align: center; margin-top: 20px; margin-bottom: 20px;">
            <img style="width: 200px; height: 300px;" :src="usdtOrder.qrUrl" />
            <div style="font-weight: 600; font-size: 18px; margin-top: 20px;">
                ￥{{ usdtOrder.usdtAmountStr }}
            </div>
        </div>


        <div
            style="width: 100%; background-color: #FDF4E1; font-size: 11px; color:  rgba(0,0,0,0.6);  line-height: 25px; height: 90px;margin-top: 10px;">
            <div style="padding: 5px 10px;">
                1.转账金额必须为上方显示的金额<br/>
                2.请于必须在<span style=" font-weight: 800;  color:  rgba(0,0,0)">{{ usdtOrder.timeLimit
                }}</span>之前完成转账<br/>
                3.<span style=" font-weight: 800;  color:  rgba(0,0,0)">付款成功后请点击我已支付，通常在3-10分钟内生效</span>
            </div>
        </div>

       

        <van-button class="footer" v-bind:class="{ 'pc3': ispc }" type="primary" size="large"
            @click="pay">我已支付</van-button>

    </div>

</template>

<script src="./qr.js"></script>

<style lang="less">
.red {
    color: red;
}

.strong {
    font-weight: bold;
}

.van-cell-group {
    margin-top: 10px;
}

.pc3 {
    width: 25%;
    left: 37.5%;
}

.footer {
    position: fixed;
    bottom: 0px;
}
</style>
