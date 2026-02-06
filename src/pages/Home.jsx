import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBolt, FaUsers, FaSearch, FaMapMarkedAlt, FaStar, FaGooglePlay, FaAppStore, FaGraduationCap, FaBriefcase, FaRunning, FaLaptopCode, FaHome, FaGlobeAmericas, FaHandHoldingHeart } from 'react-icons/fa';

// import appScreenshot from '../assets/images/app-screenshot.jpg';

const Home = () => {
    return (
        <div className="min-h-screen transition-colors duration-300">
            {/* 1. Hero Section */}
            <section className="relative pt-20 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] light:bg-primary-500/20" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary-600/10 rounded-full blur-[140px] light:bg-secondary-500/20" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 text-center lg:text-left"
                        >
                            <div className="inline-block px-4 py-1.5 mb-6 border border-primary-500/30 rounded-full bg-primary-500/10 backdrop-blur-sm">
                                <span className="text-primary-400 font-semibold text-sm tracking-wide uppercase">Discover. Connect. Play.</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight text-white">
                                UniteAll <br />
                                <span className="text-white">
                                    Together Through Sports.
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-400 light:text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                                <span className="text-primary-400 italic">“Anyone Up For This?”</span> — The start of every great plan.
                                <br className="hidden md:block" /> <br />
                                Let’s make more <span className="text-white light:text-gray-900 font-bold">“Let’s go”</span> moments.
                                <br />
                                Find your people, spark a plan, and make it happen.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                                <button className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-primary-500/25 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                    Download App
                                </button>
                                <Link to="/features" className="px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/10 hover:bg-white/5 hover:border-white/20 light:border-gray-200 light:text-gray-800 light:hover:bg-gray-100">
                                    Explore Features
                                </Link>
                            </div>

                            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-500 light:text-gray-400 opacity-80">
                                <p className="text-sm font-medium uppercase tracking-wider">Trusted by communities in</p>
                                <span className="font-bold text-gray-200 light:text-gray-800">New Delhi</span>
                                <span className="font-bold text-gray-200 light:text-gray-800">Mumbai</span>
                                <span className="font-bold text-gray-200 light:text-gray-800">Pune</span>
                            </div>
                        </motion.div>

                        {/* App Preview / Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-1/2 relative perspective-1000"
                        >
                            <div className="relative mx-auto animate-[float_6s_ease-in-out_infinite]">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-primary-500/30 blur-[60px] rounded-full transform scale-90"></div>

                                {/* Phone Frame */}
                                <div className="relative border-gray-900 bg-gray-900 border-[12px] rounded-[3.5rem] shadow-2xl overflow-hidden max-w-[420px] lg:max-w-[480px] mx-auto rotate-[-6deg] hover:rotate-0 transition-transform duration-700">
                                    <img
                                        src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop"
                                        alt="UniteAll App Screen"
                                        className="w-full h-full object-cover bg-dark-800"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Quick Features Overview */}
            <section className="py-16 bg-dark-800/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-white light:text-gray-900">Why Choose UniteAll?</h2>
                        <p className="text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
                            We've redesigned the event experience from the ground up to be smarter,
                            simpler, and more social.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<FaBolt />}
                            title="AI Descriptions"
                            desc="Generate professional event details instantly with our integrated AI tool."
                        />
                        <FeatureCard
                            icon={<FaSearch />}
                            title="Smart Discovery"
                            desc="Find events that match your interests based on location and preferences."
                        />
                        <FeatureCard
                            icon={<FaMapMarkedAlt />}
                            title="Turf Booking"
                            desc="Reserve venues directly from the app with real-time availability."
                        />
                        <FeatureCard
                            icon={<FaUsers />}
                            title="Community First"
                            desc="Connect with local players and build your sports network effortlessly."
                        />
                    </div>
                </div>
            </section>

            {/* 2.5 Use Cases / Communities Section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <span className="text-primary-500 font-bold tracking-widest uppercase mb-4 block">Built for every community</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            One Platform. <br />
                            <span className="text-white">Infinite Communities.</span>
                        </h2>
                        <p className="text-xl text-gray-400 light:text-gray-600 max-w-2xl">
                            UniteAll isn't just an app; it's the digital infrastructure for real-world connection.
                            From campuses to corporate towers, we power the gatherings that matter.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Colleges */}
                        <UseCaseCard
                            title="Campus Hubs"
                            headline="Automate Campus Chaos"
                            desc="No more messy Google Forms. Clubs and student bodies use UniteAll to manage events, track attendance, and build a vibrant campus culture instantly."
                            image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                            icon={<FaGraduationCap />}
                            size="lg:col-span-1"
                        />
                        {/* Sports */}
                        <UseCaseCard
                            title="Sports Leagues"
                            headline="Fill Every Slot. Fast."
                            desc="Sunday league? Marathon group? Yoga meetup? Find players nearby and ensure no game is ever cancelled due to lack of numbers."
                            image="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop"
                            icon={<FaRunning />}
                            size="lg:col-span-2"
                        />
                        {/* Corporate */}
                        <UseCaseCard
                            title="Corporate Culture"
                            headline="Beyond the Email Chain"
                            desc="Transform boring office mandatories into engaging experiences. From team offsites to Friday fun, make workplace connection seamless."
                            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                            icon={<FaBriefcase />}
                            size="lg:col-span-2"
                        />
                        {/* Residential */}
                        <UseCaseCard
                            title="Neighborhoods"
                            headline="Your Digital Square"
                            desc="Replace scattered WhatsApp groups. Plan festivals, potlucks, and society meetings on a platform built for community management."
                            image="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop"
                            icon={<FaHome />}
                            size="lg:col-span-1"
                        />
                        {/* Tech */}
                        <UseCaseCard
                            title="Tech Ecosystems"
                            headline="Code. Connect. Create."
                            desc="The professional infrastructure for hackathons, bootcamps, and meetups. Handle registrations and networking like a pro."
                            image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop"
                            icon={<FaLaptopCode />}
                            size="lg:col-span-1"
                        />
                        {/* New City */}
                        <UseCaseCard
                            title="City Explorers"
                            headline="Find Your Tribe"
                            desc="New in town? Don't just exist—live. Find your badminton buddy, your chess group, or your hiking squad from day one."
                            image="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1000&auto=format&fit=crop"
                            icon={<FaGlobeAmericas />}
                            size="lg:col-span-1"
                        />
                        {/* Volunteer */}
                        <UseCaseCard
                            title="Social Impact"
                            headline="Power Your Cause"
                            desc="Organize charity drives and volunteer programs with tools that amplify your reach and impact."
                            image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000&auto=format&fit=crop"
                            icon={<FaHandHoldingHeart />}
                            size="lg:col-span-1"
                        />
                    </div>
                </div>
            </section>

            {/* 3. Social Proof / Testimonials */}
            <section className="py-16 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-10 text-white">What Our Users Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TestimonialCard
                            quote="UniteAll completely changed how our weekend football group organizes matches. It's a game-changer!"
                            author="Tanmay Butta"
                            role="Sports Enthusiast"
                        />
                        <TestimonialCard
                            quote="The AI description generator saves me so much time. Posting an event takes literally seconds now."
                            author="Sabeeh Ahsan"
                            role="Event Organizer"
                        />
                        <TestimonialCard
                            quote="Finally, an app that actually makes it easy to find local games. The UI is stunning."
                            author="Abhinav Singh"
                            role="Community Leader"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="download" className="py-16">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-primary-900 to-secondary-900 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Unite?</h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Join thousands of users organizing events smarter and faster.
                                Download UniteAll today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-8">
                                <div className="flex flex-col items-center">
                                    <button className="bg-white text-dark-900 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                                        <FaGooglePlay /> Google Play
                                    </button>
                                    <span className="text-gray-400 text-sm mt-2">Coming Soon</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <button className="glass text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-white/10 transition shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                                        <FaAppStore /> App Store
                                    </button>
                                    <span className="text-gray-400 text-sm mt-2">Coming Soon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-8 rounded-2xl glass hover:border-primary-500/30 transition-all group light:bg-white light:border-gray-200 light:shadow-sm"
    >
        <div className="h-14 w-14 bg-dark-900 light:bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 text-2xl mb-6 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors text-white light:text-gray-900">{title}</h3>
        <p className="text-gray-400 light:text-gray-600 leading-relaxed">{desc}</p>
    </motion.div>
);

