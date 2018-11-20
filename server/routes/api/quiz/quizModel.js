const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  questions: [
    {
      questionText: {
        type: String,
        required: true
      },
      answers: [
        {
          answerText: {
            type: String,
            required: true
          },
          correct: Boolean
        }
      ]
    }
  ],
  scores: [
    {
      scoreText: String,
      scoreDescription: String,
      scoreValue: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model('quiz', QuizSchema);