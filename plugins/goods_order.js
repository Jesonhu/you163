export default function (totalAllPrice) {
  const date = new Date(),
               year = date.getFullYear(),
               month = date.getMonth()+1,
               day = date.getDate(),
               hour = date.getHours(),
               min = date.getMinutes(),
               sec = date.getSeconds(),
               uId = '12',
               handleYear = addZero(year, 2),
               handleMonth = addZero(month, 2),
               handleDay = addZero(day, 2),
               handleHour = addZero(hour, 2),
               handleMin = addZero(min, 2),
               handleSec = addZero(sec, 2)

  const goodsNumber =  `${handleYear}${handleMonth}${handleDay}${handleHour}${handleMin}${handleSec}${uId}`   
  if (totalAllPrice) {
    return('提示', `商品订单号:${goodsNumber} 总额：${totalAllPrice}元`)
  } else {
    return('提示', '未选择商品');
  }

  function addZero(time, length) {
    let str = time.toString()
    while (str.length < length){
        str = `0${time}`
    }
    return str
  }                  
}
