const User = require("./userSchema");

// const data = {
//   name: "Amir Benyamini",
//   title: "Developer",
//   company: "PURPLE",
//   phone: "+972505545521",
//   email: "benyamini.amir@gmail.com",
//   about:
//     "Etiam id pharetra justo. Mauris sodales purus vel nunc egestas mattis. Done!",
// };

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

module.exports = {
  readUser,
  readUsers,
  updateUser,
  createUser,
};
