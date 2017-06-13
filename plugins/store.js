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
            window.localStorage.setItem(key, JSON.stringify(initDataArr))
            // console.log(1)
        } else {
            // console.log(2)
            let currStoreArr = JSON.parse(window.localStorage.getItem(key)) // 当前本地存储数组的格式
            currStoreArr.push(val)
            window.localStorage.setItem(key, JSON.stringify(currStoreArr))
        }
    } else if(typeof val == 'number') { // 传过来数据为数字,保存为数字字符串
        window.localStorage.setItem(key, val)
    }
}
export function getLocalStore(key, action) {
    const store = localStorage.getItem(key)
    console.log(store)
    if (action === 1) { // 返回结果为数字
        return Number(store)
    } else if(action === 2) { // 返回结果为数组
        return JSON.parse(store)
    }
}