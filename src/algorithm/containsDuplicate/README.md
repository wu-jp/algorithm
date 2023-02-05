# 题目地址
https://leetcode.cn/problems/contains-duplicate/

# 题目描述

```text
给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。

示例 1：

输入：nums = [1,2,3,1]
输出：true

示例 2：

输入：nums = [1,2,3,4]
输出：false

示例 3：

输入：nums = [1,1,1,3,3,4,3,2,4,2]
输出：true
 
提示：

1 <= nums.length <= 105
-109 <= nums[i] <= 109
```

#代码
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
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

```
