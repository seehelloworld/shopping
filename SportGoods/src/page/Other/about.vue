<template>
    <div class="pay-content">
        <section class="pay-msg">
            <p style="font-size: 23px; color: black;">品牌介绍</p>
            <p style="font-size: 12px; color: gray;  margin-bottom:50px;">Brand Introduction</p>         
            <div>
                <!-- <p class="p">很多人因为外形的原因都认为阿迪达斯三叶草的标志代表的是一朵盛开的花，分别代表着奥运精神（同时也是全世界运动员一直以来追求的目标）中的“更高，更快，更强”。但是实际上，阿迪达斯三叶草标志原本代表的是将三个大陆板块连接在一起——其形状如同地球立体三维的平面展开，与世界地图非常相似，象征着延展到全世界的运动力量。同时，这个标志也象征着阿迪达斯品牌的创始人阿迪·达斯勒在运动鞋上所缝的三条纹路。</p> -->
                <img src="/static/images/adidaslogo.jpg" alt="">
                <p style="line-height:25px;font-size:14.5px;text-indent: 2em"> 阿迪达斯这三种标志并不是从品牌初创时期就一直存在的，可以说，阿迪达斯标志的不断演变的历史也是阿迪达斯这一世界知名体育用品有限公司不断前进的一种佐证。
                阿迪达斯三条纹标志是最早被启用的，在阿迪达斯品牌成立第二年，也就是1949年就开始应用到阿迪达斯旗下的各类商品中了。其代表了不断前进、不断超越的体育精神。
                到了1972年，阿迪达斯用三叶草标志逐步代替早期的三条纹标志，以极具象征性的更为美观的三叶草来寓意延展到全世界的体育力量，也同时寄予自身品牌走向世界的愿景。

                在运用三叶草标志十来年之后，也就是二十世纪八十年代末九十年代初期，阿迪达斯为了与耐克公司竞争，也为了提升本身的运动时尚感，再次将其品牌             最早的三条纹重新改造应用到产品中，作为阿迪达斯最为大众所熟知（同时也是价格最为大众化的）运动表现系列（adidas performance）。</p>
                <p style="line-height:25px;font-size:14.5px;text-indent: 2em">
                     在世界足坛上，所受的支持度更是没有任何一家运动用品厂商可以比拟的。尤其当adidas发明了第一双钉鞋后，更是受到顶尖足球员的支持与喜爱，由1974年于西德所举办的世界杯足球赛中，80%以上的出场球员都选用了adidas的足球鞋便可得知当时adidas在世界足坛的威力。而在1998年的法国世界杯足球赛中，东道主法国队更是凭借adidas足球鞋优越的性能，发挥了超水平的实力，击败群雄勇夺冠军，法国足球明星齐达内更荣获1998年世界足球先生头衔，再次证明adidas「胜利的三条线」的权威保证一直延续至今。

                    在其他体育运动的表现

                    adidas在篮球、板球、橄榄球、棒球、手球、田径、网球、棒球、拳击、游泳以及最新潮的极限运动等运动项目亦占有一席之地。许多知名的顶尖运动选                  手都为adidas的品质折服；在职业网坛中则有已退休的瑞典名将艾柏格、曾经傲视群雄独霸后座的德国“玉罗煞”格拉芙，以及崛起的退役英国名将亨曼与                 俄罗斯美少女Anna Kournikova以及已退役天后辛吉斯，adidas所赞助的现役球员有穆雷、特松加、西蒙、萨芬，女子则有伊万诺维奇及沃兹尼亚奇；在               棒球场上有夺得1998年美国职棒总冠军的纽约洋基队、拳击场上则有本世纪最伟大的重量级拳击手阿里等人。
                </p>        
            </div>
            <div>
              <!-- <img src="/static/images/adidaslogo (2).jpg" alt=""> -->
              <img style="width:962px;" src="/static/images/adidasfootball.jpg" alt="">
            </div>
        </section>        
    </div>
</template>

<script>
import Header from "/common/header.vue";
import Footer from "/common/footer.vue";
export default {
  components: {
    "y-header": Header,
    "y-footer": Footer
  }
};
</script>
<style scoped>
.pay-content {
  width: 100%;
}
.pay-msg {
  width: 50%;
  margin: 80px auto;
  text-align: left;
  padding-bottom: 40px;
  border-bottom: 1px solid gray;
  /* border: 1px solid salmon; */
}
.pay-msg div {
  margin-top: 40px;
  font-size: 13px;
}
.pay-msg div p {
  margin-top: 15px;
  color: gray;
}
@media screen and (max-width: 1000px) {
  .pay-msg {
    width: 80%;
  }
  .pay-msg img{
  width:100% ;
  margin: 0 auto;
}
}
</style>
