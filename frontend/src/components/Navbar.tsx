import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Briefcase, User, LogOut, Home, Search, PlusCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="relative overflow-hidden text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-lg border-b border-gray-700">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 bg-blue-600 rounded-full w-64 h-64 opacity-5 blur-3xl"></div>
      <div className="absolute top-0 left-0 bg-purple-600 rounded-full w-64 h-64 opacity-5 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Briefcase className="w-8 h-8 text-blue-400 transition-colors group-hover:text-blue-300" />
            <span className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              WorkOra
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/jobs"
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive('/jobs')
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Search className="w-4 h-4" />
                  <span>Find Jobs</span>
                </Link>

                {user.userType === 'employee' && (
                  <>
                    <Link
                      to="/create-job"
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        isActive('/create-job')
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Create Job</span>
                    </Link>
                    <Link
                      to="/dashboard"
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        isActive('/dashboard')
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      <Home className="w-4 h-4" />
                      <span>Dashboard</span>
                    </Link>
                  </>
                )}

                {user.userType === 'student' && (
                  <Link
                    to="/dashboard"
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive('/dashboard')
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <Home className="w-4 h-4" />
                    <span>Dashboard</span>
                  </Link>
                )}

                <Link
                  to="/profile"
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive('/profile')
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </Link>

                <button
                  onClick={logout}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-gray-800"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105 shadow-lg"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;