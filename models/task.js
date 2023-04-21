const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Iscompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  isCreated: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("task", schema);
module.exports = Task;
