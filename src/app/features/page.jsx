"use client";

import React from "react";
import { MdWbSunny, MdCloud, MdGrain, MdRefresh, MdAir } from "react-icons/md";

const Features = () => {
    const weather = {
        city: "New York",
        temperature: 26,
        condition: "Sunny",
        icon: <MdWbSunny size={50} className="text-yellow-500" />,
    };

    const features = [
        {
            icon: <MdWbSunny size={30} className="text-yellow-500" />,
            title: "Current Weather",
            description: "Instant temperature & condition.",
        },
        {
            icon: <MdCloud size={30} className="text-gray-400" />,
            title: "Dynamic Backgrounds",
            description: "Clouds & gradients adapt to weather.",
        },
        {
            icon: <MdGrain size={30} className="text-blue-500" />,
            title: "Forecast",
            description: "Hourly & 7-day weather forecasts.",
        },
        {
            icon: <MdRefresh size={30} className="text-green-500" />,
            title: "Live Updates",
            description: "Automatic weather updates.",
        },
        {
            icon: <MdAir size={30} className="text-teal-500" />,
            title: "Weather Info",
            description: "Wind, humidity, UV index & alerts.",
        },
    ];

    return (
        <div className="min-h-screen bg-blue-50 text-gray-800 font-sans px-6 py-12 flex flex-col justify-center items-center">
            
            {/* Top Horizontal Weather Card */}
            <div className="flex items-center bg-white rounded-3xl shadow-lg p-6 w-full max-w-3xl mb-12 hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className="mr-6">{weather.icon}</div>
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold">{weather.city}</h1>
                    <p className="text-4xl font-semibold">{weather.temperature}°C</p>
                    <p className="text-gray-600">{weather.condition}</p>
                </div>
                <div className="ml-auto flex gap-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition font-medium">
                        Refresh
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl shadow hover:bg-gray-300 transition font-medium">
                        Forecast
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div
                className={`w-full max-w-5xl grid gap-6 ${
                    features.length === 2
                        ? "grid-cols-2 justify-center"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
            >
                {features.map((f, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition transform hover:-translate-y-2"
                    >
                        <div className="mb-3">{f.icon}</div>
                        <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
                        <p className="text-gray-700 text-sm">{f.description}</p>
                    </div>
                ))}
            </div>

            {/* Optional floating background shapes */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-200 rounded-full opacity-20 -z-10"></div>
        </div>
    );
};

export default Features;
