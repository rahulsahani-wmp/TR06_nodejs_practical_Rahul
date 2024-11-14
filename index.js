const express = require("express");
const app = express();
const port = 4000;



//including route modeule
const router = require("./route/api");
app.use("/", router);

app.listen(port, () => {
  console.log(`started  -> http://localhost:${port}`);
});
