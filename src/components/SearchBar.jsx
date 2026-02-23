import { Link } from 'react-router-dom';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by city, location, or property name..."
          className="w-full px-6 py-4 pl-14 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-gray-800 dark:text-white shadow-lg"
        />
        <svg
          className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
