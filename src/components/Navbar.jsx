import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiActivity } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Projects', to: 'projects' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/70 backdrop-blur-xl border-slate-200/50 shadow-sm py-2' : 'bg-transparent border-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-2">
            <FiActivity className="text-accent-blue" size={24} />
            <Link to="hero" smooth={true} duration={500} offset={-64} className="flex flex-col">
              <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">AL ANDALUS</span>
              <span className="text-xs font-mono text-cyan-600 tracking-widest uppercase mt-1">Smart Solutions</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="group cursor-pointer px-4 py-2 font-mono text-sm font-medium text-slate-600 transition-all duration-300 relative"
                >
                  <span className="absolute inset-0 bg-blue-50 rounded-md scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
                  <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity mr-1">&lt;</span>
                  <span className="group-hover:text-accent-blue transition-colors">{link.name}</span>
                  <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity ml-1">/&gt;</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md bg-slate-100 text-slate-600 hover:text-accent-blue hover:bg-blue-50 transition-colors focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-64}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer block px-4 py-3 rounded-lg text-sm font-mono font-medium text-slate-700 hover:text-accent-blue hover:bg-blue-50/50 border border-transparent hover:border-blue-100 transition-all"
            >
              <span className="text-cyan-400 mr-2">/</span>{link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
