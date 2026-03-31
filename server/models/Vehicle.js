const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String, // 2W / 4W
    required: true
  },
  fuel: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
