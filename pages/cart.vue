<template>
  <div id="cart">
    <!-- 顶部 -->
    <v-header
      :searchHotKeyList="searchHotKeyList"
      :tabNav="tabNav"
    />

    <!-- 内容 -->
    <div class="pc-cart-bd body-hook">
      <div class="container">

        <!-- 购物车部分 -->
        <div class="c-cart-body">
          <div class="c-cart-lazy" style="display: none">
            <img src="/img/cartlazy.gif" alt="" class="img">
          </div>

          <div class="c-cart-main">
            <div class="c-cart-title">
              <ul class="c-cart-title-list clearfix">
                <li class="c-cart-title-item">
                  <input type="checkbox" class="cart-checkbox">
                  <span class="all">全选</span>
                </li>
                <li class="c-cart-title-item">商品信息</li>
                <li class="c-cart-title-item">单价</li>
                <li class="c-cart-title-item">数量</li>
                <li class="c-cart-title-item">小计</li>
                <li class="c-cart-title-item">活动</li>
              </ul>
            </div>
            <div class="c-cart-content">
              <ul class="c-cart-list">
                <li class="c-cart-item clearfix"
                    v-for="good in cart.cartGroupList[0].cartItemList"
                >
                  <div class="item checkoutwrap">
                    <input type="checkbox" class="cart-checkbox">
                  </div>
                  <div class="item detail">
                    <div class="pic">
                      <a href="" class="link">
                        <img class="img" :src="good.pic" alt="">
                      </a>
                    </div>
                    <div class="namecon">
                      <a href="" class="name link">{{good.itemName}}</a>
                      <div class="spec">
                        <a href="" class="size">{{good.specList[0].specValue}}</a>
                        <i class="bg-arrow bg-arrow-arrow-down"></i>
                      </div>
                    </div>
                    <div class="selectskucon"></div>
                  </div>
                  <div class="item price">{{good.retailPrice | rmb}}</div>
                  <div class="item count">
                    <div class="item c-count">
                      <span class="btn"></span>
                      <input type="text" class="count" :value="cart.cnt">
                      <span class="btn"></span>
                    </div>
                  </div>
                  <div class="item total">{{good.totalPrice | rmb}}</div>
                  <div class="item active"></div>
                  <div class="bg-normal close"></div>
                  <hr class="line left">
                  <hr class="line right">
                </li>
              </ul>
              <div class="c-cart-empty" style="display: none"></div>
            </div>
            <div class="c-cart-total clearfix">
              <div class="selectwrap">
                <input type="text" class="select cart-checkbox">
                <div class="count">已选(0)</div>
              </div>
              <div class="empty">批量删除</div>
              <div class="pay">下单</div>
              <div class="info">
                <div class="line">
                  <div class="tip">
                    <span class="count">商品合计&nbsp;:&nbsp;￥0.00&nbsp;&nbsp;</span>
                    <span class="reduce">活动优惠&nbsp;:&nbsp;-￥0.00</span>
                    <span class="shouldpay">应付总额&nbsp;:&nbsp;&nbsp;<span class="price">￥0.00</span></span>
                  </div>
                </div>
                <div class="line">
                  <a href="" class="link">再购¥88.00免邮,去凑单></a>
                </div>
              </div>
            </div>
          </div>

          <div class="cart-empty" style="display: none">
            <div class="main">
              <i class="bg-shop-cart c-cart"></i>
              <p class="text">购物车还是空滴</p>
              <div class="btnwrap">
                <a href="" class="btn login" style="display: none">登录</a>
                <a href="" class="btn countineshop">继续逛</a>
              </div>
            </div>
          </div>
        </div>


        <!--猜你喜欢-->
        <div class="c-row-carousel pc-carousel">
          <div class="c-title">猜你喜欢</div>
          <div class="c-main">
            <div class="c-picwrap">
              <ul class="c-list clearfix">
                <li class="c-item"
                    v-for="item in mayLike"
                >
                  <div class="c-item-imgwrap">
                                    <span class="c-item-color"
                                          v-if="item.color"
                                    >{{item.color}}</span>
                    <a :href="item.link" class="c-link">
                      <img :src="item.picUrl" class="imgScale" alt="">
                    </a>
                  </div>
                  <h3 class="c-name">
                    <a :href="item.link" class="c-link">{{item.name}}</a>
                  </h3>
                  <div class="c-price">{{item.price | rmb('￥')}}</div>
                </li>
              </ul>
            </div>
            <div class="c-arrowwrap">
              <button class="bg-normal c-arrow prev"></button>
              <button class="bg-normal c-arrow next"></button>
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
    filters: {
      rmb(val) {
        return `￥${val}.00`;
      }
    },
    // nuxt
    head() {
      return {
        title: '购物车',
        meta: [
          {hid: 'keywords', name: 'keywords', content: '商品购物车页'},
          {hid: 'keywords', name: 'keywords', content: '商品购物描述页'},
        ]
      }
    },
    async asyncData({ params, error }) {
      let data = {};
      try {
        data.commonData = await axios.get('/api/common.json');
        data.cartData = await axios.get('/api/cart.json');
      } catch (err) {
        console.log(err);
      }
      return {
        searchHotKeyList: data.commonData.data.result.SearchWordsList,
        footerList: data.commonData.data.result.footerList,
        tabNav: data.commonData.data.result.navList,
        mayLike: data.cartData.data.result.sameList,
        cart: data.cartData.data.result.cart,
      }
    }
  }
</script>

<style>
</style>
