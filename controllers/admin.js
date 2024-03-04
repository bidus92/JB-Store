const path = require("path"); 

exports.getProducts = (req, res, next) =>
{
    res.render(path.join("admin", "admin-products"), 
    {
        title: "Admin Products", 
        path: "/admin/products"
    });
};