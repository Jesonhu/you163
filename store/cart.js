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
  ADD_CART(state, action) {
    // 添加商品到购物车里面
    let isSame = false
    state.count++
    if (state.list.length > 0) { // 购物车里有商品
      state.list.forEach((item, index) => {
          if (item.id === action.nowGood.id) { // 是同一个商品
            if(item.nowSizeId === action.nowGood.nowSizeId && item.nowColorId === action.nowGood.nowColorId) { // 同一个商品相同类型
              console.log('同一个商品且类型相同');
            } else { // 同一个商品不同类型
              isSame = true
            }
            console.log(0)
          } else { // 不是同一个商品
            isSame = true
            console.log(1)
          }
      })
      if (isSame) {
        state.list.push(action.nowGood)
      }
    } else { // 购物车里没有商品
      state.list.push(action.nowGood)
    }
  },
  UPDATE_CART(state, action) {
    // 更新购物车商品的数量
  }
}
