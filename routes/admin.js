const path = require("path"); 
const rootDir = require(path.join(__dirname, "..", "util", "root-dir")); 

const express = require("express"); 

const adminController = require(path.join(rootDir, "controllers", "admin"));


const router = express.Router(); 




router.get("/products", adminController.getProducts); 

module.exports = router; 