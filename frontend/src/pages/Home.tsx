import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Search, Users, Building, TrendingUp } from "lucide-react";

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
              Connect <span className="text-blue-600">Students</span> with{" "}
              <span className="text-purple-600">Opportunities</span>
            </h1>
            <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-600">
              The premier platform for students to find internships and
              part-time jobs, and for employers to discover talented candidates.
            </p>

            {!user ? (
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/register"
                  className="px-8 py-3 text-lg font-semibold text-white transition-colors transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  to="/jobs"
                  className="px-8 py-3 text-lg font-semibold text-blue-600 transition-colors transform bg-white border-2 border-blue-600 rounded-lg hover:bg-gray-50 hover:scale-105"
                >
                  Browse Jobs
                </Link>
              </div>
            ) : (
              <Link
                to="/jobs"
                className="inline-block px-8 py-3 text-lg font-semibold text-white transition-colors transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
              >
                Explore Opportunities
              </Link>
            )}
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 -mt-20 bg-blue-200 rounded-full -mr-80 w-80 h-80 opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 bg-purple-200 rounded-full w-80 h-80 opacity-20"></div>
      </div>

      {/* Features Section */}
      <div
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url('https://www.betterup.com/hubfs/Marketing-manager-presenting-charts-on-screen-at-team-meeting-best-jobs-with-business-degree.jpg#keepProtocol')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Why Choose JobPortal?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              We make it easy for students and employers to connect,
              collaborate, and grow together.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 text-center transition-shadow border border-gray-200 rounded-lg hover:shadow-lg">
              <Search className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Easy Job Search
              </h3>
              <p className="text-gray-600">
                Advanced filters to find the perfect internship or part-time
                opportunity.
              </p>
            </div>

            <div className="p-6 text-center transition-shadow border border-gray-200 rounded-lg hover:shadow-lg">
              <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Verified Profiles
              </h3>
              <p className="text-gray-600">
                All student and employer profiles are verified for authenticity
                and quality.
              </p>
            </div>

            <div className="p-6 text-center transition-shadow border border-gray-200 rounded-lg hover:shadow-lg">
              <Building className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Top Companies
              </h3>
              <p className="text-gray-600">
                Connect with leading companies across various industries and
                sectors.
              </p>
            </div>

            <div className="p-6 text-center transition-shadow border border-gray-200 rounded-lg hover:shadow-lg">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Career Growth
              </h3>
              <p className="text-gray-600">
                Build your career with meaningful experiences and professional
                development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Join thousands of students and employers who trust JobPortal for
            their career needs.
          </p>

          {!user && (
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/register?type=student"
                className="px-6 py-3 font-semibold text-blue-600 transition-colors bg-white rounded-lg hover:bg-gray-100"
              >
                I'm a Student
              </Link>
              <Link
                to="/register?type=employee"
                className="px-6 py-3 font-semibold text-white transition-colors bg-blue-800 rounded-lg hover:bg-blue-900"
              >
                I'm an Employer
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
