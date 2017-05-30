<template>
  <section class="container">
    <div>
      首页内容
    </div>
    <p><nuxt-link to="/about">关于我们</nuxt-link></p>
  </section>
</template>

<script>

export default {
  data() {
    return {
      title: '首页sss'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {hid: 'keyworlds', name: 'keyworlds', content: '首页关键词'},
        {hid: 'description', name: 'description', content: '首页关键词描述'}
      ]
    }
  },
  components: {
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color:blue;
}

</style>
