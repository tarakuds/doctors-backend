const bcrypt = require("bcrypt");
const User = require("../model/User.schema");
const { userLogin, userRegister } = require("../validation/user.validation");

const register = async (req, res, next) => {
  try {
    const data = req.body;
    const { error } = await userRegister(data);
    if (error) {
      console.log(error);
      res.status(401).json({
        status: "failed",
        message: "validation error",
        data: error,
      });
    }
    let user = await User.findOne({ email: data.email });
    if (user) {
      console.log("user already exists");
    }
    data.password = await bcrypt.hash(data.password, 8);
    const newData = new User(data);
    const userDetails = await User.create(newData);
    res.status(200).json({
      status: "success",
      message: "successfully registered",
      data: userDetails,
    });
  } catch (error) {
    next(error);
    // res.status(400).json("something happened");
  }
};

const login = async (req, res, next) => {
  try {
    const data = req.body;
    const { error } = await userLogin(data);
    if (error) {
      res.status(401).json({
        status: "failed",
        message: "validation error",
        data: error,
      });
    }
    const userEmail = await User.findOne({ email: data.email});
    const isPasswordCorrect = await bcrypt.compare(
      data.password,
      userEmail.password
    );
    res.status(200).json({
      status: "success",
      message: "successful login",
      data: userEmail,
    });
  } catch (error) {
    next(error);
  }
};
const updateUser = async (req, res, next) => {
  const data = req.param;

  res.status(200).json({
    message: "successful",
  });
};
// const deleteuser

module.exports = { login, register, updateUser };
