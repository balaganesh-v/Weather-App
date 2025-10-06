import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-blue-600 text-white py-6 mt-2">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Left: Branding */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-bold">Weather App</h2>
                    <p className="text-sm text-blue-100">Stay updated with real-time weather information</p>
                </div>

                {/* Right: Links */}
                <div className="flex gap-6 text-sm">
                    <a href="/about" className="hover:underline">About</a>
                    <a href="/features" className="hover:underline">Features</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                </div>
            </div>

            {/* Bottom: Copyright */}
            <div className="mt-4 text-center text-sm text-blue-200">
                &copy; {year} Weather App. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
