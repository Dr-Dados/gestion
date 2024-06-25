const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Comment schema
const commentSchema = new Schema(
  {
    comment: { type: String, required: true },
  },
  { timestamps: true }
);
//Person schema
const personSchema = new Schema({
  name: { type: String, required: true },
  gamme: { type: String, required: true },
  city: { type: String, required: true },
  fonction: { type: String, required: true },
});
//BL schema
const blSchema = new Schema(
  {
    path: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: String, required: true, default: "en attente" },
    user_id: { type: String, required: true },
    person: [personSchema],
    comments: [commentSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("BL", blSchema);
