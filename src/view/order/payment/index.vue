<template>
    <div>
        <van-nav-bar title="收银台" left-arrow left-text="返回" @click-left="onClickLeft" />
        <van-cell-group>
            <van-cell title="订单编号" :value="order.orderSn" />
            <van-cell title="应付金额">
                <span class="red strong">￥{{order.totalPrice}}</span>
            </van-cell>
        </van-cell-group>

        <van-radio-group v-model="payType" v-if="orderCreate.channelType!=2">
            <van-cell-group>
                <van-cell clickable @click="radio = 'alipay'">
                    <img style="height:32px;width:32px;" slot="icon" slot-scope="props"
                        src="../../../assets/img/支付宝.png">
                    <span style=" line-height: 32px; margin-left: 15px;">支付宝</span>
                    <van-radio slot="right-icon" name="alipay" style="padding-left:55%;" ></van-radio>
                </van-cell>
                <van-cell clickable @click="radio = 'wxpay'">
                    <img style="height:32px;width:32px;" slot="icon" slot-scope="props"
                        src="../../../assets/img/支付-微信支付.png"><span
                        style=" line-height: 32px; margin-left: 15px;">微信支付</span>
                    <van-radio slot="right-icon" name="wxpay" style="padding-left:55%;" />
                </van-cell>


                <van-cell clickable @click="radio = 'usdt'">
                    <img style="height:32px;width:32px;" slot="icon" slot-scope="props"
                        src="../../../assets/img/USDT.png">
                    <span style=" line-height: 32px; margin-left: 15px;">TRC20-USDT</span>
                    <van-radio slot="right-icon" name="usdt" style="padding-left:55%;" />
                </van-cell>
                <van-cell clickable @click="radio = 'balance'">
                    <img style="height:32px;width:32px;" slot="icon" slot-scope="props"
                        src="../../../assets/img/余额支付.png">
                    <span style=" line-height: 32px; margin-left: 15px;">余额支付（余额￥{{user.money}}）</span>
                    <van-radio :disabled="user.money<order.totalPrice" slot="right-icon" name="balance"  style="padding-left:35%;" />
                </van-cell>
            </van-cell-group>
        </van-radio-group>


        <van-radio-group v-model="payType" v-if="orderCreate.channelType==2">
            <van-cell-group>
                <van-cell clickable @click="radio = 'qr'">
                    <img style="height:32px;width:32px;" slot="icon" slot-scope="props"
                        src="../../../assets/img/支付宝.png">
                    <span style=" line-height: 32px; margin-left: 15px;">支付宝</span>
                    <van-radio slot="right-icon" name="qr" style="padding-left:55%;" ></van-radio>
                </van-cell>
              
            </van-cell-group>
        </van-radio-group>
        <van-button class="footer"  v-bind:class="{ 'pc3': ispc }" type="primary" size="large" @click="pay">立即支付</van-button>
    </div>
</template>

<script src="./payment.js"></script>

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
.pc3{
    width: 25%;
    left: 37.5%;
}
.footer {
    position: fixed;
    bottom: 0px;
}
</style>
