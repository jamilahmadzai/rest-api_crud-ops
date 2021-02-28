const express = require("express");
const axios = require("axios");

const route = express.Router();
const controller = require("../controller/controller");

route.get("/", (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .then((response) => {
      return res.render("index", { users: response.data, id: 0 });
    })
    .catch((err) => {
      res.send(err);
    });
});

route.get("/add-user", (req, res) => {
  res.render("add_user");
});

route.get("/update-user", (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then((response) => {
      res.render("update_user", { user: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
});

route.get("/add-user-confirmation", (req, res) => {
  res.render("add_user_confirmation");
});

//API routes
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;
