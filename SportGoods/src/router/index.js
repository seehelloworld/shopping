import Vue from 'vue'
import Router from 'vue-router'
const Index = resolve => require(['/page/index'], resolve)
const GoodS = resolve => require(['/page/Goods/goods'], resolve)
const Home = resolve => require(['/page/Home/home'], resolve)
const goodsDetails = resolve => require(['/page/Goods/goodsDetails'], resolve)

const MsgBox = resolve => require(['/page/Other/masgbox/msgbox'], resolve)
const allmsg = resolve => require(['/page/Other/masgbox/allmsg'], resolve)
const storemsg = resolve => require(['/page/Other/masgbox/storemsg'], resolve)
const managerblog = resolve => require(['/page/Other/masgbox/managerblog'], resolve)
const Articledetail = resolve => require(['/page/Other/masgbox/Articledetail'], resolve)

const PaymentHome = resolve => require(['/page/Other/paymenthome'], resolve)
const About = resolve => require(['/page/Other/about'], resolve)
const Store = resolve => require(['/page/Other/store'], resolve)
const Login = resolve => require(['/page/login/login'], resolve)
const Cart = resolve => require(['/page/Cart/cart'], resolve)
const user = resolve => require(['/page/User/user'], resolve)
const orderList = resolve => require(['/page/User/children/order'], resolve)
const information = resolve => require(['/page/User/children/information'], resolve)
const addressList = resolve => require(['/page/User/children/addressList'], resolve)
const coupon = resolve => require(['/page/User/children/coupon'], resolve)
const aihuishou = resolve => require(['/page/User/children/aihuishou'], resolve)
const support = resolve => require(['/page/User/children/support'], resolve)
const order = resolve => require(['/page/Order/order'], resolve)
const payment = resolve => require(['/page/Order/payment'], resolve)
const paysuccess = resolve => require(['/page/Order/paysuccess'], resolve)
const checkout = resolve => require(['/page/Checkout/checkout'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/home',
      children: [
        { path: 'goods', component: GoodS },
        { path: 'home', component: Home },
        { path: 'goodsDetails', component: goodsDetails },
        { path: 'paymenthome', component: PaymentHome },
        { path: 'about', component: About },
        { path: 'store', component: Store },
      ]
    },
    {
      path: '/msgbox',
      component: MsgBox ,
      redirect:'/msgbox/allmsg',
      children: [
       { path: 'allmsg',name: 'allmsg',component:allmsg},
       { path: 'storemsg',name: 'storemsg',component:storemsg},
       { path: 'managerblog',name: 'managerblog',component:managerblog},
       
      ]
    },
    { path: '/Articledetail',component: Articledetail},
    { path: '/login', component: Login },
    { path: '/cart', component: Cart },
    {
      path: '/user',
      name: 'user',
      component: user,
      redirect: '/user/orderList',
      children: [
        { path: 'orderList', name: '订单列表', component: orderList },
        { path: 'information', name: '账户资料', component: information },
        { path: 'addressList', name: '收货地址', component: addressList },
        { path: 'coupon', name: '我的优惠', component: coupon },
        { path: 'support', name: '售后服务', component: support },
        { path: 'aihuishou', name: '以旧换新', component: aihuishou }
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      children: [
        { path: 'paysuccess', name: 'paysuccess', component: paysuccess },
        { path: 'payment', name: 'payment', component: payment }
      ]
    },
    { path: '/checkout', name: 'checkout', component: checkout },
    { path: '**', redirect: '/home' }
  ]
})
