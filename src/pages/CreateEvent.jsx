import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMagic, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const CreateEvent = () => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        location: '',
        description: '',
        category: 'sports'
    });
    const [isGenerating, setIsGenerating] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGenerateDescription = () => {
        setIsGenerating(true);
        // Simulate AI generation
        setTimeout(() => {
            setFormData(prev => ({
                ...prev,
                description: `Join us for an exciting ${formData.category} event at ${formData.location || 'our venue'}! Whether you're a beginner or a pro, this is the perfect opportunity to connect, compete, and have fun. Don't miss out on the action – spots are filling up fast!`
            }));
            setIsGenerating(false);
        }, 1500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Event Created Successfully! (Demo)');
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 bg-dark-900">
            <div className="container mx-auto max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-dark-card border border-white/10 rounded-2xl p-8 shadow-2xl glass"
                >
                    <h1 className="text-3xl font-bold mb-6 text-center">Create New Event</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-400 mb-2">Event Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="w-full bg-dark-800 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-500 transition"
                                placeholder="e.g., Weekend Football Match"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-400 mb-2">Date & Time</label>
                                <div className="relative">
                                    <FaCalendarAlt className="absolute left-3 top-3.5 text-gray-500" />
                                    <input
                                        type="datetime-local"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        className="w-full bg-dark-800 border border-white/10 rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-primary-500 transition"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 mb-2">Location</label>
                                <div className="relative">
                                    <FaMapMarkerAlt className="absolute left-3 top-3.5 text-gray-500" />
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className="w-full bg-dark-800 border border-white/10 rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-primary-500 transition"
                                        placeholder="Search venue or local turf"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-400 mb-2">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="w-full bg-dark-800 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-500 transition"
                            >
                                <option value="sports">Sports</option>
                                <option value="networking">Networking</option>
                                <option value="workshop">Workshop</option>
                                <option value="party">Party</option>
                            </select>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-gray-400">Description</label>
                                <button
                                    type="button"
                                    onClick={handleGenerateDescription}
                                    disabled={isGenerating}
                                    className="text-xs bg-secondary-600 hover:bg-secondary-500 text-white px-3 py-1 rounded-full flex items-center gap-1 transition disabled:opacity-50"
                                >
                                    <FaMagic /> {isGenerating ? 'Generating...' : 'AI Generate'}
                                </button>
                            </div>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows="4"
                                className="w-full bg-dark-800 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-500 transition"
                                placeholder="Describe your event..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary-600 hover:bg-primary-500 text-white py-3 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-primary-500/20"
                        >
                            Post Event
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default CreateEvent;
