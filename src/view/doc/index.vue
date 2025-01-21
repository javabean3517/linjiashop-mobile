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
                    <van-sidebar-item title="问题排查">

                    </van-sidebar-item>
                    <van-sidebar-item title="断网急救">

                    </van-sidebar-item>
                    <van-sidebar-item title="常见问题">

                    </van-sidebar-item>
                </van-sidebar>
            </div>
            <div style="width: 75%; margin: 20px auto;">
                <div v-if="activeNav == 0">
                    <div style="font-weight: 600; font-size: 16px; text-align: center;">
                        用户使用规范
                    </div>
                    <div style="padding: 10px; height: 450px;overflow:auto;font-size: 14px; color: #646566;">
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
                                <div style="font-size: 16px; text-align: center; margin: 10px;">
                                    一、自动导入
                                </div>
                                <div
                                    style="padding: 10px; height: 380px;overflow:auto;font-size: 14px; color: #646566;">
                                    <div>1、我们推荐的客户端	</div>
                                    <div style="margin-top: 6px; width: 96%; display: flex; justify-content: space-between;">
                                        <div>Clash For Android</div>
                                        <div><a href="#">立即下载</a></div>
                                    </div>
                                    <div  style="margin-top: 10px;">
                                        2、导入订阅
                                    </div>
                                    <div  style="margin-top: 4px;">
                                        自动导入仅适用本设备使用，导入路径为网页端→进入我的→安卓导入
                                    </div>
                                    <div style="text-align: center;margin-top: 10px;">
                                        <img style=" height: 70px; width: 220px;" src="../../assets/img/doc1.jpg"/>
                                    </div>
                                </div>

                            </van-tab>
                            <van-tab title="苹果">
                                <div
                                    style="padding: 10px; height: 450px;overflow:auto;font-size: 14px; color: #646566;">

                                </div>
                            </van-tab>
                            <van-tab title="WINDOWS">
                                <div
                                    style="padding: 10px; height: 450px;overflow:auto;font-size: 14px; color: #646566;">

                                </div>
                            </van-tab>
                        </van-tabs>
                    </div>
                </div>


            </div>
        </div>

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
