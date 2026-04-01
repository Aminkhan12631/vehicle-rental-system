import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  const res = await fetch("https://vehicle-rental-backend-41xy.onrender.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("user", JSON.stringify(data)); // 🔥 save user
    alert("Login successful ✅");
    window.location.href = "/"; // redirect
  } else {
    alert(data.message);
  }
};


  return (
    <div className="bg-slate-950 text-white min-h-screen flex justify-center items-center">
      <div className="bg-slate-900 p-6 rounded-lg w-80">
        <h2 className="text-2xl mb-4">Login</h2>

        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="w-full mb-2 p-2 bg-slate-800 rounded"/>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="w-full mb-4 p-2 bg-slate-800 rounded"/>

        <button onClick={handleLogin} className="w-full bg-green-500 py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
