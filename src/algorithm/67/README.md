# 题目地址
https://leetcode.cn/problems/add-binary/

# 题目描述

## 67. 二进制求和

给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。

###### 示例一

```text
输入:a = "11", b = "1"
输出："100"
```

###### 示例二

```text
输入：a = "1010", b = "1011"
输出："10101"
```


#代码
```ts
function addBinary(a: string, b: string): string {
    let ans = "";
    let ca = 0;
    for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) {
        let sum = ca;
        sum += i >= 0 ? parseInt(a[i]) : 0;
        sum += j >= 0 ? parseInt(b[j]) : 0;
        ans += sum % 2;
        ca = Math.floor(sum / 2);
    }
    ans += ca == 1 ? ca : "";
    return ans.split('').reverse().join('');
};
```
