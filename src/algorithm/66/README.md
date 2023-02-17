# 题目地址
https://leetcode.cn/problems/plus-one/

# 题目描述

## 66. 加一

给定一个由 **整数** 组成的 **非空** 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储**单个**数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

###### 示例一

```text
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
```

###### 示例二

```text
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
```

###### 示例三

```text
输入：digits = [0]
输出：[1]
```

#代码
```ts
function plusOne(digits: number[]): number[] {

    // 解法1
    let len = digits.length
    for(let i  = len - 1; i >= 0; i--) {
        digits[i] ++
        digits[i] %= 10;
        if(digits[i] != 0) {
            return digits
        }
    }
    digits = [...Array(len + 1)].map(i => 0)
    digits[0] = 1
    return digits

    // 解法2
    /* let res: number[] = []
    for(let i = digits.length - 1; i >= 0; i--) {
        if(i === digits.length - 1) {
            if(digits[i] === 9) {
                if(i===0) {
                    res.push(0)
                    res.push(1)
                }else{
                    res.push(0)
                    digits[i - 1] = digits[i - 1] + 1
                }
            }else {
                res.push(digits[i] + 1)
            }
        }else if(digits[i] === 10) {
            if(i === 0) {
                res.push(0)
                res.push(1)
            }else {
                res.push(0)
                digits[i - 1] = digits[i - 1] + 1
            }
            
        } else {
            res.push(digits[i])
        }
    }
    return res.reverse() */
};
```
