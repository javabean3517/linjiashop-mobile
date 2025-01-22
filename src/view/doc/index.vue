<template>

    <div style="background-color: white;height: 100%; width: 100%;">
        <div style="width: 100%;position: fixed;top:0px; z-index: 9999;">
            <div>
                <div style="width: 100%; height: 100px;background-color: white;">
                    <img style=" height: 100px;" v-bind:class="{ 'pc1': ispc, 'mobile1': !ispc }"
                        src="../../assets/img/logo.png">
                </div>
            </div>
        </div>
        <div
            style="display: flex; justify-content: space-between; width: 100%;background-color: white; position: absolute;top:90px; left: 0px;">

            <div style="width: 20%;">
                <van-sidebar v-model="activeNav" @change="clickNav">
                    <van-sidebar-item title="用户守则">

                    </van-sidebar-item>
                    <van-sidebar-item title="使用教程">

                    </van-sidebar-item>
                    <van-sidebar-item title="套餐解释">

                    </van-sidebar-item>
                    <van-sidebar-item title="断网急救">

                    </van-sidebar-item>
                    <van-sidebar-item title="其他问题">

                    </van-sidebar-item>

                    <van-sidebar-item title="机器人">

                    </van-sidebar-item>
                </van-sidebar>
            </div>
            <div style="width: 75%; margin: 20px auto;">
                <div v-if="activeNav == 0">
                    <div style="font-weight: 600; font-size: 16px; text-align: center;">
                        用户使用规范
                    </div>
                    <div :style="{ height: browserHeight - 260 + 'px' }"
                        style="padding: 10px;overflow:auto;font-size: 14px; color: #646566;">
                        <p> 作为我们网络社区的一员，您必须负责任地使用您的互联网接入，下列构成违反本 用户使用规范的行为：
                        </p>
                        <p>①传播或散布病毒、木马、外挂、破解、病毒、网赚、诈骗、钓鱼网站、武器、儿童色情、种族歧视、非法游行、血腥暴恐、侵犯版权、危害国家安全和信誉等内容或相关内容。</p>
                        <p> ②使用或运行IRC、BiTtorrent、任何P2P类型服务、CC攻击(ChallengeCollapsar)、DDOS攻击(Distributed Denial of
                            Service)、中间人攻击(Man-in-the-Middle Attack)、端口扫描
                        </p>
                        <p> ③发送垃圾邮件</p>
                        <p> ④用户被发现有在系统中进行非法行为的，包括但不限于破坏系统运行、试图改变系统配置或破坏系统安全、运行影响网站服务器的程序、进程、支付欺诈等
                        </p>
                        <p>⑤有意或无意泄露账号、订阅、服务器配置信息、服务器地址(IP和域名)</p>
                        一旦发现您有此类行为，您的帐户会被暂停、冻结、或删除，并不退款。牛牛6元机场保留随时以任何方式修订、修订或修改此用户使用条款和协议的权利。
                    </div>
                </div>

                <div v-if="activeNav == 1">
                    <div>
                        <van-tabs v-model:active="active">
                            <van-tab title="安卓">

                                <div :style="{ height: browserHeight - 260 + 'px' }"
                                    style="padding: 10px;overflow:auto;font-size: 14px; color: #646566;">
                                    <div style="font-size: 16px; text-align: center; margin: 10px;">

                                    </div>
                                    <div style="text-align: center;">我们推荐使用的客户端</div>
                                    <div
                                        style="line-height: 26px; display: flex; justify-content: space-between; margin-top: 10px;">
                                        <div>
                                            苹果系统：Shadowrocket(小火箭)
                                            <br />
                                            安卓系统：Clash for Android
                                            <br />
                                            WINDOWS：Clash for Windwos
                                            <br />
                                            MACOS：ClashX
                                            <br />
                                        </div>
                                        <div>
                                            <a href="#" @click="actionShow = true">找客服</a>
                                            <br />
                                            <a href="#" @click="downShow = true">下载</a><br />
                                            <a href="#" @click="downShow = true">下载</a><br />
                                            <a href="#" @click="downShow = true">下载</a><br />
                                        </div>
                                    </div>
                                    <div style="height: 300px; width: 250px; margin-top: 10px;">
  
                                        <viewer>

                                            <img style="height: 300px; width: 250px;" src="../../assets/img/图片1.png" alt="">
                                            </viewer>
                                    </div>
                                </div>

                            </van-tab>
                            <van-tab title="苹果">
                                <div :style="{ height: browserHeight - 260 + 'px' }"
                                    style="padding: 10px;overflow:auto;font-size: 14px; color: #646566;">
                                    <div style="font-size: 16px; text-align: center; margin: 10px;">

                                    </div>
                                    <div style="text-align: center;">我们推荐使用的客户端</div>
                                    <div
                                        style="line-height: 26px; display: flex; justify-content: space-between; margin-top: 10px;">
                                        <div>
                                            苹果系统：Shadowrocket(小火箭)
                                            <br />
                                            安卓系统：Clash for Android
                                            <br />
                                            WINDOWS：Clash for Windwos
                                            <br />
                                            MACOS：ClashX
                                            <br />
                                        </div>
                                        <div>
                                            <a href="#" @click="actionShow = true">找客服</a>
                                            <br />
                                            <a href="#" @click="downShow = true">下载</a><br />
                                            <a href="#" @click="downShow = true">下载</a><br />
                                            <a href="#" @click="downShow = true">下载</a><br />
                                        </div>
                                    </div>
                                    <div style="height: 300px; width: 250px; margin-top: 10px;">
                                        <viewer>

                                        <img style="height: 300px; width: 250px;" src="../../assets/img/图片2.png" alt="">
                                        </viewer>
                                    </div>
                                </div>
                            </van-tab>
                            <van-tab title="WINDOWS">
                                <div :style="{ height: browserHeight - 260 + 'px' }"
                                    style="padding: 10px;overflow:auto;font-size: 14px; color: #646566;">
                                    <div style="font-size: 16px; text-align: center; margin: 10px;">

                                    </div>
                                    <div style="text-align: center;">我们推荐使用的客户端</div>
                                    <div
                                        style="line-height: 26px; display: flex; justify-content: space-between; margin-top: 10px;">
                                        <div>
                                            苹果系统：Shadowrocket(小火箭)
                                            <br />
                                            安卓系统：Clash for Android
                                            <br />
                                            WINDOWS：Clash for Windwos
                                            <br />
                                            MACOS：ClashX
                                            <br />
                                        </div>
                                        <div>
                                            <a href="#" @click="actionShow = true">找客服</a>
                                            <br />
                                            <a href="#" @click="downShow = true">下载</a><br />
                                            <a href="#" @click="downShow = true">下载</a><br />
                                            <a href="#" @click="downShow = true">下载</a><br />
                                        </div>
                                    </div>
                                    <div style="height: 1800px; width: 250px; margin-top: 10px;">
                                        <viewer>


                                            <img style="height: 300px; width: 250px;" src="../../assets/img/图片3.png"
                                                alt="">
                                            <img style="height: 300px; width: 250px;" src="../../assets/img/图片4.png"
                                                alt="">
                                            <img style="height: 300px; width: 250px;" src="../../assets/img/图片5.png"
                                                alt="">
                                            <img style="height: 300px; width: 250px;" src="../../assets/img/图片6.png"
                                                alt="">
                                            <img style="height: 300px; width: 250px;" src="../../assets/img/图片7.png"
                                                alt="">
                                            <img style="height: 300px; width: 250px;" src="../../assets/img/图片8.png"
                                                alt="">
                                        </viewer>
                                    </div>
                                </div>
                            </van-tab>
                        </van-tabs>
                    </div>
                </div>
                <div v-if="activeNav == 2">
                    <div style="font-weight: 600; font-size: 16px; text-align: center;">
                        套餐解释
                    </div>
                    <div :style="{ height: browserHeight - 260 + 'px' }"
                        style="padding: 10px; overflow:auto;font-size: 14px; color: #646566;">
                        <p> 1.一元试用。该套餐为体验套餐，如果试用体验可以，建议购买常规套餐性价比更高。
                        </p>
                        <p>2.常规套餐。该套餐为传统常规套餐，可按照月、季、半年、年购买。流量从购买日开始，每个月发放套餐流量。如未到流量发放日，中途流量用完，可购买流量补充包，补充当月流量。</p>

                        <p>3.不限时长。该套餐为不限时长流量包，流量用完即止，适合流量用量少的客户</p>
                        <p>4.节点定制。该套餐可根据客户客户个性化需求，定制节点，且该节点为客户独享，其他人不可使用
                        </p>
                        <p>5.补差价。该产品为客户个性化需求补差价，需联系客服后再下单。
                        </p>
                        <p>6.流量补充包。该产品仅限常规套餐下单，购买后立即生效，流量仅限当月使用
                        </p>
                    </div>
                </div>
                <div v-if="activeNav == 3">
                    <div style="font-weight: 600; font-size: 16px; text-align: center;">
                        断网急救
                    </div>
                    <div :style="{ height: browserHeight - 260 + 'px' }"
                        style=" height: 450px;overflow:auto;font-size: 14px; color: #646566;">
                        <p> 1.是不是很久没有更新订阅信息了（更新的时候记得要关掉VPN再更新）
                        </p>
                        <p>2.是不是订阅已到期或流量用完。(官网、机器人、订阅列表更新后均有显示余量)</p>

                        <p>3.检查当前网络是不是可以正常联网，是否有屏蔽或限制</p>
                        <p>4.是不是有同时打开多个代理软件
                        </p>
                        <p>5.是不是浏览器残留其他的代理插件没有清除
                        </p>
                        <p>6.检查代理软件是否需要更新
                        </p>
                        <p style="font-size: 16; color: red;">7.重启大法，上面都没问题，将整个软件退出后重新进来，删除当前订阅，关闭代理开关，从个人中心重新导入订阅
                        </p>
                    </div>
                </div>

                <div v-if="activeNav == 4">
                    <div style="font-weight: 600; font-size: 16px; text-align: center; color: black;">
                        其他问题
                    </div>
                    <div :style="{ height: browserHeight - 260 + 'px' }"
                        style="padding: 10px; overflow:auto;font-size: 14px; color: #646566;">

                        <p style="color: black;font-size: 16px;"> 一、导入订阅报错怎么办
                        </p>
                        <div>
                            1.检查是否是最新的订阅链接，可以到官网或者官方机器人的个人中心处获取最新链接 <br />
                            2.导入订阅时需要把VPN关闭后再导入。
                        </div>
                        <p style="color: black;font-size: 16px;"> 二、我的节点怎么都是红的
                        </p>
                        <div>
                            1.检查刷新节点时VPN是否有关闭后再刷新的<br />
                            2.检查套餐流量是不是用完了<br />
                            3.检查是不是套餐已经过期了<br />
                        </div>
                        <p style="color: black; font-size: 16px;"> 三、不能付款怎么办
                        </p>
                        <div>
                            1.尝试付款时VPN需要先关闭后再点击付款链接
                            <br />
                            2.如果还是打不开，请联系客服生成专属付款二维码
                        </div>

                        <p style="color: black; font-size: 16px;"> 四、我能使用其他客户端吗
                        </p>
                        <div>我们推荐使用的客户端</div>
                        <div style="line-height: 26px; display: flex; justify-content: space-between;">
                            <div>
                                苹果系统：Shadowrocket(小火箭)
                                <br />
                                安卓系统：Clash for Android
                                <br />
                                WINDOWS：Clash for Windwos
                                <br />
                                MACOS：ClashX
                                <br />
                            </div>
                            <div>
                                <a href="#" @click="actionShow = true">找客服</a>
                                <br />
                                <a href="#" @click="downShow = true">下载</a><br />
                                <a href="#" @click="downShow = true">下载</a><br />
                                <a href="#" @click="downShow = true">下载</a><br />
                            </div>

                        </div>
                    </div>
                </div>

                <div v-if="activeNav == 5">
                    <div style="font-size: 16px; text-align: center;">
                        牛牛机器人介绍
                    </div>
                    <div :style="{ height: browserHeight - 260 + 'px' }" 
                    style="padding: 10px; height: 450px;overflow:auto;font-size: 14px; color: #646566;">
                        <p>除了牛牛官网，我们还提供了电报机器人
                        </p>
                        <p>机器人除了具备官网下单、查流量、导入等功能，同时具备套餐过期提醒、流量使用提醒、签到送流量、获取官网登陆验证码等功能，我们强烈建议您关注牛牛机器人</p>
                        <p>除此之外，我们还有真人客服7x24在线服务，群组签到送流量等福利</p>
                        <p><a href="#" @click="actionShow = true">更多福利，尽在TG</a></p>

                    </div>

                </div>
            </div>
        </div>
        <van-action-sheet v-model:show="actionShow">
            <div style="height: 152px;  text-align: center;">
                <div
                    style="height: 50px; line-height: 50px; font-size: 12px; color: #999;border-bottom: 1px solid #efefef;">
                    选择联系方式，点击复制</div>

                <div style="height: 50px; line-height: 50px; font-size: 16px; border-bottom: 1px solid #efefef;"
                    @click="actionShow = false">
                    <span v-clipboard:copy="tg" v-clipboard:success="onCopy1" v-clipboard:error="onError">
                        客服TG：https://t.me/ionoionoi
                    </span>
                </div>
                <div style="height: 50px; line-height: 50px;font-size: 16px;border-bottom: 1px solid #efefef;"
                    @click="actionShow = false">
                    <span v-clipboard:copy="email" v-clipboard:success="onCopy1" v-clipboard:error="onError">
                        客服邮箱：niuniuwork387@gmail.com
                    </span>
                </div>
            </div>
            <div style="height: 50px; line-height: 50px; font-size: 16px; border-bottom: 1px solid #efefef; text-align: center;"
                @click="actionShow = false">
                <span v-clipboard:copy="nntg" v-clipboard:success="onCopy1" v-clipboard:error="onError">
                    官方机器人：https://t.me/sixvpnbot
                </span>
            </div>
            <div style="height: 50px; line-height: 50px; font-size: 16px; border-bottom: 1px solid #efefef; text-align: center;"
                @click="actionShow = false">
                <span v-clipboard:copy="nngp" v-clipboard:success="onCopy1" v-clipboard:error="onError">
                    官方公开群：https://t.me/niuniu6vpn
                </span>
            </div>
        </van-action-sheet>



        <van-action-sheet v-model:show="downShow">
            <van-grid :border="false" :column-num="3">


                <van-grid-item style="text-align: center;" @click="clickIos">
                    <a href="#" style="font-size: 14px;color: black;">
                        <img style="width: 40px; height: 40px;" src="../../assets/img/小火箭.png" />
                        <div style="margin-top: 8px;">小火箭</div>
                    </a>
                </van-grid-item>
                <van-grid-item style="text-align: center;">
                    <a href="http://yyds.niuniuvpn.com:9999/image/cfa-2.5.12-foss-universal-release.apk"
                        style="font-size: 14px;color: black;">
                        <img style="width: 40px; height: 40px;" src="../../assets/img/clash.png" />
                        <div style="margin-top: 8px;">安卓Clash</div>
                    </a>
                </van-grid-item>
                <van-grid-item style="text-align: center;">
                    <a href="http://yyds.niuniuvpn.com:9999/image/Clash-for-Windows-0.20.16-x64-CN.7z"
                        style="font-size: 14px;color: black;">
                        <img style="width: 40px; height: 40px;" src="../../assets/img/win.png" />
                        <div style="margin-top: 8px;">Win Clash</div>
                    </a>
                </van-grid-item>
            </van-grid>
        </van-action-sheet>
    </div>
</template>

<script src="./welcome.js"></script>

<style lang="less">
.pc1 {
    width: 25%;
}

.mobile1 {
    width: 100%;
}
</style>
