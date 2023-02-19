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
