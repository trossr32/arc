import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Welcome to My Workshop</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Alison's Resin Creations offers beautifully handcrafted resin items, made with love and attention to detail. 
            From coasters and trays to custom art pieces, each creation is unique and designed to bring joy.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every piece begins as a vision and transforms into a one-of-a-kind treasure through a delicate process of 
            layering colors, embedding natural elements, and carefully finishing each detail by hand.
          </p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Handmade</h3>
              <p className="text-gray-700">Each piece is carefully crafted by hand with attention to every detail.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Unique</h3>
              <p className="text-gray-700">No two pieces are identical, ensuring you receive a truly one-of-a-kind item.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality</h3>
              <p className="text-gray-700">Made with premium materials to ensure beauty and durability for years to come.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;