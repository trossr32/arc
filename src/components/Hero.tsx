import React from 'react';
import logo from '../../public/images/logo.png';
import { ChevronDown } from 'lucide-react';

// const Hero: React.FC = () => {
//   return (
//     <div
//       className="relative min-h-screen bg-black flex items-center justify-center"
//       style={{
//         backgroundColor: 'black',
//         backgroundImage: `url(${logo})`,
//         backgroundSize: 'contain', // Adjust to 'cover' or 'contain' based on your preference
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* <div className="text-center p-4">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Alison's Resin Creations</h1>
//         <p className="text-xl text-gold-500 mb-12">Handcrafted with passion</p>
//         <a 
//           href="#products" 
//           className="inline-block px-8 py-3 bg-gold-500 text-black font-medium rounded-full hover:bg-gold-600 transition-colors duration-300"
//         >
//           Explore Products
//         </a>
//       </div> */}
      
//       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
//     </div>
//   );
// };

const Hero: React.FC = () => {
  return (
    <div className="relative bg-black flex items-center justify-center min-h-screen">      
      <div className="text-center p-4 pb-48">
        <img src={logo} alt="Logo" className="max-w-full h-auto mt-8"
        style={{
          //maxHeight: '80vh', // Optional: Adjust max height to fit the viewport
        }}
      />
         {/* <p className="text-xl text-gold-500 mb-12">Handcrafted with passion</p> */}
         {/* <a 
           href="#products" 
           className="inline-block px-8 py-3 bg-gold-500 text-black font-medium rounded-full hover:bg-gold-600 transition-colors duration-300"
         >
           Explore Products
         </a> */}
         <ChevronDown className="mx-auto w-8 h-8 mt-24 text-gold-500 animate-bounce" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;