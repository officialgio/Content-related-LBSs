require("dotenv").config();

const path = require("path");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

function startServer() {
  // TODO: Add GraphQL Server configurations here

  // app configs
  app.use(express.json());
  app.use(express.static(path.join(__dirname, "..", "public")));

  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
}

startServer();
