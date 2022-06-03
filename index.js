require('dotenv').config()
const express = require("express")

const server = express()
server.use(express.json())


server.get('/api/contacts', (req,res) => {
    res.json([
        { id: 1, firstname: "Krystle", message: "Don't give up"}
    ])
    // res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    // res.sendFile('<div>hello world</div>');
})

const PORT = process.env.PORT || 4000;


server.listen(PORT, console.log(`Server running on port ${PORT}`))
