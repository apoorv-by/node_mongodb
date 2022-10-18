//importing express module
const express = require("express")

// initializing exrpess app

const app = express()

app.listen(3000, () => {
    console.log("Server running on port 3000")
})

app.use("/", (req,res) => {res.send("Welcome to node application")})