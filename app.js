const express = require("express"); 
const bodyParser = require("body-parser"); 
const path = require("path"); 
const session = require("express-session"); 
const helper = require(path.join(__dirname, "util", "helpers")); 
const authRoutes = require(path.join(__dirname, "routes", "auth")); 
const adminRoutes = require(path.join(__dirname, "routes", "admin")); 
const shopRoutes = require(path.join(__dirname, "routes", "store")); 
const ejs = require("ejs"); 




//set up node application through express()
const app = express(); 

//local port for host
const port = 3000; 
//view engine set
app.set("view engine", "ejs"); 

//bodyparser to break down form information
app.use(bodyParser.urlencoded({extended: false})); 

//static files
app.use(express.static(path.join(__dirname, "public"))); 


//routes utilized 
app.use("/admin", adminRoutes);
app.use(shopRoutes); 
app.use(authRoutes); 


//start application/launch site
app.listen(port, () => 
{
    try
    {
        console.log(`Now listening at port ${port}`);
    }
    catch(err)
    {
        helper.handleError(err); 
    }
});





