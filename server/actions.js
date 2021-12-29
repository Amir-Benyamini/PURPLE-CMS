const User = require("./userSchema");
const fs = require("fs");

const createUser = async (req, res) => {
  const data = req.body.user;
  const newUser = await new User(data);
  newUser.save();
  res.send(newUser);
};

const readUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.send(user);
};
const readUsers = async (req, res) => {
  const users = await User.find({});
  res.send(users[0]);
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const update = req.body.update;
  const updatedUser = await User.findByIdAndUpdate(id, update, { new: true });
  res.send(updatedUser);
};

const updateUserImage = async (req, res) => {
  const id = req.params.id;
  const imageFile = req.files.userImage;
  if (imageFile) {
    fs.writeFileSync(`./assets/${imageFile.name}`, imageFile.data);
    await User.findByIdAndUpdate(id, {
      image: imageFile.name,
    });
  }
};

module.exports = {
  readUser,
  readUsers,
  updateUser,
  updateUserImage,
  createUser,
};
