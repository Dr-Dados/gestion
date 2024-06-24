const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blSchema = new Schema(
  {
    path: { type: String, required: true },
    status: { type: String, required: true, default: "en attente" },
    user_id: { type: String, required: true },
    person: [
      {
        name: { type: String, required: true },
        gamme: { type: String, required: true },
        city: { type: String, required: true },
        fonction: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("BL", blSchema);
