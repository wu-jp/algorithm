# 题目地址
https://leetcode.cn/problems/longest-common-prefix/

# 题目描述

## 14. 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

###### 示例一

```text
输入：strs = ["flower","flow","flight"]
输出："fl"
```

###### 示例二

```text
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```

#代码
```ts
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs: string) {
  if(strs.length === 0) {
      return ''
  }

  // 解法1
  /* let res = ''
  for(let i = 0; i < strs[0].length; i++) {
      for(let j = 1; j < strs.length; j++) {
          if(strs[j][i] !== strs[0][i]) {
              return res
          }
      }
      res += strs[0][i]
  }
  return res */



  // 解法2
  let one = strs[0]
  for(let i = 1; i<strs.length; i++) {
      let j = 0
      for(; j< one.length && j<strs[i].length;j++) {
          if(strs[i][j] != one[j]) break
      }
      one = one.substr(0, j)
      if(one === '') return one
  }
  return one
};


```
