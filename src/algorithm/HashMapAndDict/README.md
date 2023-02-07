# 题目地址
https://leetcode.cn/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/

# 题目描述

力扣公司的员工都使用员工卡来开办公室的门。每当一个员工使用一次他的员工卡，安保系统会记录下员工的名字和使用时间。如果一个员工在一小时时间内使用员工卡的次数大于等于三次，这个系统会自动发布一个 警告 。

给你字符串数组 keyName 和 keyTime ，其中 [keyName[i], keyTime[i]] 对应一个人的名字和他在 某一天 内使用员工卡的时间。

使用时间的格式是 24小时制 ，形如 "HH:MM" ，比方说 "23:51" 和 "09:49" 。

请你返回去重后的收到系统警告的员工名字，将它们按 字典序升序 排序后返回。

请注意 "10:00" - "11:00" 视为一个小时时间范围内，而 "23:51" - "00:10" 不被视为一小时内，因为系统记录的是某一天内的使用情况。


###### 示例一

```text
输入：keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"], keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
输出：["daniel"]
解释："daniel" 在一小时内使用了 3 次员工卡（"10:00"，"10:40"，"11:00"）
```

###### 示例二
```text
输入：keyName = ["alice","alice","alice","bob","bob","bob","bob"], keyTime = ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]
输出：["bob"]
解释："bob" 在一小时内使用了 3 次员工卡（"21:00"，"21:20"，"21:30"）
```

###### 示例三
```text
输入：keyName = ["john","john","john"], keyTime = ["23:58","23:59","00:01"]
输出：[]
```


###### 示例四
```text
输入：keyName = ["leslie","leslie","leslie","clare","clare","clare","clare"], keyTime = ["13:00","13:20","14:00","18:00","18:51","19:30","19:49"]
输出：["clare","leslie"]
```

#代码
```js
/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
    var obj = {}
    keyName.forEach((name, i) => {
        if(!obj[name]) {
            obj[name] = []
        }
        const time = keyTime[i]
        const hour = (time[0].charCodeAt() - '0'.charCodeAt()) * 10 + (time[1].charCodeAt() - '0'.charCodeAt())
        const minute = (time[3].charCodeAt() - '0'.charCodeAt()) * 10 + (time[4].charCodeAt() - '0'.charCodeAt())
        obj[name].push(hour * 60 + minute)
    })

    let res = [];

    for(let prop in obj) {
        // console.log(prop)
        const list = obj[prop]
        list.sort((a, b) => a - b);
        const size = list.length;
        for (let i = 2; i < size; i++) {
            const time1 = list[i - 2], time2 = list[i];
            const difference = time2 - time1;
            if (difference <= 60) {
                res.push(prop);
                break;
            }
        }
    }
    res.sort();
    return res
};

```