const TestimonialCard = ({ quote, author, role }) => (
    <div className="bg-dark-card light:bg-white p-8 rounded-2xl border border-white/5 light:border-gray-200 relative shadow-lg">
        <div className="absolute top-6 right-6 text-gray-600 light:text-gray-300 text-4xl opacity-20">"</div>
        <div className="flex text-yellow-500 mb-4 text-sm">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>
        <p className="text-gray-300 light:text-gray-600 mb-6 italic">"{quote}"</p>
        <div>
            <h4 className="font-bold text-white light:text-gray-900">{author}</h4>
            <span className="text-xs text-primary-500 uppercase tracking-widest">{role}</span>
        </div>
    </div>

);

const UseCaseCard = ({ title, headline, desc, image, icon, size }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`relative group rounded-3xl overflow-hidden h-[400px] ${size} border border-white/10 shadow-2xl`}
    >
        {/* Background Image */}
        <div className="absolute inset-0">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative h-full p-8 flex flex-col justify-end z-10">
            <div className="mb-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-wider text-white mb-4">
                    {icon} {title}
                </div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-3 leading-tight group-hover:text-primary-400 transition-colors">{headline}</h3>
            <p className="text-gray-300 text-sm md:text-base line-clamp-3 group-hover:line-clamp-none transition-all duration-300 border-l-2 border-primary-500 pl-4 bg-black/20 backdrop-blur-sm p-2 rounded-r-lg">
                {desc}
            </p>
        </div>
    </motion.div>
);

export default Home;
