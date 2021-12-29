const express = require("express");
const router = express.Router();
const dbActions = require("./actions");
router.get("/", (req, res) => {
  res.send("Welcome to my server!");
});
router.post("/user/create", dbActions.createUser);
router.get("/user/:id", dbActions.readUser);
router.get("/user", dbActions.readUsers);
router.put("/user/update/:id", dbActions.updateUser);

module.exports = router;
