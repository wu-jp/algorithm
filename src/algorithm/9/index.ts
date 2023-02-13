/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // return `${x}` === `${x}`.split('').reverse().join('')

  // x不小于0，或者 x的个位不是0
  /* if(x<0 || (!(x%10) && x)) {
      return false
  }
  let s = String(x)
  let res = ''
  for(let i = s.length -1; i>=0 ;i--) {
      res += s[i]
  }
  return s === res */

  if(x<0 || (!(x%10) && x)) {
      return false
  }

  let temp = x, res = 0
  while(temp) {
      res = res * 10 + temp % 10
      temp = ~~(temp / 10)
  }
  return x === res

};
