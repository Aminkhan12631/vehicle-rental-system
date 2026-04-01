import React, { useEffect, useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      fetch(`https://vehicle-rental-backend-41xy.onrender.com/bookings/${user.email}`)
        .then((res) => res.json())
        .then((data) => setBookings(data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-10">
        Please login first ❌
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen p-10 pt-24">
      <h1 className="text-3xl font-bold mb-6">My Bookings 📅</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet ❌</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {bookings.map((b) => (
            <div key={b._id} className="bg-slate-900 p-4 rounded-lg">
              <h2 className="text-xl font-bold">{b.name}</h2>

              <p>From: {b.fromDate}</p>
              <p>To: {b.toDate}</p>

              <p className="mt-2">
                Status:{" "}
                <span
                  className={
                    b.status === "approved"
                      ? "text-green-400"
                      : b.status === "rejected"
                      ? "text-red-400"
                      : "text-yellow-400"
                  }
                >
                  {b.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;
