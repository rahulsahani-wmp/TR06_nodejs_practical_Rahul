const express = require("express");
const router = express();

router.use(express.json()); //convert request body to json

const data = require("../database/database");

//api to get all user
router.get("/api/get", (req, res) => {
  try{
  res.json(data);
}catch{
  res.status(500).json({message:"internal server error"})
}
});

//api to get user by id
router.get("/api/get/:id", (req, res) => {
  try{
  const id = req.params.id;

  const index = data.findIndex((user) => {
    //checking user existence
    return user.id == id;
  });

  //handling if user found
  if (index >= 0) {
    const user = data[index];
    res.json(user);
  } else {
    res.status(404).json({ message: "user not found" }); //handling if user not found
  }
}catch{
  res.status(500).json({message:"internal server error"})
}
});

//api to add new user
router.post("/api/post", (req, res) => {
  try{
  const user = {
    //request body
    id: req.body.id,
    name: req.body.name,
    balance: req.body.balance,
  };

  // Check for missing filed in response body
  if (!user.id || !user.name || !user.balance) {
    return res.status(400).json({ error: "missing required filed" });
  }
   
  //checking user existence
  const index = data.findIndex((userdata) => {
    return userdata.id == user.id;  //return -1 if not found
  });
  console.log(index)
  if (index == -1) {
    data.push(user);
    res.status(201).json({ message: "User added successfully", User: user }); //returning response if user added successfully
  } else {
    res.status(409).json({ message: "user allready exist ", User: user }); //returning response if user already exist
  }
}catch{
  res.status(500).json({message:"internal server error"})
}
});

//api to update existing user
router.put("/api/put/:id", (req, res) => {
  try{
  const id = req.params.id;
  const name = req.body.name;
  const balance = req.body.balance;

  const index = data.findIndex((userdata) => {
    //checking user existence
    return userdata.id == id;
  });
console.log(index)
  if (!name || !balance) {
    return res.status(400).json({ error: "missing required filed" });
  }
  if (index >= 0) {
    const user = data[index];
    user.name = name;
    user.balance = balance;
    res.json({ message: "user updated successfully", updated_user: user }); //returning response if user updated sucessfully
  } else {
    res.status(404).json({ message: "user not found" }); //returning response if user not found
  }
}catch{
  res.status(500).json({message:"internal server error"})
}
});

//api to delete user
router.delete("/api/delete/:id", (req, res) => {
  try{
  const id = req.params.id;
 
  const index = data.findIndex((user) => {
    //checking user existence
    return user.id == id;
  });

  if (index >= 0) {
    const user = data[index];
    data.splice(index, 1); //deleting user
    res.json({ message: "user deleted successfully", user: user }); //returning response if user deleted sucessfully
  } else {
    res.status(404).json({ message: "user not found" }); //returning response if user not found
  }
}catch{
  res.status(500).json({message:"internal server error"})
}
});

module.exports = router;
