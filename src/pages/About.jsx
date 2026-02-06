import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
                        Our Mission is to <br />
                        <span className="text-primary-500">Unite</span> Communities.
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We believe that sports and events are the most powerful ways to bring people together.
                        In a digital world that often feels disconnected, UniteAll uses technology to facilitate
                        real-world connection.
                    </p>
                </motion.div>
            </section>

            {/* The Story */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-tr from-primary-600 to-secondary-600 rounded-3xl p-1 shadow-2xl rotate-3 transform hover:rotate-0 transition-all duration-500">
                            <div className="bg-dark-900 rounded-[22px] overflow-hidden h-96 relative">
                                {/* Abstract representation of "connection" */}
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"></div>
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-dark-900 to-transparent"></div>
                                <div className="absolute bottom-8 left-8">
                                    <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 inline-block mb-2">Since 2024</div>
                                    <h3 className="text-2xl font-bold">Building Bonds</h3>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6">Why We Built UniteAll</h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                It started with a simple problem: organizing a Sunday football match was harder than playing it.
                                Endless group chats, confusing schedules, and last-minute cancellations.
                            </p>
                            <p>
                                We realized this wasn't just about sports—it was about <strong className="text-white">coordination friction</strong>.
                                People want to do things together, but the logistics get in the way.
                            </p>
                            <p>
                                UniteAll removes that friction. We built an intelligent platform that handles the "boring stuff"—
                                descriptions, scheduling, booking—so you can focus on the fun part: showing up and playing.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-dark-800 py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <ValueCard
                            number="01"
                            title="Simplicity First"
                            desc="Technology should be invisible. If it takes more than 3 clicks, it's too complicated."
                        />
                        <ValueCard
                            number="02"
                            title="Community Driven"
                            desc="We don't just build features; we build tools that help communities thrive and grow."
                        />
                        <ValueCard
                            number="03"
                            title="Trust & Safety"
                            desc="Real connections require real trust. We prioritize user safety and data privacy above all."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const ValueCard = ({ number, title, desc }) => (
    <div className="border-l-2 border-primary-500 pl-8 hover:bg-white/5 p-4 rounded-r-xl transition-colors">
        <span className="text-5xl font-display font-bold text-gray-700 block mb-4">{number}</span>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{desc}</p>
    </div>
);

export default About;
