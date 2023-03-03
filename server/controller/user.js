const User = require('../models/user.js');
//const bcrypt = require('bcrypt');
const _id = '6400f38ad7d8d43cee4fefdd'; //Trocar depois por { _id: req.params.userId }

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
  try {
    const user = await User.findById(_id, 'favShows');
    if (user) {
      res.status(200).send(user.favShows);
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro interno do servidor');
  }
  
  // const favs = await User.favTvShows.find({});
  // res.status(200);
  // res.send(favs);
}

const deleteShow = async (req, res) => {
  console.log('Deletou o show:', req.params.id);
  const showId = {
    id: req.params.id,
  }
  const userId = _id;
  try {
    const user = await User.findById({_id: userId, "favShows.id": showId.id});
    if (!user) {
      return res.status(404).send('Usuario não encontrado');
    } 
    const index = user.favShows.indexOf(showId);
    if (!index) {
      return res.status(404).send('Show não encontrado na lista de favoritos');
    } else {
      await User.updateOne(
        {_id: _id}, 
        { $pull: { favShows:{id: showId.id}}});
      res.status(201).json(showId);
    }

    // // Remove o elemento do array usando o método splice
    // const result = await user.favShows.deleteOne({id: showId});
    // await user.save();
    // res.status(200).send(result);

    
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro interno do servidor');
  }
}

const favShow = async (req, res) => {
  console.log('Adicionou um id ao array');
  const newShow = {
    id: req.body.id, 
    addedAt: req.body.addedAt
  }
  try {
    const user = await User.findOne({ _id: _id, "favShows.id": newShow.id });
    if (user) {
      res.status(409).send('Show já está na lista de favoritos do usuário');
    } else {
      await User.updateOne({ _id: _id }, { $push: { favShows: newShow } });
      res.status(201).json(newShow);
    }
  } catch (error) {
    res.status(400).send('Erro ao criar show');
  }
}
// const fav = req.body.results.id;
//Para quando eu tive usuarios eu salvo tendo que procurar atraves do Id do usuario que esta salvando. 
/*
  try {
    // Procura um usuário pelo ID e verifica se o show já está no array
    const user = await User.findOne({ _id: req.params.userId, "favShows.id": newShow.id });
    if (user) {
      // Se o show já está presente, retorna uma mensagem informando
      res.status(409).send('Show já está na lista de favoritos do usuário');
    } else {
      // Se o show ainda não está presente, adiciona-o ao array e salva o usuário
      await User.updateOne({ _id: req.params.userId }, { $push: { favShows: newShow } });
      res.status(201).json(newShow);
    }
  } catch (error) {
    res.status(400).send('Erro ao criar show');
  }
}
Neste exemplo, a função findOne é usada para buscar um usuário pelo seu ID (req.params.userId) e pelo ID do show (newShow.id). Se um usuário for encontrado, isso significa que o show já está presente no array favShows, e a função retorna uma resposta de erro com o código de



*/
// const user = await User.findById(req.user._id);

// user.favTvShows.push(fav);
// await user.save();
// console.log(fav);
// res.status(201);



module.exports = {create, login, profile, logout, getFav, favShow, deleteShow};