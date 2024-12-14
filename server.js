const express = require("express");
const app = express();
require('dotenv').config();

app.use(express.json());

//including route modeule
app.use("/",  require("./route/userRoute"));

app.use((req,res)=>{
  res.json({message:"there is no api endpoint "}) //handling wrong end point
})

app.listen(process.env.PORT, () => {
  console.log(`started  -> http://localhost:${process.env.PORT}`);
});
