const path = require("path"); 
// const getDb = require(path.join(rootDir, "util", "database"));


exports.getIndex = (req, res, next) =>
{
    res.render(path.join("client", "index"), 
    {
        title: "Shop", 
        path: "/"
    });
};

exports.getProducts = (req, res, next) =>
{
    res.render(path.join("client", "products"), 
    {
        title: "Products", 
        path: "/products"
    });
};

exports.getCart = (req, res, next) =>
{
    res.render(path.join("client", "products"), 
    {
        title: "Cart", 
        path: "/cart"
    });
};

exports.getOrders = (req, res, next) =>
{
    res.render(path.join("client", "products"), 
    {
        title: "Orders", 
        path: "/orders"
    });
};