new Vue({
  el: ".header-hook",
  data: {
    searchHotKeyList: [],
    tabNav: []
  },
  mounted: function() {
    this.$nextTick(() => {
      this.searchView();
    });
  },
  methods: {
    searchView() {
      axios.get('../api/common.json').then((res) => {
        if (res.status === 200) {
          this.searchHotKeyList = res.data.result.SearchWordsList;
          this.tabNav = res.data.result.navList;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
});

new Vue({
    el: ".footer-hook",
    data: {
        footerList: []
    },
    mounted: function() {
        this.$nextTick(() => {
            this.searchView();
        });
    },
    methods: {
        searchView() {
            axios.get('../api/common.json').then((res) => {
                if (res.status === 200) {
                    this.footerList = res.data.result.footerList;
                }
            })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
});

new Vue({
  el: '#bd-hook',
  data: {
    bannerList: [], // banner
    ppzzs: null,  // 品牌制造商
    xpsf: null, // 新品首发
    rqtj: null, // 人气推荐
    jj: null, // 居家
    zxj: null, // 甄选家
    djdzs: null // 大家都在说
  },
  filters: {
      rmb(val) {
          return "￥" + val;
      }
  },
  mounted() {
    this.$nextTick(() => {
      this.conView();
    });
  },
  methods: {
    conView() {
      axios.get('../api/index.json').then((res) => {
        if (res.status === 200) {
          this.bannerList = res.data.result.bannerList;
          this.ppzzs = res.data.result.ppzzs;
          this.xpsf = res.data.result.xpsf;
          this.rqtj = res.data.result.rqtj;
          this.jj = res.data.result.jj;
          this.zxj = res.data.result.zxj;
          this.djdzs = res.data.result.djdzs;
        }
      })
        .catch((err) => {
          console.log(err);
        });
    }
  }
})