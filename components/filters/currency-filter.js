/**
 * 页面价格转换为货币格式过滤器
 */

// 价格前面加上人民币符号
export const rmb = (val, str, hasSymbol) => {
  if (str > 0 && typeof hasSymbol === 'undefined' ) {
    return `¥${val}.00`;
  } else if (str > 0 && !hasSymbol) {
    return `${val}.00`;
  } else {
    return `¥${val}`;
  }
}
