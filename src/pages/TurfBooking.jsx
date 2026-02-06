import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const TURFS = [
    {
        id: 1,
        name: 'Premier Arena',
        location: 'Downtown Sports Complex',
        rating: 4.8,
        price: '$60/hr',
        image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Green Valley Turf',
        location: 'North District',
        rating: 4.5,
        price: '$45/hr',
        image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Skyline Futsal Court',
        location: 'Rooftop Mall',
        rating: 4.9,
        price: '$80/hr',
        image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 4,
        name: 'Community Pitch',
        location: 'Westside Park',
        rating: 4.2,
        price: '$30/hr',
        image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000&auto=format&fit=crop'
    }
];

const TurfBooking = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 bg-dark-900">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-2">Book a Turf</h1>
                <p className="text-gray-400 mb-10">Find and reserve the best pitches near you.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TURFS.map((turf, index) => (
                        <motion.div
                            key={turf.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark-card border border-white/5 rounded-2xl overflow-hidden hover:border-secondary-500/50 transition-all group"
                        >
                            <div className="h-40 overflow-hidden">
                                <img
                                    src={turf.image}
                                    alt={turf.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">{turf.name}</h3>
                                    <div className="flex items-center text-yellow-400 text-sm font-bold">
                                        <FaStar className="mr-1" /> {turf.rating}
                                    </div>
                                </div>

                                <div className="text-gray-400 text-sm mb-4 flex items-center">
                                    <FaMapMarkerAlt className="mr-1 text-primary-500" />
                                    {turf.location}
                                </div>

                                <div className="flex justify-between items-center pt-3 border-t border-white/5">
                                    <span className="font-display font-bold text-white">{turf.price}</span>
                                    <button className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TurfBooking;
