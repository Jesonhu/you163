<template>
  <div class="list">
    <!-- 顶部 -->
    <v-header
      :searchHotKeyList="searchHotKeyList"
      :tabNav="tabNav"
    />

    <!-- 内容区 -->
    <div class="l-list-bd body-hook">
      <div class="container">
        <!-- 面包屑导航 -->
        <div class="c-crumbs">
          <a href="" class="link">首页</a>
          <span class="current">居家</span>
        </div>
        <!-- banner -->
        <div class="c-fadebanner">
          <div class="fade-pic">
            <transition-group tag="ul" class="fade-list" name="fade">
              <li class="fade-item"
                  v-for="(item,index) in bannerList"
<<<<<<< HEAD
                  :key="item"
                  v-show="Index==index"
=======
                  v-show="Index == index"
>>>>>>> 7dc4d7513f450a148735fe8153610a6b956b3310
              >
                <a :href="item.link" class="fade-link">
                  <img :src="item.picUrl" alt="" class="fade-img">
                </a>
              </li>
            </transition-group>
          </div>
          <div class="fade-arrow">
            <button class="bg-normal prev z10"
              @click="go(0)"
            ></button>
            <button 
              class="bg-normal next z10"
              @click="go(1)"
            >
            </button>
          </div>
          <div class="fade-nav">
            <ul class="fade-nav-list z10">
              <li class="fade-nav-item"
                  v-for="(item,index) in bannerList.length"
                  :class="{'is-active':Index==index}"
<<<<<<< HEAD
                  @click=selectBanner(index)
=======
>>>>>>> 7dc4d7513f450a148735fe8153610a6b956b3310
              ></li>
            </ul>
          </div>
        </div>
        <!-- 商品列表 -->
        <div class="pl-goodswrap">
          <div class="pl-sortbar">
            <div class="pl-category clearfix">
              <span class="pl-name">分类：</span>
              <div class="pl-category-group">
                <a :href="item.link" class="pl-link"
                   :data-reactid="item.dataReactId"
                   v-for="(item,index) in sort"
                   :class="{'is-active': classFilter == index}"
                   @click="classList(index)"
                >
                  {{item.name}}
                </a>
              </div>
            </div>
            <div class="pl-filter">
              <span class="pl-name">排序：</span>
              <div class="pl-filter-group">
                <a :href="item.link" class="pl-link"
                   data-reactid="item.dataReactId"
                   v-for="(item,index) in filter"
                   :class="{'is-active': filterType == index}"
                   @click="filterList(index)"
                >
                  {{item.name}}
                </a>
              </div>
            </div>
          </div>
          <div class="pl-goodsmain">
            <div class="pl-level2category"
                 v-for="item in goods"
            >
              <div class="pl-level-hd" v-if="item.hasTitle">
                <p class="pl-hd-title">
                  <img class="pl-hd-img" :src="item.picUrl" alt="">
                  {{item.name}}
                </p>
                <p class="pl-hd-desc">{{item.desc}}</p>
              </div>
              <div class="pl-level-bd">
                <ul class="pl-level-list clearfix">
                  <li class="pl-level-item"
                      v-for="good in item.conList"
                  >

                    <div class="pl-con-hd">
                                        <span class="pl-hd-color"
                                              v-if="good.color"
                                        >{{good.color}}</span>
                      <a :href="good.link" class="pl bd-imglink">
                        <img :src="good.picUrl" alt="" class="pl-bd-img imgScale">
                      </a>
                    </div>
                    <div class="pl-con-bd">
                      <div class="pl-bd-flagwrap">
                        <span class="pl-bd-flag"
                              v-if="good.flag"
                              v-for="flag in good.flag"
                        >{{flag.name}}</span>
                      </div>
                      <a :href="good.link" class="pl bd-namelink">
                        <h3 class="pl-name">{{good.name}}</h3>
                      </a>
                      <p class="pl-price">{{good.price | rmb(2)}}</p>
                      <div class="pl-desc">{{good.desc}}</div>
                    </div>

                  </li>
                </ul>
              </div>
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
  import vHeader from '~components/header'
  import vFooter from '~components/footer'
  import fixedTool from '~components/fixedTool'
  import axios from '~plugins/axios'
  let timer

  export default {
    data() {
      return {
        // banner
        Index: 0,

        filterType: 0,
        classFilter: 0,

        // banner
        Index: 0
      }
    },
    methods: {
      filterList(index) {
        this.filterType = index
      },
      classList(index) {
        this.classFilter = index
      },

      // banner
      selectBanner(index) {
        this.Index = index
      },
      go(action) {
        if (action) { // 点击右按钮
          if (this.Index >= 1) {
            this.Index = 0
          } else {
            this.Index++
          }
        } else {
          if (this.Index <= 0) {
            this.Index = 1
          } else {
            this.Index--
          }
        }
      }
    },
    // vuex
    components: {
      vHeader,
      vFooter,
      fixedTool
    },
    // nuxt
    head() {
      return {
        title: '列表页',
        meta: [
          {hid: 'keywords', name: 'keywords', content: '商品列表页'},
          {hid: 'keywords', name: 'keywords', content: '商品列表页'},
        ]
      }
    },
    async asyncData({ params, error, store }) {
      let data = {};
      try {
//        data.commonData = await axios.get('/api/common.json');
        data.listData = await axios.get('/api/list.json');
      } catch (err) {
        console.log(err);
      };
      return {
        searchHotKeyList: store.state.header_footer.searchHotKeyList,
        tabNav: store.state.header_footer.tabNav,
        footerList: store.state.header_footer.footerList,
        bannerList: data.listData.data.bannerList,
        sort: data.listData.data.sort,
        filter: data.listData.data.filter,
        goods: data.listData.data.goods
      };
    }
  }
</script>

<style>
  .fade-enter{
    opacity:1;
    display:block;
  }
  .fade-enter-active,
  .fade-leave-active {
    opacity:0;
    transition:all .2s linear;
  }
</style>
