const Userdb = require("../model/model");

//create new user
exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    return res.status(404).send({ message: "Content cannot be empty" });
  }

  //new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //save to mongodb
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured in create operation",
      });
    });
};

//get all users
exports.find = (req, res) => {};

//update a user
exports.update = (req, res) => {};

//delete a user
exports.delete = (req, res) => {};
