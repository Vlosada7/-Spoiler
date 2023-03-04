const mongoose = require('.index.js');
const {Schema} = mongoose;

const ReviewSchema = new Schema({
  id: {
    type: Number, 
    required: true
  },
  content: {
    type: String, 
    required: true
  },
  author: {
    type: String, 
    required: true
  }

})

const Reviews = mongoose.model('Reviews', ReviewSchema)

module.exports = Reviews;