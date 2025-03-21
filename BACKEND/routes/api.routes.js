const router = require("express").Router()
const signup = require("../controller/auth/signup.js")
const google = require("../controller/auth/google.js")

router.post('/signup', signup)
router.post('/login', login)
router.get('/google',google)


router.get("/ping", (req, res) => {
    res.json({ success: "true", message: "successful request" });
  });
  

module.exports = router