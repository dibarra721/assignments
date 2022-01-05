const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  comment: {
    type: String
  },
  issue: {
    type: Schema.Types.ObjectId,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true
  }
})
module.exports = mongoose.model("Comment", CommentSchema)