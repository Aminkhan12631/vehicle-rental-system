import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // 🔐 LOGIN STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔐 REGISTER STATE
  const [name, setName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  // 🔥 LOGIN FUNCTION
  const handleLogin = async () => {
    try {
      const res = await fetch("https://vehicle-rental-backend-41xy.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful ✅");
        localStorage.setItem("user", JSON.stringify(data.user));
        setShowLogin(false);
        window.location.reload();
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 REGISTER FUNCTION
  const handleRegister = async () => {
    try {
      const res = await fetch("https://vehicle-rental-backend-41xy.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email: regEmail,
          password: regPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registered successfully ✅");
        setShowRegister(false);
        setShowLogin(true);
      } else {
        alert(data.message || "Error ❌");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-black text-white px-10 py-4 flex justify-between items-center fixed w-full top-0 z-[999]">

       <Link to="/" className="flex items-center gap-2 hover:scale-105 transition">
  <h1>🚗 RideXpert</h1>
</Link>

        <ul className="hidden md:flex gap-8 text-lg items-center">
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><Link to="/vehicles">Vehicles</Link></li>
          <li><a href="#contact">Contact</a></li>

{user?.role === "admin" && (
  <button
    onClick={() => {
      console.log("clicked"); // 👈 add this
      navigate("/admin");
    }}
    className="bg-blue-500 px-4 py-1 rounded"
  >
    Admin
  </button>
)}


<button
  onClick={() => navigate("/my-bookings")}
  className="hover:text-green-400"
>
  My Bookings
</button>



          {user ? (
            <>
              <span>Hi, {user.name} 👋</span>



              <button
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.reload();
                }}
                className="bg-red-500 px-4 py-1 rounded"
              >
                Logout
              </button>
            </>




          ) : (
            <>
              <button
                onClick={() => setShowLogin(true)}
                className="bg-red-500 px-4 py-1 rounded"
              >
                Login
              </button>

              <button
                onClick={() => setShowRegister(true)}
                className="border border-white px-4 py-1 rounded"
              >
                Register
              </button>
            </>
          )}



          
        </ul>
      </nav>

      {/* 🔐 LOGIN MODAL */}
      {showLogin && (
        <>
          <div
            onClick={() => setShowLogin(false)}
            className="fixed inset-0 bg-black/50"
          ></div>

          <div className="fixed inset-0 flex justify-center items-center">
            <div className="relative bg-white w-[400px] p-6 rounded-lg">

<button
  onClick={() => setShowLogin(false)}
  className="absolute top-2 right-3 text-gray-600 text-2xl hover:text-black"
>
  ✕
</button>



              <h2 className="text-2xl text-black font-bold mb-6 text-center">
                Login
              </h2>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 mb-3 rounded"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2 mb-4 rounded"
              />


              <button
                onClick={handleLogin}
                className="w-full bg-red-500 text-white py-2 rounded"
              >
                Login
              </button>

              <p className="text-center mt-4 text-black">
                Don't have an account?{" "}
                <span
                  onClick={() => {
                    setShowLogin(false);
                    setShowRegister(true);
                  }}
                  className="text-red-500 cursor-pointer"
                >
                  Register
                </span>
              </p>

            </div>
          </div>
        </>
      )}

      {/* 🔐 REGISTER MODAL */}
      {showRegister && (
        <>
          <div
            onClick={() => setShowRegister(false)}
            className="fixed inset-0 bg-black/50"
          ></div>

          <div className="fixed inset-0 flex justify-center items-center">
            <div className="relative bg-white w-[400px] p-6 rounded-lg">


<button
  onClick={() => setShowRegister(false)}
  className="absolute top-2 right-3 text-gray-600 text-2xl hover:text-black"
>
  ✕
</button>

              <h2 className="text-2xl text-black font-bold mb-6 text-center">
                Sign Up
              </h2>

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 mb-3 rounded"
              />

              <input
                type="email"
                placeholder="Email"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                className="w-full border p-2 mb-3 rounded"
              />

              <input
                type="password"
                placeholder="Password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                className="w-full border p-2 mb-4 rounded"
              />

              <button
                onClick={handleRegister}
                className="w-full bg-red-500 text-white py-2 rounded"
              >
                Sign Up
              </button>

              <p className="text-center mt-4 text-black">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setShowRegister(false);
                    setShowLogin(true);
                  }}
                  className="text-red-500 cursor-pointer"
                >
                  Login
                </span>
              </p>

            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
