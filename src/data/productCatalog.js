import bg from '../assets/bg-product.png'
import retail1 from '../assets/product1.webp';
import home1 from '../assets/product2.webp';
import hospitality1 from '../assets/product3.webp';
import retail2 from '../assets/product4.webp';
import home2 from '../assets/product5.webp';
import hospitality2 from '../assets/product6.webp';

export const products = [
  {
    id: 1,
    title: 'Retail Package',
    subtitle: 'Cold Brew 250ml',
    price: 2,
    image: retail1,
    backgroundImg: bg,
  },
  {
    id: 2,
    title: 'Home Package',
    subtitle: 'Cold Brew 2L',
    price: 5,
    image: home1,
    backgroundImg: bg,
  },
  {
    id: 3,
    title: 'Hospitality Package',
    subtitle: 'Cold Brew 10L',
    price: 10,
    image: hospitality1,
    backgroundImg: bg,
  },
  {
    id: 4,
    title: 'Retail Box',
    subtitle: 'Cold Brew 250ml',
    price: 24,
    image: retail2,
    backgroundImg: bg,
  },
  {
    id: 5,
    title: 'Home Box',
    subtitle: 'Cold Brew 2L',
    price: 30,
    image: home2,
    backgroundImg: bg,
  },
  {
    id: 6,
    title: 'Hospitality Box',
    subtitle: 'Cold Brew 10L',
    price: 40,
    image: hospitality2,
    backgroundImg: bg,
  }
];

// Keep old structure for backward compatibility
export const productCatalog = {
  retail: {
    id: 'retail',
    title: 'Retail Collection',
    description: 'Premium packages designed for coffee shops, stores, and retail businesses',
    products: [
      {
        id: 'retail-blend-250g',
        name: 'Flores Premium Blend',
        weight: '250g',
        image: retail1,
        backgroundImg: bg,
        price: 28.50,
        originalPrice: 32.00,
        description: 'Our signature blend combining the best Flores arabica beans with notes of chocolate and citrus.',
        features: ['Single Origin', 'Medium Roast', 'Chocolate Notes', 'Retail Ready'],
        roastLevel: 'Medium',
        processingMethod: 'Wet Hulled',
        altitude: '1200-1600m',
        flavorProfile: 'Chocolate, Orange, Caramel',
        availability: 'In Stock',
        minimumOrder: 12
      },
      {
        id: 'retail-arabica-500g',
        name: 'Pure Arabica Reserve',
        weight: '500g',
        image: retail2,
        backgroundImg: bg,
        price: 45.00,
        originalPrice: 52.00,
        description: 'Premium single-origin arabica beans from our highland plantations.',
        features: ['100% Arabica', 'Dark Roast', 'Full Body', 'Premium Grade'],
        roastLevel: 'Dark',
        processingMethod: 'Natural',
        altitude: '1400-1800m',
        flavorProfile: 'Dark Chocolate, Nuts, Spices',
        availability: 'In Stock',
        minimumOrder: 6
      }
    ]
  },
  home: {
    id: 'home',
    title: 'Home Collection',
    description: 'Perfect portions for coffee enthusiasts who appreciate quality at home',
    products: [
      {
        id: 'home-morning-200g',
        name: 'Morning Delight',
        weight: '200g',
        image: home1,
        backgroundImg: bg,
        price: 22.00,
        originalPrice: 26.00,
        description: 'A bright and energizing blend perfect for starting your day.',
        features: ['Light Roast', 'Fruity Notes', 'High Caffeine', 'Home Grind'],
        roastLevel: 'Light',
        processingMethod: 'Washed',
        altitude: '1300-1500m',
        flavorProfile: 'Citrus, Berry, Floral',
        availability: 'In Stock',
        minimumOrder: 1
      },
      {
        id: 'home-evening-200g',
        name: 'Evening Comfort',
        weight: '200g',
        image: home2,
        backgroundImg: bg,
        price: 24.00,
        originalPrice: 28.00,
        description: 'A smooth, mellow blend ideal for relaxing moments.',
        features: ['Medium Roast', 'Smooth Body', 'Low Acidity', 'Versatile'],
        roastLevel: 'Medium',
        processingMethod: 'Semi-Washed',
        altitude: '1200-1400m',
        flavorProfile: 'Caramel, Vanilla, Honey',
        availability: 'In Stock',
        minimumOrder: 1
      }
    ]
  },
  hospitality: {
    id: 'hospitality',
    title: 'Hospitality Collection',
    description: 'Bulk packages for hotels, restaurants, and cafes with consistent quality',
    products: [
      {
        id: 'hospitality-espresso-1kg',
        name: 'Professional Espresso',
        weight: '1kg',
        image: hospitality1,
        backgroundImg: bg,
        price: 85.00,
        originalPrice: 95.00,
        description: 'Specially crafted for espresso machines with rich crema and balanced flavor.',
        features: ['Espresso Grind', 'Dark Roast', 'Rich Crema', 'Bulk Size'],
        roastLevel: 'Dark',
        processingMethod: 'Wet Hulled',
        altitude: '1300-1700m',
        flavorProfile: 'Dark Chocolate, Caramel, Tobacco',
        availability: 'In Stock',
        minimumOrder: 5
      },
      {
        id: 'hospitality-filter-1kg',
        name: 'House Filter Blend',
        weight: '1kg',
        image: hospitality2,
        backgroundImg: bg,
        price: 78.00,
        originalPrice: 88.00,
        description: 'Versatile blend perfect for drip coffee and batch brewing.',
        features: ['Filter Grind', 'Medium Roast', 'Balanced', 'Food Service'],
        roastLevel: 'Medium',
        processingMethod: 'Natural',
        altitude: '1200-1600m',
        flavorProfile: 'Nuts, Chocolate, Mild Fruit',
        availability: 'In Stock',
        minimumOrder: 3
      }
    ]
  }
};

export const getAllProducts = () => {
  return Object.values(productCatalog).flatMap(category =>
    category.products.map(product => ({
      ...product,
      category: category.id,
      categoryTitle: category.title
    }))
  );
};