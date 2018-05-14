<template>
    <div>
      <y-header></y-header>
            <section class="article-box">
                <div class="article-box-title">
                    <router-link class="link" to="/home">首页</router-link>                
                     <span>/</span>
                     <router-link class="link" to="/msgbox/allmsg">全部资讯</router-link>                
                    <span>/</span>
                    <span>{{articlede.title}}</span>                      
                </div>
                <div class="article-box-content clearfix">
                    <div class="article-box-msg">
                        <h1 style="margin-top:20px;">{{articlede.title}}</h1>
                        <div class="article-msg-share">
                            <span>发布日期：2017-05-23</span>
                            <span>share</span>
                        </div>                      
                        <p style="line-height:30px;text-indent: 2em">
                            {{articlede.connect}}
                        </p>
                    </div>
                     <aside class="article-box-aside">
                        <p>阅读更多文章</p>
                        <div  class="article-aside-msg">
                            <span style="display:block;font-size:16px; color:gray">{{articlede.title}}</span>
                            <span style="display:block;font-size:12px; color:gray">发布日期：2017-05-23</span>
                        </div>
                        <!-- <div class="article-aside-msg">
                            <span style="display:block;font-size:16px; color:gray">滑雪者需要掌握的要领</span>
                            <span style="display:block;font-size:12px; color:gray">发布日期：2017-05-23</span>
                        </div>
                        <div class="article-aside-msg">
                            <span style="display:block;font-size:16px; color:gray">滑雪者需要掌握的要领</span>
                            <span style="display:block;font-size:12px; color:gray">发布日期：2017-05-23</span>
                        </div>
                        <div class="article-aside-msg">
                            <span style="display:block;font-size:16px; color:gray">滑雪者需要掌握的要领</span>
                            <span style="display:block;font-size:12px; color:gray">发布日期：2017-05-23</span>
                        </div>
                        <div class="article-aside-msg">
                            <span style="display:block;font-size:16px; color:gray">滑雪者需要掌握的要领</span>
                            <span style="display:block;font-size:12px; color:gray">发布日期：2017-05-23</span>
                        </div> -->
                    </aside>

                </div>
            </section>
            <y-footer></y-footer>
    </div>
</template>

<script>
import Header from "/common/header";
import Footer from "/common/footer";
import { getArticleDet } from "/api/articles.js";
export default {
    // props:{
    //     msg1:{type: [Object, Array] }
    // },
    data(){
        return{
          articlede: [],
        };
    },
    methods:{
      _getArticleDet (articleID) {
        getArticleDet({params: {articleID}}).then(res => {
          var result = res.result
          this.articlede = result
          console.log(this.articlede);
        })
      },
    },
    created(){
        this._getArticleDet(this.$route.query.articleID)
        // console.log(this.$route)
    },
//   props: {
//     arcontent: { type: [Object, Array] }
//   },
  name: "Index",
  components: {
    "y-header": Header,
    "y-footer": Footer
  }
};
</script>

<style scoped>
.article-box {
  width: 100%;
  background-color: #ededed;
}
.article-box-title {
  width: 1100px;
  height: 30px;
  line-height: 30px;
  padding-left: 30px;
  margin: 10px auto;
  text-align: left;
  font-size: 14px;
  color: gray;
  background-color: white;
  /* border: 1px solid red; */
}
.article-box-title .link {
  text-decoration: none;
  font-size: 14px;
  color: gray;
}
.article-box-content {
  width: 1100px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 15px;
  background-color: black;
}
.article-box-msg {
  width: 70%;
  margin-right: 10px;
  /* border: 1px solid red; */
  text-align: left;
  float: left;
}
.article-box-msg p {
  margin: 30px auto;
  padding-left: 10px;
  padding-right: 15px;
  font-size: 15px;
  color: #666666;
}
.article-msg-share {
  font-size: 14px;
  color: gray;
  height: 30px;
  line-height: 30px;
  margin-top: 20px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
.article-box-aside {
  margin-top: 41px;
  width: 25%;
  margin-right: 10px;
  padding: 30px 10px;
  float: right;
}
.article-box-aside p {
  width: 250px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 2px solid gray;
}
.article-aside-msg {
  text-align: left;
  margin: 20px auto;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
}
@media screen and (max-width: 1000px) {
  .article-box-content {
    width: 750px;
    margin: 0 auto;
    /* padding-left:30px; */
    /* padding-right:30px; */
    background-color: white;
  }
  .article-box-msg {
    width: 100%;
    margin: 0 auto;
    margin-right: 10px;
    /* border: 1px solid red; */
    text-align: left;
    float: none;
  }
  .article-box-aside {
    width: 750px;
    margin: 0 auto;
    margin-right: 10px;
    /* padding:30px 10px; */
    padding-left: 10px;
    padding-right: 15px;
    float: none;
  }
  .article-box-aside p {
    width: 90%;
    height: 50px;
    margin: 0 auto;
    line-height: 50px;
    text-align: center;
    border: 2px solid gray;
  }
}
@media screen and (max-width: 750px) {
  .article-box-content {
    width: 100%;
    margin: 0 auto;
  }
  .article-box-msg {
    width: 100%;
  }
  .article-box-aside {
    width: 100%;
    float: none;
  }
}
</style>
