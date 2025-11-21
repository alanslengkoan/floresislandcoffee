import { useParams, useNavigate, Link } from 'react-router';
import SEOHead from './components/SEOHead';
import { newsData } from './data/newsData';

function ReadNews() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Author Badge Component
  const AuthorBadge = ({ author }) => (
    <div className="flex items-center gap-2 mb-6">
      <div className="bg-teal-700 text-white rounded-full px-3 py-1 flex items-center gap-2">
        <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-xs font-medium">{author}</span>
      </div>
    </div>
  );
  
  const getNewsFromSlug = (slug) => {
    const newsMap = {
      'coffee-roasting-guide': {
        id: 1,
        title: 'Sip Into The Cup: The Art of Coffee Roasting',
        category: 'Roasting',
        image: newsData[0].image,
        alt: 'Close up of a coffee roasting machine',
        publishDate: 'March 15, 2024',
        author: 'Maria Santos',
        readTime: '5 min read',
        content: [
          {
            type: 'paragraph',
            text: 'Coffee roasting is both an art and a science that transforms green coffee beans into the aromatic brown beans we love. At Flores Island Coffee, our roasting process is carefully crafted to bring out the unique characteristics of our high-altitude grown beans.'
          },
          {
            type: 'heading',
            text: 'The Roasting Process'
          },
          {
            type: 'paragraph',
            text: 'Our roasting journey begins with selecting the finest green beans from local farmers across Flores Island. Each batch is carefully monitored as it progresses through various stages of roasting, from the initial drying phase to the complex chemical reactions that develop flavor.'
          },
          {
            type: 'paragraph',
            text: 'The first crack marks a crucial moment in roasting - this is when the bean structure begins to break down and oils start to develop. For our signature medium roast, we carefully control the temperature and timing to achieve the perfect balance of acidity, body, and flavor notes.'
          },
          {
            type: 'heading',
            text: 'Flavor Development'
          },
          {
            type: 'paragraph',
            text: 'Flores Island coffee beans are known for their unique terroir - the combination of volcanic soil, high altitude, and tropical climate creates distinct flavor profiles. During roasting, we work to enhance these natural characteristics while maintaining the bean\'s inherent sweetness and complexity.'
          },
          {
            type: 'paragraph',
            text: 'Our roasters use their expertise to identify the optimal roast level for each batch, ensuring that every cup delivers the rich, full-bodied flavor that Flores coffee is renowned for. The result is a coffee that captures the essence of our island\'s unique growing conditions.'
          }
        ]
      },
      'perfect-brewing-techniques': {
        id: 2,
        title: 'Sip Into The Cup: Perfect Brewing Techniques',
        category: 'Brewing',
        image: newsData[1].image,
        alt: 'Pouring freshly brewed coffee into a cup',
        publishDate: 'March 10, 2024',
        author: 'Carlos Rodriguez',
        readTime: '4 min read',
        content: [
          {
            type: 'paragraph',
            text: 'The perfect cup of coffee starts with quality beans, but the brewing method can make or break your coffee experience. Here are the essential techniques to unlock the full potential of your Flores Island coffee.'
          },
          {
            type: 'heading',
            text: 'Water Quality Matters'
          },
          {
            type: 'paragraph',
            text: 'Coffee is 98% water, so the quality of your water directly impacts the taste of your brew. Use filtered water with a balanced mineral content for the best extraction. The ideal water temperature is between 195-205°F (90-96°C).'
          },
          {
            type: 'heading',
            text: 'Grind Size and Consistency'
          },
          {
            type: 'paragraph',
            text: 'Different brewing methods require different grind sizes. For pour-over methods like V60 or Chemex, use a medium grind. For espresso, go fine. For French press, use a coarse grind. Consistency in grind size ensures even extraction.'
          },
          {
            type: 'paragraph',
            text: 'Always grind your beans just before brewing to preserve the volatile compounds that give coffee its aroma and flavor. Pre-ground coffee loses its freshness quickly, so invest in a quality burr grinder for the best results.'
          },
          {
            type: 'heading',
            text: 'Brewing Ratios'
          },
          {
            type: 'paragraph',
            text: 'A good starting point is a 1:15 to 1:17 ratio of coffee to water. This means for every gram of coffee, use 15-17 grams of water. Adjust according to your taste preferences - use more coffee for a stronger brew, less for a milder cup.'
          }
        ]
      },
      'advanced-roasting-profiles': {
        id: 3,
        title: 'Sip Into The Cup: Advanced Roasting Profiles',
        category: 'Roasting',
        image: newsData[2].image,
        alt: 'Another angle of a coffee roasting machine',
        publishDate: 'March 5, 2024',
        author: 'Ana Gutierrez',
        readTime: '6 min read',
        content: [
          {
            type: 'paragraph',
            text: 'Advanced roasting profiles allow us to fine-tune the flavor characteristics of our Flores Island coffee. By carefully controlling time, temperature, and airflow, we can highlight specific notes and create unique flavor experiences.'
          },
          {
            type: 'heading',
            text: 'Understanding Heat Application'
          },
          {
            type: 'paragraph',
            text: 'The rate of rise (ROR) during roasting is crucial for flavor development. A declining ROR throughout the roast helps avoid baked or flat flavors. We monitor the bean temperature and adjust heat application to maintain optimal development.'
          },
          {
            type: 'paragraph',
            text: 'Different phases of roasting require different heat strategies. During the drying phase, we use moderate heat to remove moisture gradually. As we approach first crack, we reduce heat input to allow for proper development without rushing the process.'
          },
          {
            type: 'heading',
            text: 'Airflow Management'
          },
          {
            type: 'paragraph',
            text: 'Proper airflow management helps control the roasting environment and affects the final flavor profile. Increased airflow can clean up the cup and reduce smokiness, while reduced airflow can increase body and intensity.'
          },
          {
            type: 'paragraph',
            text: 'We adjust airflow throughout the roast to enhance the natural characteristics of our Flores beans. This careful balance helps us achieve the complex, well-rounded profiles that our customers love.'
          },
          {
            type: 'heading',
            text: 'Development Time Ratio'
          },
          {
            type: 'paragraph',
            text: 'The development time ratio (DTR) - the percentage of total roast time spent after first crack - significantly impacts flavor. A DTR of 18-25% typically produces well-developed coffee with good sweetness and complexity, which is our target for most of our roast profiles.'
          }
        ]
      }
    };
    
    return newsMap[slug] || null;
  };

  const newsArticle = getNewsFromSlug(slug);

  if (!newsArticle) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/news')}
            className="bg-flores-primary text-white px-6 py-3 rounded-lg hover:bg-flores-primary/90 transition-colors"
          >
            Back to News
          </button>
        </div>
      </div>
    );
  }

  // Get related articles
  const relatedArticles = newsData
    .filter(news => news.id !== newsArticle?.id)
    .slice(0, 3);

  const latestArticles = newsData
    .filter(news => news.id !== newsArticle?.id)
    .slice(3, 7);

  return (
    <>
      <SEOHead
        title={`${newsArticle.title} - Flores Island Coffee News`}
        description={newsArticle.content[0]?.text?.substring(0, 160) || 'Expert coffee insights and brewing techniques from Flores Island Coffee'}
        keywords={`${newsArticle.category.toLowerCase()}, coffee ${newsArticle.category.toLowerCase()}, flores island coffee, indonesian coffee, coffee techniques, specialty coffee, coffee industry news`}
      />
      <div className="min-h-screen bg-white">
        {/* Article Header and Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Article Content - Left Side */}
              <div className="lg:col-span-2">
                <AuthorBadge author={newsArticle.author} />

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-teal-800 mb-8">
                  {newsArticle.title}
                </h1>

                {/* Featured Image */}
                <div className="mb-4">
                  <img
                    src={newsArticle.image}
                    alt={newsArticle.alt}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>

                {/* Photo Credit */}
                <p className="text-xs text-gray-500 text-center mb-8">
                  Photo by Wade Austin Ellis on Unsplash
                </p>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  {newsArticle.content.map((block, index) => {
                    if (block.type === 'heading') {
                      return (
                        <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
                          {block.text}
                        </h2>
                      );
                    }

                    if (block.type === 'paragraph') {
                      return (
                        <p key={index} className="text-base text-gray-700 leading-relaxed mb-6">
                          {block.text}
                        </p>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>

              {/* Related Content Sidebar - Right Side */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-serif font-bold text-teal-800 mb-6">Related Content</h2>
                <div className="space-y-6">
                  {relatedArticles.map((news) => (
                    <Link
                      key={news.id}
                      to={news.href}
                      className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                    >
                      <img
                        src={news.image}
                        alt={news.alt}
                        className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="p-4">
                        <AuthorBadge author={news.author} />
                        <h3 className="text-lg font-serif font-bold text-teal-800 group-hover:text-teal-700 transition-colors">
                          {news.title}: {news.category}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles Section */}
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-teal-800">Latest Articles</h2>
              <Link to="/news" className="text-teal-700 hover:text-teal-800 font-medium">
                See All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {latestArticles.map((news) => (
                <Link
                  key={news.id}
                  to={news.href}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <img
                    src={news.image}
                    alt={news.alt}
                    className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <AuthorBadge author={news.author} />
                    <h3 className="text-xl font-serif font-bold text-teal-800 mt-4 mb-2 group-hover:text-teal-700 transition-colors">
                      {news.title}
                    </h3>
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

export default ReadNews;