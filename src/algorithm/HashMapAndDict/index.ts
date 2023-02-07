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
