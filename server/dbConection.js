const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb://localhost/purple", {
    useNewUrlParser: true,
  });
  console.log("DB is connected");
  createInitialUser();
  //conn.connection.db.dropDatabase();
};

const createInitialUser = async () => {
  const User = require("./userSchema");
  const allUsers = await User.find({});
  if (!allUsers.length) {
    const data = {
      name: "Amir Benyamini",
      title: "Developer",
      company: "PURPLE",
      phone: "+972505545521",
      email: "benyamini.amir@gmail.com",
      about:
        "Etiam id pharetra justo. Mauris sodales purus vel nunc egestas mattis. Done!",
    };
    const initialUser = await new User(data);
    initialUser.save();
  }
};

exports.connectDB = connectDB;
