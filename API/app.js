// require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
// const blogRoutes = require("./routes/blogs");
const app = express();

// creating a static file to find an image
app.use(express.static(path.join(__dirname, "Public/Images")));
app.use(cors());
// to parse data forom post method
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/api/blog", blogRoutes);

module.exports = app;
