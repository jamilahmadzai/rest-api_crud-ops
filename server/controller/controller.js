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
exports.find = (req, res) => {
  Userdb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured while retrieving the data",
      });
    });
};

//update a user
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Fill all the info to update" });
  }
  Userdb.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update user with id ${req.params.id}. Maybe user not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update user information" });
    });
};

//delete a user
exports.delete = (req, res) => {
  Userdb.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Cannot find user with this id" });
      } else {
        res.send({
          message: "User was deleted successfully",
        });
      }
    })
    .catch((err) => {
      res.status(404).send({ message: "Cannot delete user" });
    });
};
