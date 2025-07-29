
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { User, GraduationCap, Briefcase } from 'lucide-react';

interface StudentProfile {
  first_name: string;
  last_name: string;
  university: string;
  qualifications: string;
  experience: string;
}

const StudentProfileView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/student-profile/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        }
      } catch (error) {
        console.error('Error fetching student profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile not found</h2>
          <p className="text-gray-600">There was an error loading this profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-3">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-bold">{`${profile.first_name} ${profile.last_name}`}</h1>
                <p className="text-blue-100">{profile.university}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                Qualifications
              </h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">{profile.qualifications || 'No qualifications listed.'}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                Experience
              </h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">{profile.experience || 'No experience listed.'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">JobPortal</h3>
              <p className="text-gray-600 text-sm">
                Empowering students and employers to connect and grow together.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-900 mb-2">Quick Links</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li><a href="/jobs" className="hover:text-blue-600">Jobs</a></li>
                <li><a href="/register" className="hover:text-blue-600">Register</a></li>
                <li><a href="/login" className="hover:text-blue-600">Login</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-900 mb-2">Resources</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold text-gray-900 mb-2">Contact</h4>
              <p className="text-gray-600 text-sm">
                Email: support@jobportal.com <br />
                Phone: +1 (123) 456-7890
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-100 pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} JobPortal. All rights reserved.
          </div>
        </div>
      </footer>


    </div>
  );
};

export default StudentProfileView;