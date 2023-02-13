/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // 解法1
  /* const map = new Map()
  map.set('I', 1)
  map.set('V', 5)
  map.set('X', 10)
  map.set('L', 50)
  map.set('C', 100)
  map.set('D', 500)
  map.set('M', 1000)
  const n = s.length
  let res = 0
  for(let i = 0; i<n; i++) {
      const value = map.get(s[i])
      if(i<n-1 && value < map.get(s[i+1])) {
          res -= value
      }else {
          res += value
      }
  }
  return res */

  // 解法2
  /* const map = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  }
  const n = s.length
  let res = 0
  for(let i = 0; i<n; i++) {
      const value = map[s[i]]
      if(i<n-1 && value < map[s[i+1]]) {
          res -= value
      }else {
          res += value
      }
  }
  return res */

  // 解法3
  const map = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  }
  const n = s.length
  let res = 0
  for(let i = 0; i<n;) {
      const value = map[s[i]]
      if(i<n-1 && value < map[s[i+1]]) {
          res += map[s[i+1]] - value
          i+= 2
      }else {
          res += value
          i++
      }
  }
  return res

};
