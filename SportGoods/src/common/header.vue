<template>
  <div>
      <div id="top-bar" class="bit-top-bar" role="complementary" >       
          <div class="wf-wrap top">
              <div class="wf-td">
                  <div class="wf-float-left">
                      <i class="fa fa-clock-o" aria-hidden="true"></i>
                      <span>在线时间 08:30~21:30</span>
                  </div>
                  <div class="wf-float-right">
                      <span>欢迎访问户外运动专卖城</span>
                  </div>
              </div>
              <div class="wf-td right-block">
                  <div class="icon">
                       <!--搜索 -->
                           <i class="fa fa-search" aria-hidden="true"></i>
                        <!-- 用户 -->              
                  </div>

              <div class="user pr">
                <router-link to="/user">个人中心</router-link>
                <!--用户信息显示-->
                <div class="nav-user-wrapper pa" v-if="login">
                  <div class="nav-user-list">
                    <ul>
                      <!--头像-->
                      <li class="nav-user-avatar">
                        <div>
                          <span class="avatar" :style="{backgroundImage:'url('+userInfo.info.avatar+')'}">
                          </span>
                        </div>
                        <p class="name">{{userInfo.info.name}}</p>
                      </li>
                      <li >
                        <router-link class="header-link" to="/user/orderList">我的订单</router-link>
                      </li>
                      <li>
                        <router-link class="header-link" to="/user/information">账号资料</router-link>
                      </li>
                      <li>
                        <router-link class="header-link" to="/user/addressList">收货地址</router-link>
                      </li>
                      <li>
                        <router-link class="header-link" to="/user/support">售后服务</router-link>
                      </li>
                      <li>
                        <router-link class="header-link" to="/user/coupon">我的优惠</router-link>
                      </li>
                      <li>
                        <a href="javascript:;" @click="_loginOut">退出</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="shop pr" @mouseover="cartShowState(true)" @mouseout="cartShowState(false)" ref="positionMsg">
                              <router-link class="shop-link" to="/cart"></router-link>
                              <span class="cart-num">
                                <i class="num" :class="{no:totalNum <= 0,move_in_cart:receiveInCart}">{{totalNum}}</i></span>
                              <!--购物车显示块-->
                              <div class="nav-user-wrapper pa active" v-show="showCart">
                                <div class="nav-user-list">
                                  <div class="full" v-show="totalNum">
                                    <!--购物列表-->
                                    <div class="nav-cart-items">
                                      <ul>
                                        <li class="clearfix" v-for="(item,i) in cartList" :key="i">
                                          <div class="cart-item">
                                            <div class="cart-item-inner">
                                              <router-link :to="'goodsDetails?productId='+item.productId">
                                                <div class="item-thumb">
                                                  <img :src="item.productImg">
                                                </div>
                                                <div class="item-desc">
                                                  <div class="cart-cell"><h4>
                                                    <a href="" v-text="item.productName"></a>
                                                  </h4>
                                                    <p class="attrs"><span>白色</span>
                                                    </p> <h6><span class="price-icon">¥</span><span
                                                      class="price-num">{{item.productPrice}}</span><span
                                                      class="item-num">x {{item.productNum}}</span>
                                                    </h6></div>
                                                </div>
                                              </router-link>
                                              <div class="del-btn del" @click="delGoods(item.productId)">删除</div>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <!--总件数-->
                                    <div class="nav-cart-total"><p>共 <strong>{{totalNum}}</strong> 件商品</p> <h5>合计：<span
                                      class="price-icon">¥</span><span
                                      class="price-num">{{totalPrice}}</span></h5>
                                      <h6>
                                        <y-button classStyle="main-btn"
                                                  style="height: 40px;width: 100%;margin: 0;color: #fff;font-size: 14px;line-height: 38px"
                                                  text="去购物车" @btnClick="toCart"></y-button>
                                      </h6>
                                    </div>
                                  </div>
                                  <div v-show="!totalNum" style="height: 313px;text-align: center;z-index: 999;" class="cart-con">
                                    <p>你的购物车竟然是空的!</p>
                                  </div>
                                </div>
                              </div>
                          </div>    
              </div>
          </div>
      </div>
       <!-- 头部 -->
      <header id="header" class="logo-classic" role="baner">
          <div class="wf-wrap">
              <div class="wf-table">
                  <div id="branding" class="wf-td bit-logo-bit">
                    <router-link to="/home">
                      <img id="img" src="../assets/img/logo.png" alt="">
                    </router-link>
                  </div>
                  <div id="assistive-info" class="wf-td assistive-info" role="complementary">
                    <div class="wf-el" id="wf-el">
                        <el-input class="el-input" placeholder="请输入内容" >    
                            <el-button class="el-button" slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </div>
                  </div>
              </div>
          </div>
          <div id="nav" class="navigation-holder">
            <div id="main-nav" class="main-nav" >
              <ul>
                  <li><router-link class="r-link" to="/">商城首页</router-link> </li>                    
                 
                  <li> <router-link class="r-link" to="/goods">所有商品</router-link> </li>                      
                     
                  <li><router-link class="r-link" to="/msgbox">商城动态</router-link></li>                      
                      
                  <li> <router-link class="r-link" to="/paymenthome">支付方式</router-link></li>                     
                    
                  <li><router-link class="r-link" to="/about">关于店铺</router-link></li>                    
                    
                  <li><router-link class="r-link" to="/store">线下门店</router-link></li>
                      
              </ul>
              </div>
               <!-- 响应式 -->
              <div class="nav-menu">
                <el-row class="tac">  
                  <el-menu default-active="1" class="el-menu-vertical-demo"
                      background-color="black"
                      text-color="#fff"
                      active-text-color="black">

                    <el-submenu index="1">
                      <template class="nav-menu-demo" slot="title"><span>首页</span></template>   

                      <el-menu-item-group>          
                        <el-menu-item index="1-1" class="menu-item"><router-link class="r-link" to="/">商城首页</router-link></el-menu-item>
                        <el-menu-item index="1-2" class="menu-item"><router-link class="r-link" to="/goods">所有商品</router-link></el-menu-item>
                        <el-menu-item index="1-3" class="menu-item"><router-link class="r-link" to="/msgbox">商城动态</router-link></el-menu-item>
                        <el-menu-item index="1-4" class="menu-item"><router-link class="r-link" to="/paymenthome">支付方式</router-link></el-menu-item>
                        <el-menu-item index="1-5" class="menu-item"><router-link class="r-link" to="/about">关于店铺</router-link></el-menu-item>
                        <el-menu-item index="1-6" class="menu-item"><router-link class="r-link" to="/store">线下门店</router-link></el-menu-item>
                        <el-menu-item index="1-7" class="menu-item"><router-link class="r-link" to="/login">登录|注册</router-link></el-menu-item>
                      </el-menu-item-group>   
                    </el-submenu>    
                  </el-menu> 
                </el-row>         
              </div>
            </div>

      <section class="section">
           <div><i class="fa fa-phone" aria-hidden="true"></i></div>
           <div><i class="fa fa-comments" aria-hidden="true"></i></div>          
           <div> <a style="color: white;" href="top-bar"><i class="fa fa-angle-up" aria-hidden="true"></i></a></div>
       </section>
      <div class="f-fa">
          <a style="color: white;" href="top-bar"> <i class="fa fa-angle-up" aria-hidden="true"></i></a>
     </div>
        
      </header>
  </div>
