<template>
  <div class="login v2 background-media" style="background-image: url('http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8yMDNkNDc3MTM3MTM3NWQ3OWVkNWJkNzExMzBlYjVkZi5wbmc_p_p100_p_3D.png'); background-repeat:repeat; background-size:auto; background-attachment:scroll; background-position:0 0%;">
  <div class="header">
          <a href="/Home">返回首页</a>
  </div>
    <div class="wrapper">
      <div class="dialog dialog-shadow" style="display: block; margin-top: -362px;">
        <div style="padding:0px;margin:0px;clear:both;position:relative;margin-top:0;margin-bottom:0;padding-top:50px;padding-bottom:30px;padding-right:25px;padding-left:25px;background-repeat: no-repeat;">
             <a href="/Home">
                 <img src="http://static.qifeiye.com/caches/b3dbfcd6914a9e03c1c6f7b88476c481/aHR0cDovLzU5ZjA0MTc1OGJlZmEudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9mNTAzN2I1ZGQyMWQ4OTk4YjI3ZDI2OWYzNGZhMTgwZi0xNTN4MjIucG5n.png" alt="">
             </a>
         </div>
         <div>
             <strong>
                 <span style="font-size:20px">
                     <span style="color:#000000">
                         <span style="font-family:微软雅黑">登陆 | 注册</span>
                     </span>
                 </span>
             </strong>
         </div>
         <div style="position: relative;;;line-height:1.5em;;background-position:left top;background-repeat: no-repeat;;margin-top:0;margin-bottom:0;padding-top:5px;padding-bottom:8px;padding-right:25px;padding-left:25px;border-radius:0px;border-top:0px solid rgba(255,255,255,1);border-bottom:1px solid rgba(237,237,237,1);border-left:0px solid rgba(255,255,255,1);border-right:0px solid rgba(255,255,255,1);">
             <span style="font-size:14px">
                 <span style="color:#000000">
                     <span style="font-family:微软雅黑">
                         欢迎访问
                         <span style="font-family:arial">SPORTING GOODS</span>
                     </span>
                 </span>
             </span>
         </div>
        <div class="title" v-if="loginPage">
          <h4 style="font-weight: 700;color: #666;height:60px;font-size:20px">使用 SPORTING ID 登录官网</h4></div>
        <div v-if="loginPage" class="content">
          <ul class="common-form">
            <li class="username border-1p">
              <div class="input">
                <input type="text" v-model="ruleForm.userName" placeholder="账号">
              </div>
            </li>
            <li>
              <div class="input">
                <input type="password" v-model="ruleForm.userPwd" @keyup.enter="login" placeholder="密码">
              </div>
            </li>
            <li style="text-align: left" class="pr">
              <span class="pa" style="top: 0;left: 0;color: #d44d44">{{ruleForm.errMsg}}</span>
              <a href="javascript:;" style="padding: 0 5px;text-decoration: none;font-size:15px;color:#5982EF" @click="loginPage=false">注册 SPORTING ID</a>
            </li>
          </ul>
          <!--登陆-->
          <div>
            <y-button text="登陆"
                      :classStyle="ruleForm.userPwd&& ruleForm.userName?'main-btn':'disabled-btn'"
                      @btnClick="login"
                      style="margin: 0;width: 100%;height: 48px;font-size: 18px;line-height: 48px"></y-button>
          </div>
        </div>
        <div class="registered" v-else>
          <h4>注册 SPORTING ID</h4>
          <div class="content" style="margin-top: 20px;">
            <ul class="common-form">
              <li class="username border-1p">
                <div class="input">
                  <input type="text"
                         v-model="registered.userName" placeholder="账号"
                         @keyup="registered.userName=registered.userName.replace(/[^\w\.\/]/ig,'')">
                </div>
              </li>
              <li>
                <div class="input">
                  <input type="password"
                         v-model="registered.userPwd"
                         placeholder="密码">
                </div>
              </li>
              <li>
                <div class="input">
                  <input type="password"
                         v-model="registered.userPwd2"
                         placeholder="重复密码">
                </div>
              </li>
            </ul>
            <div>
              <y-button
                :classStyle="registered.userPwd&&registered.userPwd2&&registered.userName?'main-btn':'disabled-btn'"
                text="注册"
                style="margin: 0;width: 100%;height: 48px;font-size: 18px;line-height: 48px"
                @btnClick="regist"
              >
              </y-button>
            </div>
              <ul class="common-form pr">
                <li class="pa" style="left: 0;top: 0;margin: 0;color: #d44d44">{{registered.errMsg}}</li>
                <li style="text-align: center;line-height: 48px;margin-bottom: 0;">
                  <span>如果您已拥有 SPORTING ID，则可在此</span>
                  <a href="javascript:;"
                    style="margin: 0 5px ;text-decoration: none;font-size:15px;color:#5982EF"
                    @click="loginPage=true">登陆</a>
                </li>
              </ul>
          </div>
        </div>
        <div style="float: left; text-align:left; margin-right:40px;margin-left:40px;margin-bottom:30px ">
                <strong>
                    <span style="font-size:15px;color:#000000;font-family:微软雅黑;">用户注册/登陆说明：</span>
                </strong>
                <br/>
                <span style="dispaly:inline-block;line-height:2;font-size:12.5px;font-family:微软雅黑;">
                    <span style="color:#000000">
                        1.演示用户名：
                        <span style="color:#1365f2"> admin </span>;
                    </span>
                    <span style="color:#000000">
                        密码：
                        <span style="color:#1365f2"> admin </span>
                    </span><br/>
                    
                    <span style="color:#000000">
                        2. 实际使用之前，需配置用户管理组件中的相关邮件。详情请参考教程：
                        <template>
                          <el-button style="color:#1365f2" type="text" @click="open">《用户管理中相关邮件的配置》</el-button>
                        </template>
                    </span>
                    <br/>
                    <span style="color:#000000">
                        3. 新用户注册后的审核方式有三种：自动核准、邮件激活、需要管理员批准（即人工审核），详情可参考教程：
                        <template>
                          <el-button style="color:#1365f2" type="text" @click="open1">《用户管理中相关邮件的配置》</el-button>
                        </template>
                    </span>
                </span>
              </div>
      </div>
    </div>
  </div>
