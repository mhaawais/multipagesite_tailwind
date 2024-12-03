// /pages/courses.tsx
import React from 'react';

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Explore Our <span className="text-blue-600">Courses</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Discover a variety of courses designed to help you gain the skills you need for success.
        </p>

        {/* Course Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Course Card 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
            <p className="text-gray-600 mb-6">
              Learn to build modern web applications using HTML, CSS, JavaScript, and popular frameworks.
            </p>
            <a href="#" className="text-blue-600 hover:underline font-semibold">View Details</a>
          </div>

          {/* Example Course Card 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold mb-4">React & Next.js</h2>
            <p className="text-gray-600 mb-6">
              Master React and Next.js to create dynamic, high-performance web applications.
            </p>
            <a href="#" className="text-blue-600 hover:underline font-semibold">View Details</a>
          </div>

          {/* Example Course Card 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold mb-4">Tailwind CSS</h2>
            <p className="text-gray-600 mb-6">
              Streamline your development workflow with Tailwind CSS and build stunning UIs faster.
            </p>
            <a href="#" className="text-blue-600 hover:underline font-semibold">View Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
