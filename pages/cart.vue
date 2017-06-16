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
            <!--全选-->
            <div class="c-cart-title">
              <ul class="c-cart-title-list clearfix">
                <li class="c-cart-title-item" @click="selectAll">
                  <input type="checkbox" class="cart-checkbox"
                    :class="{'is-active': checkAllFlag}"
                  >
                  <span class="all">全选</span>
                </li>
                <li class="c-cart-title-item">商品信息</li>
                <li class="c-cart-title-item">单价</li>
                <li class="c-cart-title-item">数量</li>
                <li class="c-cart-title-item">小计</li>
                <li class="c-cart-title-item">活动</li>
              </ul>
            </div>
            <!--商品列表-->
            <div class="c-cart-content">
              <ul class="c-cart-list">
                <li class="c-cart-item clearfix"
                    v-if="$store.state.cart.list.length > 0"
                    v-for="(good,index) in $store.state.cart.list"
                >
                  <div class="item checkoutwrap">
                    <input type="checkbox" class="cart-checkbox"
                           @click="selectItem(good, index)"
                           :checked="{'checked': good.checked}"
                           :class="{'is-active': good.checked}"
                    >
                  </div>
                  <div class="item detail">
                    <div class="pic">
                      <a href="" class="link">
                        <img class="img" :src="good.nowSelectColor" alt="">
                      </a>
                    </div>
                    <div class="namecon">
                      <a href="" class="name link">{{good.name}}</a>
                      <div class="spec">
                        <a href="" class="size">13</a>
                        <i class="bg-arrow bg-arrow-arrow-down"></i>
                      </div>
                    </div>
                    <div class="selectskucon"></div>
                  </div>
                  <div class="item price">{{good.retailPrice | rmb}}</div>
                  <div class="item count">
                    <div class="item c-count">
                      <span class="btn" @click="changeCount(good, 0)"></span>
                      <input type="text" class="count" :value="good.count">
                      <span class="btn" @click="changeCount(good, 1)"></span>
                    </div>
                  </div>
                  <div class="item total">{{good.retailPrice*good.count | rmb}}</div>
                  <div class="item active"></div>
                  <div class="bg-normal close" @click="removeCart(good, index)"></div>
                  <hr class="line left">
                  <hr class="line right">
                </li>
              </ul>
              <div class="c-cart-empty" style="display: none"></div>
            </div>
            <div class="c-cart-total clearfix">
              <div class="selectwrap" @click="selectAll">
                <input type="checkbox" class="select cart-checkbox"
                       :class="{'is-active': checkAllFlag}"
                >
                <div class="count">已选({{totalAllNum}})</div>
              </div>
              <div class="empty">批量删除</div>
              <div class="pay" :class="{'is-active': checkItemNum>0}"
                @click="pay(totalAllPrice)"
                >下单</div>
              <div class="info">
                <div class="line">
                  <div class="tip">
                    <span class="count">商品合计&nbsp;:&nbsp;{{totalAllPrice | rmb(2)}}&nbsp;&nbsp;</span>
                    <span class="reduce">活动优惠&nbsp;:&nbsp;-￥0.00</span>
                    <span class="shouldpay">应付总额&nbsp;:&nbsp;&nbsp;<span class="price">{{totalAllPrice | rmb(2)}}</span></span>
                  </div>
                </div>
                <div class="line">
                  <a href="" class="link" v-show="showTransportTag">{{transportDesc}}></a>
                </div>
              </div>
            </div>
          </div>

          <div class="cart-empty" style="display: none" v-show="$store.state.cart.list.length < 0">
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
                  <div class="c-price">{{item.price | rmb(2)}}</div>
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
  import Vue from 'vue'
  import vHeader from '~components/header'
  import vFooter from '~components/footer'
  import fixedTool from '~components/fixedTool'
  import axios from '~plugins/axios'
  import goodsOrder from '~plugins/goods_order'

  export default {
    // vue
    data() {
      return {
        checkAllFlag: false, // 是否全选
        checkItemNum: 0, // 单行被选中商品的数量
        checkAllNum: -1, // 购物车商品的数量(总行数)
        totalMoney: 0, // 单商品总金额
        totalAllPrice: 0, // 选中商品的总金额
        totalAllNum: 0, // 被勾选商品的总数量
        tag: [], // 每行选中/非选中标记
        transportPrice: 88, // 免运费限制
        deliveryPrice: 10, // 运费
        showTransportTag: true // 是否显示运费不足
      }
    },
    created() {
      this.initData() // <--
    },
    methods: {
      initData() {
        const This = this
//        this.checkAllNum = this.$store.state.cart.list.length
        setTimeout(function() {
          This.checkAllNum = This.$store.state.cart.list.length
          for (let i =0;i<This.checkAllNum; i++) {
            This.tag.push(false)
          }
        }, 300)
      },
      selectItem(item, index) { // 选中某行商品
        this.tag[index] = !this.tag[index]
        if(this.tag[index]) {
          this.checkItemNum++
          if (typeof item.checked == 'undefined') {
            Vue.set(item, 'checked', true)
          } else {
              item.checked = true
          }
          this.totalAllNum += item.count
        } else {
          this.checkItemNum--
          item.checked = false
          this.totalAllNum -= item.count
        }
        this.calcTotalPrice() // <--
      },
      selectAll(){ // 全选/全不选
        this.checkAllFlag = !this.checkAllFlag
        if (this.checkAllFlag) {
          this.totalAllNum = 0
          this.checkItemNum = this.checkAllNum
          this.$store.state.cart.list.forEach((item) => {
            if (typeof item.checked == 'undefined') {
              Vue.set(item, 'checked', true)
            } else {
              item.checked = true
            }
            this.totalAllNum += item.count
          })
          this.tag.forEach(function(item, index, array) {
            array[index] = true
          })
        } else {
          this.checkItemNum = 0
          this.$store.state.cart.list.forEach((item) => {
            item.checked = false
            this.totalAllNum -= item.count
          })
          this.tag.forEach(function(item, index, array) {
            array[index] = false
          })
        }
        this.calcTotalPrice() // <--
      },
      changeCount(item, action) { // 改变选中类型商品的数量
        if (action) { // 点击+
          item.count++
          if (item.checked) {
            this.totalAllNum = 0
            this.totalAllNum += item.count
          }
          this.$store.commit('cart/UPDATE_CART',1)
        } else { // 点击-
          if (item.count <= 1) { // 数量不能少于1个
            return
          }
          item.count--
          if (item.checked) {
            this.totalAllNum -= item.count
          }
          this.$store.commit('cart/UPDATE_CART',0)
        }
        this.calcTotalPrice() // <==
      },
      calcTotalPrice: function() { // 计算选中商品金额
        this.totalAllPrice = 0
        this.$store.state.cart.list.forEach((item) => {
          if (item.checked) {
            this.totalAllPrice += item.retailPrice * item.count
          }
        })
      },
      removeCart(item, index) {
        this.$store.commit('cart/REMOVE_CART', index)
      },
      pay(price) {
        alert( goodsOrder(price) )
      }
    },
    computed: {
      isSelectAll() {
        if (this.checkItemNum == this.checkAllNum) {
          this.checkAllFlag = true
        } else {
          this.checkAllFlag = false
        }
        return true
      },
      transportDesc() {
        if (this.totalAllPrice ===0) {
          this.showTransportTag = true
          return `再购¥${this.transportPrice}.00 免邮,去凑单`
        } else if (this.totalAllPrice < this.transportPrice) {
          let diff = this.transportPrice - this.totalAllPrice
          return `再购¥${diff}.00 免邮,去凑单`
        } else {
          return `已免邮`
        }
      }
    },
    components: {
      vHeader,
      vFooter,
      fixedTool
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
    async asyncData({ params, error, store, isDev }) {
      let data = {};
      let apiURI = 'http://github.easysolves.com/'
      if (isDev) { // 开发环境
        apiURI = 'http://127.0.0.1:3333/'
      }
      try {
//        data.commonData = await axios.get('/api/common.json');
        data.cartData = await axios.get(apiURI + 'api/cart.json');
      } catch (err) {
        console.log(err);
      }
      return {
        searchHotKeyList: store.state.header_footer.searchHotKeyList,
        tabNav: store.state.header_footer.tabNav,
        footerList: store.state.header_footer.footerList,
        mayLike: data.cartData.data.result.sameList,
        cart: data.cartData.data.result.cart,
        storeCart: store.state.cart.list
      }
    }
  }
</script>

<style>
</style>
