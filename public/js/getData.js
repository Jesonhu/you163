var header = new Vue({
  el: ".header-hook",
  data: {
    title: 'hello vue',
    searchHotKeyList: [],
    tabNav: [],
  },
  mounted: function() {
    this.$nextTick(() => {
      this.searchView();
    });
  },
  methods: {
    searchView() {
      axios.get('../api/index.json').then((res) => {
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

var content = new Vue({
  el: '#bd-hook',
  data: {
    bannerList: []
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
        }
      })
        .catch((err) => {
          console.log(err);
        });
    }
  }
})