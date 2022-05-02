const ProductController = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api/test", ProductController.test)
    app.get("/api/products", ProductController.allProducts)
    app.post("/api/products", ProductController.createProduct)
    app.get("/api/products/:id", ProductController.findOneProduct)
}