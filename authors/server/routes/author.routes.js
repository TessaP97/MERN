const AuthorController = require("../controllers/author.controller")

module.exports = app => {
    app.get("/api/test", AuthorController.test)
    app.get("/api/authors", AuthorController.allAuthors)
    app.post("/api/authors/new", AuthorController.createAuthor)
    app.get("/api/authors/:author_id", AuthorController.oneAuthor)
    app.put("/api/authors/:author_id", AuthorController.updateAuthor)
    app.delete("/api/authors/:author_id", AuthorController.deleteAuthor)
}
