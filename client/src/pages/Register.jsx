import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen flex justify-center items-center">
      <div className="bg-slate-900 p-6 rounded-lg w-80">
        <h2 className="text-2xl mb-4">Register</h2>

        <input placeholder="Name" onChange={(e)=>setName(e.target.value)} className="w-full mb-2 p-2 bg-slate-800 rounded"/>
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="w-full mb-2 p-2 bg-slate-800 rounded"/>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="w-full mb-4 p-2 bg-slate-800 rounded"/>

        <button onClick={handleRegister} className="w-full bg-blue-500 py-2 rounded">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
