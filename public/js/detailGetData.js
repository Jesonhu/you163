new Vue({
    el: ".body-hook",
    data: {
        goods: null
    },
    mounted() {
        this.$nextTick(() => {
            this.conView();
        });
    },
    filtes: {

    },
    methods: {
        conView() {
            axios.get('/api/detail.json').then((res) => {
                if (res.status === 200) {
                    this.goods = res.data.result.goodsDetail;
                }
            })
        }
    }
})