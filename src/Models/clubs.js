const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  subtitle: { type: String, required: true },
  members: { type: Number, required: true },
  getInvolved: { type: String, required: true },
  clubActivity: { type: [String], required: true },
});

const Club = mongoose.model("Club", clubSchema);

module.exports = Club;

