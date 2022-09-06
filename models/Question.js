const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
  Question: {
    type: String, 
    required: true, 
  },
  QuestionSetId: {
    type: String,
    required: true,
    ref: 'sets'
  },
  Answer: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  Completed: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('Question', QuestionSchema)
