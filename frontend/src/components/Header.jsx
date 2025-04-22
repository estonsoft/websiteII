import React from "react";

function Header() {
  return (
    <div className="bg-[#0b0f24] text-white relative">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 md:px-12 py-6 z-10 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40x40?text=E"
            alt="Estonsoft Logo"
            className="w-10 h-10"
          />
          <div>
            <h2 className="text-xl font-bold">ESTONSOFT</h2>
            <p className="text-lime-400 text-xs font-semibold -mt-1">
              THINK INNOVATIVE
            </p>
          </div>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex space-x-6 text-white/90 font-medium">
          <a href="#" className="hover:text-white border-b-2 border-lime-400 pb-1">
            Home
          </a>
          <a href="#" className="hover:text-white">About us</a>
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>

        {/* Social icons */}
        <div className="flex space-x-4 text-white/80">
          <a href="#"><i className="fab fa-facebook-f hover:text-white"></i></a>
          <a href="#"><i className="fab fa-twitter hover:text-white"></i></a>
          <a href="#"><i className="fab fa-instagram hover:text-white"></i></a>
          <a href="#"><i className="fab fa-linkedin-in hover:text-white"></i></a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Right Side Background Image */}
        <img
          src="https://images.unsplash.com/photo-1617127365659-2da759e9f22e?auto=format&fit=crop&w=1480&q=80"
          alt="Digital Art"
          className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-60 hidden md:block z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f24] via-[#0b0f24]/90 to-transparent z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div>
            <p className="text-green-400 font-medium mb-4 flex items-center text-lg">
              <span className="text-2xl mr-2">✳️</span> World Best Digital Venture
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Unlock your ideas with <br />
              Estonsoft's transformative <br />
              solutions.
            </h1>
            <a
              href="#"
              className="inline-flex items-center bg-lime-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-lime-300 transition-all group"
            >
              Get in Touch
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            {/* Slider dots */}
            <div className="flex gap-2 mt-10">
              <span className="w-3 h-3 bg-white/40 rounded-full"></span>
              <span className="w-3 h-3 bg-white/40 rounded-full"></span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span className="w-3 h-3 bg-white/40 rounded-full"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
