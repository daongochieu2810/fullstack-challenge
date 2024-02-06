const http = require('http');
const url = require('url');

function handleRequest(request, response) {
    console.log(`[${new Date().toLocaleString()}] ${request.method} ${request.url}`);
    const parsedUrl = url.parse(request.url, true);

    if (parsedUrl.pathname === '/') {
        // Root route
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Welcome to the root page!');
    } else if (parsedUrl.pathname === '/about') {
        // About route
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('About Us: This is a simple HTTP server created with Node.js.');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('404 Not Found: The requested page does not exist.');
    }
}

// Create an HTTP server
const server = http.createServer(handleRequest);
const port = 4000;

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});
