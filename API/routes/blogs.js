const router = require("express").Router();
const postController = require("../controllers/blogs");

router.get("", postController.sendBlogs);

module.exports = router;
