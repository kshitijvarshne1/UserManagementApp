const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("User Management System");
});

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:${3000}`);
});
