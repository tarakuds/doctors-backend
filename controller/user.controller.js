const bycrypt = require("bcryptjs");
const User = require("../model/User.schema");
const { userLogin, userRegister } = require("../validation/user.validation");

const register = async (req, res, next) => {
  try {
    const data = req.body;

    const value = await userRegister.validate(data);
    let user = await User.findOne({ email: data.email });
    data.password = await bcrypt.hash(data.password, 8);
    user = await User.create(data);
    res.status(200).json({
      status: "success",
      message: "successfully registered",
      data: user,
    });
  } catch (error) {
      res.status(400).json('something happened')
  }
};

const login = async (req, res, next) => {
  try {
    const data = req.body;

    const value = await userLogin.validate(data);
    const user = await User.findOne({ email: data.email.toLowercase() });
    const isPasswordCorrect = await bcrypt.compare(
      data.password,
      user.password
    );
    res.status(200).json({
      status: "success",
      message: "successful",
      data: user ,
    });
  } catch (error) {
    next(res.status(400).json('an error occured'));
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
