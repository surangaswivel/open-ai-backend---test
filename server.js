const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/api/chat/", require("./routes/openApiRoutes"));

app.listen(5000, () => {
  console.log("server is running");
});
