# 题目地址
https://leetcode.cn/problems/palindrome-number/

# 题目描述

## 9. 回文数

给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

例如，121 是回文，而 123 不是。


###### 示例一

```text
输入：x = 121
输出：true
```

###### 示例二

```text
输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

###### 示例三

```text
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
```

#代码
```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // return `${x}` === `${x}`.split('').reverse().join('')

    // x不小于0，或者 x的个位不是0
    /* if(x<0 || (!(x%10) && x)) {
        return false
    }
    let s = String(x)
    let res = ''
    for(let i = s.length -1; i>=0 ;i--) {
        res += s[i]
    }
    return s === res */

    if(x<0 || (!(x%10) && x)) {
        return false
    }

    let temp = x, res = 0
    while(temp) {
        res = res * 10 + temp % 10
        temp = ~~(temp / 10)
    }
    return x === res

};
```
