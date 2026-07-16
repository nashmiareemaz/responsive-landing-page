function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-3">TechFlow</h2>

        <p className="text-gray-400 mb-4">
          Empowering teams with AI-powered productivity.
        </p>

        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">Features</a>
          <a href="#" className="hover:text-blue-400">Pricing</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>

        <p className="text-gray-500">
          © 2026 TechFlow. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;