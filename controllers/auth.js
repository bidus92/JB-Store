const path = require("path"); 
// const getDb = require(path.join(rootDir, "util", "database"));


exports.getLogin = (req, res, next) =>
{
    res.render(path.join("auth", "login"), 
    {
        title: "Login", 
        path: "/login"
    });
};

exports.getSignup = (req, res, next) =>
{
    res.render(path.join("auth", "signup"), 
    {
        title: "Sign Up", 
        path: "/signup"
    });
};