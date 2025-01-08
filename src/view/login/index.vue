<template>
    <div>
        <van-tabs :active="active" color="#32AE57">
            <van-tab title="订阅登录">
                <van-cell-group inset>
                    <div style="color: #323233; margin: 15px; font-size: 22px; text-align: center;">
                        订阅登录
                    </div>
                    <div
                        style="color: #323233; color: #969799; padding-left: 16px;padding-right: 16px; font-size: 14px;margin-bottom: 22px; line-height: 30px;">
                        此方法仅适用老用户，订阅链接在clash或苹果小火箭配置中，请整个完整复制出来
                        <van-tag type="primary" style="margin-left: 3px; " color="#32AE57">
                            推荐
                        </van-tag>
                    </div>
                    <van-field v-model="link" name="订阅链接" label-width="5em" label="订阅链接"
                        placeholder="订阅格式 http://xxx.xxx.xxx/sub/clash" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" @click="loginByLink">
                        登录
                    </van-button>
                </div>
            </van-tab>
            <van-tab title="TG验证码">

                <van-cell-group inset>
                    <div style="color: #323233; margin: 15px; font-size: 22px; text-align: center;">
                        TG验证码登录/注册
                    </div>
                    <div
                        style="color: #969799; padding-left: 16px;padding-right: 16px; font-size: 14px;margin-bottom: 22px; line-height: 30px;">
                        <div>1.点击获取验证码，自动跳转电报机器人获取</div>
                        <div>2.如果账号未注册将自动注册
                            <van-tag type="primary" style="margin-left: 3px; " color="#32AE57">
                                推荐
                            </van-tag>
                        </div>
                    </div>
                    <van-field v-model="tgCode" name="TG验证码" label-width="5em" label="TG验证码" placeholder="输入8位TG验证码" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button  round block color="#1989FA" native-type="submit"  @click="toTg">
                        跳转TG获取验证码
                    </van-button>
                    <van-button  style="margin-top: 14px;" round block type="primary" @click="loginByTg">
                        登录
                    </van-button>
                </div>
            </van-tab>
            <van-tab title="密码登录">
                <van-cell-group inset>
                    <div style="color: #323233; margin: 15px; font-size: 22px; text-align: center;">
                        密码登录
                    </div>
                    <van-field v-model="link" name="账号" label-width="4em" label="账号" placeholder="请输入账号" />

                    <van-field v-model="link" name="密码" label-width="4em" label="密码" placeholder="请输入密码" />
                </van-cell-group>

                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-tab>
            <van-tab title="注册">
                <van-form @submit="onSubmit">
                    <van-cell-group inset>
                        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                            :rules="[{ required: true, message: '请填写用户名' }]" />
                        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                            :rules="[{ required: true, message: '请填写密码' }]" />
                    </van-cell-group>
                    <div style="margin: 16px;">
                        <van-button round block type="primary" native-type="submit">
                            提交
                        </van-button>
                    </div>
                </van-form>
            </van-tab>
        </van-tabs>

        <!-- <img class="user-poster" src="@/assets/img/banner.jpg" >
            <van-cell-group>
            <van-field
                    v-model="mobile"
                    required
                    clearable
                    label="账号"
                    placeholder="请输入手机号"
            />
            </van-cell-group>
            <van-cell-group v-show="show1">
                <van-field
                        v-model="smsCode"
                        center
                        clearable
                        label="短信验证码"
                        placeholder="请输入短信验证码"
                >
                    <van-button slot="button" size="small" type="primary" @click="sendSms" v-show="!hasSendSms">发送验证码</van-button>
                    <van-button slot="button" size="small" disabled type="primary" v-show="hasSendSms">{{second}}秒后重新获取</van-button>
                </van-field>
            </van-cell-group>
            <van-cell-group  v-show="show2">
            <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
            />

        </van-cell-group>
            <div class="button-group">
            <van-button type="warning" size="large"   v-show="show1" @click="loginOrRegister">立即登录/注册</van-button>

            <van-button type="info" size="large"   v-show="show1" @click="toLoginByPassword">用户名密码登录</van-button>

            <van-button type="warning" size="large"  v-show="show2"  @click="loginByPass">登录</van-button>


        <van-button type="info" size="large"  v-show="show2" @click="toRegister">手机短信登录/注册</van-button>
            </div>
            -->
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

<script src="./login.js"></script>

<style lang="less">
.button-group {
    margin: 15px;

    .van-button {
        margin-top: 10px;
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
