import { useState } from "react";

const AddVehicle = () => {
  const [vehicle, setVehicle] = useState({
    name: "",
    type: "",
    price: "",
    fuel: "",
    image: "",
  });

  const handleChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FINAL DATA 👉", vehicle); // 🔥 check this

    try {
      const res = await fetch("http://localhost:5000/vehicles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vehicle),
      });

      const data = await res.json();
      alert("Vehicle Added ✅");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10 pt-24">
      <h1 className="text-3xl font-bold mb-6">Add Vehicle 🚗</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-6 rounded-lg max-w-md"
      >
        {/* IMAGE FIRST */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded text-black"
        />

        <input
          type="text"
          name="name"
          placeholder="Vehicle Name"
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded text-black"
        />

        <input
          type="text"
          name="type"
          placeholder="Type (2W / 4W)"
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded text-black"
        />

        <input
          type="number"
          name="price"
          placeholder="Price per day"
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded text-black"
        />

        <input
          type="text"
          name="fuel"
          placeholder="Fuel Type"
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded text-black"
        />

        <button type="submit" className="w-full bg-red-500 py-2 rounded">
          Add Vehicle
        </button>
      </form>
    </div>
  );
};

export default AddVehicle;
