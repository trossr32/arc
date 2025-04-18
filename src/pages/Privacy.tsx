import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
            
            <div className="space-y-6 text-gray-700">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <section>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including when you:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Place an order</li>
                  <li>Create an account</li>
                  <li>Sign up for our newsletter</li>
                  <li>Contact us for support</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Process your orders and payments</li>
                  <li>Send you order confirmations and updates</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send you marketing communications (if you opt in)</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Information Sharing</h2>
                <p>We do not sell or share your personal information with third parties for their direct marketing purposes. We may share your information with:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Professional advisers</li>
                  <li>Law enforcement when required by law</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p className="mt-2">Email: privacy@alisoncreations.com</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;