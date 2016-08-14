// 这一页 改用 世界 统一时间，来设置过期时间
const http=require('http');
const querystring=require('querystring');
const urlLib=require('url');

http.createServer(function(req,res){

    var oDate=new Date();
    oDate.setDate(oDate.getDate()+1);
    res.setHeader('set-cookie','b=12; expires='+oDate.toUTCString());

    req.cookie=querystring.parse(req.headers.cookie,'; ');
    console.log(req.cookie);

    res.end('over');
}).listen(8081);
