const path = require("path"); 
const rootDir = require(path.join(__dirname, "..", "util", "root-dir")); 

const express = require("express"); 

const storeController = require(path.join(rootDir, "controllers", "store"));


const router = express.Router(); 




router.get("/", storeController.getIndex); 
router.get("/products", storeController.getProducts); 
router.get("/cart", storeController.getCart); 
router.get("/orders", storeController.getOrders); 


module.exports = router; 