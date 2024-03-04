const path = require("path"); 
const rootDir = require(path.join(__dirname, "..", "util", "root-dir")); 

const express = require("express"); 

const authController = require(path.join(rootDir, "controllers", "auth"));



const router = express.Router(); 

router.get("/login", authController.getLogin); 
router.get("/signup", authController.getSignup); 



module.exports = router; 