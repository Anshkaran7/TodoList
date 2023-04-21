const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
  title:{
    type:String,
    required: true,
  },
 description:{
    type:String,
    required: true,
  },
  Iscompleted:{
    type:boolean,
   default: false,
  },
  isCreated:{
    type: Date,
    default: Date.now,
  }
});

const User = mongoose.model("User", schema);
module.exports = User;