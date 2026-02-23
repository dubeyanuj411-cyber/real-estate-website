import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import PropertyComparison from '../components/PropertyComparison';

const Compare = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Compare Properties
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 text-lg">
              Compare multiple properties side by side to make the best decision
            </p>

            <PropertyComparison />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Compare;
