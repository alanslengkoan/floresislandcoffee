import React from 'react'

const CoffeeOrigin = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] flex items-center justify-start">
                <img
                    src="/src/assets/origin/Header Our Coffee Origin@4x.webp"
                    alt="Coffee Origin Header"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-white">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading">Our Coffee Origin</h1>
                    <div className="max-w-2xl space-y-4 text-base md:text-lg leading-relaxed">
                        <p>
                            Indonesia has a unique place in coffee history. Dutch smugglers took coffee seeds from Mocha in Yemen in the 1600s and founded coffee cultivation at the island of Java, expanding to Sumatra, Bali, Sulawesi, and Flores Island. Collectively known as the Indonesian Arabica Peninsula.
                        </p>
                        <p>
                            Today, Indonesian coffee plantations cover approximately 1.24 million hectares, producing around 800,000 tonnes annually. 96% of this production is from smallholder farmers.
                        </p>
                    </div>
                </div>
            </section>

            {/* We Are Harvesting Section */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-center mb-12 leading-relaxed md:leading-[33px] md:text-4xl font-extrabold flores-heading text-flores-primary">
                        We Are Harvesting
                    </h2>
                    <div className="relative">
                        <img
                            src="/src/assets/origin/Harvesting@4x.webp"
                            alt="Indonesia Map - Harvesting Locations"
                            className="w-full max-w-7xl mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Coffee Details Section - Combined */}
            <section className="py-16 md:py-20 flex justify-center">
                <div className="max-w-7xl mx-auto px-6 md:px-12 bg-[#E8F4F4] rounded-lg space-y-16 md:space-y-20 py-12 md:py-16">
                    {/* Common Arabica Varieties */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-flores-primary mb-8 font-heading">
                                Common Arabica Varieties
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    'Abyssinia',
                                    'S-795',
                                    'Ateng',
                                    'Typica',
                                    'Sigararutang',
                                    'Andungsari',
                                    'Catimors',
                                    'Tim-Tim (Timor Hybrid)'
                                ].map((variety, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                                        <div className="w-6 h-6 rounded-full bg-flores-primary flex items-center justify-center shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-sm md:text-base text-flores-primary font-body">{variety}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <img
                                src="/src/assets/origin/Common Arabica Varieties@4x.webp"
                                alt="Coffee Varieties"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Flores Island */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <img
                                src="/src/assets/origin/FLores Island@4x.webp"
                                alt="Flores Island"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-flores-primary mb-6 font-heading">
                                Flores Island
                            </h2>
                            <div className="space-y-4">
                                <p className="text-base md:text-lg leading-relaxed text-[#476472] font-body">
                                    The name Flores is from "Cabo de Flores" - Cape
                                    of Flowers - used by Portuguese sailors in the
                                    17th century. 570 kms long and located 300 kms
                                    to the east of Bali, Flores is home to exotic
                                    tropical fruits, spices and creatures, high
                                    mountain ranges and volcanoes surrounded by
                                    some of the world's best coral reefs. Flores
                                    Island is populated by various ethnic groups with
                                    their own traditions and languages within a total
                                    island wide population of around 2 million.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Coffee Snapshot */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-flores-primary mb-6 font-heading">
                                Coffee Snapshot
                            </h2>
                            <div className="space-y-4">
                                <p className="text-base md:text-lg leading-relaxed text-[#476472] font-body">
                                    The island of Flores has produced significant
                                    volumes of coffee for well over a century. Arabica
                                    coffee is grown at 1,200 to 1,800 metres above sea
                                    level. Flores coffee cultivation covers more than
                                    72,000 hectares of Robusta and Arabica species
                                    from the western part (Labuan Bajo) to the eastern
                                    end (Maumere). Most coffee is grown under shade
                                    trees without chemicals and is known for sweet
                                    chocolate, floral and woody notes. Kartika is the
                                    most common arabica variety along with Yellow
                                    Colombian, Lini S, Red Columbian, and Juria.
                                </p>
                            </div>
                        </div>
                        <div>
                            <img
                                src="/src/assets/origin/Coffee Snapshot@4x.webp"
                                alt="Coffee Snapshot"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Region Cards Section */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Maumere */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div
                                className="relative h-48 bg-cover bg-center text-center flex items-center justify-center"
                                style={{ backgroundImage: "url('/src/assets/origin/Region - Maumere@4x.webp')" }}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">Maumere</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-sm md:text-base leading-relaxed text-[#476472] font-body">
                                    Located in Sikka Regency, Maumere is a growing coffee producing region. This region is cultivated over flat hills and Mount Egon. Some smallholder farmers apply the semi-intensive vanilla in agroforestry systems.
                                </p>
                            </div>
                        </div>

                        {/* Manggarai */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div
                                className="relative h-48 bg-cover bg-center text-center flex items-center justify-center"
                                style={{ backgroundImage: "url('/src/assets/origin/Region - Manggarai@4x.webp')" }}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">Manggarai</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-sm md:text-base leading-relaxed text-[#476472] font-body">
                                    East of volcano Reja, Manggarai has the most specialty coffee in Flores. Manggarai has been famous for the variety of arabica in Manggarai Raya, covering West, Central, and East Manggarai. Here, smallholder farmers work with a medium body and mild nutty flavour notes.
                                </p>
                            </div>
                        </div>

                        {/* Bajawa */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div
                                className="relative h-48 bg-cover bg-center text-center flex items-center justify-center"
                                style={{ backgroundImage: "url('/src/assets/origin/Region - Bajawa@4x.webp')" }}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">Bajawa</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-sm md:text-base leading-relaxed text-[#476472] font-body">
                                    In Ngada Regency, Bajawa sits on a volcanic region surrounded by volcanoes like Inerie, Ebulobo, Laki-laki, Catimor and Timor Hybrids. With fruity Wamena Ageing across the region, Bajawa coffee has an earthly notes of wood, chocolate and tobacco.
                                </p>
                            </div>
                        </div>

                        {/* Kelimutu */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div
                                className="relative h-48 bg-cover bg-center text-center flex items-center justify-center"
                                style={{ backgroundImage: "url('/src/assets/origin/Region - Kelimutu@4x.webp')" }}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">Kelimutu</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-sm md:text-base leading-relaxed text-[#476472] font-body">
                                    Located in Ende Regency near the famous three-colored lakes known as the lakes of coffee origin, producing Arabica and Robusta. "Nge Ende", a local traditional drink made with ginger and ground ries powder.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tourism Snapshot Section */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-center mb-8 leading-relaxed md:leading-[33px] md:text-4xl font-extrabold flores-heading text-flores-primary">
                        Tourism Snapshot
                    </h2>
                    <div className="mb-8">
                        <img
                            src="/src/assets/origin/Tourism Snapshot@4x.webp"
                            alt="Tourism Snapshot"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="space-y-4 max-w-5xl mx-auto">
                        <p className="text-base md:text-lg leading-relaxed text-[#476472] font-body">
                            Flores island is visually extraordinary and showcases the world-famous Komodo National Park, a UNESCO World Heritage site,
                            multi-coloured volcanic lakes, pristine waterfalls, uninhabited islands, and pristine reefs. Unique agriculture, like the spider web rice
                            fields of Cancar and shade grown plantations of coffee, cacao, coconut, the island wide cultivation of aromatic spices contribute to a
                            strong cultural and culinary heritage.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-[#476472] font-body">
                            The island's stunning rugged coastline, islands, pristine waters and marine life make it a paradise for liveaboard cruising, sea kayaking,
                            diving and snorkelling. Easy access to cultural immersion provides a deeper understanding of Flores' rich heritage and offers meaningful
                            connections with its warm-hearted people.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CoffeeOrigin
