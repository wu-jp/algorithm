/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs: string) {
  if(strs.length === 0) {
      return ''
  }

  // 解法1
  /* let res = ''
  for(let i = 0; i < strs[0].length; i++) {
      for(let j = 1; j < strs.length; j++) {
          if(strs[j][i] !== strs[0][i]) {
              return res
          }
      }
      res += strs[0][i]
  }
  return res */



  // 解法2
  let one = strs[0]
  for(let i = 1; i<strs.length; i++) {
      let j = 0
      for(; j< one.length && j<strs[i].length;j++) {
          if(strs[i][j] != one[j]) break
      }
      one = one.substr(0, j)
      if(one === '') return one
  }
  return one
};
