/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 题解1
  /* let res = []
  const handle = (i, nums) => {
      for(let j = i+1; j<nums.length;j++) {
          if(nums[i] + nums[j] === target){
              return j
          }
      }
  }
  for(let i = 0; i<nums.length; i++) {
      res[0] = i
      if(handle(i, nums)) {
          res[1] = handle(i, nums)
          return res
      }

  } */

  // 题解2
  /* let obj = {}
  for(let i = 0; i<nums.length;i++) {
      let a = nums[i] // 当前循环的只
      let b = target - a //需要找的值
      console.log(obj[b])
      if(obj[b] !== undefined) {
          return [obj[b], i]
      }
      else {
          obj[a] = i
      }
  } */

  // 题解3
  let map = new Map()
  for(let i = 0; i<nums.length;i++){
      if(map.has(target - nums[i])) {
          return [map.get(target - nums[i]), i]
      }else {
          map.set(nums[i], i)
      }
  }

};
