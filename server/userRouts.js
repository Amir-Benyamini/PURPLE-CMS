const express = require("express");
const router = express.Router();
const dbActions = require("./actions");

router.post("/user/create", dbActions.createUser);
router.get("/user/:id", dbActions.readUser);
router.get("/user", dbActions.readUsers);
router.put("/user/update/:id", dbActions.updateUser);
router.post("/user/updateImage/:id", dbActions.updateUserImage);

module.exports = router;
