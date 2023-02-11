/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount: number[]) {
  // amount.sort((a,b) => a-b)
  // if(amount[2] > amount[1] + amount[0]) {
  //     return amount[2]
  // }
  // return Math.ceil((amount[0] + amount[1] + amount[2])/2)

  let sum = amount.reduce((a,b) => a + b)
  let max = Math.max(...amount)
  return Math.max(max, Math.ceil(sum/2))
};
