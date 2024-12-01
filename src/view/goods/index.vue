<template>
    <div class="goods" v-if="!offline">
        <van-nav-bar
            :title="goodsName"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            style="position: fixed; width: 100%;"
        />
        <div  style="position: relative; width: 100%; top: 30px;">
            <van-swipe class="goods-swipe" :autoplay="3000" style="width: 100%;height: 350px;">
            <van-swipe-item >
                <img :src="goods.img" style="height: 350px;">
            </van-swipe-item>
        </van-swipe>

        <van-cell-group>
            <van-cell>
                <div class="goods-title">{{ goods.name }}</div>
                <div class="goods-desc">看片秒开，极致体验，港、日、韩、新、美等20+节点</div>

                <div class="goods-price">{{goods.price }}</div>
            </van-cell>
            <van-cell class="goods-express">
                <van-col span="10">流量：{{ goods.bandwidth }}GB/月</van-col>
                <van-col span="14">设备：{{ goods.deviceLimit }}台</van-col>
            </van-cell>
        </van-cell-group>

        <van-cell-group class="goods-cell-group">
            <van-cell title="查看商品评论" is-link @click="sorry"/>
        </van-cell-group>
        <van-cell-group class="goods-cell-group">
            <p class="goods-detail" >本产品支持24小时退货，如使用遇到问题请联系管理员</p>

        </van-cell-group>
        <van-goods-action>
            <van-goods-action-icon icon="home-o" @click="toHome" text="主页"/>
            <van-goods-action-icon icon="like-o"  @click="like" :color="likeColor" text="喜欢"/>
            <van-goods-action-icon icon="cart-o" @click="goToCart" :info="cartCount" text="购物车"/>
            <van-goods-action-button color="#32AE57" @click="addCart" text="立即购买"/>
        </van-goods-action>
        </div>
        
        <van-sku
                v-model="showSku"
                :sku="sku"
                :goods="goods"
                :goods-id="goods.id"
                :hide-stock="sku.hide_stock"
                @buy-clicked="onBuyClicked"
                @add-cart="onAddCartClicked"
        />
    </div>

    <div class="offline" v-else>
        <p style="text-align: center;color:lightgray">
            <van-icon name="warning-o" style="text-align: center" size="3rem"/><br>
            改商品已下架</p>
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
       color:black;
    }
    .like-red {
        color:red !important;
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
    .offline{
        margin-top:60%;
    }
</style>
