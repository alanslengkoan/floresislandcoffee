import { useState } from 'react';
import { useHoverAnimation } from '../hooks/useGSAP';

const ProductDetailCard = ({ product, onAddToCart, className = "" }) => {
  const [quantity, setQuantity] = useState(product.minimumOrder || 1);
  const [isExpanded, setIsExpanded] = useState(false);
  const hoverRef = useHoverAnimation();

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(product.minimumOrder || 1, quantity + change);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      quantity,
      total: product.price * quantity
    });
  };

  const savings = product.originalPrice ? ((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0) : 0;

  return (
    <div 
      ref={hoverRef}
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ${className}`}
    >
      {/* Product Image */}
      <div 
        className="relative h-64 bg-cover bg-center group"
        style={{ backgroundImage: product.backgroundImg ? `url(${product.backgroundImg})` : 'none' }}
      >
        {/* Discount Badge */}
        {savings > 0 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{savings}%
          </div>
        )}
        
        {/* Availability Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
          product.availability === 'In Stock' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {product.availability}
        </div>

        {/* Product Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-48 h-48 object-contain transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Details */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-flores-primary mb-1 font-heading">{product.name}</h3>
          <p className="text-flores-primary/70 text-sm font-medium">{product.weight}</p>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold text-flores-primary">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
          <p className="text-sm text-flores-primary/80">{product.description}</p>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-flores-light/30 text-flores-primary text-xs rounded-full font-medium"
              >
                {feature}
              </span>
            ))}
            {product.features.length > 3 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-3 py-1 bg-flores-primary/10 text-flores-primary text-xs rounded-full font-medium hover:bg-flores-primary/20 transition-colors"
              >
                +{product.features.length - 3} more
              </button>
            )}
          </div>
          
          {/* Expanded Features */}
          {isExpanded && (
            <div className="mt-2 flex flex-wrap gap-2">
              {product.features.slice(3).map((feature, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-flores-light/30 text-flores-primary text-xs rounded-full font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Product Specs */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-flores-primary/70">Roast:</span>
              <span className="ml-2 font-medium text-flores-primary">{product.roastLevel}</span>
            </div>
            <div>
              <span className="text-flores-primary/70">Process:</span>
              <span className="ml-2 font-medium text-flores-primary">{product.processingMethod}</span>
            </div>
            <div className="col-span-2">
              <span className="text-flores-primary/70">Flavor:</span>
              <span className="ml-2 font-medium text-flores-primary">{product.flavorProfile}</span>
            </div>
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="space-y-4">
          {/* Quantity Selector */}
          <div>
            <label className="block text-sm font-medium text-flores-primary mb-2">
              Quantity {product.minimumOrder > 1 && `(Min: ${product.minimumOrder})`}
            </label>
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
              <button
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= (product.minimumOrder || 1)}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-flores-primary hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                −
              </button>
              <span className="font-semibold text-flores-primary">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-flores-primary hover:bg-gray-50 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Total & Add to Cart */}
          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-flores-primary/70">Total:</span>
              <span className="text-xl font-bold text-flores-primary">${(product.price * quantity).toFixed(2)}</span>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full bg-flores-primary hover:bg-flores-primary/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5-6M7 13l-1.5 6.5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6.4" />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;