"use client";

import React, { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form entirely in-page
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 4000); // Hide message after 4s
    };

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center px-6 py-16 font-sans relative">
            
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-gray-700 text-center max-w-lg mb-10">
                Have questions or issues with the Weather App? Fill out the form below and we'll respond as soon as possible.
            </p>

            {/* Success Message */}
            {success && (
                <div className="mb-6 px-6 py-4 bg-green-100 text-green-800 rounded-xl shadow-md">
                    Your message has been sent successfully!
                </div>
            )}

            {/* Contact Form */}
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md flex flex-col gap-5"
            >
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                />
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>

            {/* Optional Decorative Circles */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-200 rounded-full opacity-20 -z-10"></div>
        </div>
    );
};

export default Contact;
