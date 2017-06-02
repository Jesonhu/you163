<template>
  <div>
    <!-- 顶部 -->
    <v-header
      :searchHotKeyList="searchHotKeyList"
      :tabNav="tabNav"
    />

    <!-- 主内容区 -->
    <div id="bd-hook" class="bd">
      <!-- banner -->
      <div class="swiper" v-swiper:swiper="swiperOption">
        <div class="swiper-wrapper">
          <!--<ul class="">-->
            <div class="swiper-slide" v-for="item in bannerList">
              <a :href="item.link" class="link">
                <img :src="item.picUrl" alt="">
              </a>
            </div>
          <!--</ul>-->
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="bottom-nav swiper-pagination">
          <!--<ul class="bottom-nav-list clearfix">-->
            <!--<li class="bottom-nav-item" v-for="item in bannerList.length">-->
              <!--<span class="guide"></span>-->
            <!--</li>-->
          <!--</ul>-->
        </div>
      </div>

      <!-- 品牌制作商 -->
      <div class="floor floor-manufacture">
        <div class="container">
          <div class="floor-title clearfix">
            <div class="floor-title-name">{{ppzzs.hdTitle}}</div>
            <div class="floor-title-desc">{{ppzzs.titleDesc}}</div>
            <div class="floor-title-more">
              <a href="" class="more-link">更多制造商></a>
            </div>
          </div>
          <div class="floor-manufacture-bd">
            <ul class="manufacture-list clearfix">
              <li class="manufacture-item" v-for="item in ppzzs.menuList">
                <a :href="item.link" class="link">
                  <h2 class="name z10">
                    {{item.title}}
                    <span v-if="item.flag" class="flag z10">{{item.flag}}</span>
                  </h2>
                  <p class="price z10">{{item.titleDesc}}</p>
                  <img :src="item.picUrl" class="img z5" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 新品首发 -->
      <div class="floor floor-new">
        <div class="container">
          <div class="floor-title clearfix">
            <div class="floor-title-name">{{xpsf.hdTitle}}</div>
            <div class="floor-title-desc">{{xpsf.titleDesc}}</div>
            <div class="floor-title-more">
              <a href="" class="more-link">更多新品></a>
            </div>
          </div>
          <div class="floor-swiper-bd">
            <div class="floor-main">
              <ul class="floor-swiper-list">
                <li class="floor-swiper-item" v-for="item in xpsf.menuList">
                  <a :href="item.link" class="link">
                    <div class="pic-wrap">
                      <span v-if="item.color" class="color">{{item.color}}</span>
                      <img :src="img.picUrl"
                           class="img" alt=""
                           v-for="(img, index) in item.picUrlList"
                           :class="index"
                      >
                    </div>
                    <span v-if="item.flag" class="flag">{{item.flag}}</span>
                    <h2 class="name">{{item.title}}</h2>
                    <p class="price">
                      {{item.price | rmb}}
                      <span class="desc">{{item.desc}}</span>
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="floor-arrow-wrap">
              <span class="bg-badge floor-arrow prev"></span>
              <span class="bg-badge floor-arrow next"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- 人气推荐 -->
      <div class="floor floorhasflag floor-recomment">
        <div class="container">
          <div class="floor-title clearfix">
            <div class="floor-title-name">{{rqtj.hdTitle}}</div>
            <div class="floor-title-tabnav">
              <p class="tabnav" v-for="item in rqtj.hdNav">{{item.text}}</p>
            </div>
            <div class="floor-title-more">
              <a href="" class="more-link">更多推荐></a>
            </div>
          </div>
          <div class="floor-tabcon-bd">
            <ul class="floor-tabcon-list recomment-list-hook clearfix"
                v-for="item in rqtj.conList">
              <li class="floor-tabcon-item item recomment-item-hook"
                  v-for="con in item.rqtj"
              >
                <a :href="con.link" class="link">
                  <div class="pic-wrap">
                    <span v-if="con.color" class="color">{{con.color}}</span>
                    <img :src="con.picUrl"
                         class="img" alt=""
                    >
                  </div>
                  <div class="flag-wrap">
                                    <span v-if="con.flagList" class="flag"
                                          v-for="flag in con.flagList"
                                    >
                                        {{flag.flag}}
                                    </span>
                  </div>
                  <h2 class="name">{{con.title}}</h2>
                  <p class="price">
                    {{con.price | rmb}}
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 居家 -->
      <div class="floor floor-jj floor-moretab">
        <div class="container">
          <div class="floor-title clearfix">
            <div class="floor-title-name">{{jj.hdTitle}}</div>
            <div class="floor-title-desc">{{jj.titleDesc}}</div>
            <div class="fr clearfix">
              <div class="floor-title-tabnav clearfix">
                <p class="more-tabnav" v-for="item in jj.hdNavList">
                  <a :href="item.link" class="link">{{item.text}}</a>
                </p>
              </div>
              <div class="floor-title-more">
                <a href="" class="more-link">查看更多></a>
              </div>
            </div>
          </div>
          <div class="floor-jj-bd">
            <div class="floor-banner">
              <a :href="jj.bannerPicLink" class="link">
                <img :src="jj.bannerPicUrl" alt="">
              </a>
            </div>

            <ul class="floor-moreTab-list clearfix">
              <li class="floor-moreTab-item"
                  v-for="item in jj.conList"
              >
                <a :href="item.link" class="link">
                  <div class="img-wrap">
                    <span class="flag" v-if="item.colorTag">{{item.colorTag}}</span>
                    <img :src="item.picUrl" class="imgScale" alt="">
                  </div>
                  <h2 class="name">{{item.title}}</h2>
                  <p class="price">{{item.price | rmb}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 甄选家 -->
      <div class="floor floor-zxj">
        <div class="container">
          <div class="floor-title clearfix">
            <div class="floor-title-name">{{zxj.hdTitle}}</div>
            <div class="floor-title-desc">{{zxj.titleDesc}}</div>
          </div>
          <div class="floor-zxj-bd">
            <ul class="floor-zxj-list clearfix">
              <li class="floor-zxj-item"
                  v-for="item in zxj.conList"
              >
                <a :href="item.link" class="link">
                  <img :src="item.picUrl" alt="" class="img">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 大家都在说 -->
      <div class="floor floor-newcomment">
        <div class="container">
          <div class="floor-title clearfix">
            <div class="floor-title-name">{{djdzs.hdTitle}}</div>
            <div class="floor-title-desc">{{djdzs.titleDesc}}</div>
          </div>
          <div class="floor-newcomment-bd floor-swiper-bd">
            <ul class="floor-newcomment-list clearfix">
              <li class="floor-newcomment-item"
                  v-for="item in djdzs.conList"
              >
                <div class="img-wrap">
                  <a :href="item.link">
                    <img :src="item.imgUrl" class="imgScale" alt=""></a>
                </div>
                <div class="recomment-text">
                  <p class="user">{{item.user}}</p>
                  <div class="title clearfix">
                    <h2 class="name">{{item.name}}</h2>
                    <span class="price">{{item.price | rmb}}</span>
                  </div>
                  <div class="desc">
                    {{item.desc}}
                    <em class="more"></em>
                  </div>
                </div>
              </li>
            </ul>
            <div class="floor-arrow-wrap">
              <span class="bg-badge floor-arrow prev"></span>
              <span class="bg-badge floor-arrow next"></span>
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
  import fixedTool from '~components/fixedTool'
  import vFooter from '~components/footer'
  import axios from '~plugins/axios'

  export default {
    data () {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize: false, // 开启flex宽度为item宽度总和
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          mousewheelControl: false,
          autoplayDisableOnInteraction: false,
          observeParents: true,
          grabCursor: true,
          preloadImages: false,
          lazyLoading: true
        }
      }
    },
    filters: {
      rmb(val) {
        return "￥" + val;
      }
    },
    components: {
      vHeader,
      vFooter,
      fixedTool
    },
    /* nuxt 相关 */
    head () {
      return {
        title: '首页',
        meta: [
          { hid: 'keyworlds', name: 'keyworlds', content: '网易严选首页' },
          { hid: 'description', name: 'description', content: '首页关键词描述' }
        ]
      }
    },
//    asyncData ({error}) {
//      return axios.get('http://127.0.0.1:3000/api/common.json').then((res) => {
//        return {
//          searchHotKeyList: res.data.result.SearchWordsList,
//          tabNav: res.data.result.navList
//        }
//      }).catch((err) => {
//        error({statusCode: 404, message: 'Get not found'});
//      })
//    }
    async asyncData() {
      let data = {};
      try {
        data.commonData = await axios.get('/api/common.json');
        data.indexData = await axios.get('/api/index.json');
      } catch (err) {
        console.log(err);
      }
      return {
        searchHotKeyList: data.commonData.data.result.SearchWordsList,
        tabNav: data.commonData.data.result.navList,
        footerList: data.commonData.data.result.footerList,
        bannerList: data.indexData.data.result.bannerList,
        ppzzs: data.indexData.data.result.ppzzs,
        xpsf: data.indexData.data.result.xpsf,
        rqtj: data.indexData.data.result.rqtj,
        jj: data.indexData.data.result.jj,
        zxj: data.indexData.data.result.zxj,
        djdzs: data.indexData.data.result.djdzs
      }
    }
  }
</script>

