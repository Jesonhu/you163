export const wan = (val) => {
  const nVal = Number(val);
  if (nVal >=1000) {
    return `999+`;
  } else {
    return val;
  }
}
