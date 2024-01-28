const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

// router
const tranRoute = require("./Routes/tran");

// middleware
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api", tranRoute);

app.listen(5000, () => console.log("runner server port 5000"));
