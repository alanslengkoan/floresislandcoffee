import { Link } from 'react-router';
import SEOHead from './components/SEOHead';
import { newsData } from './data/newsData';

function News() {
  // Get featured articles
  const featuredMain = newsData[0];
  const featuredSide = newsData.slice(1, 4);
  const featuredLarge = newsData.slice(4, 6);
  const latestArticles = newsData.slice(6, 10);

  // Author Badge Component
  const AuthorBadge = ({ author }) => (
    <div className="flex items-center gap-2">
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

  return (
    <>
      <SEOHead
        title="Coffee News - Latest Updates from Flores Island Coffee Industry"
        description="Stay updated with the latest coffee news, brewing techniques, roasting guides, and industry insights from Flores Island Coffee. Expert articles on Indonesian coffee farming, export trends, and specialty coffee."
        keywords="coffee news, coffee industry news, coffee brewing techniques, coffee roasting guide, indonesian coffee news, flores island coffee updates, coffee farming news, coffee export news, specialty coffee articles, coffee processing techniques, sustainable coffee news"
      />
      <div className="min-h-screen bg-white">
        {/* Featured Section */}
        <section className="bg-cyan-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured Main Article */}
              <Link
                to={featuredMain.href}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="p-6">
                  <AuthorBadge author={featuredMain.author} />
                  <h2 className="text-4xl font-serif font-bold text-teal-800 mt-6 mb-4 group-hover:text-teal-700 transition-colors">
                    {featuredMain.title}: {featuredMain.category}
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">{featuredMain.publishDate}</p>
                  <div className="relative">
                    <img
                      src={featuredMain.image}
                      alt={featuredMain.alt}
                      className="w-full h-80 object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Link>

              {/* Featured Side Articles */}
              <div className="space-y-6">
                {featuredSide.map((news) => (
                  <Link
                    key={news.id}
                    to={news.href}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow block group"
                  >
                    <div className="grid grid-cols-3 gap-4 p-5">
                      <div className="col-span-2">
                        <h3 className="text-xl font-serif font-bold text-teal-800 mb-2 group-hover:text-teal-700 transition-colors">
                          {news.title}: {news.category}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {news.excerpt}
                        </p>
                        <p className="text-xs text-gray-500">{news.publishDate}</p>
                      </div>
                      <div>
                        <img
                          src={news.image}
                          alt={news.alt}
                          className="w-full h-32 object-cover rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Large Featured Cards Section */}
        <section className="py-16 bg-cyan-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredLarge.map((news) => (
                <Link
                  key={news.id}
                  to={news.href}
                  className="relative h-96 rounded-2xl overflow-hidden shadow-lg group"
                >
                  <img
                    src={news.image}
                    alt={news.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-serif font-bold text-white">
                      {news.title}: {news.category}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Articles Section */}
        <section className="py-20 bg-white">
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
                      {news.title}: {news.category}
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

export default News;