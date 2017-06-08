<template>
  <div class="loading-page" v-if="loading">
    <p>{{text}}</p>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        loading: false,
        text: '正在加载中...'
      }
    },
    methods: {
     start() { // 路由更新时调用
       this.loading = true
     },
     finish() { // 路由更新完成调用
       this.loading = false
     },
     fail() { // 路由更新失败调用
       this.loading = true
       this.text = '页面加载失败'
     }
    }
  }
</script>

<style>
  .loading-page{
    postion:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    padding-top:200px;
    font-size:30px;
    font-family: sans-serif;
    text-align: center;
    background-color:rgba(255,255,255,.8)
  }
</style>
