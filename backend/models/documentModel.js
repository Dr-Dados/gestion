const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blSchema = new Schema({
  path: { type: String, required: true },
  status: { type: String, required: true, default: "en attente" },
  person: [
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      fonction: { type: String, required: true },
      gamme: { type: String, required: true },
      city: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("BL", blSchema);
