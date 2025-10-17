const SpecialtyCard = ({ image, hoverImage, alt, title }) => {
  return (
    <div className="relative h-[15rem] md:h-[26rem] w-full overflow-hidden group text-white">
      {/* Default Image */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:translate-x-full"
        loading="lazy"
      />

      {/* Hover Image - slides in from left */}
      <img
        src={hoverImage}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out -translate-x-full group-hover:translate-x-0"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-end p-4 md:p-8 text-center">
        <h3 className="text-3xl md:text-5xl font-semibold font-serif mb-3 md:mb-4">
          {title}
        </h3>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <button className="border border-white rounded-md px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium transition-colors hover:bg-white hover:text-black">
            Dry Hulled
          </button>
          <button className="border border-white rounded-md px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium transition-colors hover:bg-white hover:text-black">
            Wet Hulled
          </button>
          <button className="border border-white rounded-md px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium transition-colors hover:bg-white hover:text-black">
            Honey
          </button>
          <button className="border border-white rounded-md px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium transition-colors hover:bg-white hover:text-black">
            Natural
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialtyCard;