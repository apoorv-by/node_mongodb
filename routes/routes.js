const express = require("express")
const { route } = require("express/lib/router")

const router = express.Router()

const controller = require("../controller/UserController")

//API paths

router.post("/adduser", controller.addUser)
router.get("/getuser", controller.getUser)
router.get("/getuserbyname", controller.getUserByName)
router.get("/get-name-age", controller.getNameAndAge)
router.get("/find-regex", controller.findRegex)
router.put("/update-age", controller.updateAge)
router.put("/increment-age", controller.incrementAge)
router.delete("/delete-user",controller.deleteUserByName)

module.exports = router