const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  long_answer: String,
  sort_answer: String,
  points: Number,
  next_question: Number,
  next_answer: [Number]
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;