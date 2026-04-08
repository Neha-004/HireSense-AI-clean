const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Auth
app.use("/auth", createProxyMiddleware({
  target: "http://localhost:3001",
  changeOrigin: true,
  pathRewrite: { "^/auth": "" }
}));

// User
app.use("/user", createProxyMiddleware({
  target: "http://localhost:3002",
  changeOrigin: true,
  pathRewrite: { "^/user": "" }
}));

// Resume
app.use("/resume", createProxyMiddleware({
  target: "http://localhost:3003",
  changeOrigin: true,
  pathRewrite: { "^/resume": "" }
}));

// Analysis
app.use("/analysis", createProxyMiddleware({
  target: "http://localhost:3004",
  changeOrigin: true,
  pathRewrite: { "^/analysis": "" }
}));

app.get("/", (req, res) => {
  res.send("API Gateway is running 🚀");
});

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});