<script src="../node_modules/nuxt/index.js"></script>
<template>
  <div class="container">
    关于我们页面
    <p><nuxt-link to="/">首页</nuxt-link></p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    head: {
      title: '关于我们'
    }
  }
</script>

<style>
  .container{
    min-height:100vh;
    text-align: center;
    background-color:green;
  }
</style>
