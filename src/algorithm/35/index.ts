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
