const User = require('../models/user.js');


const getFav = async (req, res) => {
  // console.log(req.params.username);
  try {
    const user = await User.findOne({username: req.params.username});
    // console.log(user.favShows);
    if (user) {
      res.status(200).send(user.favShows);
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro interno do servidor');
  }
}

const deleteShow = async (req, res) => {
  const info = {
    username: req.body.username,
    id: req.body.id
  }
  // console.log(info);
  try {
    const user = await User.find({username: info.username, "favShows.id": info.id});
    if (!user || user.length === 0) {
      return res.status(404).send('Usuário não encontrado');
    } 
    const index = user[0].favShows.findIndex(show => show.id === info.id);
    if (index === -1) {
      return res.status(404).send('Show não encontrado na lista de favoritos');
    } else {
      await User.updateOne(
        {username: info.username}, 
        { $pull: { favShows:{id: info.id}}});
      res.status(201).json({id: info.id});
    }    
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro interno do servidor');
  }
}

const favShow = async (req, res) => {
  const userInfo = {
    username: req.body.username
  }
  // console.log(userInfo.username)
  const showInfo = {
    id: req.body.id
  }
  // console.log(showInfo.id)
  
  try {
    const filter = { username: userInfo.username };
    const update = { $addToSet: { favShows: { id: showInfo.id } } };
    const options = { new: true, upsert: true };
    const user = await User.findOneAndUpdate(filter, update, options);
    if(!user) {
      console.log('usuario não existe')
    } else {
      res.status(201).send(user);
    }
  } catch (error) {
    res.status(400).send('Erro ao adicionar show favorito');
  }
}

module.exports = { favShow, getFav, deleteShow };