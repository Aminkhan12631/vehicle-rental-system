import { useEffect, useState } from "react";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await fetch("http://localhost:5000/bookings");
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:5000/booking/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    fetchBookings();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10 pt-24">
      <h1 className="text-3xl font-bold mb-6">
        Manage Bookings 📅
      </h1>

      {bookings.map((b) => (
        <div
          key={b._id}
          className="bg-slate-900 p-4 mb-4 rounded"
        >
          <h2 className="text-xl">{b.name}</h2>
          <p>From: {b.fromDate}</p>
          <p>To: {b.toDate}</p>

          <p className="mt-2">
            Status:{" "}
            <span className="text-yellow-400">
              {b.status}
            </span>
          </p>

          <div className="mt-3">
            <button
              onClick={() => updateStatus(b._id, "approved")}
              className="bg-green-500 px-3 py-1 mr-2 rounded"
            >
              Approve
            </button>

            <button
              onClick={() => updateStatus(b._id, "rejected")}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageBookings;
