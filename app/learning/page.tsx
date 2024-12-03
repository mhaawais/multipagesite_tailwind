// /pages/start-learning.tsx
import React from 'react';
import Link from 'next/link';

const StartLearning = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-lg">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Start Your Learning Journey Now!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Unlock your potential with our expertly designed courses and resources. Whether you are starting a new career or improving existing skills, we are here to help!
        </p>

        {/* Call-to-Action Button */}
        <Link href="/courses">
          <a className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Start Learning Now
          </a>
        </Link>

        {/* Additional Info */}
        <p className="mt-6 text-gray-500">
          Need help getting started? Explore our <Link href="/courses"><a className="text-blue-600 hover:underline">Courses</a></Link> or contact our support team.
        </p>
      </div>
    </div>
  );
};

export default StartLearning;
