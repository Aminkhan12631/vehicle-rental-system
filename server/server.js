const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Booking = require("./models/Booking");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected ✅"))
.catch((err) => console.log(err));


const Vehicle = require("./models/Vehicle");

// ✅ Add vehicle
app.post("/add-vehicle", async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.json({ message: "Vehicle added ✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all vehicles


// ✅ Dummy vehicle data
const vehicles = [
  {
    id: 1,
    name: "Honda Activa",
    type: "2W",
    fuel: "Petrol",
    price: 500,
  },
  {
    id: 2,
    name: "Royal Enfield",
    type: "2W",
    fuel: "Petrol",
    price: 1200,
  },
  {
    id: 3,
    name: "Swift",
    type: "4W",
    fuel: "Petrol",
    price: 2000,
  },
];

// ✅ API route
app.get("/vehicles", async (req, res) => {
  console.log("🔥 VEHICLES API HIT");

  const { type, fuel } = req.query;
  console.log("QUERY:", req.query);

  let filter = {};

  if (type) {
    filter.type = { $regex: type, $options: "i" };
  }

  if (fuel) {
    filter.fuel = { $regex: fuel, $options: "i" };
  }

  console.log("FILTER:", filter);

  const vehicles = await Vehicle.find(filter);
  res.json(vehicles);
});


app.get("/vehicle/:id", async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post("/vehicles", async (req, res) => {
  try {
    console.log("BODY 👉", req.body); // 👈 ADD THIS

    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.delete("/vehicles/:id", async (req, res) => {
  try {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.json({ message: "Vehicle deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.put("/vehicles/:id", async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedVehicle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.put("/booking/:id", async (req, res) => {
  try {
    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.post("/book", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ message: "Booking successful ✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get("/bookings/:email", async (req, res) => {
  try {
    

    const bookings = await Booking.find({
      userEmail: req.params.email,
    });

    

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get("/bookings/:email", async (req, res) => {
  try {
    const bookings = await Booking.find({ userEmail: req.params.email });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get("/admin/stats", async (req, res) => {
  try {
    const totalVehicles = await Vehicle.countDocuments();
    const totalBookings = await Booking.countDocuments();
    const totalUsers = await User.countDocuments();

    res.json({
      totalVehicles,
      totalBookings,
      totalUsers,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});






app.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "user", // 🔥
    });

    await user.save();

    res.json({ message: "User registered successfully ✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found ❌" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password ❌" });
    }

    const token = jwt.sign({ id: user._id }, "secretkey");

    res.json({
      message: "Login successful ✅",
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role, 
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


