import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center  justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/landscape_snow.jpg')" }}></div>

      {/* Dark Overlay to make background dull */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content Box */}
      <div className="relative text-center px-8 py-8 bg-white/30 backdrop-blur-md rounded-lg max-w-lg">
        {/* Headline */}
        <h1 className="text-2xl md:text-5xl font-semibold mb-4 text-white">
          Weather Updates in Real-Time
        </h1>

        {/* Subheading */}
        <p className="text-lg mb-6 mt-4 text-white">
          Check the weather in your city and plan your day easily.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/weather"
            className="bg-white text-blue-500 px-6 py-2 rounded font-semibold hover:bg-gray-100"
          >
            Check Weather
          </Link>
          <Link
            href="/forecast"
            className="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-500"
          >
            View Forecast
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
