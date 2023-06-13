const mongoose = require('mongoose');

const optionSchema = mongoose.Schema(
  {
    question: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Question',
    },
    questionResponses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionResponse',
      },
    ],
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Option', optionSchema);
