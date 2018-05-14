<template>
  <div>  
           <!-- 底部top  -->
          <div class="f-top">
            <div class="f-to">
                <section class="f-img"><img src="../assets/img/adidas.png" alt=""></section>
                <section class="f-img"><img src="../assets/img/conver.png" alt=""></section>
                <section class="f-img"><img src="../assets/img/kappa.png" alt=""></section>
                <section class="f-img"><img src="../assets/img/nb.png" alt=""></section>
                <section class="f-img"><img src="../assets/img/nike.png" alt=""></section>
                <section class="f-img"><img src="../assets/img/puma.png" alt=""></section>
                <section class="f-img"><img src="../assets/img/spal.png" alt=""></section>
                <section class="f-img"><img src="../assets/img/zuno.png" alt=""></section>
             </div>
         </div>
        <!-- 底部top结束 -->
        <div class="footer">
            <div class="foot">
                 <div class="foot-top">
                     <section class="foot-sec"> 
                        <img src="../assets/img/f-car.png" alt="">
                         <span class="f-span">
                             <h4>满1000元全国包邮</h4>
                             <p>全场订单满1000元全国包邮</p>
                         </span>
                     </section>
                     <section  class="foot-sec clearfix">
                           <img src="../assets/img/f-gift.png" alt="">
                           <span class="f-span">
                             <h4>下单送精美礼品</h4>
                             <p>本店购买任意商品送精美礼品</p>
                         </span></section>
                     <section  class="foot-sec"> 
                           <img src="../assets/img/f-man.png" alt="">
                           <span class="f-span">
                             <h4>贴心的售后服务</h4>
                             <p>7x24小时售后随时为您服务</p>
                         </span>
                     </section>
                     <section  class="foot-sec">
                           <img src="../assets/img/f-label.png" alt="">
                        <span class="f-span">
                             <h4>店铺优惠券</h4>
                             <p>每日整点可领取限量优惠劵</p>
                         </span> 
                         </section>

                   
                </div> 
                <div class="foot-botm">
                    <section class="foot-section">
                        <h4>关于产品</h4>
                        <span>本店商品非质量问题谢绝退换，如有<br>质量问题，本店承担运费调换</span>
                    </section>
                     <section class="foot-section">
                        <h4>售后服务</h4>
                        <span>消費者保障服务<br>
                                七天无理由退款<br>
                                    假一赔三</span>
                    </section>
                     <section class="foot-section">
                        <h4>退换货政策</h4>
                        <span>本店商品非质量问题谢绝退换，如有<br>质量问题，本店承担运费调换</span>
                    </section>
                     <section class="foot-section">
                        <h4>售后服务</h4>
                        <span>本店商品非质量问题谢绝退换，如有<br>质量问题，本店承担运费调换</span>
                    </section>
                     <section class="foot-section">
                        <h4>支付方式</h4>
                        <span>
                              <img style=" width:49px;height:32px;"src="../assets/img/f-yl.png" alt="">
                            <img style="width: 34px;height: 34px;"  src="../assets/img/f-ww.png" alt="">
                            <img style=" width: 34px;height:34px;"src="../assets/img/f-zfb.png" alt="">
                          
                           
                        </span>
                    </section>
                     <section class="foot-section">
                        <h4>关于商城</h4>
                        <span>本店商品非质量问题谢绝退换，如有<br>质量问题，本店承担运费调换</span>
                    </section>
                     <section class="foot-section">
                        <h4>关于产品</h4>
                        <span>本店商品非质量问题谢绝退换，如有<br>质量问题，本店承担运费调换</span>
                    </section>
                     <section class="foot-section">
                        <h1 style=" font-size: 30px; color: white;  margin-bottom: 20px;">sporting</h1>
                        <span><img src="../assets/img/f-demo.jpg" alt=""></span>
                    </section>
                </div>                           
                             
            </div>
            <div class="foot-ul clearfix">
                    <span style="color: white;  margin-right: 5px;"><i class="fa fa-qq" aria-hidden="true"></i></span>
                    <span style="color: white;  margin-right: 5px;"><i class="fa fa-weibo" aria-hidden="true"></i></span>
                    <span style="color: white;  margin-right: 5px;"><i class="fa fa-tencent-weibo" aria-hidden="true"></i></span>
                    <span style="color: white;  margin-right: 5px;"><i class="fa fa-weixin" aria-hidden="true"></i></span>
                    <span style="color: white;  margin-right: 5px;"><i class="fa fa-facebook-official" aria-hidden="true"></i></span>
                    <span style="color: white;  margin-right: 5px;"><i class="fa fa-instagram" aria-hidden="true"></i></span>
                                      
                </div>
                <div style="color: white;font-size:12px; ">Copyright © 2010-2018户外运动商品专卖 All rights reserved</div> 
            
        </div>
      

     
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

// .f-footer{
//     max-width:1920px;
//     width: 80%;  margin: 0 auto;
//     border: 1px solid blue;
// }
//   ================== <!-- 底部top  -->==========
.f-top {
  width: 100%;
  background-color: #393939;
  display: flex;
  align-items: center;
  // border: 1px solid red;
  line-height: 100px;
 
 
}
.fa{
  font-size: 13px;
  margin-right: 10px;
  }

.clearfix::after {
  content: "";

  display: block;

  clear: both;

  height: 0px;

  overflow: hidden;
}

.clearfix {
  -ms-zoom: 1;
}
.f-to {
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  
  //  border: 1px solid blue;
}
.f-img {
  width: 10%;
  margin: 0 auto;
  // border: 1px solid red;
}
.f-img img {
  flex-shrink: 0.5;
  width: 60%;
  height: 60%;
}

.footer {
  width: 100%;
  background-color: #191919;
}
.foot {
  width: 80%;
  margin: 0 auto;
//   border: 1px solid red;
}
.foot-top {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   border: 1px solid blue;
}

.foot-top .foot-sec {
//   border: 1px solid gold;
  margin-left: 10px;
  margin-right: 10px;
}
.foot-top .foot-sec .f-span {
  float: right;
  text-align: left;
  color: #bfbfbf;
  margin-left: 10px;
}
.foot-top .foot-sec .f-span p {
  font-size: 13px;
}
.foot-botm {
  height: 422px;
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  //   line-height: 100px;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
}
.foot-botm .foot-section {
  width: 22%;
  height: 150px;
  color: #bfbfbf;
  text-align: left;
//   border: 1px solid forestgreen;
}
.foot-botm .foot-section h4 {
  margin-bottom: 20px;
}
.foot-botm .foot-section span {
  font-size: 12px;
}
.foor-img {
  width: 30px;
  height: 40px;
}
.foot-ul li{
    float: left; list-style: none;
}

@media screen and (max-width: 750px) {
  .f-to {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  .f-img {
    width: 50%;
    margin: 0 auto;
    // border: 1px solid red;
  }
}

@media screen and (max-width: 1140px) {
  .foot {
    width: 100%;
    margin: 0 auto;
    
  }
  .foot{
      display: none;
  }
}
</style>
