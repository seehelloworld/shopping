<template>
    <div >
          <div class="msgbox-msg">
               <div class="msgbox-title">
              <h3>店长博客</h3>
              <p>News</p>
          </div>
              <ul style="margin-top:40px;list-style: none;">
                  <li class="msgbox-msg-li" v-for="i in article">
                      <img :src="i.imgcon" alt="">
                      <div class="msgbox-msg-li-text">
                           <router-link style="text-decoration: none;color: black; " :to="'/Articledetail?articleID='+i.articleID">
                           <p class="p-title" style="font-size:16px;">{{ i.title }} </p>
                        </router-link>
                          <span style="font-size:14px; color:gray; display:block;margin:15px auto;"> 发布日期：2017.05.23 {{ i.classify }} 	</span> 	
                          <p class="p" >{{ i.connect }}</p>                            
                      </div>
                  </li>
              </ul>
          </div>
       </div>         
      </div>
</template>
<script>
  import { getArticle } from '/api/articles';
    export default {
      data(){
        return{
           article:[]
        }
       
      },
      methods:{
        _getArticle(){
          getArticle().then(res => {
            this.article = res.data;
            // console.log(res.data);
          })
        }
      },
      created(){
        this._getArticle();
      }
    }
</script>
<style  scoped>

.p{position: relative; line-height: 20px; max-height: 40px;overflow: hidden; font-size: 15px; color: gray}
.p::after{content: "..."; position: absolute; bottom: 0; right: 0; padding-left: 40px;
background: -webkit-linear-gradient(left, transparent, #fff 55%);
background: -o-linear-gradient(right, transparent, #fff 55%);
background: -moz-linear-gradient(right, transparent, #fff 55%);
background: linear-gradient(to right, transparent, #fff 55%);
}


.msgbox-title h3 {
  font-size: 20px;
}
.msgbox-title p {
  font-size: 13px;
  color: gray;
}
.msgbox-msg{
  width:70% ;
  float: right;
 
}

.msgbox-msg-li {
  margin-top: 30px;
  padding-bottom: 40px;
  list-style: none;
  /* float: right; */
  border-bottom: 1px solid gray;
}
.msgbox-msg-li img {
  width: 25%;
  margin-right: 20px;
  float: left;
}
@media screen and (max-width: 1000px) {
  .msgbox-msg {
    width: 100%;
    margin: 0 auto;
    text-align: left;
  
  }
  .msgbox-aside {
    width: 100%;
    float: none;
  
  }
  .msgbox-msg-li img {
    width:30%;
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
