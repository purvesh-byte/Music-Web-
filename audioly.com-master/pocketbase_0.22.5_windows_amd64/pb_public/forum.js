const http = require('http'); // Import the HTTP module

// Define the HTML content
const htmlContent = `

`;
// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response status code
    res.statusCode = 200;
    // Set the Content-Type header to indicate HTML content
    res.setHeader('Content-Type', 'text/html');
    // Write the HTML content to the response
    res.end(htmlContent);
});

// Start the server and listen on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});