</template>
<script>
  import YButton from '/components/YButton'
  import { mapMutations, mapState } from 'vuex'
  import { getCartList, cartDel } from '/api/goods'
  import { loginOut } from '/api/index'
  import { setStore, removeStore } from '/utils/storage'
  export default{
    data () {
      return {
        user: {},
        // 查询数据库的商品
        st: false,
        // 头部购物车显示
        cartShow: false,
        positionL: 0,
        positionT: 0,
        timerCartShow: null // 定时隐藏购物车
      }
    },
    computed: {
      ...mapState([
        'cartList', 'login', 'receiveInCart', 'showCart', 'userInfo'
      ]),
      // 计算价格
      totalPrice () {
        var totalPrice = 0
        this.cartList && this.cartList.forEach(item => {
          totalPrice += (item.productNum * item.productPrice)
        })
        return totalPrice
      },
      // 计算数量
      totalNum () {
        var totalNum = 0
        this.cartList && this.cartList.forEach(item => {
          totalNum += (item.productNum)
          console.log(item.productId);
        })
        
        return totalNum
      }
    },
    methods: {
      ...mapMutations(['ADD_CART', 'INIT_BUYCART', 'ADD_ANIMATION', 'SHOW_CART', 'REDUCE_CART', 'RECORD_USERINFO', 'EDIT_CART']),
      // 购物车显示
      cartShowState (state) {
        this.SHOW_CART({showCart: state})
      },
      // 登陆时获取一次购物车商品
      _getCartList () {
        getCartList().then(res => {
          if (res.status === '1') {
            setStore('buyCart', res.result)
          }
          // 重新初始化一次本地数据
        }).then(this.INIT_BUYCART)
      },
      // 删除商品
      delGoods (productId) {
        if (this.login) { // 登陆了
          cartDel({productId}).then(res => {
            this.EDIT_CART({productId})
          })
        } else {
          this.EDIT_CART({productId})
        }
      },
      toCart () {
        this.$router.push({path: 'cart'})
      },
      // 控制顶部
      navFixed () {
        if (this.$route.path === '/goods' || this.$route.path === '/home' || this.$route.path === '/goodsDetails') {
          var st = document.body.scrollTop
          st >= 100 ? this.st = true : this.st = false
          // 计算小圆当前位置
          let num = document.querySelector('.num')
          this.positionL = num.getBoundingClientRect().left
          this.positionT = num.getBoundingClientRect().top
          this.ADD_ANIMATION({cartPositionL: this.positionL, cartPositionT: this.positionT})
        } else {
          return
        }
      },
      // 退出登陆
      _loginOut () {
        loginOut().then(res => {
          removeStore('buyCart')
          window.location.href = '/'
        })
      }
    },
    mounted () {
      if (this.login) {
        this._getCartList()
      } else {
        this.INIT_BUYCART()
      }
      this.navFixed()
      window.addEventListener('scroll', this.navFixed)
      window.addEventListener('resize', this.navFixed)
    },
    components: {
      YButton
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/style/theme";
@import "../assets/style/mixin";
.el-menu li{
  z-index: 555 !important;
}

  .header-link:hover{
    color: white; 
  }
// 用户
.user {
  margin-top: 12px;
  line-height: 45px;
  margin-left: 41px;
  width: 36px;
  &:hover {
    a:before {
      background-position: -5px 0;
    }
    .nav-user-wrapper {
      top: 18px;
      visibility: visible;
      opacity: 1;
      -webkit-transition: opacity 0.15s ease-out;
      transition: opacity 0.15s ease-out;
    }
  }
  > a {
    position: relative;
    @include wh(36px, 20px);
    display: block;
    text-indent: -9999px;
    &:before {
      content: " ";
      position: absolute;
      left: 8px;
      top: 0;
      @include wh(20px);
      background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) -155px 0;
      background-size: 240px 107px;
      transition: none;
    }
  }
  li + li {
    list-style: none;
    text-align: center;
    position: relative;
    border-top: 1px solid #f5f5f5;
    line-height: 44px;
    height: 44px;
    color: #616161;
    font-size: 12px;
    &:hover {
      background: #3C7FF2;
    }
    a {
      display: block;
      color: #616161;
      text-decoration: none;
    }
  }
  .nav-user-avatar {
    // border: 1px solid gold;
    > div {
      position: relative;
      margin: 0 auto 8px;
      @include wh(46px);
      text-align: center;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 50%;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
      }
      .avatar {
        border-radius: 50%;
        display: block;
        @include wh(100%);
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    .name {
      margin-bottom: 16px;
      font-size: 12px;
      line-height: 1.5;
      text-align: center;
      color: #757575;
    }
  }
  .nav-user-wrapper {
    width: 168px;
    transform: translate(-50%);
    left: 50%;
  }
  .nav-user-list {
    width: 168px;
    &:before {
      left: 50%;
    }
    .nav-user-list li:hover{
      color:white;
    }
    // &:hover{
    //   color:white;
    // }

  }
}
// =================购物车============
.shop {
  // border: 1px solid gold;
  position: relative;
  float: right;
  margin-top: 11.5px;
  margin-left: 50px;
  width: 61px;
  z-index: 99;
  &:hover {
    a:before {
      content: " ";
      background-position: 0 -20px;
      // background-size: 1.5;
    }
  }
  .nav-user-wrapper.active {
    top: 5px;
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity 0.15s ease-out;
    transition: opacity 0.15s ease-out;
  }
  > a {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    display: block;
    right: 0;
    z-index: 1;
    &:before {
      display: block;
      @include wh(30px, 100%);
      content: " ";
      background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png)
        0 -22px;
      background-size: 240px 107px;
      background-position: -150px -22px;
    }
  }
  .cart-num {
    position: relative;
    display: block;
    margin-left: 31px;
    margin-top: -1px;
    min-width: 30px;
    text-indent: 0;
    line-height: 20px;
    > i {
      background: #eb746b;
      background-image: -webkit-linear-gradient(#eb746b, #e25147);
      background-image: linear-gradient(#eb746b, #e25147);
      box-shadow: inset 0 0 1px hsla(0, 0%, 100%, 0.15),
        0 1px 2px hsla(0, 0%, 100%, 0.15);
      text-align: center;
      font-style: normal;
      display: inline-block;
      @include wh(20px);
      line-height: 20px;
      border-radius: 10px;
      color: #fff;
      font-size: 12px;
      &.no {
        background: #969696;
        background-image: -webkit-linear-gradient(#a4a4a4, #909090);
        background-image: linear-gradient(#a4a4a4, #909090);
        box-shadow: inset 0 0 1px #838383, 0 1px 2px #838383;
      }
    }
  }

  .nav-user-wrapper {
    right: 0;
    width: 360px;
    .nav-user-list {
      &:before {
        right: 34px;
      }
    }
  }
  .nav-user-list {
    padding: 0;
    width: 100%;
    .li {
      list-style: none;
    }
    .full {
      border-radius: 8px;
      overflow: hidden;
    }
    .nav-cart-items {
      max-height: 363px;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .cart-item {
      height: 120px;
      width: 100%;
      overflow: hidden;
      border-top: 1px solid #f0f0f0;
      &:hover {
        background: wheat;
        color: white;
        .del {
          display: block;
        }
      }
    }
    li:first-child .cart-item:first-child {
      border-top: none;
      border-radius: 8px 8px 0 0;
      overflow: hidden;
      list-style: none;
    }
    .cart-item-inner {
      padding: 20px;
      position: relative;
    }
    .item-thumb {
      position: relative;
      float: left;
      width: 80px;
      height: 80px;
      border-radius: 3px;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
        border: 1px solid #f0f0f0;
        border: 0 solid transparent;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
        border-radius: 3px;
      }
      img {
        display: block;
        @include wh(80px, 80px);      
        border-radius: 3px;
        overflow: hidden;
      }
    }
    .item-desc {
      margin-left: 98px;
      display: table;
      @include wh(205px, 80px);
      h4 {
        color: #000;
        width: 185px;
        overflow: hidden;
        word-break: keep-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 10px;
      }
      .attrs span {
        position: relative;
        display: inline-block;
        margin-right: 20px;
        font-size: 14px;
        line-height: 14px;
        color: #999;
      }
      .attrs span:last-child {
        margin-right: 0;
      }
      h6 {
        color: #cacaca;
        font-size: 12px;
        line-height: 14px;
        margin-top: 20px;
        span {
          display: inline-block;
          font-weight: 700;
          color: #cacaca;
        }
        .price-icon,
        .price-num {
          color: #d44d44;
        }
        .price-num {
          margin-left: 5px;
          font-size: 14px;
        }
        .item-num {
          margin-left: 10px;
        }
      }
    }
    .cart-cell {
      
      display: table-cell;
      vertical-align: middle;
    }
    .cart-cell a{
      text-decoration: none;
    }
    .del {
      display: none;
      overflow: hidden;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .nav-cart-total {
    box-sizing: content-box;
    position: relative;
    padding: 20px;
    height: 40px;
    background: #fafafa;
    border-top: 1px solid #f0f0f0;
    border-radius: 0 0 8px 8px;
    box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.5),
      0 -3px 8px rgba(0, 0, 0, 0.04);
    background: -webkit-linear-gradient(#fafafa, #f5f5f5);
    background: linear-gradient(#fafafa, #f5f5f5);
    p {
      margin-bottom: 4px;
      line-height: 16px;
      font-size: 12px;
      color: #c1c1c1;
    }
    h5 {
      line-height: 20px;
      font-size: 14px;
      color: #6f6f6f;
      span {
        font-size: 18px;
        color: #de4037;
        display: inline-block;
        font-weight: 700;
      }
      span:first-child {
        font-size: 12px;
        margin-right: 5px;
      }
    }
    h6 {
      position: absolute;
      right: 20px;
      top: 20px;
      width: 108px;
    }
  }
}

// 用户信息弹出
.nav-user-wrapper {
  position: absolute;
  z-index: 30;
  margin-top: 18px;
  opacity: 0;
  visibility: hidden;
  top: -3000px;
  .nav-user-list {
    position: relative;
    padding-top: 20px;
    background: #fff;
    border: 1px solid #d6d6d6;
    border-color: rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    z-index: 10;
    &:before {
      position: absolute;
      content: " ";
      background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png)
        no-repeat -49px -43px;
      background-size: 240px 107px;
      // @include wh(20px, 8px);
      top: -8px;
      margin-left: -10px;
    }
  }
}
.section {
  width: 60px;
  background-color: black;
  position: fixed;
  font-size: 40px;
  color: white;
  right: 0px;
  bottom: 400px;
  z-index: 888;
}
.f-fa {
  position: fixed;
  font-size: 30px;
  color: white;
  right: 20px;
  bottom: 0px;
}

.top {
  height: 45px;
  box-sizing: border-box;
}
.bit-top-bar {
  width: 100%;
  background-color: #e0e0e0;
  line-height: 40px;
}
.wf-wrap {
  max-width: 1920px;
  width: 1100px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  
}

.wf-td {
  width: 60%;
  margin: 0 auto;
  display: flex;
  text-align: center;

}

.wf-float-left,
.wf-float-right {
  font-size: 12px;
}
.right-block {
  width: 18.2%;
  margin-left: 40%;

  position: relative;

}

.icon {

  right: 0px;
}
.icon i {
  font-size: 20px;
  color: black;
  padding-right: 15px;
  -webkit-text-stroke: 1px #e0e0e0;
  color: black;
  font-size: 1.5em;
}
.icon .seach-input {
  width: 300px;
  height: 50px;
}

.cart {
  width: 250px;
  height: 80px;
  line-height: 70px;
  background-color: wheat;
  position: absolute;
  right: 15px;
  top: 40px;
  display: none;
}

@media only screen and (max-width: 1000px) {
  #top-bar {
    display: none;
  }
}
/* 头部导航 */
.logo-classic {
  width: 100%;
  height: 110px;
  background-color: white;

}
.logo-classic .wf-wrap {
  width: 1100px;
  height: 69px;

}
.logo-classic .navigation-holder {
  width: 100%;
  height: 41px;
  z-index: 10 !important;
  padding-top: 5px;
  background-color: black;
}
.logo-classic .wf-table {
  max-width: 1920px;
  width: 1100px;
  margin: 0 auto;
  position: relative;
  display: flex;
}
.bit-logo-bit {
  width: 60%;
  
}
.assistive-info {
  width: 40%;
  position: relative;
}
.assistive-info .wf-el {
  width: 300px;
  height: 40px;
  position: absolute;
  top: 8px;
  right: 25px;
}
.assistive-info .wf-el .el-input {
  border: 1px solid #1365f2;
  border-right: 0px;
}
.assistive-info .wf-el .el-button {
  width: 60px;
  height: 40px;
  background-color: #1365f2;
  border-radius: 0;
}
/* logo */
.bit-logo-bit img {
  width: 150px;
  height: 50px;
}

.main-nav {
  max-width: 1920px;
  width: 1100px;
  height: 30px;
  margin: 0 auto;
  clear: both;
}
/* .main-nav ul{
    float: left;
} */
.main-nav ul li {
  width: 80px;
  height: 100%;
  line-height: 36px;
  float: left;
  font-size: 13px;
  list-style: none;
  margin-right: 20px;
}
.r-link {
  color: white;
  text-decoration: none;
}
.main-nav ul li:hover {
  background-color: #3c7ff2;
}
.nav-menu {
  display: none;
  height: 30px;
  font-size: 13px;
}
.menu-item {
  border-bottom: 1px solid gray;
}
.menu-item :hover {
  background-color: black !important;
}
@media screen and (min-width: 1000px) and (max-width: 1200px) {
  .wf-wrap {
       width: 100%;
  }

  .logo-classic {
  width: 100%;

}
.logo-classic .wf-wrap {
  width: 100%;

}
.logo-classic .navigation-holder {
  width: 100%;
 
}
.logo-classic .wf-table {
  width: 100%;
  
}
 
}
@media only screen and (max-width: 1000px) {
  #assistive-info {
    display: none;
  }
  #branding {
    text-align: center !important;
    width: 300px;
    margin: 0 auto !important;
  }

  .bit-logo-bit {
    width: 100%;
    margin: 0 auto;
  }
 .logo-classic .wf-wrap {
  width: 100%;
  height: 69px;
  
 }

  #img {
    width: 155px;
    margin: 0 auto;
    margin-left: 30%;

  }
  #main-nav {
    display: none;
  }
  .nav-menu {
    display: block;
    z-index: 100 !important;
  }
  .logo-classic .navigation-holder {
    padding-top: 0px;
  }
}

@media only screen and (max-width: 800px) {
  #header {
    height: 200px;
  }
  #assistive-info {
    display: block;
    width: 100%;
  
  }
  #nav {
    margin-top: 80px;
  }
  #wf-el {
    width: 100%;
  }
  .bit-logo-bit {
    width: 100%;
    margin: 0 auto;
  }
    .logo-classic .wf-table {      
  width:80%;
  margin: 0 auto;
  text-align: center;

  }
  #img {
    width: 155px;
    margin: 0 auto;
    margin-left: 12%;
  }

  .assistive-info {
    position: absolute;
  }
  .el-input {
    position: relative;
    left: 0;
    top: 60px;
  }
}
</style>
