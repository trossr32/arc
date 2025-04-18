import React from 'react';
import { Product } from '../models/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="h-64 overflow-hidden">
        <img 
          src={`${import.meta.env.BASE_URL}${product.images.find(img => img.coverImage)?.imageUrl}`} 
          alt={product.title} 
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
  );
};

export default ProductCard;