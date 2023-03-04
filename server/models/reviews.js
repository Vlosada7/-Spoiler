const mongoose = require('./index.js');
const {Schema} = mongoose;

const ReviewSchema = new Schema({
  id: {
    type: Number, 
    required: true, 
    unique: true
  },
  reviews: [
    {
      content: {
        type: String,
        required: true
      },
      author: {
        type: String, 
        required: true
      }, 
      _id: false
    }
  ]
})

const Reviews = mongoose.model('Reviews', ReviewSchema)

module.exports = Reviews;