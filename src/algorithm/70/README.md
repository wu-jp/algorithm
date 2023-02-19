# 题目地址
https://leetcode.cn/problems/climbing-stairs/

# 题目描述

## 70. 爬楼梯

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

###### 示例一

```text
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```

###### 示例二

```text
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
```


#代码
```ts
// 解法1：记忆化递归
/* let map = new Map()
function climbStairs(n: number): number {
    if(map.has(n)) {
        return map.get(n)
    }
    if(n === 1) {
        map.set(n, 1)
    }else if(n === 2) {
        map.set(n, 2)
    } else {
        map.set(n, climbStairs(n - 1) + climbStairs(n -2))
    }
    return map.get(n)
};
 */

// 解法2：动态规划
function climbStairs(n: number): number {
    let p: number = 0, q: number = 0, r: number = 1;
    for (let i = 1; i <= n; ++i) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};
```
