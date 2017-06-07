<template>
  <div class="detail">
    <!-- 顶部 -->
    <v-header
      :searchHotKeyList="searchHotKeyList"
      :tabNav="tabNav"
    />

    <!-- 内容区 -->
    <div class="pd-detail-bd body-hook">
      <div class="container">
        <!-- 面包屑导航 -->
        <div class="c-crumbs">
          <a href="" class="link">首页</a>
          <a href="" class="link">居家</a>
          <a href="" class="link">夏凉</a>
          <span class="current">全棉针织纯色四件套</span>
        </div>

        <!-- 商品详情顶部内容 -->
        <div class="pd-bd-top clearfix">
          <div class="pd-slide clearfix">
            <div class="pd-view">
              <img :src="goods.viewPicUrl" class="pd-view-img" alt="" $ref="pic-show">
            </div>
            <ul class="pd-list">
              <li class="pd-item"
                  v-for="item in goods.sthumbs"
              >
                <img :src="item.img" alt="" class="pd-item-img" $ref="pic-select">
              </li>
            </ul>
          </div>

          <div class="pd-info">
            <div class="pd-intro clearfix">
              <div class="pd-namewrap">
                <div class="pd-name">{{goods.name}}-{{id}}</div>
                <a class="pd-tag"
                   :href="tag.href"
                   v-if="goods.tagList"
                   v-for="tag in goods.tagList"
                >{{tag.name}}</a>
              </div>
              <div class="pd-desc">{{goods.desc}}</div>
            </div>

            <!-- 价格 促销 服务 -->
            <div class="pd-price-sale-service">
              <div class="field pd-price clearfix">
                <span class="title">售价</span>
                <span class="pd-price-main">
                            {{goods.retailPrice | rmb(2,false)}}
                            </span>
              </div>
              <div class="field pd-sale clearfix">
                <span class="title">促销</span>
                <a class="line-overflow pd-sale-name"
                   v-for="sale in goods.saleList"
                   :href="sale.href"
                >
                  {{sale.desc}}
                </a>
              </div>
              <div class="field pd-service clearfix">
                <span class="title">服务</span>
                <div class="pd-service-main line-overflow">
                                <span class="pd-service-name"
                                      v-for="service in goods.service"
                                >{{service.desc}}</span>
                </div>
              </div>

              <div class="pd-ratings">
                <span class="pd-count">{{goods.commitNum | wan}}</span>
                <span class="pd-text">用户评价</span>
              </div>
            </div>
            <div class="field pd-color clearfix">
              <span class="title">颜色</span>
              <div class="pd-color-list clearfix">
                <a href="javascript:;" class="pd-color-item"
                   v-for="color in goods.choseColor"
                   :title="color.title"
                >
                  <img :src="color.img" alt="" class="pd-color-img">
                </a>
              </div>
            </div>
            <div class="field pd-size clearfix">
              <span class="title">尺寸</span>
              <div class="pd-size-list clearfix">
                <a href="javascript:;" class="pd-size-item"
                   v-for="size in goods.size"
                >
                  {{size.name}}
                </a>
              </div>
            </div>
            <div class="field pd-count clearfix">
              <span class="title">数量</span>
              <div class="cartcontroll clearfix">
                <span class="btn"></span>
                <input type="text" class="count" value="1">
                <span class="btn"></span>
              </div>
            </div>

            <div class="pd-controll clearfix">
              <span class="buy">立即购买</span>
              <span class="addcart">加入购物车</span>
              <span class="store">收藏</span>
            </div>

          </div>
        </div>

        <!-- 大家都在看 -->
        <div class="c-row-carousel pd-carousel">
          <div class="c-title">大家都在看</div>
          <div class="c-main">
            <div class="c-picwrap">
              <ul class="c-list clearfix">
                <li class="c-item"
                    v-for="item in sameList"
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

        <div class="pd-bd clearfix">
          <!-- 详情和评价 -->
          <div class="pd-bd-left">
            <div class="pd-bd-nav">
              <ul class="pd-bd-nav-list clearfix">
                <li class="pd-bd-nav-item"
                    :class="{'is-active':isShowDetail}"
                    @click="isShowDetail = !isShowDetail"
                >
                  详情
                </li>
                <li class="pd-bd-nav-item"
                    :class="{'is-active':!isShowDetail}"
                    @click="isShowDetail = !isShowDetail"
                >
                  评价
                </li>
              </ul>
            </div>

            <!-- 详情内容 -->
            <div class="pd-bd-html tab-con-hook" v-show="isShowDetail">
              <ul class="pd-bd-attrlist">
                <li class="pd-bd-arrtitem">
                  <div class="pd-name">材质</div>
                  <div class="pd-value">{{goods.goodsDetail.ingredient}}</div>
                </li>
                <li class="pd-bd-arrtitem">
                  <div class="pd-name">尺寸</div>
                  <div class="pd-value pd-size">
                    <p v-for="size in goods.goodsDetail.size">{{size.text}}</p>
                  </div>
                </li>
                <li class="pd-bd-arrtitem">
                  <div class="pd-name">执行标准</div>
                  <div class="pd-value">{{goods.goodsDetail.standard}}</div>
                </li>
                <li class="pd-bd-arrtitem">
                  <div class="pd-name">颜色</div>
                  <div class="pd-value">
                                    <span class="pd-color"
                                          v-for="color in goods.goodsDetail.color"
                                    >{{color.text}}</span>
                  </div>
                </li>
                <li class="pd-bd-arrtitem">
                  <div class="pd-name">产地</div>
                  <div class="pd-value">{{goods.goodsDetail.from}}</div>
                </li>
              </ul>

              <!--图片介绍-->
              <div class="pd-bd-imgdetail">
                <img :src="goods.goodsDetail.picUrl" alt="">
              </div>

              <!--自检报告-->
              <div class="pd-bd-report pd-c">
                <div class="pd-bd-title c-title">自检报告</div>
                <div class="pd-bd-r-main">
                  <a href="" class="pd-bd-link">
                    <img :src="goods.goodsDetail.report.picUrl" alt="" class="pd-bd-img">
                    <i class="bg-normal pd-bd-zoomout z5"></i>
                    <div class="mask z10">
                                        <span class="text">
                                            查看完整报告
                                            <i class="bg-arrow arrow-right-white z10"></i>
                                        </span>
                    </div>
                  </a>
                </div>
              </div>

              <!-- qa -->
              <div class="pd-hd-qa pd-c">
                <div class="c-title">常见问题</div>
                <div class="pd-bd-qa-main">
                  <ul class="pd-list">
                    <li class="pd-item"
                        v-for="qa in goods.goodsDetail.question"
                    >
                      <p class="question">{{qa.qs}}</p>
                      <p class="answer">{{qa.an}}</p>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <!-- 评论内容 -->
            <div class="pd-bd-commit c-commit tab-con-hook" v-show="!isShowDetail">
              <div class="pd-bd-commit-slected c-commit-selected clearfix">
                <div class="c-radio c-c-s-all"
                     :class="{'is-active':ratingType == 2}"
                     @click="toggleRatingCon(2)"
                >
                  <input type="radio" class="radio" name="commentCategory" value="0">
                  <label for="allComment" class="all">全部({{ratingTotal.length}})</label>
                </div>
                <div class="c-radio c-c-s-haspic"
                     :class="{'is-active':ratingType == 1}"
                     @click="toggleRatingCon(1)"
                >
                  <input type="radio" class="radio" name="commentCategory" value="1">
                  <label for="picComment" class="haspic">有图({{ratingHasPic.length}})</label>
                </div>
              </div>
              <ul class="pd-bd-commit-list" v-show="goods.ratings || goods.ratings.length">
                <li class="pd-bd-commit-item clearfix"
                    v-for="commit in goods.ratings"
                    v-show="ratingShow(commit.hasPicList)"
                >
                  <div class="c-commituser">
                    <div class="c-avatarwrap">
                      <img :src="commit.frontUserAvatar?commit.frontUserAvatar:`/img/avatardefault.png`" class="c-avatar" alt="">
                    </div>
                    <div class="username-hasicon">
                      <a href="" class="c-vip" :class="`vip-${commit.memberLevel}`"></a>
                      <div class="c-username">{{commit.frontUserName}}</div>
                    </div>
                  </div>
                  <div class="c-commitcon">
                    <div class="c-content" v-if="commit.content">{{commit.content}}</div>
                    <ul class="c-piclist clearfix" v-if="commit.picList">
                      <li class="c-picitem"
                          v-for="pic in commit.picList"
                      >
                        <img :src="pic" alt="" class="c-img">
                      </li>
                    </ul>

                    <div class="c-meta clearfix">
                      <div class="skuinfo">
                                            <span class="info-item"
                                                  v-for="type in commit.skuInfo"
                                            >{{type}}</span>
                      </div>
                      <div class="pubitem">{{commit.createTime | time}}</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="pd-bd-commitpager"></div>
          </div>

          <!-- 右侧热销 专题 -->
          <div class="pd-bd-right">

            <!-- 热销 -->
            <div class="pd-bd-r-hotsale c-col-hotsale">
              <div class="c-c-title">24小时热销榜</div>
              <ul class="c-picwrap-list">
                <li class="c-picwrap-item"
                    v-for="item in hotSale"
                >
                  <a :href="item.link" class="c-link">
                    <div class="c-item-imgwrap">
                                        <span class="c-item-color"
                                              v-if="item.color"
                                        >{{item.color}}</span>

                      <img :src="item.picUrl" class="imgScale img" alt="">

                    </div>
                    <h3 class="c-name line-overflow">
                      {{item.name}}
                    </h3>
                    <div class="c-price">{{item.price | rmb(2)}}</div>
                  </a>
                </li>
              </ul>
            </div>

            <!-- 专题推荐 -->
            <div class="pd-bd-r-recommend c-col-hotsale">
              <div class="c-c-title">专题推荐</div>
              <ul class="c-picwrap-list">
                <li class="c-picwrap-item"
                    v-for="item in topicsRecommended"
                >
                  <a :href="item.link" class="c-link">
                    <img :src="item.picUrl" alt="" class="img">
                    <p class="name">{{item.name}}</p>
                  </a>
                </li>
              </ul>
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

  const hasPic = true;
  export default {
    // vue
    data() {
      return {
        isShowDetail: false,
        ratingType: 2
      }
    },
    components: {
      vHeader,
      vFooter,
      fixedTool
    },
    methods: {
      // 自定义日期格式
      formatDate(format) {
        Date.prototype.format = (format) => {
          var date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
          };
          if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
          }
          for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
              format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
          }
          return format;
        }
      },

      // 评论相关
      toggleRatingCon(type) {
        this.ratingType = type // 改变 this.ratingType的值 ==> ratingShow
      },
      ratingShow(hasPic) {
        if (this.ratingType === 2) {
          return true
        } else {
          return hasPic
        }
      }

      // 商品详情图片相关
      
    },
    computed: {
      ratingTotal() {
        return this.goods.ratings
      },
      ratingHasPic() {
        return this.goods.ratings.filter((item) => {
          return item.hasPicList == hasPic
        })
      }
    },
    filters: {
      wan(val) {
        const nVal = Number(val);
        if (nVal >=1000) {
          return `999+`;
        } else {
          return val;
        }
      },
      time(val){
        let newDate = new Date();
        newDate.setTime(val);
        return newDate.toLocaleDateString();
      }
    },
    // nuxt
    head() {
      return {
        title: '详情页',
        meta: [
          {hid: 'keywords', name: 'keywords', content: '商品详情页'},
          {hid: 'keywords', name: 'keywords', content: '商品详情页描述'},
        ]
      }
    },
    async asyncData({ params, error, store }) {
      let data = {};
      try {
//        data.commonData = await axios.get('http://127.0.0.1:3000/api/common.json');
        data.detailData = await axios.get('http://127.0.0.1:3000/api/detail.json');
      } catch (err) {
        console.log(err);
      }
      return {
        searchHotKeyList: store.state.header_footer.searchHotKeyList,
        tabNav: store.state.header_footer.tabNav,
        footerList: store.state.header_footer.footerList,
        goods: data.detailData.data.result.goodsDetail,
        sameList: data.detailData.data.result.sameList,
        hotSale: data.detailData.data.result.hotSale,
        topicsRecommended: data.detailData.data.result.topicsRecommended,
        id: params.id
      }
    }
  }
</script>

<style>
</style>
