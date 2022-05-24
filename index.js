require('dotenv').config()
const path = require('path')

const express = require("express")

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, "client/build")))

server.get('*', (req,res) => {
    // res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    res.sendFile('<div>hello world</div>');
})

const PORT = process.env.PORT || 4000;





server.listen(PORT, console.log('Server running on port ${PORT}'))
