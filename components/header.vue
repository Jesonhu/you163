<template>
  <header class="header-hook">
    <!-- 顶部导航 -->
    <div class="site-nav">
      <div class="container clearfix">
        <div class="nav-left">
          <router-link to="/">好的生活，没那么贵</router-link>
        </div>
        <div class="nav-right">
          <router-link to="/login" class="login">登录</router-link>
          <router-link to="/reg" class="reg">注册</router-link>
          <router-link to="/reg" class="left-split">严选态度</router-link>
          <router-link to="/reg" class="left-split">企业采购</router-link>
          <div class="left-split has-em service-hook">
            客户服务
            <em class="bg-arrow arrow"></em>
            <div class="xs-dropdown z100">
              <nav class="dropdownmenu">
                <router-link to="" class="item">帮助中心</router-link>
                <router-link to="" class="item">在线客服</router-link>
                <router-link to="" class="item">电话客服</router-link>
                <router-link to="" class="item">商务合作</router-link>
              </nav>
            </div>
          </div>
          <div class="left-split download has-em phone-hook">
            <em class="bg-phone phone"></em>
            下载APP
            <div class="xs-dropdown z100">
              <div class="dropdownmenu">
                <img src="/img/appdown.png" class="img" alt="" width="117" height="117">
                <p class="desc">下载领1000元新人礼包</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- logo tab区域 -->
    <div class="hd-tabwrap hd-tabwrap-hook">
      <div class="container">
        <div class="clearfix logowrap">
          <router-link to="" class="hd-logo"></router-link>
          <div class="right-main">
            <div class="search-con clearfix">
              <div class="search-input-wrap z50">
                <input type="text" class="search-input hd-input-hook" maxlength="100" autocomplete="off" placeholder="
Crocs制造商新款拖鞋券后9块9">
                <div class="search-hotkey">
                  <ul class="hotkey-list">
                    <li class="hotkey-item hotkey-hook" v-for="item in searchHotKeyList">{{item.text}}</li>
                  </ul>
                </div>
              </div>

              <div class="search-bar">
                <em class="bar"></em>
              </div>

              <div class="shop-cart-wrap">
                <a href="" class="link">
                  <em class="bg-shop-cart shop-cart"></em>
                  <em class="bg-badge badge">0</em>
                </a>
              </div>
            </div>
          </div>
        </div>
        <router-link to="" class="bg-logo hd-fiexd-logo"></router-link>

        <!-- nav -->
        <div class="hd-tab-nav hd-tab-hook">
          <ul class="nav-list clearfix">
            <li class="topLevel-nav-item item-hook" v-for="item in tabNav">
              <router-link :to="item.textLink" class="topLevel">{{item.text}}</router-link>
              <div class="nav-dropdown z10" v-if="item.childNavList">
                <div class="full-screen full-screen-hook">
                  <ul class="son-nav-list clearfix">
                    <li class="son-nav-item" v-for="sonNav in item.childNavList">
                      <router-link :to="sonNav.Link" class="son-nav-link">
                        <img :src="sonNav.picUrl" alt="">
                        <p class="text">{{sonNav.text}}</p>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>

          <div class="fixed-right">
            <ul class="nav-fixed-r-list clearfix">
              <li class="nav-fixed-r-item"><router-link to=""  class="link">登录</router-link></li>
              <li class="nav-fixed-r-item"><router-link to="" class="link">注册</router-link></li>
              <li class="nav-fixed-r-item">
                <div class="shop-cart-wrap">
                  <router-link to="" class="link">
                    <em class="bg-shop-cart shop-cart"></em>
                    <em class="bg-badge badge">0</em>
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>

  </header>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'header',
    props: ['searchHotKeyList', 'tabNav'],
    data() {
      return {
      }
    }
  }
</script>

<style>
</style>
