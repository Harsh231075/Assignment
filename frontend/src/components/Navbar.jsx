import React, { useState, useEffect } from 'react';
import { Home, Settings, Package, Phone, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from './Toaster';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('user') || 'null'); } catch { return null; }
  });
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => {
      setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
      try { setUser(JSON.parse(localStorage.getItem('user') || 'null')); } catch { setUser(null); }
    };
    window.addEventListener('auth-changed', handler);
    return () => window.removeEventListener('auth-changed', handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('auth-changed'));
    toast('Logged out successfully', 'success');
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur px-6 md:px-10 py-4 flex items-center justify-between relative border-b border-gray-100 shadow-sm">

      {/* Logo Section */}
      <div className="flex items-center space-x-3 pl-1">
        <div className="font-extrabold text-3xl">
          <img src="https://previews.123rf.com/images/lkeskinen/lkeskinen1611/lkeskinen161100142/66734911-assignment-rubber-stamp-grunge-design-with-dust-scratches-effects-can-be-easily-removed-for-a.jpg" alt="All Solution" className="h-12 md:h-14 w-auto rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition duration-200"
        >
          {menuOpen ? (
            <X size={24} className="text-gray-600" />
          ) : (
            <Menu size={24} className="text-gray-600" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`flex-col lg:flex-row lg:flex gap-2 list-none items-center absolute lg:static top-full left-0 right-0 bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 z-20 ${menuOpen ? 'flex py-4' : 'hidden'} lg:!flex`}>

        <li>
          <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 hover:bg-blue-50 font-medium px-4 py-2 rounded-lg transition duration-200">
            <Home size={18} />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to="/service" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 hover:bg-blue-50 font-medium px-4 py-2 rounded-lg transition duration-200">
            <Settings size={18} />
            <span>Services</span>
          </Link>
        </li>

        <li>
          <Link to="/product" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 hover:bg-blue-50 font-medium px-4 py-2 rounded-lg transition duration-200">
            <Package size={18} />
            <span>Products</span>
          </Link>
        </li>

        <li>
          <Link to="/contact" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 hover:bg-blue-50 font-medium px-4 py-2 rounded-lg transition duration-200">
            <Phone size={18} />
            <span>Contact</span>
          </Link>
        </li>
      </ul>

      {/* Right Side: Auth Section */}
      <div className="hidden lg:flex gap-3 items-center">
        {isAuthenticated && user ? (
          <>
            <Link to="/profile" className="text-gray-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200">
              {user.name || 'Profile'}
            </Link>
            <button onClick={handleLogout} className="bg-red-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-red-600 transition duration-200 shadow-sm">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-blue-500 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition duration-200">
              Login
            </Link>
            <Link to="/signup" className="bg-blue-500 text-white font-semibold rounded-lg px-6 py-2 hover:bg-blue-600 transition duration-200 shadow-sm">
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile Login/Register */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-4 lg:hidden z-20 shadow-lg">
          <div className="flex gap-3 justify-center">
            {isAuthenticated && user ? (
              <>
                <Link to="/profile" className="text-gray-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200 flex-1 text-center">
                  {user.name || 'Profile'}
                </Link>
                <button onClick={handleLogout} className="bg-red-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-red-600 transition duration-200 flex-1 text-center">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-blue-500 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition duration-200 flex-1 text-center">
                  Login
                </Link>
                <Link to="/signup" className="bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-200 flex-1 text-center">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}