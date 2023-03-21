const http = require('http');  //cổng kết nối http
const server = http.createServer(function(request ,response){
    if (request.url == "/about") {
        response.end(`<h1> chao bao huyh</h1>`)
    }
});// tạo server
server.listen(8080, function (){
    console.log("bạn đã kết nối công 8080");
})
  