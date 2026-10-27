const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/status", (req, res) => {
  res.json({
    mode: "DEMO",
    message: "Website is running!"
  });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Website: http://127.0.0.1:${PORT}`);
});
