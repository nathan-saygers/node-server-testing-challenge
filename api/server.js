const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const holdsRouter = require("../holds/holds-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/holds", holdsRouter);

server.get("/", (req, res) => {
  res.send("sweet send");
});

module.exports = server;
