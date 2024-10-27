import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faCompass, faHeart, faUser, faCamera } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className=" h-screen bg-gray-800 w-20 md:w-40 lg:w-60 border-r p-6 border-gray-500 text-white flex flex-col ">
      
      <div className="text-2xl font-bold text-white mb-10">
        <FontAwesomeIcon icon={faCamera} className="block md:hidden lg:hidden w-6 h-6 mx-auto" />
        <span className="hidden md:block lg:block">Instagram</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4">
        <Link href="/">
          <div className="text-white flex items-center justify-center md:justify-start space-x-0 md:space-x-3 p-2 rounded-lg hover:bg-gray-700">
            <FontAwesomeIcon icon={faHome} className="w-6 h-6" />
            <span className="hidden md:block lg:block">Home</span>
          </div>
        </Link>
        <Link href="/search">
          <div className="text-white flex items-center justify-center md:justify-start space-x-0 md:space-x-3 p-2 rounded-lg hover:bg-gray-700">
            <FontAwesomeIcon icon={faSearch} className="w-6 h-6" />
            <span className="hidden md:block lg:block">Search</span>
          </div>
        </Link>
        <Link href="/explore">
          <div className="text-white flex items-center justify-center md:justify-start space-x-0 md:space-x-3 p-2 rounded-lg hover:bg-gray-700">
            <FontAwesomeIcon icon={faCompass} className="w-6 h-6" />
            <span className="hidden md:block lg:block">Explore</span>
          </div>
        </Link>
        <Link href="/favorites">
  <div className="text-white flex items-center justify-center md:justify-start space-x-0 md:space-x-3 p-2 rounded-lg hover:bg-gray-700">
    <FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
    <span className="hidden md:block lg:block">Favorites</span>
  </div>
</Link>

    
        <Link href="/profile">
          <div className="text-white flex items-center justify-center md:justify-start space-x-0 md:space-x-3 p-2 rounded-md hover:bg-gray-700">
            <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
            <span className="hidden md:block lg:block">Profile</span>
          </div>
        </Link>
      </nav>

    </div>
  );
};

export default Sidebar;
