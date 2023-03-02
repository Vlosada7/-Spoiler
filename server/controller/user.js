const User = require('../models/user.js');
//const bcrypt = require('bcrypt');

const create = async (req, res) => {
  console.log('Perfil criado');
}

const login = async (req, res) => {
  console.log('Login efetuado');
}

const profile = async (req, res) => {
  console.log('Perfil acessado');
}

const logout = (req, res) => {
  console.log('Fez Logout');
}

const getFav = async (req, res) => {
  console.log('Pegou a array de IDS');
  const semFav = 'No shows yet';
  try {
    const all = await User.favShows.find({});
    res.send(all);
  } catch (error) {
    console.log(error);
  }
  
  // const favs = await User.favTvShows.find({});
  // res.status(200);
  // res.send(favs);
}

const favShow = async (req, res) => {
  console.log('Adicionou um id ao array');
  // const fav = req.body.results.id;
  // const user = await User.findById(req.user._id);
  // user.favTvShows.push(fav);
  // await user.save();
  // console.log(fav);
  // res.status(201);
}



module.exports = {create, login, profile, logout, getFav, favShow};