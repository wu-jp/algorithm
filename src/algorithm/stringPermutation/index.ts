/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  const res: string[] = []
  const visited: boolean[] = []

  const n = s.length
  const arr = Array.from(s).sort()
  const perm = []

  const handle = (arr, i, n, perm) => {
      if(i===n) {
          res.push(perm.toString())
          return
      }

      for(let j = 0; j<n; j++) {
          if(visited[j] || (j>0 && !visited[j - 1] && arr[j-1] === arr[j])) {
              continue
          }

          visited[j] = true
          perm.push(arr[j])
          handle(arr, i+1, n ,perm)
          perm.pop()
          visited[j] = false
      }
  }

  handle(arr, 0, n, perm)
  const size = res.length
  const resArr = new Array(size).fill(0)
  for(let i = 0; i<size;i++) {
      resArr[i] = res[i].split(',').join('')
  }

  return resArr
};
