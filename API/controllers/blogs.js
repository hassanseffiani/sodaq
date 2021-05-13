const data = require("../data/db.json");

exports.sendBlogs = (req, res, next) => {
  // business logic
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
};
