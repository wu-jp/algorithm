
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(!nums.length) return 0

    // 解法1
    /* for(let i = 0; i<nums.length;) {
        if(nums[i] === val) {
            nums.splice(i, 1)
        }else {
            i++
        }
    }
    return nums.length */

    // 解法2
    /* let res = nums.length
    for(let i = 0; i<res;) {
        if(nums[i] == val){
            nums[i] = nums[res - 1]
            res --
        }else {
            i++
        }
    }
    return res */

    // 解法3
    let res = 0
    for(let num of nums) {
        if(num != val) {
            nums[res] = num
            res ++

        }
    }
    return res
};
