const mongoose = require('./index.js');
const {Schema} = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  favTvShows: [Number]
})

const User = mongoose.model('User', userSchema);

module.exports = User;