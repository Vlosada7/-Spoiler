const mongoose = require('./index.js');
const {Schema} = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String, 
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String, 
      required: true,
    }, 
    lastName: {
      type: String, 
      required: true,
    }
  },
  favShows: [
    {
      id: {
        type: Number,
      }, 
      addedAt: {
        type: Date,
        default: Date.now()
      }
    }
  ]
})

const User = mongoose.model('User', userSchema);

module.exports = User;