const User = require('../models/user.js');
//const bcrypt = require('bcrypt');

const create = async (req, res) => {

}

const login = async (req, res) => {

}

const profile = async (req, res) => {

}

const logout = (req, res) => {

}

const getFav = async (req, res) => {
  // const favs = await User.favTvShows.find({});
  // res.status(200);
  // res.send(favs);
}

const favShow = async (req, res) => {
  // const fav = req.body.results.id;
  // const user = await User.findById(req.user._id);
  // user.favTvShows.push(fav);
  // await user.save();
  // console.log(fav);
  // res.status(201);
}



module.exports = {create, login, profile, logout, getFav, favShow};