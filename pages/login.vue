<template>
  <div id="login">
    <!-- 顶部 -->
    <v-header
      :searchHotKeyList="searchHotKeyList"
      :tabNav="tabNav"
    />

    <!-- 登录 -->
    <div class="pd-login">
        <div class="container">
            <div class="pd-login-main">
                <div class="pd-loginformwrap">
                    <div class="pd-login-title">网易帐号登录</div>
                    <div class="pd-login-body">
                        <form id="login-form">
                            <div class="usernamewrap">
                                <div class="user-icon"></div>
                                <div class="user-input">
                                    <input type="text" class="username">
                                    <div class="auto-remember"></div>
                                </div>
                                <i class="pd-login-remove-icon"></i>
                            </div>
                            <div class="pwdwrap">
                                <div class="pwd-icon"></div>
                                <div class="pwd-input">
                                    <input type="password" class="passworld">
                                </div>
                                <i class="pd-login-remove-icon"></i>
                            </div>
                            <div class="c-loginerror">
                                <i class="error-icon"></i>
                                <div class="error-text">请输入账号</div>
                            </div>
                            <div class="submitwrap">
                                <button class="submit">登录</button>
                            </div>
                            <div class="unloginwrap">
                                <a href="" class="forgetpwd">忘记密码</a>
                                <a href="" class="reg">去注册</a>
                            </div>
                            <div class="ohtermethod">
                                <div class="title">
                                    <span class="text z10">其他登录方式</span>
                                    <hr class="line z5">
                                </div>
                                <div class="bd">
                                    <a href="" class="method wx">
                                        <i class="method-icon wx-icon"></i>
                                        <span class="text">微信</span>
                                    </a>
                                    <a href="" class="method qq">
                                        <i class="method-icon qq-icon"></i>
                                        <span class="text">QQ</span>
                                    </a>
                                    <a href="" class="method wb">
                                        <i class="method-icon wb-icon"></i>
                                        <span class="text">微博</span>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 右侧固定导航 -->
    <fixed-tool/>

    <!-- 底部导航 -->
    <v-footer :footerList="footerList"/>
  </div>
</template>

<script>
  import vHeader from '~components/header';
  import vFooter from '~components/footer';
  import fixedTool from '~components/fixedTool';
  import axios from '~plugins/axios';

  export default {
    // vuex
    components: {
      vHeader,
      vFooter,
      fixedTool
    },
    // nuxt
    head() {
      return {
        title: '登录',
        meta: [
          {hid: 'keywords', name: 'keywords', content: '登录页'},
          {hid: 'keywords', name: 'keywords', content: '登录描述'}
        ]
      }
    },
    async asyncData({ params, error }) {
      let data = {};
      try {
        data.commonData = await axios.get('/api/common.json');
      } catch (err) {
        console.log(err);
      }
      return {
        searchHotKeyList: data.commonData.data.result.SearchWordsList,
        tabNav: data.commonData.data.result.navList,
        footerList: data.commonData.data.result.footerList
      }
    }
  }
</script>

<style>
</style>
