export function plusOne(digits: number[]): number[] {

    // 解法1
    let len = digits.length
    for(let i  = len - 1; i >= 0; i--) {
        digits[i] ++
        digits[i] %= 10;
        if(digits[i] != 0) {
            return digits
        }
    }
    digits = [...Array(len + 1)].map(() => 0)
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
}
