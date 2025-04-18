import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:alison@alisoncreations.com';
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Get In Touch</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Have questions about a specific product or interested in a custom piece? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg flex flex-col h-full">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-gold-500 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-700">Southend, Essex</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-gold-500 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-700">alison@alisoncreations.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-gold-500 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-700">(01702) 420420</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto pt-8">
                <button 
                  onClick={handleEmailClick}
                  className="w-full px-6 py-3 bg-gold-500 text-black font-medium rounded-md hover:bg-gold-600 transition-colors duration-300"
                >
                  Send Me an Email
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg flex flex-col h-full">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Custom Orders</h3>
                <p className="text-gray-700 mb-6">
                  Looking for something special? I create custom pieces tailored to your preferences. 
                  Whether it's a specific color scheme, size, or design concept, let's bring your vision to life.
                </p>
                <p className="text-gray-700 mb-6">
                  Custom orders typically take 2-3 weeks to complete, depending on complexity and current workload.
                </p>
              </div>
              <div className="mt-auto">
                <button 
                  onClick={handleEmailClick}
                  className="w-full px-6 py-3 bg-gold-500 text-black font-medium rounded-md hover:bg-gold-600 transition-colors duration-300"
                >
                  Request Custom Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;