<template>
  <div>
    <y-shelf title="我的订单">
      <div slot="content">
        <div v-if="orderList.length">
          <div v-for="(item,i) in orderList" :key="i">
            <div class="gray-sub-title cart-title">
              <div class="first">
                <div>
                  <span class="date" v-text="item.createDate"></span>
                  <span class="order-id"> 订单号： <a href="javascript:;">{{item.orderId}}</a> </span>
                </div>
                <div class="f-bc">
                  <span class="price">单价</span>
                  <span class="num">数量</span>
                  <span class="operation">商品操作</span>
                </div>
              </div>
              <div class="last">
                <span class="sub-total">实付金额</span>
                <span class="order-detail"> <a href="javascript:;">查看详情<em class="icon-font"></em></a> </span>
              </div>
            </div>
            <div class="pr">
              <div class="cart" v-for="(good,j) in item.goodsList" :key="j">
                <div class="cart-l" :class="{bt:j>0}">
                  <div class="car-l-l">
                    <div class="img-box"><img
                      :src="good.productImg"
                      alt=""></div>
                    <div class="ellipsis">{{good.productName}}</div>
                  </div>
                  <div class="cart-l-r">
                    <div>¥ {{good.productPrice}}</div>
                    <div class="num">{{good.productNum}}</div>
                    <div class="type"><a @click="_delOrder(item.orderId,i)" href="javascript:;" v-if="j<1"
                                         class="del-order">删除此订单</a>
                    </div>
                  </div>
                </div>
                <div class="cart-r">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="prod-operation pa" style="right: 0;top: 0;">
                <div class="total">¥ {{item.orderTotal}}</div>
                <div class="status"> {{item.orderStatus === '1' ? '已支付' : '已关闭'}}  </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <img style="width:80px;padding:100px 0 40px 0;" src="/static/images/order-empty.png" alt="">
          <div style="padding: 0 0 10px 0;text-align: center">
            <h2 style="color: #999;font-weight: 500;font-size: 22px;">您目前还没有此类订单</h2>
            <div style="margin-top: 20px;margin-bottom: 150px;" class="gray-normal-btn">
              <a href="/#/">返回首页</a>
            </div>
          </div>
        </div>
      </div>
    </y-shelf>

  </div>
</template>
<script>
  import { orderList, delOrder } from '/api/goods'
  import YShelf from '/components/shelf'
  export default {
    data () {
      return {
        orderList: []
      }
    },
    methods: {
      _orderList () {
        orderList().then(res => {
          this.orderList = res.result
        })
      },
      _delOrder (orderId, i) {
        delOrder({orderId}).then(res => {
          if (res.status === '0') {
            alert('删除成功')
            this.orderList.splice(i, 1)
          } else {
            alert('删除失败')
          }
        })
      }
    },
    created () {
      this._orderList()
    },
    components: {
      YShelf
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../assets/style/mixin";
  .gray-normal-btn{
    display: inline-block;
    // background: #F2F2F2;
    background: linear-gradient(#fff,#ececec);
    border: 1px solid #dbdde2;
    border-radius: 6px;
    height: 38px;
    line-height: 38px;
    cursor: pointer;
    overflow: hidden;
    text-align: center;
    font-family: 'Microsoft Yahei','微软雅黑','PingFang SC',sans-serif;
    a{
      text-decoration: none;
      font-size: 14px;
      color: black;
      display: block;
      padding: 0 20px;
      cursor: pointer;
    }
  }
  .gray-sub-title {
    height: 38px;
    padding: 0 24px;
    background: #EEE;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
    line-height: 38px;
    font-size: 12px;
    color: #666;
    display: flex;
    
    span {
      display: inline-block;
      height: 100%;
    }
    .first {
      display: flex;
      justify-content: space-between;
      flex: 1;
      .f-bc {
        > span {
          width: 112px;
          text-align: center;
        }
      }
    }
    .last {
      width: 230px;
      text-align: center;
      display: flex;
      border-left: 1px solid #ccc;
      span {
        flex: 1;
      }
    }
  }

  .bt {
    border-top: 1px solid #EFEFEF;
  }

  .date {
    padding-left: 6px;
  }

  .order-id {
    margin-left: 20px;
  }

  .cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    &:hover {
      .del-order {
        display: block;
      }
    }
    .del-order {
      display: none;
    }
    .cart-l {
      display: flex;
      align-items: center;
      flex: 1;
      padding: 15px 0;
      justify-content: space-between;
      position: relative;
      &:before {
        position: absolute;
        content: ' ';
        right: -1px;
        top: 0;
        width: 1px;
        background-color: #EFEFEF;
        height: 100%;
      }
      .ellipsis {
        margin-left: 20px;
        width: 220px;
      }
      .img-box {
        border: 1px solid #EBEBEB;
      }
      img {
        display: block;
        @include wh(80px);
      }
      .cart-l-r {
        display: flex;
        > div {
          text-align: center;
          width: 112px;
        }
      }
      .car-l-l {
        display: flex;
        align-items: center;
      }
    }
    .cart-r {
      width: 230px;
      display: flex;
      span {
        text-align: center;
        flex: 1;
      }
    }
  }

  .prod-operation {
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 254px;
    div {
      width: 100%;
      text-align: center;
    }
    div:last-child {
      padding-right: 24px;
    }
  }
</style>
