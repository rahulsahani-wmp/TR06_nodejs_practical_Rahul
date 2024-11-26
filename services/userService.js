const userMiddleware = require("../middleware/userMiddleware");


exports.getuserbyid = (id) => {
  const userdata = userMiddleware.readdata();
  //checking user existence
  const index = userdata.findIndex((user) => {
    return user.id === id;
  });

  //handling if user found
  if (index >= 0) {
    return userdata[index];
  } else return null;
};

exports.postdata = (body) => {
  const userdata = userMiddleware.readdata();
  const index = userdata.findIndex((user) => {
    return user.id === body.id;
  });
  if (index === -1) {

    const user = {  //user to add in database
      id: body.id,
      name: body.name,
      balance: body.balance,
    };
    userdata.push(user);
    userMiddleware.writedata(userdata);
    return user;
  } else {
    return null;
  }
};

exports.modifydata = (req) => {
  const userdata = userMiddleware.readdata();
  const index = userdata.findIndex((user) => {
    return user.id === parseInt(req.params.id); //return -1 if not found
  });

  if (index >= 0) {
    userdata[index].name = req.body.name;
    userdata[index].balance = req.body.balance;
    userMiddleware.writedata(userdata);
    return userdata;
  } else {
    return null;
  }
};

exports.deleteuser = (req) => {
  const userdata = userMiddleware.readdata();//fetch all data
  const index = userdata.findIndex((user) => {
    //checking user existence
    return user.id === parseInt(req.params.id);
  });

  if (index >= 0) {
    const deleteduser = userdata[index];
    userdata.splice(index, 1); //deleting user
    userMiddleware.writedata(userdata);
    return deleteduser;
  } else {
    return null;
  }
};
