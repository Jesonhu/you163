new Vue({
    el: ".body-hook",
    data: {
        goods: null, // 商品详情
        sameList: [], // 相似产品
        hotSale: [], // 热销
        topicsRecommended: [] // 专题推荐
    },
    mounted() {
        this.$nextTick(() => {
            this.conView();
        });
    },
    filters: {
        rmb(val, str) {
            if (typeof str === 'undefined') {
                return `${val}.00`;
            } else {
                return `${str}${val}.00`;
            }
        },
        wan(val) {
            const nVal = Number(val);
            if (nVal >=1000) {
                return `999+`;
            } else {
                return val;
            }
        }
    },
    methods: {
        conView() {
            axios.get('/api/detail.json').then((res) => {
                if (res.status === 200) {
                    this.goods = res.data.result.goodsDetail;
                    this.sameList = res.data.result.sameList;
                    this.hotSale = res.data.result.hotSale;
                    this.topicsRecommended = res.data.result.topicsRecommended;
                }
            })
        }
    }
})