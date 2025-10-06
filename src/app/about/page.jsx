import React from 'react';

const About = () => {
    return (
        <section className="min-h-screen bg-white flex flex-col justify-center items-center px-6 py-12">
            {/* Page Title */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    About Our Weather App
                </h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    We provide accurate, real-time weather updates so you can plan your day confidently and stay prepared for any conditions.
                </p>
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <div className="bg-blue-100 p-4 rounded-full mb-4">
                        {/* Icon placeholder */}
                        <span className="text-3xl">☀️</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Real-Time Updates</h2>
                    <p className="text-gray-700">
                        Get instant weather updates for your city and plan your day effectively.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <div className="bg-purple-100 p-4 rounded-full mb-4">
                        <span className="text-3xl">🌦️</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Forecasts</h2>
                    <p className="text-gray-700">
                        View detailed forecasts for upcoming days so you never get caught off guard.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <div className="bg-pink-100 p-4 rounded-full mb-4">
                        <span className="text-3xl">📍</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 text-gray-900">Location-Based</h2>
                    <p className="text-gray-700">
                        Automatically get weather updates for your location and nearby areas.
                    </p>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
                <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                    Start Now
                </button>
            </div>
        </section>
    );
};

export default About;
