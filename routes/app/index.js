const { Router } = require("express");
var route = new Router();
const rooms = require("../../models/room-data");

route.use("/about", (req, res, next) => {
  res.render("about");
});

route.use("/create", (req, res) => {
  res.render("create");
});

route.use("/:id", async (req, res) => {
  let room = await rooms.findOne({ id: req.params.id });

  if (!room) {
    res.status(404).end();
  }

  let data = {
    room: room,
  };

  res.render("room", data);
});

route.use("/", (req, res) => {
  res.render("index");
});

module.exports = route;
