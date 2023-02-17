export function lengthOfLastWord(s: string): number {
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
}
