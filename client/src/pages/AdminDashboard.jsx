import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminDashboard = () => {

    const navigate = useNavigate();
    const [stats, setStats] = useState({});

    useEffect(() => {
  fetch("https://vehicle-rental-backend-41xy.onrender.com/admin/stats")
    .then(res => res.json())
    .then(data => {
      console.log("STATS 👉", data); // check kar
      setStats(data);
    });
}, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex pt-20">

      {/* SIDEBAR */}
      <div className="w-64 bg-black p-5">
        <h1 className="text-2xl font-bold text-red-500 mb-8">
          🚗 Admin Panel
        </h1>

        <ul className="space-y-4">
          <li className="hover:text-red-500 cursor-pointer">
            Dashboard
          </li>
          <li
  onClick={() => navigate("/manage-vehicles")}
  className="hover:text-red-500 cursor-pointer"
>
  Manage Vehicles
</li>
          <li
  onClick={() => navigate("/add-vehicle")}
  className="hover:text-red-500 cursor-pointer"
>
  Add Vehicle
</li>
          <li
  onClick={() => navigate("/manage-bookings")}
  className="hover:text-red-500 cursor-pointer"
>
  Manage Bookings
</li>
          <li
  onClick={() => navigate("/users")}
  className="hover:text-red-500 cursor-pointer"
>
  Users
</li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">
          Admin Dashboard 🎛️
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-lg">
            <h2 className="text-xl">Total Vehicles</h2>
            <p className="text-2xl mt-2">{stats.totalVehicles}</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-lg">
            <h2 className="text-xl">Total Bookings</h2>
            <p className="text-2xl mt-2">{stats.totalBookings}</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-lg">
            <h2 className="text-xl">Total Users</h2>
            <p className="text-2xl mt-2">{stats.totalUsers}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
