// /pages/index.tsx
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center p-8">
        {/* Header Section */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-blue-600">Skillify</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Unlock your potential by learning new skills online. Choose from a wide range of courses and enhance your career growth.
        </p>

        {/* Call to Action */}
        <div className="flex justify-center gap-6">
          <a href="/courses" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Explore Courses
          </a>
          <a href="/about" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
