import { useState } from 'react';
import SEOHead from './components/SEOHead';
import ProductDetailCard from './components/ProductDetailCard';
import CartSidebar from './components/CartSidebar';
import { productCatalog, getAllProducts } from './data/productCatalog';
import { useScrollAnimation, useStaggerAnimation } from './hooks/useGSAP';
import heroImage from './assets/hero.webp';
import logoCoffee from './assets/logoCoffee.png';

function Product() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  
  const heroRef = useScrollAnimation();
  const categoriesRef = useStaggerAnimation();
  const productsRef = useStaggerAnimation();

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity, total: (item.quantity + product.quantity) * item.price }
            : item
        );
      }
      return [...prevItems, product];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId, change) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === productId) {
          const newQuantity = Math.max(item.minimumOrder || 1, item.quantity + change);
          return { ...item, quantity: newQuantity, total: newQuantity * item.price };
        }
        return item;
      })
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleCheckout = (items) => {
    // Handle checkout logic here
    console.log('Checkout items:', items);
    alert('Thank you for your order! We will contact you shortly.');
    setCartItems([]);
    setIsCartOpen(false);
  };

  const getFilteredProducts = () => {
    let products = getAllProducts();
    
    if (activeCategory !== 'all') {
      products = products.filter(product => product.category === activeCategory);
    }

    // Sort products
    products.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return products;
  };

  return (
    <>
      <SEOHead 
        title="Products - Flores Island Coffee | Premium Indonesian Coffee Packages"
        description="Discover our premium coffee packages: Retail, Home, and Hospitality collections. High-quality Indonesian coffee beans from Flores Island, perfect for every occasion and business need."
        keywords="flores island coffee products, indonesian coffee packages, retail coffee, home coffee, hospitality coffee, premium coffee beans, specialty coffee products, coffee wholesale, indonesian coffee export"
      />
      
      <div className="bg-white">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative h-[92vh] bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})` }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div className="max-w-4xl px-6">
              <div className="mb-6">
                <div className="flex items-center justify-center">
                  <img src={logoCoffee} alt="Flores Island Coffee Logo" className="w-18 h-24" />
                </div>
              </div>
              <p className="text-white/80 text-sm font-semibold tracking-wide uppercase mb-4">
                PREMIUM COFFEE COLLECTION
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight font-heading leading-tight">
                Order Your Perfect Coffee
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-body">
                From single-origin arabica to specialty blends - discover and order 
                the finest coffee beans from Flores Island.
              </p>
            </div>
          </div>

        </section>

        {/* Category Navigation & Filters */}
        <section className="py-8 bg-gray-50 sticky top-16 z-20 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div ref={categoriesRef} className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === 'all'
                      ? 'bg-flores-primary text-white shadow-md'
                      : 'bg-white text-flores-primary border border-flores-primary hover:bg-flores-primary/10'
                  }`}
                >
                  All Products
                </button>
                {Object.values(productCatalog).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-flores-primary text-white shadow-md'
                        : 'bg-white text-flores-primary border border-flores-primary hover:bg-flores-primary/10'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>

              {/* Sort Filter & Cart Button */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-flores-primary">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-flores-primary focus:outline-none focus:ring-2 focus:ring-flores-primary/20"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                
                {/* Cart Button */}
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative bg-flores-primary hover:bg-flores-primary/90 text-white p-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5-6M7 13l-1.5 6.5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6.4" />
                  </svg>
                  <span className="hidden sm:inline text-sm font-medium">Cart</span>
                  {totalCartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {totalCartItems}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Category Description */}
            {activeCategory !== 'all' && (
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-flores-primary mb-4 font-heading">
                  {productCatalog[activeCategory]?.title}
                </h2>
                <p className="text-lg text-flores-primary/80 max-w-2xl mx-auto font-body">
                  {productCatalog[activeCategory]?.description}
                </p>
              </div>
            )}

            {/* Products Grid */}
            <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredProducts().map((product) => (
                <ProductDetailCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  className="h-full"
                />
              ))}
            </div>

            {/* Empty State */}
            {getFilteredProducts().length === 0 && (
              <div className="text-center py-16">
                <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <p className="text-xl text-gray-500 font-body">No products found in this category</p>
              </div>
            )}
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-16 bg-gradient-to-br from-flores-separator to-flores-light/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-flores-primary mb-6 font-heading">
                Why Choose Our Coffee?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-flores-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">🌱</span>
                  </div>
                  <h3 className="text-lg font-semibold text-flores-primary mb-2">Direct Trade</h3>
                  <p className="text-flores-primary/80 text-sm">Fair prices to farmers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-flores-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">⭐</span>
                  </div>
                  <h3 className="text-lg font-semibold text-flores-primary mb-2">Premium Quality</h3>
                  <p className="text-flores-primary/80 text-sm">Hand-picked & processed</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-flores-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">🚚</span>
                  </div>
                  <h3 className="text-lg font-semibold text-flores-primary mb-2">Fast Shipping</h3>
                  <p className="text-flores-primary/80 text-sm">Worldwide delivery</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-flores-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">💎</span>
                  </div>
                  <h3 className="text-lg font-semibold text-flores-primary mb-2">Freshness Guarantee</h3>
                  <p className="text-flores-primary/80 text-sm">Roasted to order</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Bulk Orders */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-flores-primary mb-6 font-heading">
              Need Bulk Orders or Custom Packages?
            </h2>
            <p className="text-lg text-flores-primary/80 mb-8 font-body">
              Contact us for wholesale pricing, custom roasting, or large quantity orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-flores-primary hover:bg-flores-primary/90 text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 font-body">
                Request Wholesale Quote
              </button>
              <button className="border-2 border-flores-primary text-flores-primary hover:bg-flores-primary hover:text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 font-body">
                Download Product Catalog
              </button>
            </div>
          </div>
        </section>

        {/* Cart Sidebar */}
        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateCartQuantity}
          onRemoveItem={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
      </div>

    </>
  );
}

export default Product;