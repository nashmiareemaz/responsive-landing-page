function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">
          TechFlow
        </h1>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;