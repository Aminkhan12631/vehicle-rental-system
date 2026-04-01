import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Vehicles = () => {
  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [fuelFilter, setFuelFilter] = useState("");


useEffect(() => {
  console.log("TYPE:", typeFilter);
  console.log("FUEL:", fuelFilter);
}, [typeFilter, fuelFilter]);




  // 🔥 FETCH WITH FILTERS (MERGED)
  useEffect(() => {
    let url = "https://vehicle-rental-backend-41xy.onrender.com/vehicles?";

    if (typeFilter) url += `type=${typeFilter}&`;
    if (fuelFilter) url += `fuel=${fuelFilter}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((err) => console.log(err));
  }, [typeFilter, fuelFilter]);

  // 🔥 SEARCH (FRONTEND)
  const filteredVehicles = vehicles.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-950 text-white min-h-screen px-6 pt-24">

      {/* 🔥 TITLE */}
      <h1 className="text-4xl font-bold text-center mb-8">
        Find Your Ride 🚗
      </h1>

      {/* 🔍 SEARCH BAR */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search vehicles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl p-3 bg-slate-800 rounded-lg focus:outline-none shadow-lg"
        />
      </div>

      {/* 🎛 FILTERS */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="p-2 bg-slate-800 rounded"
        >
          <option value="">All Types</option>
          <option value="2W">2-Wheeler</option>
          <option value="4W">4-Wheeler</option>
        </select>

        <select
          value={fuelFilter}
          onChange={(e) => setFuelFilter(e.target.value)}
          className="p-2 bg-slate-800 rounded"
        >
          <option value="">All Fuel</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
        </select>

      </div>

      {/* 🚗 VEHICLES */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredVehicles.length > 0 ? (
          filteredVehicles.map((v) => (
            <div
              key={v._id}
              className="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 border border-slate-700"
            >

              {/* Image */}
              <img
                src={
                  v?.image && v.image.startsWith("http")
                    ? v.image
                    : "https://dummyimage.com/600x400/000/fff"
                }
                alt={v.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              {/* Details */}
              <h2 className="text-xl font-bold">{v.name}</h2>
              <p className="text-gray-400">{v.fuel}</p>
              <p className="text-blue-400 font-semibold">₹{v.price}/day</p>

              {/* Button */}
              <button
                onClick={() => navigate(`/vehicle/${v._id}`)}
                className="mt-3 w-full bg-gradient-to-r from-blue-500 to-green-500 py-2 rounded-lg hover:scale-105 transition"
              >
                Book Now
              </button>

            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No vehicles found 😢
          </p>
        )}

      </div>
    </div>
  );
};

export default Vehicles;
