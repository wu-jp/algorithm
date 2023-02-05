var containsDuplicate = function(nums) {
  // 方法1：
  /* for(let i = 0; i < nums.length; i++) {
      let n = nums[i]
      for(let j = i + 1; j<nums.length;j++) {
          let c = nums[j]
          if(c === n) {
              return true
          }
      }
  }
  return false */

  // 方法2：
  /* const obj = {}
  for(let i = 0; i<nums.length;i++) {
      let n = nums[i]
      if(obj[n]){
          return true
      }
      obj[n] = true
  }
  return false */

  // 方法3：
  const distinct = [...new Set(nums)]
  return distinct.length !== nums.length

  // 方法4：
  /* const distinct = new Set(nums)
  return distinct.size !== nums.length */
};

containsDuplicate([1,2,3,1])
