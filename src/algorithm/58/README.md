# 题目地址
https://leetcode.cn/problems/length-of-last-word/

# 题目描述

## 58. 最后一个单词的长度

给你一个字符串 `s`，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 **最后一个** 单词的长度。

**单词** 是指仅由字母组成、不包含任何空格字符的最大子字符串。

###### 示例一

```text
输入：s = "Hello World"
输出：5
解释：最后一个单词是“World”，长度为5。
```

###### 示例二

```text
输入：s = "   fly me   to   the moon  "
输出：4
解释：最后一个单词是“moon”，长度为4。
```

###### 示例三

```text
输入：s = "luffy is still joyboy"
输出：6
解释：最后一个单词是长度为6的“joyboy”。
```

#代码
```ts
function lengthOfLastWord(s: string): number {
    // 解法1
    /* let end = s.length - 1
    let sta = 0
    let flag = true 
    while((sta === 0 || flag) && end >= 0) {
        if(s[end] == ' ') {
            flag = false
        }else {
            sta ++
            flag = true
        }
        end --
    }
    return sta */

    // 解法2
    let end = s.length - 1
    while(end >= 0 && s[end] == ' '){
        end --
    }
    if(end < 0) return 0

    let start = end
    while(start >= 0 && s[start] != ' ') start--

    return end - start
};
```
