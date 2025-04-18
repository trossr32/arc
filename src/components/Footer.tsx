import React from 'react';
import { Instagram, Facebook, Pointer as Pinterest } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

// Custom scroll function to offset the navbar height
const scrollWithOffset = (el: HTMLElement) => {
  const yOffset = -60;
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

const linkClasses = 'text-gray-400 hover:text-gold-500 transition-colors duration-300';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Alison's Resin Creations</h3>
            <p className="text-gray-400 mb-4">Handcrafted resin art and home accessories made with love and attention to detail.</p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold-500 transition-colors duration-300">
                <Pinterest size={20} />
              </a>
            </div> */}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="./" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">Home</a></li>
              <li>
                <HashLink smooth to="./#about" scroll={scrollWithOffset} className={linkClasses}>About</HashLink>
              </li>
              <li><HashLink smooth to="./#featured" scroll={scrollWithOffset} className={linkClasses}>Featured</HashLink></li>
              <li><a href="./products" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">Products</a></li>
              <li><HashLink smooth to="./#contact" scroll={scrollWithOffset} className={linkClasses}>Contact</HashLink></li>
              <li><a href="./privacy" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates on new products and special offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
              />
              <button 
                type="submit" 
                className="bg-gold-500 text-black px-4 py-2 rounded-r-md hover:bg-gold-600 transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div> */}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alison's Resin Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;