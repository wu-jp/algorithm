/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
  this.timeToLive = timeToLive
  this.map = new Map()
};

/**
* @param {string} tokenId
* @param {number} currentTime
* @return {void}
*/
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
  this.map.set(tokenId, currentTime + this.timeToLive)
};

/**
* @param {string} tokenId
* @param {number} currentTime
* @return {void}
*/
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
  if(this.map.get(tokenId) > currentTime) {
      this.map.set(tokenId, currentTime + this.timeToLive)
  }
};

/**
* @param {number} currentTime
* @return {number}
*/
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
  let res = 0
  for( const time of this.map.values()) {
      if(time > currentTime) {
          res++
      }
  }
  return res
};
