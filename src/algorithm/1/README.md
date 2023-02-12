# 题目地址
https://leetcode.cn/problems/two-sum/

# 题目描述

## 1. 两数之和

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。


###### 示例一

```text
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

###### 示例二

```text
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

###### 示例三

```text
输入：nums = [3,3], target = 6
输出：[0,1]
```

#代码
```js
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
```
