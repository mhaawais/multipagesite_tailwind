// /pages/services.tsx
import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Our <span className="text-blue-600">Services</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          We offer a range of services to help you achieve your learning goals.
        </p>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold mb-4">Personalized Learning</h2>
            <p className="text-gray-600 mb-6">
              Tailor your learning experience with customized courses and mentorship.
            </p>
            <a href="#" className="text-blue-600 hover:underline font-semibold">Learn More</a>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold mb-4">One-on-One Tutoring</h2>
            <p className="text-gray-600 mb-6">
              Get expert guidance with one-on-one sessions to boost your skills.
            </p>
            <a href="#" className="text-blue-600 hover:underline font-semibold">Learn More</a>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold mb-4">Career Counseling</h2>
            <p className="text-gray-600 mb-6">
              Receive professional advice to guide your career path and achieve your goals.
            </p>
            <a href="#" className="text-blue-600 hover:underline font-semibold">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
