import { setLocalStore, getLocalStore } from '~plugins/store'

export const state = () => {
  return {
    list: [],
    count: 0,
    totalPrice: 0
  }
}
// export const state = {
//   list: [],
//   count: 0
// }

export const mutations = {
  INIT_DATA(state,action) {
    if (action.tag === 1) {
      // console.log(action.count)
      state.count = action.count
    }else if (action.tag === 3) {
      // console.log(action.cartList)
      state.list = action.cartList
    } else if(action.tag === 2) {
      state.totalPrice = action.totalPrice
    }
  },
  ADD_CART(state, action) {
    // 添加商品到购物车里面
    let isSame = false // 是push还是count增加
    let nowCartListLength = state.list.length
    state.totalPrice = 0
    
    if (state.list.length > 0) { // 购物车里有商品
      state.list.forEach((item, index) => {
        if (item.id === action.nowGood.id) { // 是同一个商品
          if(item.nowSizeId === action.nowGood.nowSizeId && item.nowColorId === action.nowGood.nowColorId) { // 同一个商品相同类型
            item.count += action.nowGood.count
            isSame = true
            // console.log('同一个商品且类型相同')
            // console.log(item.count)
          }
        }
      })
      // console.log(state.list)
      if (!isSame) {
        state.list.push(action.nowGood)
        // console.log('push')
      }
    } else { // 购物车里没有商品
      state.list.push(action.nowGood)
    }
    state.count += action.count
    // console.log(state.list)
    state.list.forEach((item) => {
      state.totalPrice += item.retailPrice * item.count
    })
    // 添加到本地存储
    setLocalStore('count', state.count)
    setLocalStore('cartList', state.list)
    setLocalStore('totalPrice', state.totalPrice)
  },
  UPDATE_CART(state, action) {
    if (action === 1) {
      state.count++
    } else if(action === 0) {
      state.count--
    }
  },
  REMOVE_CART(state, action) {
    state.totalPrice = 0
    state.count = 0
    state.list.splice(action,1)
    if (state.list.length > 0) {
      state.list.forEach((item) => {
        state.count += item.count
        state.totalPrice += item.retailPrice * item.count
      })
    } else {
      state.count = 0
    }
    // 添加到本地存储
    setLocalStore('count', state.count)
    setLocalStore('totalPrice', state.totalPrice)
    setLocalStore('cartList', state.list)
  }
}
