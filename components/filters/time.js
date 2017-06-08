export const time1 = (val) => {
  let newDate = new Date();
  newDate.setTime(val);
  return newDate.toLocaleDateString();
}
