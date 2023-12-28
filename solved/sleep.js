/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

/** 
 * 
 *  // 100
 */

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t))