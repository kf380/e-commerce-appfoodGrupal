const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.getUsers = async (req, res) => {
  const { limite = 5, desde = 0 } = req.query;
  const query = { status: true };

  // const users = await User.find(query).skip(Number(desde)).limit(Number(limite));//esta forma tarda mas tiempo
  // const total = await User.countDocuments(query);

  const [total, users] = await Promise.all([
    User.countDocuments(query),
    User.find().skip(Number(desde)).limit(Number(limite)),
  ]);

  res.json({
    msg: "GET users API",
    total,
    users,
  });
};
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { _id, password, ...rest } = req.body;
  //validar contra la base de datos
  if (password) {
    //encriptar contraseña del
    const salt = bcrypt.genSaltSync();
    rest.password = bcrypt.hashSync(password, salt);
  }
  const user = await User.findByIdAndUpdate(id, rest);
  res.json({msg:'User Updated',user});
};
exports.createUsers = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password});

  //encriptar contraseña del
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password, salt);

  //gardar en la BD
  await user.save();

  res.status(201).json({
    msg: "POST create user API",
    user,
  });
};
exports.deleteUsers = async (req, res) => {
  const { id } = req.params;
  //borrar fisicamente de la BD,
  const user = await User.findByIdAndDelete(id);
  res.json({
    msg: "DELETE user API",
    user,
  });
};
