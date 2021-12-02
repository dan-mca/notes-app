const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes.js")
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    const app = express();

    const corsOptions = {
      origin: "http://localhost:3000"
    };
    app.use(cors(corsOptions));
    
    app.use(express.json());
    app.use("/api", routes);

    const port = process.env.PORT || 5000;

    if(process.env.NODE_ENV === "production") {
      app.use(express.static(path.join("client/build")));
      app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
      })
    }

    app.listen(port, () => {
      console.log(`Server has started on port: ${port}`)
    })
  })