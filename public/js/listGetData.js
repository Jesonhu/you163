new Vue({
    el: '.body-hook',
    data: {
        bannerList: [],
    },
    mounted() {
        this.$nextTick(() => {
            this.conView();
        });
    },
    methods: {
        conView() {
            axios.get('../api/list.json').then((res) => {
                if (res.status === 200) {
                    this.bannerList = res.data.bannerList;
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }
})