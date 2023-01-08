module.exports = function reverse (n) {
  const changeString= Math.abs(n).toString();
  let newString = '';
  for (let i = changeString.length - 1; i >= 0; i--){
   newString = newString + changeString[i];
  } 
  return +newString;
}
