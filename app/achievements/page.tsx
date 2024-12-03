// /pages/achievements.tsx
import React from 'react';

const Achievements = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Our <span className="text-blue-600">Achievements</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Celebrating milestones and successes in our journey of empowering learners.
        </p>

        {/* Achievement Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Achievement Card 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold mb-4">10,000+ Students</h2>
            <p className="text-gray-600 mb-6">
              We have empowered over 10,000 learners globally with top-notch courses.
            </p>
          </div>

          {/* Achievement Card 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold mb-4">500+ Courses</h2>
            <p className="text-gray-600 mb-6">
              Offering a diverse range of courses covering multiple domains and technologies.
            </p>
          </div>

          {/* Achievement Card 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold mb-4">Top Industry Partnerships</h2>
            <p className="text-gray-600 mb-6">
              Partnering with leading companies to provide industry-relevant training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
