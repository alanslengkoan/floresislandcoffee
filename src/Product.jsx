import SEOHead from './components/SEOHead';
import { products } from './data/productCatalog';
import heroImage from './assets/hero-products.webp';
import heroBg from './assets/hero-bg.webp';
import { Link } from 'react-router';

function Product() {
  return (
    <>
      <SEOHead
        title="Shop - Flores Island Coffee | Premium Indonesian Coffee"
        description="Discover our premium cold brew coffee packages from Flores Island, Indonesia. Available in retail, home, and hospitality sizes."
        keywords="flores island coffee, cold brew coffee, indonesian coffee, coffee packages, premium coffee"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-white px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: '10% 100%', backgroundSize: '100%' }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-16">
                {/* Left Content */}
                <div className="text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-heading">
                    Sip Into The Cup: Roasting
                  </h1>
                  <p className="text-base md:text-lg leading-relaxed text-white/90 font-body">
                    Discover the rich character of coffee grown in the highlands of Flores. Rooted in tradition and crafted with care, our beans carry the island's natural sweetness, clean flavors, and unique aroma. Explore our collection and find the taste that speaks to you.
                  </p>
                </div>

                {/* Right Image */}
                <div className="flex justify-center items-center">
                  <img
                    src={heroImage}
                    alt="Flores Island Coffee Products"
                    className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="leading-relaxed md:leading-[33px] md:text-4xl font-extrabold flores-heading text-flores-primary mb-12">
              Our Products
            </h2>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/shop/${product.id}`}
                  className="group cursor-pointer"
                >
                  <div className="bg-[#D4E8E8] rounded-2xl p-8 mb-4 flex items-center justify-center h-[280px] group-hover:bg-[#c0dada] transition-colors">
                    <img
                      src={product.image}
                      alt={`${product.title} ${product.subtitle}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-flores-primary mb-1 font-heading group-hover:text-flores-accent transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-lg text-flores-primary/80 font-body">
                        {product.subtitle}
                      </p>
                    </div>
                    <div className="text-2xl font-bold text-flores-primary font-heading">
                      ${product.price}
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

export default Product;