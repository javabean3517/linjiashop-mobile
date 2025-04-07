<template>

    <div>
        <van-tabs :active="active" color="#32AE57"  :before-change="onClickTab">
            <van-tab title="订阅登录" style="font-size: large;">
                <van-cell-group inset>
                    <div style="color: #323233; margin: 15px; font-size: 22px; text-align: center;">
                        <img style="width: 120px; height: 120px;" src="../../assets/img/c.jpg" />

                        <div>订阅登录</div>
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
                    <van-field v-model="imageCode" name="TG验证码" label-width="5em" label="验证码" placeholder="请输入图形验证码"
                        center>
                        <template #button>
                            <img :src="base64" @click="getCaptcha" />
                        </template>
                    </van-field>

                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" @click="loginByLink">
                        登录
                    </van-button>
                </div>
            </van-tab>
            <van-tab title="TG验证码" v-if="isTgShow">

                <van-cell-group inset>
                    <div style="color: #323233; margin: 15px; font-size: 22px; text-align: center;">
                        <img style="width: 120px; height: 120px;" src="../../assets/img/c.jpg" />
                        <div>TG验证码登录/注册</div>

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
                    <van-field v-model="tgCode" name="TG验证码" label-width="5em" label="TG验证码" placeholder="输入6位TG验证码"
                        center>
                        <template #button>
                            <!-- <a href="https://t.me/sixvpnbot">获取TG验证码</a> -->
                            <van-button size="small" type="primary" @click="toTg" color="#1989FA">获取TG验证码</van-button>
                        </template>
                    </van-field>
                    <van-field v-model="imageCode" name="TG验证码" label-width="5em" label="验证码" placeholder="请输入图形验证码" center>
                        <template #button>
                            <img :src="base64" @click="getCaptcha"/>
                        </template>
                    </van-field>
                </van-cell-group>
                <div style="margin: 16px;">

                    <van-button style="margin-top: 14px;" round block type="primary" @click="loginByTg">
                        登录
                    </van-button>
                </div>
            </van-tab>
            <van-tab title="注册/登录">
                <van-cell-group inset>
                    <div style="color: #323233; margin: 15px; font-size: 22px; text-align: center;">
                        <img style="width: 120px; height: 120px;" src="../../assets/img/c.jpg" />
                        <div>{{ modeName }}</div>
                    </div>
                    <van-field v-model="account" name="账号" label-width="4em" label="账号" placeholder="请输入账号" />

                    <van-field v-model="pwd" type="password" name="密码" label-width="4em" label="密码"
                        placeholder="请输入密码" />
                    <van-field v-model="pwd2"  v-if="modeType=='r'" type="password" name="密码" label-width="4em" label="确认密码"
                        placeholder="请确认密码" />


                    <van-field v-model="imageCode" name="TG验证码" label-width="4em" label="验证码" placeholder="请输入图形验证码"
                        center>
                        <template #button>
                            <img :src="base64" @click="getCaptcha" />
                        </template>
                    </van-field>

                    <!-- <van-field v-if="modeType == 'r'" v-model="link" name="邀请码" label-width="4em" label="邀请码"
                        placeholder="非必填" /> -->


                </van-cell-group>

                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit" @click="logOrReg">
                        {{ buttonName }}
                    </van-button>
                </div>
                <div style=" margin: 10px auto; text-align: center;">
                        <a @click="changeMode" style="padding-left: 30px; font-size: 14px; margin: 10px 0;">{{ tips
                            }}</a>

                    </div>
            </van-tab>

        </van-tabs>
        <van-overlay :show="showLoading" @click="showLoading = false" z-index="1000">
            <div class="wrapper" @click.stop style=" margin: 300px auto; ">
                <van-loading text-color="#32AE57" color="#32AE57" vertical>加载中</van-loading>
            </div>
        </van-overlay>
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
