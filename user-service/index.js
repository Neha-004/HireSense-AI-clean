const express = require("express");
const app = express();

app.use(express.json());

let users = [];

app.post("/add", (req, res) => {
  users.push(req.body);
  res.json({ message: "User added", users });
});

app.get("/", (req, res) => {
  res.json(users);
});

app.listen(3002, () => {
  console.log("User service running on 3002");
});
