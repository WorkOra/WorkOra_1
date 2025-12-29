import React from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  ArrowRight,
  Heart,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 bg-blue-600 rounded-full w-96 h-96 opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 bg-purple-600 rounded-full w-96 h-96 opacity-10 blur-3xl"></div>

      <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <Briefcase className="w-8 h-8 text-blue-400 transition-colors group-hover:text-blue-300" />
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                WorkOra
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Connecting talented students with amazing opportunities. Your
              career journey starts here.
            </p>
            <div className="flex pt-2 space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-all transform bg-gray-800 rounded-lg hover:bg-blue-600 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 transition-all transform bg-gray-800 rounded-lg hover:bg-blue-400 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 transition-all transform bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>*/}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-all transform bg-gray-800 rounded-lg hover:bg-blue-700 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="flex items-center text-gray-400 transition-colors hover:text-blue-400 group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="flex items-center text-gray-400 transition-colors hover:text-blue-400 group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                  <span>Browse Jobs</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="flex items-center text-gray-400 transition-colors hover:text-blue-400 group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                  <span>Sign Up</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="flex items-center text-gray-400 transition-colors hover:text-blue-400 group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* For Students & Employers */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-purple-400">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/register?type=student"
                  className="flex items-center text-gray-400 transition-colors hover:text-purple-400 group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                  <span>For Students</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/register?type=employee"
                  className="flex items-center text-gray-400 transition-colors hover:text-purple-400 group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                  <span>For Employers</span>
                </Link>
              </li>
              <li>
                <a
                  href="#faq"
                  className="flex items-center text-gray-400 transition-colors hover:text-purple-400 group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                  <span>FAQ</span>
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="flex items-center text-gray-400 transition-colors hover:text-purple-400 group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                  <span>Career Tips</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-blue-400">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail className="h-5 w-5 mt-0.5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:support@workora.com"
                  className="transition-colors hover:text-blue-400"
                >
                  support@workora.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone className="h-5 w-5 mt-0.5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="transition-colors hover:text-blue-400"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 mt-0.5 text-blue-400 flex-shrink-0" />
                <span>123 Career Street, Opportunity City, OC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="pt-8 mb-8 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center">
            <h3 className="mb-2 text-xl font-semibold">Stay Updated</h3>
            <p className="mb-4 text-sm text-gray-400">
              Get the latest job opportunities and career tips delivered to your
              inbox.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-white placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 font-semibold transition-all transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} WorkOra. All rights reserved.</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 transition-colors hover:text-blue-400"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 transition-colors hover:text-blue-400"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 transition-colors hover:text-blue-400"
              >
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>for students and employers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
