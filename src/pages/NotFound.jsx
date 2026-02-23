import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            The page you are looking for does not exist.
          </p>
          <Link to="/" className="btn-primary text-lg">
            Go Back Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
