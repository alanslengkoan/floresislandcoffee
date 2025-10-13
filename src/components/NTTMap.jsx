/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';
import coffeeMarkerIcon from '../assets/coffe-circle.png';

const NTTMap = ({ className = "" }) => {
  const [mapOptions, setMapOptions] = useState(null);
  const [activeLocation, setActiveLocation] = useState(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const chartRef = useRef(null);
  const isMobile = window.innerWidth < 768;
  const locations = [
    {
      id: 'maumere',
      name: 'MAUMERE',
      subtitle: 'Our Factory',
      lat: -8.618,
      lon: 122.213,
      description:
        'The heart of our production, where quality control and craft roasting begin.',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop',
    },
    {
      id: 'bajawa',
      name: 'Bajawa Ngada',
      subtitle: 'Coffee Farm',
      lat: -8.798,
      lon: 120.897,
      description:
        'High altitude coffee cultivation with traditional farming methods.',
      image:
        'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop',
    },
    {
      id: 'manggarai',
      name: 'Manggarai',
      subtitle: 'Coffee Farm',
      lat: -8.528,
      lon: 120.458,
      description:
        'Premium arabica beans grown in the volcanic highlands.',
      image:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
    },
  ];

  useEffect(() => {
    const initializeMap = async () => {
      try {
        const response = await fetch('/assets/geojson/ntt.geojson');
        const geoJsonData = await response.json();

        const mapData = geoJsonData.features.map((feature, index) => ({
          ...feature,
          id:
            feature.properties.NAMOBJ ||
            feature.properties.NAME ||
            `region-${index}`,
          name:
            feature.properties.NAMOBJ ||
            feature.properties.NAME ||
            `Region ${index}`,
          properties: feature.properties,
        }));

        const options = {
          chart: {
            map: {
              type: 'FeatureCollection',
              features: mapData,
            },
            backgroundColor: 'transparent',
            plotBackgroundColor: 'transparent',
            height: 420,
            style: { fontFamily: 'inherit' },
            plotBorderWidth: 0,
            spacing: [0, 0, 0, 0],
            events: {
              click: function () {
                setActiveLocation(null);
              }
            }
          },
          title: { text: '' },
          credits: { enabled: false },
          mapNavigation: { enabled: false },
          legend: { enabled: false },
          tooltip: { enabled: false }, // Disable default tooltips

          defs: {
            gradient0: {
              tagName: 'linearGradient',
              id: 'transparentGradient',
              children: [
                { tagName: 'stop', offset: 0, style: { stopColor: 'transparent' } },
                { tagName: 'stop', offset: 1, style: { stopColor: 'transparent' } },
              ],
            },
          },
          series: [
            {
              type: 'map',
              mapData: mapData,
              nullColor: '#73B9CC', // base map color
              borderColor: 'transparent',
              allAreas: true,
              enableMouseTracking: false,
              color: '#73B9CC',
              states: {
                hover: {
                  enabled: false,
                  color: '#73B9CC'
                },
                inactive: {
                  opacity: 1
                }
              },
            },
            {
              type: 'mappoint',
              name: 'Coffee Locations',
              data: locations.map((loc) => ({
                id: loc.id,
                lat: loc.lat,
                lon: loc.lon,
                name: loc.name,
                subtitle: loc.subtitle,
                description: loc.description,
                image: loc.image,
                marker: {
                  symbol: `url(${coffeeMarkerIcon})`,
                  width: 38,
                  height: 38,
                },
              })),
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              point: {
                events: {
                  click: function (e) {
                    // Stop event propagation to prevent closing the card
                    if (e && e.browserEvent) {
                      e.browserEvent.stopPropagation();
                    }
                    setActiveLocation(this);
                    // Get the marker's pixel position on the chart
                    const chart = this.series.chart;
                    const point = this;
                    const plotX = point.plotX + chart.plotLeft;
                    const plotY = point.plotY + chart.plotTop;
                    setCardPosition({ x: plotX, y: plotY });
                  },
                },
              },
            },
          ],
          mapView: {
            center: [121.0, -8.6],
            zoom: isMobile ? 7.5 : 9, // 👈 smaller zoom for mobile
          },
        };

        setMapOptions(options);
      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    initializeMap();
  }, []);

  if (!mapOptions) {
    return (
      <div
        className={`relative ${className} flex items-center justify-center`}
        style={{ height: '400px' }}
      >
        <p>Loading map...</p>
      </div>
    );
  }

  return (
    <>
      <div className={`relative ${className}`}>
        <style>{`
          .highcharts-container,
          .highcharts-root,
          .highcharts-background {
            background-color: transparent !important;
          }
        `}</style>
        <HighchartsReact
          ref={chartRef}
          highcharts={Highcharts}
          constructorType={'mapChart'}
          options={mapOptions}
          containerProps={{ style: { backgroundColor: 'transparent' } }}
        />

        {/* Floating Info Card - Desktop Only */}
        {activeLocation && (
          <div
            className="hidden md:block absolute z-10 pointer-events-none"
            style={{
              left: `${cardPosition.x}px`,
              top: `${cardPosition.y}px`,
              transform: 'translate(-50%, calc(-100% - 20px))'
            }}
          >
            <div
              className="bg-white shadow-xl rounded-2xl flex overflow-hidden w-[340px] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-1/2 p-4 flex flex-col justify-center">
                <div className="text-sm text-flores-primary font-semibold mb-1">
                  {activeLocation.subtitle}
                </div>
                <h3 className="text-xl font-bold text-flores-primary mb-2">
                  {activeLocation.name}
                </h3>
                <p className="text-gray-600 text-sm leading-snug mb-3">
                  {activeLocation.description}
                </p>
                <button className="text-white bg-flores-primary text-sm py-2 rounded-md">
                  READ MORE
                </button>
              </div>
              <div className="w-1/2">
                <img
                  src={activeLocation.image}
                  alt={activeLocation.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Arrow pointing down to marker */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid white',
                bottom: '-8px'
              }}
            />
          </div>
        )}

        {/* Legend bottom-right */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-white/90 px-3 py-2 rounded-lg shadow">
          <img src={coffeeMarkerIcon} alt="Coffee" className="w-4 h-4" />
          <span className="text-gray-700 text-sm">Coffee Mil</span>
        </div>
      </div>

      {/* Mobile Info Card - Below Map */}
      {activeLocation && (
        <div className="md:hidden mt-6">
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img
              src={activeLocation.image}
              alt={activeLocation.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-flores-primary font-semibold mb-2">
                {activeLocation.subtitle}
              </div>
              <h3 className="text-2xl font-bold text-flores-primary mb-3">
                {activeLocation.name}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {activeLocation.description}
              </p>
              <button className="w-full text-white bg-flores-primary py-3 rounded-lg font-medium hover:bg-flores-primary/90 transition-colors">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NTTMap;
