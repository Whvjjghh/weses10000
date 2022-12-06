const http = require("htttp");

const server = http.createServer((request, response) => {
    response.end("hello form nodejs server");
});

const port = 3000;
const ip = "127.o.o.1";

server.listen(port, ip,  () => {
    console.log(`server is running at http://${ip}:${port}`);


});