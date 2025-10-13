import { useHoverAnimation } from '../hooks/useGSAP';

const ProductCard = ({ type, title, subtitle, image, backgroundImg, alt, className = "", buttonText = "View Details", onButtonClick }) => {
  const hoverRef = useHoverAnimation();
  
  if (type === "category") {
    return (
      <div ref={hoverRef} className={`bg-[#264653] text-white p-3 md:p-6 flex flex-col items-center justify-center rounded-xl text-center transition-transform duration-500 hover:scale-105 ${className}`}>
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">{title}</h3>
        <p className="text-sm md:text-lg lg:text-xl opacity-90 mb-3 md:mb-4">{subtitle}</p>
        <button
          onClick={onButtonClick}
          className="bg-white text-[#264653] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
        >
          {buttonText}
        </button>
      </div>
    );
  }

  if (type === "image") {
    return (
      <div
        ref={hoverRef}
        className={`relative group overflow-hidden rounded-xl bg-cover bg-center min-h-[300px] md:min-h-[400px] ${className}`}
        style={{ backgroundImage: backgroundImg ? `url(${backgroundImg})` : 'none' }}
      >
        {/* Product image overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={image}
            alt={alt}
            className="w-2/4 h-2/4 object-contain transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center">
          {title && (
            <div className="text-white mb-2 md:mb-3 text-center">
              <h3 className="text-sm md:text-lg font-bold">{title}</h3>
              {subtitle && <p className="text-xs md:text-sm opacity-90">{subtitle}</p>}
            </div>
          )}
          <button
            onClick={onButtonClick}
            className="bg-flores-primary font-family-heading font-semibold text-white px-8 py-2.5 rounded-lg text-lg whitespace-nowrap"
          >
            {alt}
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default ProductCard;