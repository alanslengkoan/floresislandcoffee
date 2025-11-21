import { useParams, Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { products } from './data/productCatalog';
import SEOHead from './components/SEOHead';
import { ShoppingCart, Zap } from 'lucide-react';
import { useCart } from './context/CartContext';
import heroBg from './assets/hero-bg.webp';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-flores-primary mb-4">Product not found</h2>
          <Link to="/shop" className="text-flores-accent hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (exclude current product)
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Show success notification or animation (you can add a toast here)
    alert(`Added ${quantity} ${product.title} to cart!`);
    setQuantity(1); // Reset quantity after adding
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    // Navigate to checkout (you can implement a checkout page)
    navigate('/shop');
    // You could navigate to a checkout page instead:
    // navigate('/checkout');
  };

  return (
    <>
      <SEOHead
        title={`${product.title} ${product.subtitle} - Flores Island Coffee`}
        description={`Premium ${product.title} ${product.subtitle} from Flores Island, Indonesia. High-quality cold brew coffee.`}
        keywords="flores island coffee, cold brew coffee, indonesian coffee"
      />

      <div className="bg-white min-h-screen">
        {/* Product Details Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-stretch">
              {/* Product Image */}
              <div className="w-full">
                <div
                  className="rounded-3xl p-8 md:p-12 flex items-center justify-center relative overflow-hidden h-[400px] md:h-[500px]"
                  style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundPosition: '0% 100%',
                    backgroundSize: 'cover'
                  }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={`${product.title} ${product.subtitle}`}
                      className="max-w-full max-h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-between md:h-[500px] gap-8 md:gap-0">
                {/* Top Section */}
                <div className="space-y-6">
                  <div>
                    <p className="text-flores-primary text-sm md:text-base mb-2 font-body tracking-wide uppercase">
                      Flores Island Coffee
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-flores-primary mb-2 font-heading">
                      {product.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-flores-primary font-heading">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="text-4xl md:text-5xl font-bold text-flores-primary font-heading">
                    ${product.price}
                  </div>

                  {/* Quantity Selector */}
                  <div className="pt-2">
                    <label className="block text-flores-primary text-sm mb-3 font-body">
                      Quantity
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={decrementQuantity}
                        className="w-10 h-10 flex items-center justify-center border-2 border-flores-primary text-flores-primary rounded-lg hover:bg-flores-primary hover:text-white transition-colors"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-16 h-10 text-center border-2 border-gray-200 rounded-lg text-flores-primary font-semibold"
                        min="1"
                      />
                      <button
                        onClick={incrementQuantity}
                        className="w-10 h-10 flex items-center justify-center border-2 border-flores-primary text-flores-primary rounded-lg hover:bg-flores-primary hover:text-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="space-y-4 mt-2">
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 bg-[#D4E8E8] text-flores-primary px-6 py-4 rounded-xl font-semibold hover:bg-[#c0dada] transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={20} />
                      Add to Cart
                    </button>
                    <button
                      onClick={handleBuyNow}
                      className="flex-1 bg-flores-primary text-white px-6 py-4 rounded-xl font-semibold hover:bg-flores-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <Zap size={20} />
                      Buy Now
                    </button>
                  </div>

                  <div>
                    <p className="text-flores-accent hover:underline cursor-pointer text-sm mb-4 font-body">
                      More payment options
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-[#476472] font-body">
                      A retail-ready coffee sourced from the highlands of Flores, known for its natural sweetness and clean, smooth cup profile. Designed for everyday coffee lovers who want a high-quality, specialty-grade experience at home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* You May Also Like Section */}
        <section className="pt-8 pb-16 md:py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="leading-relaxed md:leading-[33px] md:text-4xl font-extrabold flores-heading text-flores-primary mb-12">
              You may also like
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/shop/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-[#D4E8E8] rounded-2xl p-8 mb-4 flex items-center justify-center h-[280px] group-hover:bg-[#c0dada] transition-colors">
                    <img
                      src={relatedProduct.image}
                      alt={`${relatedProduct.title} ${relatedProduct.subtitle}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-flores-primary mb-1 font-heading">
                        {relatedProduct.title}
                      </h3>
                      <p className="text-lg text-flores-primary/80 font-body">
                        {relatedProduct.subtitle}
                      </p>
                    </div>
                    <div className="text-2xl font-bold text-flores-primary font-heading">
                      ${relatedProduct.price}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductDetail;
