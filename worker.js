/*
 * @Author: your name
 * @Date: 2021-10-03 16:01:25
 * @LastEditTime: 2021-10-07 11:17:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /timeslicing/worker.js
 */
// self 类似主线程中的 window
self.onmessage = function(e) {
    let sum = e.data.number;
    while (sum  < 1000000000) {
      sum++;
      }
    self.postMessage({sum});
};
  