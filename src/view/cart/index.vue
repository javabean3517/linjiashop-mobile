<template>
  <div class="cart" style="background-color: white;">
    <van-nav-bar v-if="isLogin" title="购物车" left-arrow left-text="返回" @click-left="onClickLeft" />
    <van-checkbox-group class="card-goods" v-model="checkedCartItem" v-if="isLogin && cartList.length > 0">
      <div v-for="item in cartList" :key="item.id" class="card-goods__item">
        <!-- <van-checkbox disabled :name="item.id"></van-checkbox> -->
        <van-card :title="item.name" :desc="item.descript" :price="formatPrice(item.price)" :thumb="item.img">
        </van-card>
      </div>
    </van-checkbox-group>
    <div style="font-size: 20px; margin: 20px auto; width: 100%; text-align: center;">套餐明细</div>
    <div style="margin-top: 20px;">
      <table ref="table" class="table">
        <!-- 表头 -->
        <tr class="top">
          <th>
            <span class="title">字段</span>
          </th>
          <th>
            <span class="title">当前套餐</span>
          </th>
          <th>
            <span class="title">购买套餐</span>
          </th>
        </tr>
        <tr class="cont" >
          <td>套餐名称</td>
          <td>{{currentUser.activeNameStr}}</td>
          <td>{{activedUser.activeNameStr}}</td>
        </tr>
        <tr class="cont" >
          <td>生效方式</td>
          <td colspan="2">{{activedType}}</td>
          
        </tr>
        <tr class="cont" >
          <td>套餐时长</td>
          <td>{{currentUser.timeStr}}</td>
          <td>{{activedUser.timeStr}}</td>
        </tr>
        <tr class="cont" >
          <td>套餐流量</td>
          <td>{{currentUser.transferEnableStr}}</td>
          <td>{{activedUser.transferEnableStr}}</td>
        </tr>
        <tr class="cont" >
          <td>剩余流量</td>
          <td>{{currentUser.leftStr}}</td>
          <td>{{activedUser.leftStr}}</td>
        </tr>
        <tr class="cont" >
          <td>套餐过期</td>
          <td>{{currentUser.classExpiredStr}}</td>
          <td>{{activedUser.classExpiredStr}}</td>
        </tr>
        <tr class="cont" >
          <td>下期流量重置</td>
          <td>{{currentUser.nextResetStr}}</td>
          <td>{{activedUser.nextResetStr}}</td>
        </tr>
      </table>
      <table ref="table" class="table">
        <!-- 表头 -->
        <tr class="top">
          <th v-for="(item_th, index_th) in thList" :key="index_th" :style="{ background: item_th.backgroundColor }">
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
    </div>

    <van-submit-bar v-show="!showEdit" :price="totalPrice" :disabled="!checkedCartItem.length"
      :button-text="submitBarText" @submit="submit" v-if="isLogin && cartList.length > 0"
      v-bind:class="{ 'pc3': ispc }">
    </van-submit-bar>

    <div class="no-data" v-if="isLogin && cartList.length === 0">
      <p style="text-align: center;color:lightgray">
        <van-icon name="cart-o" style="text-align: center" size="3rem" /><br>
        购物车还是空的
      </p>
      <van-button type="default" block round @click="toHome">去逛逛</van-button>
    </div>
    <div class="no-data" v-if="!isLogin">
      <p style="text-align: center;color:lightgray">
        <van-icon name="cart-o" style="text-align: center" size="3rem" /><br>
        还没有登录
      </p>
      <van-button type="primary" block round @click="toLogin">立即登录</van-button>
    </div>
  </div>
</template>

<script src="./cart.js"></script>

<style lang="less">
.cart {
  .no-data {
    margin-top: 60%;
  }
}

.pc3 {
  width: 25%;
  left: 37.5%;
}

.van-submit-bar {
  bottom: 48px;
}

.card-goods {
  background-color: #fff;

  &__item {
    position: relative;
    background-color: #fafafa;

    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }

    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }

    .van-card__price {
      color: #f44;
    }
  }
}

.controlHeight {
  height: 485px;
  overflow: hidden;
  transition: 0.3s;
}
// 正常高度
.normalHeight {
  height: 100%;
  transition: 0.3s;
}
// 头部
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 40px;
}
// 表格相关样式
table {
  border-collapse: collapse;
  width: 98%;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  // 每一行下面加边框
  tr {
    border-bottom: 1px solid #f1f1f1;
  }
  .cont {
    height: 40px;
  }
}
// 表头设置
.top {
  height: 40px;
  line-height: 40px;
  background: rgb(242, 245, 247);
  .title {
    margin-right: 3px;
  }
  th {
    border-left: 1px solid #e9ebec;
    font-weight: 500;
  }
}

