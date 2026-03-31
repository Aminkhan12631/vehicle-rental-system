import { useEffect, useState } from "react";

const ManageVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [editVehicle, setEditVehicle] = useState(null);

  // 🔥 Fetch vehicles
  const fetchVehicles = async () => {
    try {
      const res = await fetch("http://localhost:5000/vehicles");
      const data = await res.json();
      setVehicles(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  // 🔥 DELETE
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/vehicles/${id}`, {
        method: "DELETE",
      });

      alert("Vehicle Deleted ❌");
      fetchVehicles();
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 EDIT
  const handleEdit = (vehicle) => {
    setEditVehicle(vehicle);
  };

  // 🔥 UPDATE
  const handleUpdate = async () => {
    try {
      await fetch(
        `http://localhost:5000/vehicles/${editVehicle._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editVehicle),
        }
      );

      alert("Vehicle Updated ✅");

      setEditVehicle(null);
      fetchVehicles();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10 pt-24">
      <h1 className="text-3xl font-bold mb-6">
        Manage Vehicles 🚗
      </h1>

      {vehicles.length === 0 ? (
        <p>No vehicles found ❌</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <div
              key={v._id}
              className="bg-slate-900 p-4 rounded-lg"
            >
              <h2 className="text-xl font-bold">{v.name}</h2>
              <p>Type: {v.type}</p>
              <p>Price: ₹{v.price}</p>
              <p>Fuel: {v.fuel}</p>

              <button
                onClick={() => handleEdit(v)}
                className="mt-2 bg-blue-500 px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(v._id)}
                className="mt-2 ml-2 bg-red-500 px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 🔥 EDIT FORM */}
      {editVehicle && (
        <div className="bg-slate-900 p-6 mt-10 rounded max-w-md">
          <h2 className="text-xl mb-3">Edit Vehicle ✏️</h2>

          <input
            type="text"
            value={editVehicle.name}
            onChange={(e) =>
              setEditVehicle({ ...editVehicle, name: e.target.value })
            }
            className="w-full mb-2 p-2 text-black"
          />

          <input
            type="text"
            value={editVehicle.type}
            onChange={(e) =>
              setEditVehicle({ ...editVehicle, type: e.target.value })
            }
            className="w-full mb-2 p-2 text-black"
          />

          <input
            type="number"
            value={editVehicle.price}
            onChange={(e) =>
              setEditVehicle({ ...editVehicle, price: e.target.value })
            }
            className="w-full mb-2 p-2 text-black"
          />

          <input
            type="text"
            value={editVehicle.fuel}
            onChange={(e) =>
              setEditVehicle({ ...editVehicle, fuel: e.target.value })
            }
            className="w-full mb-2 p-2 text-black"
          />

          <button
            onClick={handleUpdate}
            className="bg-green-500 px-4 py-1 mt-2 rounded"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageVehicles;
