import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import VehicleDetails from "./pages/VehicleDetails";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./pages/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./pages/AdminRoute";
import AddVehicle from "./pages/AddVehicle";
import ManageVehicles from "./pages/ManageVehicles";
import ManageBookings from "./pages/ManageBookings";
import Users from "./pages/Users";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Help from "./pages/Help";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 🔥 Navbar */}
      <Navbar />

      {/* 🔥 Main Content */}
      <div className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicle/:id" element={<VehicleDetails />} />
          <Route
  path="/bookings"
  element={
    <ProtectedRoute>
      <Bookings />
    </ProtectedRoute>
  }
/>
          <Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>
          <Route path="/my-bookings" element={<Bookings />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/manage-vehicles" element={<ManageVehicles />} />
          <Route path="/manage-bookings" element={<ManageBookings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/help" element={<Help />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>

      {/* 🔥 Footer */}
      <Footer />

    </div>
  );
}

export default App;
