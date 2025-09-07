import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const stored = localStorage.getItem('user');
      const isAuth = localStorage.getItem('isAuthenticated') === 'true';
      if (!stored || !isAuth) {
        navigate('/login');
        return;
      }
      setUser(JSON.parse(stored));
    } catch {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    window.dispatchEvent(new Event('auth-changed'));
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-8">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600">
            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">{user.name || 'User'}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>

        <div className="grid gap-4">
          <div className="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <h3 className="font-semibold text-gray-800 mb-1">Name</h3>
            <p className="text-gray-700">{user.name}</p>
          </div>
          <div className="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
            <p className="text-gray-700">{user.email}</p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
