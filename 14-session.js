


 // 这个页面 是 老师的 我不会
const http=require('http');
const querystring=require('querystring');
const fs=require('fs');

http.createServer(function(req,res){
    req.cookie=querystring.parse(req.headers.cookie,'; ');
    //没有sessid，生成
    if(!req.cookie.sessid){
        //生成sessid
        req.cookie.sessid=(Date.now())+Math.random();
    }

    //读取session数据
    fs.readFile('abc/'+req.cookie.sessid,function(err,data){
        if(err){
            req.session={};
        }else{
            req.session=JSON.parse(data.toString());
        }

        //处理业务逻辑
        //1. 把sessid写回客户端
        var str='sessid='+req.cookie.sessid+';path=/';
        res.setHeader('set-cookie',str);

        //2. 统计到访次数
        if(req.session.visite){
            req.session.visite++;
        }else{
            req.session.visite=1;
        }
        console.log('到访了'+req.session.visite+'次');

        //session重新写回文件
        fs.writeFile('abc/'+req.cookie.sessid,JSON.stringify(req.session),function(err){
            if(err){
                console.log('session重新写回文件-失败了');
            }else{
                res.end();
            }
        });
    });


}).listen(8081);
