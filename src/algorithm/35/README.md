# 题目地址
https://leetcode.cn/problems/search-insert-position/

# 题目描述

## 35. 搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
请必须使用时间复杂度为 O(log n) 的算法。

###### 示例一

```text
输入: nums = [1,3,5,6], target = 5
输出: 2
```

###### 示例二

```text
输入: nums = [1,3,5,6], target = 2
输出: 1
```

###### 示例三

```text
输入: nums = [1,3,5,6], target = 7
输出: 4
```

#代码
```ts
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
        // 解法1
        /* let res = 0
        for(let i = 0; i<nums.length; i++) {
            if(nums[i] === target) {
                return i
            }else if(nums[i] < target){
                res = i + 1
            }
        }
        return res */


        // 解法2 二分法
        let n = nums.length
        let l = 0
        let r = n - 1
        let res = n

        while(l <= r) {
            let mid = Math.floor((r+l)/2)
            if(target <= nums[mid]) {
                res = mid
                r = mid - 1
            }else {
                l = mid + 1
            }
        }
        return res
    };

```
