import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

//   const navClasses = isHome
//     ? `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
//         scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
//       }`
//     : 'bg-white shadow-md py-4';

//   const linkClasses = (isHome && !scrolled)
//     ? 'text-white hover:text-gold-500 transition-colors duration-500'
//     : 'text-gray-800 hover:text-gold-500 transition-colors duration-500';

//   const titleClasses = (isHome && !scrolled)
//     ? 'text-white transition-colors duration-500'
//     : 'text-black transition-colors duration-500';

  const navClasses = 'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-black py-6';
  const linkClasses = 'text-white hover:text-gold-500 transition-colors duration-500';
  const titleClasses = 'text-white transition-colors duration-500';

  // Custom scroll function to offset the navbar height
  const scrollWithOffset = (el: HTMLElement) => {
    const yOffset = -60;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className={`text-2xl md:text-3xl font-bold ${titleClasses}`}>
          Alison's Resin Creations
        </Link>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          title="Toggle menu"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:block absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-2 lg:p-0">
            <li>
              <HashLink smooth to="/#about" scroll={scrollWithOffset} className={linkClasses} onClick={() => setMenuOpen(false)}>
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#featured" scroll={scrollWithOffset} className={linkClasses} onClick={() => setMenuOpen(false)}>
                Featured
              </HashLink>
            </li>
            <li>
              <Link to="/products" className={linkClasses} onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <HashLink smooth to="/#contact" scroll={scrollWithOffset} className={linkClasses} onClick={() => setMenuOpen(false)}>
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;