</template>
<script>
  import YFooter from '/common/footer.vue'
  import YButton from '/components/YButton'
  import { userLogin, register } from '/api/index.js'
  import { addCart1 } from '/api/goods.js'
  import { getStore, removeStore } from '/utils/storage.js'
  export default {
    data () {
      return {
        cart: [],
        loginPage: true,
        ruleForm: {
          userName: '',
          userPwd: '',
          errMsg: ''
        },
        registered: {
          userName: '',
          userPwd: '',
          userPwd2: '',
          errMsg: ''
        }
      }
    },
    computed: {
      count () {
        return this.$store.state.login
      }
    },
    methods: {
      // 登陆时将本地的添加到用户购物车
      login_addCart () {
        let cartArr = []
        let locaCart = JSON.parse(getStore('buyCart'))
        if (locaCart && locaCart.length) {
          locaCart.forEach(item => {
            cartArr.push({
              'productId': item.productId,
              'productNum': item.productNum
            })
          })
        }
        this.cart = cartArr
      },
      login () {
        if (!this.ruleForm.userName || !this.ruleForm.userPwd) {
          this.ruleForm.errMsg = '账号或者密码不能为空!'
          return false
        }
        var params = {userName: this.ruleForm.userName, userPwd: this.ruleForm.userPwd}
        userLogin(params).then(res => {
          if (res.status === '0') {
            if (this.cart.length) {
              addCart1({productMsg: this.cart}).then(res => {
                if (res.status === '1') {
                  removeStore('buyCart')
                }
              }).then(this.$router.go(-1))
            } else {
              this.$router.go(-1)
            }
          } else {
            this.ruleForm.errMsg = res.msg
            return false
          }
        })
      },
      regist () {
        let userName = this.registered.userName
        let userPwd = this.registered.userPwd
        let userPwd2 = this.registered.userPwd2
        if (!userName || !userPwd || !userPwd2) {
          this.registered.errMsg = '账号密码不能为空'
          return false
        }
        if (userPwd2 !== userPwd) {
          this.registered.errMsg = '两次输入的密码不相同'
          return false
        }
        register({userName, userPwd}).then(res => {
          this.registered.errMsg = res.msg
          if (res.status === '0') {
            setTimeout(() => {
              this.ruleForm.errMsg = ''
              this.registered.errMsg = ''
              this.loginPage = true
            }, 500)
          } else {
            return false
          }
        })
      },
      open() {
        this.$alert('1. 打开【设置】->【网站参数】->【邮件设置】，配置邮件，具体设置可参考“如何在起飞页配置发送邮箱以及接收邮箱”这篇教程中的第一条；2. 编辑模式下，打开【后台】->【用户管理】->【基本配置】->【邮件配置】；3. 【后台】->【用户管理】->【基本配置】->【邮件配置】中发送邮件设置；4. 邮件配置：默认设置为“是”，如果不想发送邮件设置为“否”即可；5. 邮件模板和自定义项：这些项的用途都是让管理员可以自定义邮件的主题和内容。', '用户管理中相关邮件的配置', {
          confirmButtonText: '已阅读',
        });
      },
      open1() {
        this.$alert('一、编辑模式下，打开【后台】->【用户管理】->【基本设置】->【一般】；二、在【一般】中，设置"新用户认证"；三、点击“新用户认证”下拉框，有三种认证方式：1. 自动核准：即用户注册后，系统会自动审核（默认都会审核通过）。2. 需要管理员批准：用户注册后，需要网站管理员在后台审批之后才能登录。3. 需要邮件激活：用户注册后，系统会发送一封激活邮件到用户填写的邮箱中，用户需要打开邮件，激活账户后才能登录。4. 邮箱配置完成之后，新用户注册后需要到注册邮箱激活账户后才能登录。', '用户管理中相关邮件的配置', {
          confirmButtonText: '已阅读',
        });
      }
    },
    mounted () {
      this.login_addCart()
    },
    components: {
      YFooter,
      YButton
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  * {
    box-sizing: content-box;
  }

  .login {
    overflow-x: hidden;
    overflow-y: hidden;
    .input {
      
      height: 50px;
      display: flex;
      align-items: center;
      input {
        font-size: 16px;
        width: 100%;
        height: 100%;
        padding: 10px 15px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 6px;
      }
    }
    .wrapper {
      background: url(/static/images/bg_9b9dcb65ff.png) repeat;
      background-size: 100px;
      min-height: 800px;
      min-width: 630px;
    }
  }

  .background-media {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
}

.header {
  width: 100%;
  height: 45px;
  background-color: black;
  position: relative;
  z-index: 4;

  /* margin: 0 auto; */
}
.header a {
  position: absolute;
  top: 13px;
  right: 70px;
  color: white;
  font-size: 14px;
  text-decoration: none;
}

  .v2 .dialog {
    width: 450px;
    border: 1px solid #dadada;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    margin-left: -225px;
    position: absolute;
    .title {
      background: linear-gradient(#fff, #f5f5f5);
      // height: auto;
      overflow: visible;
      box-shadow: 0 1px 4px rgba(0, 0, 0, .08);
      position: relative;
      // background-image: url(/src/assets/img/logo.png);
      background-size: 160px;
      background-position: top center;
      // background-repeat: no-repeat;
      // height: 92px;
      // margin: 10px 0 20px;
      // padding: 30px 0 0;
      box-shadow: none;
      
      h4 {
        padding: 0;
        text-align: center;
        color: #666;
        border-bottom: 1px solid #dcdcdc;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        
        // position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        margin: 0;
        padding: 0;
        border-bottom: 0;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        line-height: 60px;
        border-bottom: 1px solid #dcdcdc;
        height: 60ox;
        
        font-weight: 400;
      }
    }
    .content {
      padding: 0 40px 22px;
      height: auto;
      margin-top: 20px;
      .common-form {
        li {
          clear: both;
          margin-bottom: 15px;
          position: relative;
          list-style: none;
        }
      }
    }
  }

  .dialog-shadow, .v2 .bbs .dialog-shadow, .v2 .dialog-shadow {
    -webkit-box-shadow: 0 9px 30px -6px rgba(0, 0, 0, .2), 0 18px 20px -10px rgba(0, 0, 0, .04), 0 18px 20px -10px rgba(0, 0, 0, .04), 0 10px 20px -10px rgba(0, 0, 0, .04);
    -moz-box-shadow: 0 9px 30px -6px rgba(0, 0, 0, .2), 0 18px 20px -10px rgba(0, 0, 0, .04), 0 18px 20px -10px rgba(0, 0, 0, .04), 0 10px 20px -10px rgba(0, 0, 0, .04);
    box-shadow: 0 9px 30px -6px rgba(0, 0, 0, .2), 0 18px 20px -10px rgba(0, 0, 0, .04), 0 18px 20px -10px rgba(0, 0, 0, .04), 0 10px 20px -10px rgba(0, 0, 0, .04);
  }

  @media screen and (min-width: 737px), screen and (-webkit-max-device-pixel-ratio: 1.9) and (max-width: 736px) and (min-device-width: 737px) {
    .wrapper {
      background: url(/static/images/con-bg_04f25dbf8e.jpg) repeat-x;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .dialog {
      background: url(/static/images/dialog-gray-bg.png) #fff bottom repeat-x;
      border-radius: 12px;
      display: none;
      margin: -163px 0 0 -218px;
      width: 436px;
      position: fixed;
      left: 50%;
      top: 50%;
    }
    .dialog .title h4 {
      border-bottom: #d1d1d1 solid 1px;
      box-shadow: 0 2px 6px #d1d1d1;
      color: #666;
      font-size: 20px;
      height: 61px;
      line-height: 61px;
      padding: 0 0 0 35px;
    }
    .common-form li {
      clear: both;
      margin-bottom: 15px;
      position: relative;
    }
  }

  .registered {
    h4 {
      padding: 0;
      text-align: center;
      color: #666;
      border-bottom: 1px solid #dcdcdc;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      font-weight: 700;
      font-size: 20px;
      height: 60px;
      line-height: 60px;
    }
  }

</style>
