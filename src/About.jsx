import SEOHead from './components/SEOHead';
import TeamMember from './components/TeamMember';
import mapAbout from './assets/Timeline.webp';
import coffeeIcon from './assets/coffe.png';
import LeafIcon from './assets/leaf.png';
import cupIcon from './assets/cup.png';
import sunIcon from './assets/sun.png';
import ourBrand1 from './assets/OurBrand1.webp';
import ourBrand2 from './assets/OurBrand2.webp';
import strategic1 from './assets/StrategicPartnership1.webp';
import strategic2 from './assets/StrategicPartnership2.webp';
import { teamData } from './data/teamData';
import heroImage from './assets/AboutUs.webp';
import MethodologyCard from './components/MethodologyCard';
import { methodologyData } from './data/methodology';

function About() {
  return (
    <>
      <SEOHead
        title="About Flores Island Coffee - Indonesian Coffee Export & Sustainable Farming Partnership"
        description="Learn about Flores Island Coffee - a strategic New Zealand-Indonesia partnership driving sustainable growth in specialty coffee. 370,000+ members, 222,000 smallholder farmers, premium coffee export from Flores Island."
        keywords="about flores island coffee, indonesian coffee partnership, sustainable coffee farming, specialty coffee export, flores island coffee company, coffee cooperative indonesia, smallholder coffee farmers, premium coffee production, coffee supply chain indonesia, sustainable agriculture flores"
      />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Small Header */}
            <div className="text-center my-8 md:my-16 px-6 md:px-[114px]">
              <h2 className="text-sm lg:text-xl font-medium tracking-wide text-flores-primary uppercase mb-8 flores-heading">
                Our Story
              </h2>
              <h1 className="text-xl md:text-4xl lg:text-4xl font-bold mb-6 tracking-tight font-heading leading-tight">
                The richness of Flores coffee echoes the depth of its emerald hills and ocean skies.
              </h1>
            </div>

          </div>
        </section>
        <div className='min-h-screen'>
          {/* Team Photo */}
          <section className="relative h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
          </section>
        </div>

        {/* Flores Island Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-teal-800 mb-2">FLORES ISLAND</h2>
            <p className="text-xl text-teal-600">INDONESIA</p>
          </div> */}

            {/* Map Section */}
            <div className="mb-16">
              <div className="relative">
                <img src={mapAbout} alt='coffee map' />
              </div>
            </div>

            {/* Description Text */}
            <div className="max-w-4xl mx-auto space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                {`Flores Island Coffee (FIC) is a strategic partnership between New Zealand and Indonesia, designed to accelerate sustainable growth and international market access for Flores coffee.`}
              </p>

              <p className="text-lg">
                {`The venture is led by Old Station Road Limited (New Zealand)—a brand owner and investor across agriculture, food, and beverage—and Kopdit Pintu Air, Indonesia’s largest cooperative credit union with over 370,000 members, including 222,000 smallholder farmers managing nearly 400,000 hectares of productive land.`}
              </p>

              <p className="text-lg">
                {`Headquartered in Maumere, East Flores, FIC collaborates directly with farming communities across the island, from Manggarai, Bajawa–Ngada, and Ende, to Maumere, to build a vertically integrated, end-to-end supply chain that connects farms, processing, roasting, and global markets.`}
              </p>
            </div>
          </div>
        </section>

        {/* Coffee Farming Photos */}
        {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Coffee farmers harvesting beans in traditional hats"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Farmers examining coffee plants"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Coffee cherry harvesting"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className='text-center'>
              <h2 className="text-xl lg:text-4xl xl:text-5xl font-serif text-slate-700 mb-4 lg:mb-12 font-light">Methodology</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
              {methodologyData.map((method) => (
                <MethodologyCard
                  key={method.id}
                  alt={method.alt}
                  image={method.image}
                  text={method.text}
                />
              )
              )}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl lg:max-w-5xl mx-auto p-4 lg:p-12 bg-linear-to-br from-blue-100/70 to-blue-200/50 rounded-lg shadow-xl">
            <div className="text-center mb-8 lg:mb-16">
              <h2 className="text-xl lg:text-4xl xl:text-5xl font-serif text-slate-700 mb-4 lg:mb-12 font-light">Mission Statement</h2>
              <div className="space-y-3 lg:space-y-6 text-sm lg:text-xl xl:text-2xl text-slate-700 leading-relaxed max-w-3xl lg:max-w-4xl mx-auto">
                <p className="font-light">
                  Within 3 years achieve the aggregation of coffee production from
                  <span className="font-medium text-slate-800"> 3% of the 75,000 Flores smallholder coffee farmer households</span>, into
                  a high quality, globally significant production centre, and to reach a
                  target of <span className="font-medium text-slate-800">6% of these farmer households within 5 years</span>.
                </p>
              </div>
            </div>

            {/* Four Values Icons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-12 mt-6 lg:mt-16">
              <div className="text-center lg:border-r-2 lg:pr-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <img src={coffeeIcon} alt="Ethical Labour & Gender Neutral Practices" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-2 leading-tight">Ethical Labour &<br />Gender Neutral</h3>
                <p className="text-sm text-slate-700 font-medium">Practices</p>
              </div>

              <div className="text-center lg:border-r-2 lg:pr-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <img src={LeafIcon} alt="Deforestation Free" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-2">Deforestation</h3>
                <p className="text-sm text-slate-700 font-medium">Free</p>
              </div>

              <div className="text-center lg:border-r-2 lg:pr-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <img src={cupIcon} alt="Biodiversity & Ecosystem Services" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-2 leading-tight">Biodiversity &<br />Ecosystem Services</h3>
                <p className="text-sm text-slate-700 font-medium"></p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <img src={sunIcon} alt="Emissions & Circular Economy" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-2 leading-tight">Emissions & Circular</h3>
                <p className="text-sm text-slate-700 font-medium">Economy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-teal-800 text-center mb-12">Our Team</h2>

            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8">
              {teamData.map((member) => (
                <TeamMember
                  key={member.id}
                  name={member.name}
                  position={member.position}
                  image={member.image}
                  alt={member.alt}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-12">
            <div className='text-center md:border-r md:border-gray-500 md:pr-6'>
              <h2 className="text-xl lg:text-4xl xl:text-5xl font-serif text-slate-700 mb-4 lg:mb-12 font-light">Our Brand</h2>
              <div className="flex flex-row gap-4 justify-center items-center">
                <img src={ourBrand2} alt="Our Brand 2" className="max-w-[120px] md:max-w-40 w-full h-auto object-contain" />
                <img src={ourBrand1} alt="Our Brand 1" className="max-w-[120px] md:max-w-40 w-full h-auto object-contain" />
              </div>
            </div>
            <div className='text-center md:pl-6'>
              <h2 className="text-xl lg:text-4xl xl:text-5xl font-serif text-slate-700 mb-4 lg:mb-12 font-light">Strategic Partnership</h2>
              <div className="flex flex-row gap-4 justify-center items-center">
                <img src={strategic1} alt="Strategic Partnership 1" className="max-w-[120px] md:max-w-40 w-full h-auto object-contain" />
                <img src={strategic2} alt="Strategic Partnership 2" className="max-w-[120px] md:max-w-40 w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default About;