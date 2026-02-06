import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const MOCK_EVENTS = [
    {
        id: 1,
        title: 'Sunday Morning Football',
        date: 'Feb 12, 08:30 AM',
        location: 'Central Turf Arena',
        category: 'Sports',
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop',
        attendees: 14
    },
    {
        id: 2,
        title: 'Tech Networking Mixer',
        date: 'Feb 15, 06:00 PM',
        location: 'Innovation Hub',
        category: 'Networking',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop',
        attendees: 42
    },
    {
        id: 3,
        title: 'Yoga in the Park',
        date: 'Feb 18, 07:00 AM',
        location: 'Greenfield Park',
        category: 'Wellness',
        image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=1000&auto=format&fit=crop',
        attendees: 8
    },
];

const Discover = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 bg-dark-900">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <h1 className="text-3xl font-bold">Discover Events</h1>

                    <div className="flex gap-4 w-full md:w-auto">
                        <div className="relative flex-grow md:w-80">
                            <FaSearch className="absolute left-3 top-3.5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search events, sports, locations..."
                                className="w-full bg-dark-800 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary-500 transition"
                            />
                        </div>
                        <button className="bg-dark-800 border border-white/10 p-3 rounded-xl hover:bg-white/5 transition">
                            <FaFilter className="text-gray-300" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_EVENTS.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-3 right-3 bg-dark-900/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white">
                                    {event.category}
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">{event.title}</h3>

                                <div className="flex items-center text-gray-400 text-sm mb-2">
                                    <FaCalendar className="mr-2 text-primary-500" />
                                    {event.date}
                                </div>

                                <div className="flex items-center text-gray-400 text-sm mb-4">
                                    <FaMapMarkerAlt className="mr-2 text-secondary-500" />
                                    {event.location}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                    <span className="text-sm text-gray-500">{event.attendees} interested</span>
                                    <button className="text-primary-500 font-medium hover:text-primary-400 text-sm">View Details &rarr;</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Discover;
