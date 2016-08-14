
// 这个页面 讲解了 利用 urlLib.resolve(url,'最后的参数修改成什么') 修改掉了 最后的参数
const urlLib = require('url');

var url = 'http://www.baidu.com/one/th';
//         http://www.baidu.com/one/xxx

console.log(urlLib.resolve(url,'xxx')) // 修改 了最后的参数
