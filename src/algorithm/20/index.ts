/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s: string) {
  if(s.length % 2 !== 0) {
      return false
  }

  const map = new Map([
      [')', '('],
      ['}', '{'],
      [']', '['],
  ])
  let stk: string[] = []
  for(let i of s) {
      if(map.has(i)) {
          // 左边的，判断是否可以在stk中匹配
          if(!stk.length || stk[stk.length - 1] !== map.get(i)) {
              return false
          }
          stk.pop()
      }else {
          stk.push(i)
      }
  }

  return !stk.length
};