// 合计一行高亮显示
.sum {
  color: #005dff;
  font-weight: bold;
}
// 正常排序的样式
.sort {
  display: inline-block;
  width: 7px;
  height: 10px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeCAYAAAG012XDAAAABGdBTUEAALGPC/xhBQAAAppJREFUSA3dVjtvE0EQnjkbkCMRhBTIHwi/gdgSBQSIi1iOA3ZNT5HUQIfow6OnvwM/5BR2zKNAsvkP5A8kIEA4xALsW2b2POs9353jioKVzjP7zbezM7MvA1gNWXdrLWVhlhpvYTTeEuttNt2aLTaYSimvcc1zu90Mf9agQHVr+/cEdFjxaq0dAP9lIAGw2Xy/NBj++iysTPrcJdFPl0hJdImWtag9iXdEIE/qU6wpQ7ArNMlgbKawXlPNt8hQLZfyd8woUgzZbb7JwnDI84ZbOp2rFG72GJQYEhZwMi5UxwmcrIlnyS6JqbPWNdfpI3yJZRIu5TEJCtEu1alxup3Ohb29DxdlsEgdgnSUUg4cj76f/Pn5VetiIBkievU2J6ibrTNgiG6tfRJQJr82poluvf0JQEX3JmGBjVbLq7deKAX3J36iGiI+j6L/DEGv1n6sQD2aOSPiE9Qn8fBHpDShgcuLC04llxtQNa+EDHaHbMzRdawU8wfopEJHgrmMsY11szLl4q0qOrjLIDfWGQt6Mb98jsdnOWSN7MmQlTo62aP+O1BqFRA/wuXzN3Re00Srb8K0MKNSFLvA1WOH3FhSX+OGFVViI/UanS3ljzyiz5rUpyKW4+oTcuo2WiugoEffUnT+BITPPUJWVohZ2ul4k7ylvn15JnhJhHuwvLhm9gge9h8Q9WoifQ4DHbNVOOo/nIP6v1P0Qs1zNc1TCKrrs/Lm+rbZUvrlHf2m7aRW5nEQ4iAeZFJns4XCdf2sGKdCCt7IEW2vuJtXWCJxAOnUmrydBhVlWrqN/W3wfXO7TNvBcXYqxdtPIzgBkUhtEj9Jr+ptj/8CCE4Dqnc318tUP1+waTnTqZD5gYRjVVo4k2lsbFz7JniS/AspWgleJ+XDaAAAAABJRU5ErkJggg==);
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}
// 激活排序的样式
.sortUp {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeCAYAAAG012XDAAAABGdBTUEAALGPC/xhBQAAAqRJREFUSA3lVj1vE0EQnTljkFMQIRlRIDr4BRTJWUKQBEiKWE4Cdk1PkdRAh+gDpKe3Qz7kJiHEB0LyGck0tKSDICEQoAhijLGXmT3veffOd6c0NIxk7eybN7Ozs7O3BtAEpV5zhYZpanl9a5iF+UfwiaVrq8lkgkuW5me8JJlYrtcz/NOc+qrj3lKgJRWnsQQCngCPJAhOMwui81mxANOnfT1RQUqrTixbY7oq3y6BvGiPck35hOBGfINUao2nsoQ8BmSw3Revbej1eF1TLCsHV8ZcBj1y5GFofpP2ILAGR6rB3UUR5a5lzeX2Eb4MZRKuyhPKQy+Vcd5DIzWbo/Dq7amgzTt2hQphwUHnO3R+fgXWNTGXD5ZOK9PAy3EPtQCeqmEe0XHfUceFe5MxtpFQFzZWKJ/boWgm8Nic/tMZVta37wsQ92JXRXyA8iZ+OgiXRvc8c3LEKuVyLbohF3Tc0MnGHFnHUmFmD63UDYNAE8bYxrh/MsXCtTW0cFmRWWdMzUMj3+P+XTZsZlMYpv6k/j4D7f0and44IDbgxNlJyJ1rDaMqzE9TAcboNJbh14dDGZANHJjnjMfI8ExfugvQxQpFiVkUe5ASRbhsh+pjBnXenAfouJRRNiYR04RI9z5tw8RFeUJs9IJ6ddulYPrH03ROmiG6VO8prre3vfb+HbprY0l+CfZxaH+8m8D5H8zyoCobWytCQNKnKbEeiPioODe96LdUtepkW93f3E7UVkcUxL1M6ridz0/IZ8UPqsKUq89t+NPdpcYPf3kVyR+xBcdSU6X8Vfl2KjgUVBnKm88W6QGOvo6WtVQqXH+o+PoYGZRJgp6k1Y3tCv25WlBO5LB2c266SPXrKSw4xgZV5PLOzij8EPMj6czm7OylbwqPGv8Ccef3M+dWP3cAAAAASUVORK5CYII=);
}

.more {
  height: 40px;
  text-align: center;
  line-height: 40px;
  span {
    display: inline-block;
  }
  span:active {
    transition: height 0.3s;
  }
}
</style>
