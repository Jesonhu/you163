/**
 * 页面价格转换为货币格式过滤器
 */

// 价格前面加上人民币符号
export const rmb = (val) => {
  return `¥${val}`;
};
