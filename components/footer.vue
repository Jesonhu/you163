<template>
  <footer class="footer no-border footer-hook">
    <div class="container">
      <div class="contact-bd">
        <div class="contact-item item-service">
          <h4 class="hd">客服电话</h4>
          <p class="phone">400-0368-163</p>
          <p class="datetime">9:00-22:00</p>
          <a href="/" class="feedback">用户反馈</a>
          <a href="/" class="kefu">在线客服</a>
        </div>
        <div class="contact-item aboutus">
          <h4 class="hd">何为严选</h4>
          <p class="desc">网易原创生活类电商品牌，秉承网易一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到优质的商品</p>
          <div class="view">
            <span class="text">关注我们:</span>
            <span class="bg-normal yx"></span>
            <span class="bg-normal wx"></span>
            <span class="bg-normal wb"></span>
          </div>
        </div>
        <div class="contact-item">
          <h4 class="hd">扫码下载严选</h4>
          <img src="/img/appdown.png" class="img downewm" width="104" height="104" alt="">
          <p class="downdesc">下载领1000元新人礼包</p>
        </div>
      </div>
    </div>
    <div class="footer-floor2">
      <div class="container">
        <div class="f2-main">
          <ul class="ensure-list clearfix">
            <li class="ensure-item">
              <div class="con">
                <em class="bg-normal ensure-icon"></em>
                <p class="text">30天无忧退货</p>
              </div>
            </li>
            <li class="ensure-item">
              <div class="con">
                <em class="bg-normal ensure-icon"></em>
                <p class="text">满88元免邮费</p>
              </div>
            </li>
            <li class="ensure-item">
              <div class="con">
                <em class="bg-normal ensure-icon"></em>
                <p class="text">网易品质保证</p>
              </div>
            </li>
          </ul>
          <div class="f2-siteinfo">
            <ul class="siteinfo-list">
              <li class="siteinfo-item"
                  v-for="item in footerList"
              >
                <a :href="item.link" class="link">{{item.text}}</a>
              </li>
            </ul>
            <p class="copyright">
              网易公司版权所有 © 1997-2017   食品经营许可证：JY13301080111719
            </p>
            <a href="" class="credible">
              <img src="/img/credible.gif" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    props: ['footerList'],
    data() {
      return {

      }
    }
  }
</script>

<style>
</style>
