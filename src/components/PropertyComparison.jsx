import { useState } from 'react';
import { Link } from 'react-router-dom';

const PropertyComparison = () => {
  const [compareList, setCompareList] = useState(() => {
    const saved = localStorage.getItem('compareList');
    return saved ? JSON.parse(saved) : [];
  });

  const removeFromCompare = (propertyId) => {
    const updated = compareList.filter(p => p.id !== propertyId);
    setCompareList(updated);
    localStorage.setItem('compareList', JSON.stringify(updated));
  };

  const clearAll = () => {
    setCompareList([]);
    localStorage.removeItem('compareList');
  };

  if (compareList.length === 0) {
    return (
      <div className="text-center py-12">
        <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          No Properties to Compare
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Add properties from the listing page to compare them
        </p>
        <Link to="/properties" className="btn-primary">
          Browse Properties
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Compare Properties ({compareList.length})
        </h2>
        <button onClick={clearAll} className="btn-secondary">
          Clear All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="p-4 text-left text-gray-900 dark:text-white font-semibold">Feature</th>
              {compareList.map((property) => (
                <th key={property.id} className="p-4 text-center">
                  <div className="relative">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <button
                      onClick={() => removeFromCompare(property.id)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <Link
                      to={`/property/${property.id}`}
                      className="text-sm font-semibold text-gray-900 dark:text-white hover:text-accent"
                    >
                      {property.title}
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-700">
              <td className="p-4 font-medium text-gray-900 dark:text-white">Price</td>
              {compareList.map((property) => (
                <td key={property.id} className="p-4 text-center text-accent font-bold">
                  ₹{property.price.toLocaleString('en-IN')}
                </td>
              ))}
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="p-4 font-medium text-gray-900 dark:text-white">Location</td>
              {compareList.map((property) => (
                <td key={property.id} className="p-4 text-center text-gray-600 dark:text-gray-400">
                  {property.location}
                </td>
              ))}
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="p-4 font-medium text-gray-900 dark:text-white">Type</td>
              {compareList.map((property) => (
                <td key={property.id} className="p-4 text-center text-gray-600 dark:text-gray-400">
                  {property.type}
                </td>
              ))}
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="p-4 font-medium text-gray-900 dark:text-white">Bedrooms</td>
              {compareList.map((property) => (
                <td key={property.id} className="p-4 text-center text-gray-600 dark:text-gray-400">
                  {property.bedrooms}
                </td>
              ))}
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="p-4 font-medium text-gray-900 dark:text-white">Bathrooms</td>
              {compareList.map((property) => (
                <td key={property.id} className="p-4 text-center text-gray-600 dark:text-gray-400">
                  {property.bathrooms}
                </td>
              ))}
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="p-4 font-medium text-gray-900 dark:text-white">Area</td>
              {compareList.map((property) => (
                <td key={property.id} className="p-4 text-center text-gray-600 dark:text-gray-400">
                  {property.area} sqft
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-900 dark:text-white">Action</td>
              {compareList.map((property) => (
                <td key={property.id} className="p-4 text-center">
                  <Link to={`/property/${property.id}`} className="btn-primary text-sm">
                    View Details
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyComparison;
