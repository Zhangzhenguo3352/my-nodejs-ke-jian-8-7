
//这个 页面 path.normalize('不合法的路径') 让路径变成 ，合法路径
var path = require('path');
var str = 'a///sds//sds////b///saas';
console.log(path.normalize(str)); //   a/sds/sds/b/saas
