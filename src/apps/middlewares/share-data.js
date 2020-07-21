const mongoose = require("mongoose");
const CategoryModel = mongoose.model("Category");

module.exports = async function (req, res, next) {
  res.locals.menus = await CategoryModel.find();
  res.locals.miniCart = req.session.cart || [];
  next();
};
