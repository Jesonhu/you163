<template>
  <v-header
    :searchHotKeyList="searchHotKeyList"
    :tabNav="tabNav"
  ></v-header>
</template>

<script>
  import vHeader from '~/components/header';
  import axios from 'axios';

  export default {
    components: {
      vHeader
    },
    /* nuxt 相关 */
    head() {
      return {
        title: this.title,
        meta: [
          {hid: 'keyworlds', name: 'keyworlds', content: '网易严选首页'},
          {hid: 'description', name: 'description', content: '首页关键词描述'}
        ]
      }
    },
    async asyncData({error}) {
      axios.get('/api/common.json')
      .then((res) => {
        if (res.status === 200) {
          let searchHotKeyList
          return {
            searchHotKeyList : res.data.result.SearchWordsList,
            tabNav : res.data.result.navList
          }
        }
      })
      .catch((e) => {
        error({statusCode: 404, message: 'Page not found'});
      })
    }
  }
</script>

<style>

</style>
