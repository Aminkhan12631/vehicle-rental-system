

const Blog = () => {
  return (
   <div className="bg-slate-950 text-white min-h-screen pt-24 px-10">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>

      <p className="text-gray-400 mb-4">
        Stay updated with the latest trends in vehicle rentals, travel tips, and tech insights.
      </p>

      <ul className="list-disc pl-5 text-gray-400 space-y-2">
        <li>Top 5 Bikes for City Travel</li>
        <li>How to Choose the Right Rental Car</li>
        <li>Tips for Affordable Travel</li>
        <li>Future of Smart Mobility</li>
      </ul>
    </div>
  );
};

export default Blog;
