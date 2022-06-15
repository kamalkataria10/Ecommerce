const express = require("express")
const { registerUser, forgotPassword, resetPassword, logout }= require('../controllers/userController')
const { loginUser }= require('../controllers/userController')
const router= express.Router()


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(logout)
router.route("/password/forgot").post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword)
module.exports = router