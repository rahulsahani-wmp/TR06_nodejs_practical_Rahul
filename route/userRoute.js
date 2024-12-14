const express = require("express");
const router = express();

const{getuserdata,getuserdatabyid,postuserdata,modifyuserdata,deleteuserdata}=require("../controller/userControler")

router.get("/api/get",getuserdata); //route to get all user

router.get("/api/get/:id",getuserdatabyid); //route to get user by id

router.post("/api/post",postuserdata);  //route to post user data

router.put("/api/put/:id",modifyuserdata);  //route to modify user data

router.delete("/api/delete",deleteuserdata);  //route to delete user data

module.exports=router;
