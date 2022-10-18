const express = require("express")

const router = express.Router()

const controller = require("../controller/UserController")

//API paths

router.get("/adduser", controller.addUser)

module.exports = router