const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.get("/api/v1", (req, res) => {
  console.log("Dev-environment working fine")
  res.json({ message: "stackdevelopment environment working" });
});
app.get("*", function (req, res) {
  res.redirect("/");
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
