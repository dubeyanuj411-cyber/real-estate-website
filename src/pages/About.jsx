import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              About EstatePro
            </h1>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200"
                alt="About Us"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                EstatePro was founded with a simple mission: to make finding your dream property easy, transparent, and hassle-free. We understand that buying or renting a property is one of the most important decisions in your life, and we're here to guide you every step of the way.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                With years of experience in the real estate industry, our team of dedicated professionals works tirelessly to bring you the best properties across India. We verify every listing, ensuring that you get accurate information and genuine opportunities.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Why Choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Verified Listings</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">All properties are thoroughly verified</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Expert Agents</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Professional guidance at every step</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Wide Selection</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Thousands of properties to choose from</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Transparent Process</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">No hidden charges or surprises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
