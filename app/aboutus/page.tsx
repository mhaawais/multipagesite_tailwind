// /pages/about.tsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          About <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Empowering learners through quality education and innovative technology.
        </p>

        {/* Main Content Section */}
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <span className="text-blue-600 font-bold">Skillify</span>, we believe in the transformative power of education. Our mission is to make high-quality learning accessible to everyone, everywhere. We offer a wide range of courses designed by industry experts to help learners achieve their career goals.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-3">
            <li>Expert instructors from leading industries.</li>
            <li>Flexible, self-paced learning options.</li>
            <li>Interactive projects and hands-on experience.</li>
            <li>Strong community support and mentorship.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
