const express = require("express");
const PORT = 3000;

const app = express();

// Body Parser
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Ok");
});
app.listen(PORT, () => {
  console.log("Server is running at port", PORT);
});
