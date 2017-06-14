import Vue from 'vue'
// import Nuxt from 'nuxt'
import { getLocalStore } from './store'

window.onload = function() {
  const count = getLocalStore('count', 1)
  const cartList = getLocalStore('cartList', 2)
  if (count>0 && cartList.length>0) {
    $nuxt.$store.commit('cart/INIT_DATA', {count:count,tag:1})
    $nuxt.$store.commit('cart/INIT_DATA', {cartList:cartList,tag:2})
  }
}
