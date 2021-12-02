const mongoose = require("mongoose");

const schema = mongoose.Schema({
  uid: String,
  name: String,
  content: String,
},
{ 
  timestamps: true 
})

module.exports = mongoose.model("notes", schema);