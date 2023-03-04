const mongoose = require('./index.js');
const {Schema} = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  favShows: [
    {
      id: {
        type: Number,
        unique: true
      },
      _id: false
    }
  ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;