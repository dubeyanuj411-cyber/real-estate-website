import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ImageSlider from '../components/ImageSlider';
import ContactModal from '../components/ContactModal';
import MortgageCalculator from '../components/MortgageCalculator';
import ShareProperty from '../components/ShareProperty';
import { useFavorites } from '../hooks/useFavorites';
import { properties } from '../data/properties';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="pt-24 pb-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Property Not Found</h1>
          <Link to="/properties" className="btn-primary">Back to Properties</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const favorite = isFavorite(property.id);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/properties" className="hover:text-accent">Properties</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">{property.title}</span>
          </div>

          {/* Image Slider */}
          <ImageSlider images={property.images} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {property.title}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {property.location}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <svg className={`w-6 h-6 ${favorite ? 'text-red-500 fill-current' : 'text-gray-600 dark:text-gray-400'}`} fill={favorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center space-x-6 mb-6 pb-6 border-b dark:border-gray-700">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span className="text-gray-900 dark:text-white font-semibold">{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-900 dark:text-white font-semibold">{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                    <span className="text-gray-900 dark:text-white font-semibold">{property.area} sqft</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Description</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{property.description}</p>
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Features & Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mortgage Calculator */}
              <MortgageCalculator propertyPrice={property.price} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 sticky top-24">
                <div className="mb-6">
                  <p className="text-3xl font-bold text-accent mb-2">
                    ₹{property.price.toLocaleString('en-IN')}
                    {property.category === 'Rent' && <span className="text-lg font-normal">/month</span>}
                  </p>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    {property.category}
                  </span>
                </div>

                <div className="mb-6 pb-6 border-b dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Contact Agent</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{property.agent.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{property.agent.phone}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{property.agent.email}</p>
                </div>

                <button onClick={() => setIsModalOpen(true)} className="btn-primary w-full mb-3">
                  Contact Agent
                </button>
                <button className="btn-secondary w-full mb-3">
                  Schedule Visit
                </button>
                
                {/* Share Property */}
                <div className="mt-4">
                  <ShareProperty property={property} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} agent={property.agent} />
      <Footer />
    </div>
  );
};

export default PropertyDetails;
