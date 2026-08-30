const http = require('http');
const PORT = 4000;
const Server = http.createServer((req, res) => {
    console.log(`Request recerived for :${req.url}`);
    res.setHeader('Content-Type', 'text-html')

    if (req.url === '/') {
        res.statusCode = 200
        res.end("<--------WELCOME TO NODE SERVER--------->")
    } else if (req.url === '/about') {
        res.statusCode = 200
        res.end("------About Page--------")
    } else if (req.url === '/contact') {
        res.statusCode = 200
        res.end("------Conatact Page--------")
    } else {
        res.statusCode = 404
        res.end('404 ERROR : Page not found')
    }
})
Server.listen(PORT, () => {
    console.log("Server is running on Port:", PORT);

})

