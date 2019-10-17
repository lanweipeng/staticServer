/*
 * @Description: Do not edit
 * @Github: https://github.com/lanweipeng
 * @Author: lwp
 * @Date: 2019-10-17 15:49:52
 * @LastEditors: lwp
 * @LastEditTime: 2019-10-17 17:02:18
 */
const http=require('http');
const fs=require('fs');
const path=require('path');
const options={
    host:'localhost',
    port:3000
}
console.log('http://'+options.host+':'+options.port);

const readFile=(res,route)=>{
    const url=path.join(__dirname,route);
    console.log(url)
    fs.readFile(url,(err,content)=>{
        if(err){
            res.end('500 server err')
        }else{
            res.end(content)
        }
        })
}
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        readFile(res,'index.html');

    }else{
        readFile(res,'404.html')
    }
    // res.end('hh')
});
server.listen(options.port)