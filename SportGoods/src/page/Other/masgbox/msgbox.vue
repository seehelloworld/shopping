<template>
<div>
  <y-header></y-header>
  <div class="msgbox clearfix">
      <div class="msgbox-content clearfix">
          <div class="msgbox-aside clearfix">
            <router-link class="router-link" to="/msgbox/allmsg">
              <div class="msgbox-aside-cont">
                <span>▶ 全部资讯</span>                
              </div>
            </router-link> 
            <router-link  class="router-link" to="/msgbox/storemsg">
               <div class="msgbox-aside-cont">
                  <span>▶ 店铺动态</span>                  
              </div>
            </router-link>
            <router-link class="router-link" to="/msgbox/managerblog">
               <div class="msgbox-aside-cont">
                 <span>▶ 店长博客</span> 
              </div>
            </router-link>           
             </div> 
             <div>
                <router-view></router-view>
             </div>
          </div>  
     </div>
     <y-footer></y-footer>
</div>

  
</template>


<script>
import Header from '/common/header'
import Footer from '/common/footer'
export default {
  components: {
    'y-header':Header,
    'y-footer':Footer
  }
};
</script>
<style scoped>
.router-link {
  color: black;
  text-decoration: none;
  font-size: 15px;
  line-height: 50px;
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
.msgbox {
  width: 100%;
  margin-top: 50px;
}
.msgbox-content {
  width: 1100px;
  margin: 0 auto;
  text-align: left;
  /* border: 1px solid firebrick; */
}
.msgbox-aside {
  /* min-height: 1800px; */
  /* height:1100px; */
  width: 300px;
  float: left;
  /* border: 1px solid darkblue; */
}
.msgbox-aside-cont {
  width: 60%;
  height: 50px;
  padding-left: 30px;
  background-color: #f6f6f6;
}
.msgbox-aside-cont span {
  display: block;
  margin-left: 45px;
  font-size: 15px;
  line-height: 50px;
}
.msgbox-aside-cont:hover {
  background-color: #3C7FF2;
  color: white;
}

.msgbox-aside-cont:nth-of-type(2) {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}
.msgbox-msg {
  /* width: calc(100%-60%); */
  /* border: 1px solid gold; */
}
.msgbox-title h3 {
  font-size: 20px;
}
.msgbox-title p {
  font-size: 13px;
  color: gray;
}

.msgbox-msg-li {
  padding-bottom: 40px;
  list-style: none;
  border-bottom: 1px solid gray;
}
.msgbox-msg-li img {
  width: 15%;
  margin-right: 20px;
  float: left;
}
@media screen and (max-width: 1000px) {
  .msgbox-content {
    width: 80%;
    margin: 0 auto;
    text-align: left;
    /* border: 1px solid firebrick; */
  }
  .msgbox-aside {
    width: 100%;
    float: none;
    /* border: 1px solid darkblue; */
  }
  .msgbox-msg-li img {
    width: 25%;
    margin-right: 20px;
    float: left;
  }
}
@media screen and (max-width: 650px){
.msgbox-msg-li-text {
    width: 100%;
    float: right;
  
    /* border: 1px solid darkblue; */
  }
  .p-title{
    width: 100%;
      font-size: 80% !important;
  }
  .p{
    margin-bottom: 40px;
  }
  .msgbox-msg-li{
    margin-bottom: 20px;
    border: none;

  }
  .msgbox-msg-li img {
    width:40%;
    /* margin-top: 20px; */
    margin-bottom: 20px;
    margin-right: 20px;
    float: left;
  }
}
</style>