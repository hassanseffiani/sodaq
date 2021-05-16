const router = require("express").Router();
const linkController = require("../controllers/links");

router.get("", linkController.sendLink);

module.exports = router;
