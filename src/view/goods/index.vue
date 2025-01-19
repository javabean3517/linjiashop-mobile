wrapper<template>

    <div class="goods" v-if="ku == undefined || sku == '' || sku == null || sku.length == 0">
        <van-overlay :show="showLoading" @click="showLoading = false" z-index="1000">
            <div class="wrapper" @click.stop style=" margin: 300px auto; ">
                <van-loading text-color="#32AE57" color="#32AE57" vertical>加载中</van-loading>
            </div>
        </van-overlay>
        <van-nav-bar :title="goodsName" left-text="返回" left-arrow @click-left="onClickLeft" style="position: fixed;"
            v-bind:class="{ 'pc4': ispc }" />
        <div style="position: relative; width: 100%; top: 30px;">
            <van-swipe class="goods-swipe" :autoplay="3000" style="width: 100%;height: 300px;">
                <van-swipe-item>
                    <img :src="goods.img" style="height: 300px;">
                </van-swipe-item>
            </van-swipe>

            <van-cell-group>
                <van-cell>
                    <div class="goods-title">{{ goods.name }}</div>
                    <div class="goods-desc">{{ goods.tips }} </div>

                    <div class="goods-price">{{ goods.price }}</div>
                </van-cell>
                <van-cell class="goods-express">
                    <van-col span="9">流量：{{ goods.bandwidth }}GB/月</van-col>
                    <van-col span="7">设备：{{ goods.deviceLimit }}台</van-col>
                    <van-col span="8">网速：1000Mbps</van-col>

                </van-cell>
                <van-cell class="goods-express">
                    <van-col span="30">节点：港、新、日、韩、美、菲、澳、俄等20+节点</van-col>
                </van-cell>
                <p class="goods-detail">本产品支持24小时退货，如使用遇到问题请联系管理员</p>
                <table ref="table" class="table">
                    <!-- 表头 -->
                    <tr class="top">
                        <th v-for="(item_th, index_th) in thList" :key="index_th"
                            :style="{ background: item_th.backgroundColor }">
                            <span class="title">{{ item_th.title }}</span>
                            <span class="sort" v-if="item_th.isSort" @click="needSort(item_th.sortField, index_th)"
                                :class="[sortIndex === index_th && isNeedSort ? 'sortUp' : '']"></span>
                        </th>
                    </tr>
                    <!-- 第一行的合计数据 需要高亮 -->
                    <tr class="cont sum" v-for="(item, index) in totalData" :key="index + Math.random() * 24">
                        <td>{{ item.comname2 }}</td>
                        <td>{{ item.addAgent }}</td>
                        <td>{{ item.addAgentRate }}</td>
                        <td>{{ item.preium }}</td>
                        <td>{{ item.premiumRate }}</td>
                    </tr>

                    <!--展示列表数据 -->
                    <tr class="cont" v-for="(item_tr, index_tr) in data11" :key="index_tr">
                        <td>{{ item_tr.comname2 }}</td>
                        <td>{{ item_tr.addAgent }}</td>
                        <td>{{ item_tr.addAgentRate }}</td>
                        <td>{{ item_tr.preium }}</td>
                        <td>{{ item_tr.premiumRate }}</td>
                    </tr>
                </table>


            </van-cell-group>
            <van-goods-action v-bind:class="{ 'pc1': ispc }">
                <van-goods-action-icon icon="home-o" @click="toHome" text="主页" />
                <van-goods-action-icon icon="like-o" @click="like" :color="likeColor" text="喜欢" />
                <van-goods-action-icon icon="cart-o" @click="goToCart" :info="cartCount" text="购物车" />
                <van-goods-action-button color="#32AE57" @click="addCart" text="立即购买" />
            </van-goods-action>
        </div>

        <van-sku v-bind:class="{ 'pc3': ispc }" v-model="showSku" :sku="sku" :goods="goods" :goods-id="goods.id"
            :hide-stock="sku.hide_stock" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />
    </div>

    <div class="offline" v-else>
        <p style="text-align: center;color:lightgray">
            <van-icon name="warning-o" style="text-align: center" size="3rem" /><br>
            改商品已下架
        </p>
        <van-button type="primary" block round @click="toHome"></van-button>
    </div>

</template>

<script src="./goods.js"></script>

<style lang="less">
//修改箭头颜色

.van-nav-bar .van-icon {
    color: #32AE57;
}

.van-nav-bar__text {
    color: #32AE57;
}


img {
    width: 100%;
}

.section-detail {
    margin-top: -4px;
}

.like-info {
    color: black;
}

.pc3 {
    width: 25%;
    left: 37.5%;
}

.pc4 {
    width: 25%;
    left: 37.5%;
}


.like-red {
    color: red !important;
}

.goods {
    padding-bottom: 50px;

    &-swipe {
        img {
            width: 100%;
            height: 450px;
            display: block;
        }
    }

    &-desc {
        font-size: 12px;
        color: #999999;
        letter-spacing: 0;
        line-height: 18px;
        margin: 6px 0;
    }

    &-detail {
        padding: 15px;
        font-size: 14px;
    }

    &-title {
        font-size: 16px;
    }

    &-price {
        color: #f44;
    }

    &-express {
        color: #999;
        font-size: 12px;
        padding: 5px 15px;
    }

    &-cell-group {
        margin: 15px 0;

        .van-cell__value {
            color: #999;
        }
    }

    &-tag {
        margin-left: 5px;
    }
}

.offline {
    margin-top: 60%;
}
</style>
