import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Product } from '../models/Product';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/src/data/products.json');
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">All Products</h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-12"></div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                  <div 
                    className="h-64 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img 
                      src={product.images.find(img => img.coverImage)?.imageUrl} 
                      alt={product.images.find(img => img.coverImage)?.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gold-600">&pound;{product.price.toFixed(2)}</span>
                      <a 
                        href={product.etsy} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 py-2 bg-gold-500 text-black font-medium rounded-md hover:bg-gold-600 transition-colors duration-300"
                      >
                        View on Etsy
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image Gallery Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-4 flex justify-between items-center border-b">
                <h3 className="text-xl font-semibold">{selectedProduct.title}</h3>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700"
                  title="Close"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProduct.images.map((image, index) => (
                  <div key={index} className="aspect-w-4 aspect-h-3">
                    <img 
                      src={image.imageUrl} 
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Products;