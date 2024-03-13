const http=require("http");
http.createServer((req,resp)=>{
    resp.write("ritik");
    resp.end();
}).listen(302);