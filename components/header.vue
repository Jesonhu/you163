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

              <div class="shop-cart-wrap z50">
                <a href="" class="link">
                  <em class="bg-shop-cart shop-cart"></em>
                  <em class="bg-badge badge">{{$store.state.cart.count}}</em>
                </a>
                <div class="sub-wrap" v-show="$store.state.cart.list.length">
                  <ul class="cart-list">
                    <li class="cart-item clearfix"
                      v-for="(item,index) in $store.state.cart.list"
                    >
                      <a href="" class="left-link">
                        <img :src="item.nowSelectColor" alt="">
                      </a>
                      <div class="itme-right">
                        <div class="hd clearfix">
                          <a class="name" href="">{{item.name}}</a>
                          <div class="price">{{item.retailPrice | rmb(2)}}</div>
                        </div>
                        <div class="con clearfix">
                          <div class="desc line-overflow">粉色+白180*200cm</div>
                          <div class="count">x{{item.count}}</div>
                        </div>
                      </div>
                      <div class="remove" @click="removeCart(item,index)"></div>
                    </li>
                  </ul>
                  <div class="cart-bottom clearfix z50">
                    <div class="total-price">
                      商品合计:
                      <span class="price">{{$store.state.cart.totalPrice | rmb(2)}}</span>
                    </div>
                    <router-link class="buy" to="/cart">去购物车结算</router-link>
                  </div>
                </div>
                <div class="arrow" :class="{'is-active':$store.state.cart.count>0}"></div>
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
                    <em class="bg-badge badge">{{$store.state.cart.count}}</em>
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
  export default {
    name: 'header',
    props: ['searchHotKeyList', 'tabNav'],
    data() {
      return {
        totalPrice: 0
      }
    },
    created() {
       // this.calcTotalPrice() // <==
    },
    methods: {
      removeCart(item, index) {
        this.$store.commit('cart/REMOVE_CART', index)
      }
    },
    computed: {
      // calcTotalPrice() {
      //   console.log(11)
      //   const This = this
      //   const storCartListLength = This.$store.state.cart.list
      //   setTimeout(function() {
      //     if (storCartListLength > 0) {
      //       This.$store.state.cart.list.forEach((item) => {
      //         This.totalPrice += item.retailPrice * item.count
      //         console.log('计算总额')
      //       })
      //     }
      //   }, 100)
      // }
    }
  }
</script>
