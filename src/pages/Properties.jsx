import { useState, useMemo } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import PropertyCard from '../components/PropertyCard';
import FilterSection from '../components/FilterSection';
import SearchBar from '../components/SearchBar';
import { properties } from '../data/properties';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'All',
    type: 'All',
    city: 'All',
    maxPrice: ''
  });
  const [displayCount, setDisplayCount] = useState(6);

  // Filter and search logic
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Search filter
      const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.city.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory = filters.category === 'All' || property.category === filters.category;

      // Type filter
      const matchesType = filters.type === 'All' || property.type === filters.type;

      // City filter
      const matchesCity = filters.city === 'All' || property.city === filters.city;

      // Price filter
      const matchesPrice = !filters.maxPrice || property.price <= parseInt(filters.maxPrice);

      return matchesSearch && matchesCategory && matchesType && matchesCity && matchesPrice;
    });
  }, [searchTerm, filters]);

  const displayedProperties = filteredProperties.slice(0, displayCount);
  const hasMore = displayCount < filteredProperties.length;

  const loadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Browse Properties
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Find your perfect property from our extensive collection
            </p>
            
            {/* Search Bar */}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          {/* Filters */}
          <FilterSection filters={filters} setFilters={setFilters} />

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              Showing <span className="font-semibold text-gray-900 dark:text-white">{displayedProperties.length}</span> of{' '}
              <span className="font-semibold text-gray-900 dark:text-white">{filteredProperties.length}</span> properties
            </p>
          </div>

          {/* Property Grid */}
          {filteredProperties.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="text-center mt-12">
                  <button onClick={loadMore} className="btn-primary text-lg">
                    Load More Properties
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No Properties Found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilters({ category: 'All', type: 'All', city: 'All', maxPrice: '' });
                }}
                className="btn-secondary"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Properties;
