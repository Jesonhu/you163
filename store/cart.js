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
    state.count = action.count
    state.list.push(action.nowGood)
  },
  UPDATE_CART(state, action) {
    // 更新购物车商品的数量
  }
}
