/**
 * 场景:添加到购物购物车的商品保存到本地存储
 * 添加到本地存储 localStorage
 */
export function setLocalStore(key, val) {
    const store = window.localStorage.getItem(key)
    if ( typeof val == 'object' ) { // 传过来的数据为对象格式保存为数组格式
        let initDataArr = []
        initDataArr.push(val)
        if (store == null) { // 不存在
            window.localStorage.removeItem(key)
            window.localStorage.setItem(key, JSON.stringify(val))
        } else {
            let currStoreArr = JSON.parse(window.localStorage.getItem(key)) // 当前本地存储数组的格式
            currStoreArr.push(val)
            window.localStorage.setItem(key, JSON.stringify(val))
        }
    } else if(typeof val == 'number') { // 传过来数据为数字,保存为数字字符串
        window.localStorage.setItem(key, val)
    }
}
export function getLocalStore(key, action) {
    const store = localStorage.getItem(key)
    if (!(typeof store ==null)) {
      if (action === 1) { // 返回结果为数字
          return Number(store)
      } else if(action === 2) { // 返回结果为数组
          return JSON.parse(store)
      }
    }
}
