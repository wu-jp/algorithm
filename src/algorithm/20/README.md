# 题目地址
https://leetcode.cn/problems/valid-parentheses/

# 题目描述

## 20. 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。

###### 示例一

```text
输入：s = "()"
输出：true
```

###### 示例二

```text
输入：s = "()[]{}"
输出：true
```

###### 示例三

```text
输入：s = "(]"
输出：false
```

#代码
```ts
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s: string) {
  if(s.length % 2 !== 0) {
      return false
  }

  const map = new Map([
      [')', '('],
      ['}', '{'],
      [']', '['],
  ])
  let stk: string[] = []
  for(let i of s) {
      if(map.has(i)) {
          // 左边的，判断是否可以在stk中匹配
          if(!stk.length || stk[stk.length - 1] !== map.get(i)) {
              return false
          }
          stk.pop()
      }else {
          stk.push(i)
      }
  }

  return !stk.length
};

```
