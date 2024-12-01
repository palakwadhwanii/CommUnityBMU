const mongoose = require("mongoose");

const sportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  practiceTime: { type: String, required: true },
  description: { type: String },
  subtitle: { type: String },
  members: { type: Number },
  getInvolved: { type: String },
  clubActivity: { type: [String] },
});

const Sports = mongoose.model("Sport", sportSchema);
module.exports = Sports;
