// Import required modules
const http = require('http');
const url = require('url');

// Function to handle HTTP requests
function handleRequest(request, response) {
    // Log the request method and URL
    console.log(`[${new Date().toLocaleString()}] ${request.method} ${request.url}`);

    // Parse the requested URL
    const parsedUrl = url.parse(request.url, true);

    // Routing based on the pathname
    if (parsedUrl.pathname === '/') {
        // Root route
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Welcome to the root page!');
    } else if (parsedUrl.pathname === '/about') {
        // About route
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('About Us: This is a simple HTTP server created with Node.js.');
    } else {
        // Handle non-existing routes with a 404 status code
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('404 Not Found: The requested page does not exist.');
    }
}

// Create an HTTP server
const server = http.createServer(handleRequest);

// Specify the port to listen on
const port = 4000;

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});
