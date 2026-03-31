import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div
        className="mt-16 h-screen w-full bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
        }}
      >
        <div className="bg-black/60 text-white p-10 ml-10 max-w-xl rounded">
          <h1 className="text-5xl font-bold mb-4">
            FIND THE RIGHT CAR FOR YOU
          </h1>

          <p className="mb-6 text-lg">
            We have more than a thousand cars for you to choose from.
          </p>

          <button
            onClick={() => navigate("/vehicles")}
            className="bg-red-500 px-6 py-3 rounded hover:bg-red-600"
          >
            Explore Vehicles
          </button>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center px-10">

  <h2 className="text-4xl font-bold mb-12">Why Choose RideXpert?</h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl w-full">

    <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-xl text-center hover:scale-105 transition duration-300 shadow-xl">
      <h3 className="text-2xl mb-3">💸 Affordable Pricing</h3>
      <p className="text-gray-300">
        Get the best rental deals at the most competitive prices.
      </p>
    </div>

    <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-xl text-center hover:scale-105 transition duration-300 shadow-xl">
      <h3 className="text-2xl mb-3">🚗 Wide Range</h3>
      <p className="text-gray-300">
        Choose from cars, bikes, SUVs and luxury vehicles.
      </p>
    </div>

    <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-xl text-center hover:scale-105 transition duration-300 shadow-xl">
      <h3 className="text-2xl mb-3">⚡ Instant Booking</h3>
      <p className="text-gray-300">
        Book your ride instantly with our smooth process.
      </p>
    </div>

  </div>
</div>

      {/* ABOUT */}
      <div id="about" className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center px-10 gap-10">

  {/* Left Image */}
  <img
    src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
    className="w-full md:w-1/2 rounded-xl shadow-lg"
  />

  {/* Right Content */}
  <div className="md:w-1/2">
    <h2 className="text-4xl font-bold mb-6">About RideXpert</h2>

    <p className="text-gray-300 text-lg mb-4">
      RideXpert is a next-gen vehicle rental platform built for speed,
      affordability, and convenience.
    </p>

    <p className="text-gray-400">
      Whether you need a car for travel, business, or daily commute,
      we provide the best vehicles at unbeatable prices.
    </p>


  </div>

</div>


      {/* CONTACT */}
      <div id="contact" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col justify-center items-center text-center">

  <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

  <p className="text-lg mb-2">📧 support@ridexpert.com</p>
  <p className="text-lg mb-4">📞 +91 9876543210</p>



</div>

    </div>
  );
};

export default Home;
