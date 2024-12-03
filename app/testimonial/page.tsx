// /pages/testimonial.tsx
import React from 'react';

const Testimonial = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          What Our <span className="text-blue-600">Learners</span> Say
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Hear from our students about their learning experiences and successes.
        </p>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition">
            <p className="text-gray-700 mb-6 italic">
              "Skillify transformed my career! The courses are practical, and the projects were exactly what I needed."
            </p>
            <h3 className="font-semibold text-lg text-blue-600">— Sarah M.</h3>
            <p className="text-gray-500 text-sm">Full-Stack Developer</p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition">
            <p className="text-gray-700 mb-6 italic">
              "The personalized mentorship and real-world projects gave me the confidence to land my dream job."
            </p>
            <h3 className="font-semibold text-lg text-blue-600">— Rajesh K.</h3>
            <p className="text-gray-500 text-sm">Data Analyst</p>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition">
            <p className="text-gray-700 mb-6 italic">
              "The best learning platform! The instructors are top-notch, and the community support is amazing."
            </p>
            <h3 className="font-semibold text-lg text-blue-600">— Emily T.</h3>
            <p className="text-gray-500 text-sm">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
