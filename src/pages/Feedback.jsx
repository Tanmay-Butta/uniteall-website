import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaPaperPlane } from 'react-icons/fa';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your feedback! We'll be in touch soon.");
    };

    return (
        <div className="min-h-screen pt-24 pb-20 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl bg-dark-card border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl glass"
            >
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">We Value Your Feedback</h1>
                    <p className="text-gray-400">
                        Help us make UniteAll better. Whether it's a feature request, bug report, or love letter—we read every message.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                            <input
                                type="text"
                                className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                            <input
                                type="email"
                                className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition"
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">How would you rate your experience?</label>
                        <div className="flex gap-2">
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <label key={index}>
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={ratingValue}
                                            className="hidden"
                                            onClick={() => setRating(ratingValue)}
                                        />
                                        <FaStar
                                            className="cursor-pointer transition-colors duration-200"
                                            color={ratingValue <= (hover || rating) ? "#eab308" : "#334155"}
                                            size={32}
                                            onMouseEnter={() => setHover(ratingValue)}
                                            onMouseLeave={() => setHover(0)}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea
                            rows="5"
                            className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition resize-none"
                            placeholder="Tell us what's on your mind..."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-primary-500/25 transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2"
                    >
                        <FaPaperPlane /> Send Feedback
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Feedback;
