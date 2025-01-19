<template>
    <div style="padding: 10px;">
        <van-nav-bar title="收银台" left-arrow left-text="返回" @click-left="onClickLeft" />

        <div style="font-size: 16px; font-weight: 600; padding: 10px; margin: 5px 0;">
            USDT在线收银台
        </div>
        <div
            style="width: 100%; background-color: #E1F4FF; font-size: 11px; color:  rgba(0,0,0,0.6); height: 28px; line-height: 28px; text-align: center;">
            打开加密钱包，扫描下面二维码，或者复制下面USDT地址进行付款
        </div>
        <div
            style="display: flex; justify-content: space-between; align-items: center ;  width: 100%; height: 120px; margin-top: 10px;">
            <div
                style="width: 80%; padding-left: 10px;  display: flex;  align-items: center;width: 50%; height: 100%;  ">
                <div>
                    <img style="width: 60px; height: 50px;" src="../../../assets/img/usdt (1).png" alt="">
                </div>
                <div style="margin-left: 8px; height: 60px; align-items: center ;padding-top: 10px;">
                    <div style="font-size: 28px; font-weight: 600;">tether</div>
                    <div style="font-size: 12px; font-weight: 600; display: flex; align-items: center;">
                        <img style="width: 16px; height: 16px;" src="../../../assets/img/vuesax-linear-trontron.png"
                            alt="">
                        TRC-20
                    </div>
                </div>
            </div>
            <div style="width: 34%;text-align: center;">
                <img style="width: 110px; height: 110px;" :src="usdtOrder.base64" />
            </div>
        </div>

        <div
            style="width: 100%; background-color: #FDF4E1; font-size: 11px; color:  rgba(0,0,0,0.6);  line-height: 25px; height: 60px;margin-top: 10px;">
            <div style="padding: 5px 10px;">
                转账金额必须为下方显示的金额，且必须在<span style=" font-weight: 800;  color:  rgba(0,0,0)">{{ usdtOrder.timeLimit
                    }}</span>之前完成转账，否则无法被系统确认
            </div>
        </div>
        <div style="margin-top: 30px; font-size: 12px; padding-left: 10px;">
            地址TRC20-USDT
        </div>
        <div style=" display: flex; align-items: center;justify-content: space-between; margin-top: 10px;">
            <div
                style="width:77%; padding-left: 12px; background-color: #efefef; font-weight: 600; height: 32px; line-height: 32px; font-size: 12px;">
                {{ usdtOrder.usdtAddress }}
            </div>
            <div
                style="display: flex; align-items: center;width: 18%; text-align: center; background-color: #07C160; color: white; font-size: 13px; height: 32px; text-align: center;">

                <div style="display: flex; align-items: center; padding: auto;text-align: center; padding-left: 7px;">
                    <img style="width: 15px; height: 15px;" src="../../../assets/img/复制.png">
                    <span v-clipboard:copy="usdtOrder.usdtAddress" v-clipboard:success="onCopy1"
                        v-clipboard:error="onError1">
                        &nbsp;复制
                    </span>
                </div>
            </div>
        </div>

        <div style="margin-top: 20px; font-size: 12px; padding-left: 10px;">
            我们应该收到的确切USDT金额
        </div>
        <div style=" display: flex; align-items: center;justify-content: space-between; margin-top: 10px;">
            <div
                style="width: 77%; padding-left: 12px;background-color: #efefef; font-weight: 600; height: 32px; line-height: 32px; font-size: 12px;">
                {{ usdtOrder.usdtAmountStr }}
            </div>
            <div
                style="display: flex; align-items: center;width: 18%; text-align: center; background-color: #07C160; color: white; font-size: 13px; height: 32px; text-align: center;">

                <div style="display: flex; align-items: center; padding: auto;text-align: center; padding-left: 7px;">
                    <img style="width: 15px; height: 15px;" src="../../../assets/img/复制.png">
                    <span v-clipboard:copy="usdtOrder.usdtAmountStr" v-clipboard:success="onCopy2"
                        v-clipboard:error="onError2">
                        &nbsp;复制
                    </span>
                </div>
            </div>
        </div>

        <van-button class="footer" v-bind:class="{ 'pc3': ispc }" type="primary" size="large"
            @click="pay">我已支付</van-button>

    </div>

</template>

<script src="./usdt.js"></script>

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
