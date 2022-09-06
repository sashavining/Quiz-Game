const mongoose = require('mongoose')

const QuestionSetSchema = new mongoose.Schema({
  setName: {
    type: String, 
    required: true, 
  },
  userId: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('QuestionSet', QuestionSetSchema)
