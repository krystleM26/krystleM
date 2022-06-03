require('dotenv').config()
const express = require("express")

const server = express()
server.use(express.json())



const PORT = process.env.PORT || 4000;

server.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    // res.sendFile('<div>hello world</div>');
})

server.listen(PORT, console.log(`Server running on port ${PORT}`))
