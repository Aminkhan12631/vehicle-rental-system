import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-12 mt-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-white">RideXpert</h2>
          <p className="mt-2 text-gray-400">
            Affordable rentals for modern urban living.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
  <li><Link to="/about" className="hover:text-white">About</Link></li>
  <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
  <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
</ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
  <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
  <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
  <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
</ul>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © 2026 RideXpert. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
