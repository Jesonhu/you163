import Vue from 'vue'
import { getLocalStore } from './store'

window.addEventListener('load', function() {
  const count = getLocalStore('count', 1)
  const totalPrice = getLocalStore('totalPrice',1)
  const cartList = getLocalStore('cartList', 3)
  if (count>0 && cartList.length>0) {
    $nuxt.$store.commit('cart/INIT_DATA', {count:count,tag:1})
    $nuxt.$store.commit('cart/INIT_DATA', {totalPrice:totalPrice,tag:2})
    $nuxt.$store.commit('cart/INIT_DATA', {cartList:cartList,tag:3})
  }
})
