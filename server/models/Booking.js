const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userEmail: String,   // 🔥 ADD THIS
  vehicleId: String,
  name: String,
  fromDate: String,
  toDate: String,
  status: {
  type: String,
  default: "pending", // pending / approved / rejected
},
});

module.exports = mongoose.model("Booking", bookingSchema);
