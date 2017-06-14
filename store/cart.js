import { setLocalStore, getLocalStore } from '~plugins/store'

export const state = () => {
  return {
    list: [],
    count: 0
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
    }else if (action.tag === 2) {
      // console.log(action.cartList)
      state.list = action.cartList
    }
  },
  ADD_CART(state, action) {
    // 添加商品到购物车里面
    let isSame = false
    state.count += action.count
    if (state.list.length > 0) { // 购物车里有商品
      state.list.forEach((item, index) => {
          if (item.id === action.nowGood.id) { // 是同一个商品
            if(item.nowSizeId === action.nowGood.nowSizeId && item.nowColorId === action.nowGood.nowColorId) { // 同一个商品相同类型
              // console.log('同一个商品且类型相同');
              item.count++
            } else { // 同一个商品不同类型
              isSame = true
            }
          } else { // 不是同一个商品
            isSame = true
          }
      })
      if (isSame) {
        state.list.push(action.nowGood)
      }
    } else { // 购物车里没有商品
      state.list.push(action.nowGood)
    }
    // 添加到本地存储
    setLocalStore('count', state.count)
    setLocalStore('cartList', state.list)
  },
  UPDATE_CART(state, action) {
    if (action === 1) {
      state.count++
    } else if(action === 0) {
      state.count--
    }
  },
  REMOVE_CART(state, action) {
    state.list.splice(action,1)
    if (state.list.length > 0) {
      state.list.forEach((item) => {
        state.count = item.count
      })
    } else {
      state.count = 0
    }
    // 添加到本地存储
    setLocalStore('count', state.count)
    setLocalStore('cartList', state.list)
  }
}
