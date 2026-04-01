import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const VehicleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");




  
  
  // 🔥 FETCH VEHICLE DATA
  useEffect(() => {
    fetch(`https://vehicle-rental-backend-41xy.onrender.com/vehicle/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // 👈 ye add kar
        console.log("IMAGE 👉", vehicle?.image);
        setVehicle(data);
      })  
      .catch((err) => console.log(err));
  }, [id]);

  // 🔥 HANDLE BOOKING
  const handleBooking = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first ❌");
      navigate("/login"); // 🔥 redirect
      return;
    }

    if (!fromDate || !toDate) {
      alert("Please select dates ❌");
      return;
    }

    try {
      const res = await fetch("https://vehicle-rental-backend-41xy.onrender.com/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: user.email,
          vehicleId: vehicle._id,
          name: vehicle.name,
          fromDate,
          toDate,
        }),
      });

      const data = await res.json();

      alert("Booking Sent 🚀");

      // 🔥 redirect to bookings page
      navigate("/my-bookings");

    } catch (err) {
      console.log(err);
      alert("Something went wrong ❌");
    }
  };

  if (!vehicle) {
    return (
      <div className="text-white p-10">
        Loading... ⏳
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen p-10 pt-24">
      <div className="max-w-4xl mx-auto bg-slate-900 p-6 rounded-xl shadow-lg">

        {/* IMAGE */}
        <img
  src={
    vehicle?.image && vehicle.image.startsWith("http")
      ? vehicle.image
      : "https://dummyimage.com/600x400/000/fff"
  }
  alt={vehicle.name}
  className="w-full h-64 object-cover rounded-lg mb-6"
/>

        {/* DETAILS */}
        <h1 className="text-3xl font-bold mb-3">{vehicle.name}</h1>

        <p className="text-gray-400 mb-2">
          Fuel: {vehicle.fuel}
        </p>

        <p className="text-gray-400 mb-2">
          Type: {vehicle.type}
        </p>

        <p className="text-xl text-blue-400 font-semibold mb-4">
          ₹{vehicle.price} / day
        </p>

        {/* DATE INPUTS */}
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="w-full mb-3 p-2 bg-slate-800 rounded"
        />

        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="w-full mb-4 p-2 bg-slate-800 rounded"
        />

        {/* BUTTON */}
        <button
          onClick={handleBooking}
          className="w-full bg-green-500 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Confirm Booking 🚀
        </button>

      </div>
    </div>
  );
};

export default VehicleDetails;
