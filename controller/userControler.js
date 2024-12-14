const userService = require("../services/userService");
const userMiddleware = require("../middleware/userMiddleware");

//controller for get user
const getuserdata = (req, res) => {
  try {
    const data = userMiddleware.readdata();

    if (data.length === 0) res.json({ message: "no data available" });

    res.json(data);
  } catch {
    res.status(500).json({ message: "internal server error " + error });
  }
};

//controller for get user by id
const getuserdatabyid = (req, res) => {
  try {
    const userdata = userService.getuserbyid(parseInt(req.params.id));

    if (userdata) {
      res.json(userdata);
    } else {
      res.status(404).json({ message: "user not found" });
    } //handling if user not found
  } catch {
    res.status(500).json({ message: "internal server error" });
  }
};

//controller for post user data
const postuserdata = (req, res) => {
  try {
    // validating response body
    const validationResult = userMiddleware.validatepostdata(req);
    if (!validationResult.success) {
      return res.status(400).json({ error: validationResult.error });
    }

    //adding user
    const userdata = userService.postdata(req.body);

    if (userdata)
      res.status(201).json({
        message: "User added successfully",
        User: userdata,
      });
    else {
      res.status(409).json({ message: "user allready exist " }); //returning response if user already exist
    }
  } catch {
    res.status(500).json({ message: "internal server error" + error });
  }
};

//controller for modifing data
const modifyuserdata = (req, res) => {
  try {
    // validating response body
    const validationResult = userMiddleware.validatepostdata(req);
    if (!validationResult.success) {
      return res.status(400).json({ error: validationResult.error });
    }

    //modifing user data
    const userdata = userService.modifydata(req);
    if (userdata)
      res.json({
        message: "user updated successfully",
        updated_user: userdata,
      });
    else res.status(404).json({ message: "user not found" });
  } catch {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

//controller for delete user
const deleteuserdata = (req, res) => {
  try {
    const user = userService.deleteuser(req);

    if (user!=null)
      res.json({
        message: "user deleted successfully",
        user: user,
      });
    else {
      res.status(404).json({ message: "user not found" });
    }
  } catch {
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = {
  getuserdata,
  getuserdatabyid,
  postuserdata,
  modifyuserdata,
  deleteuserdata,
};
