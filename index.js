const express = require("express");
const app = express();
const PORT = 3000;

//Routes
app.get("/", (req, res) => {
  res.send("hello , Nahid, from Docker in node");
});

//start the server
app.listen(PORT, () => {
  console.log(`Server running on localhost port at ${PORT}`);
});
