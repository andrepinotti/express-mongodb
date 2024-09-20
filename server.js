import http from "http";

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("Your server is running!");
});

server.listen(3000, () => {
    console.log('Server listening!');
});