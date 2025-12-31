import React from 'react';
import { Mic, Search, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    const tabs = [
        "Legal Judgment",
        "Law Library",
        "Law Mapping",
        "Smart Dashboard",
        "YouTube Summarizer",
        "Legal Templates"
    ];

    return (
        <div className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-white flex flex-col items-center justify-center pt-10 pb-20">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

            {/* Triafree Left Tab */}
            <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
                <div className="bg-white border border-l-0 border-gray-200 shadow-md rounded-r-xl py-8 px-1 flex flex-col items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow">
                    <span className="text-secondary font-bold -rotate-90 whitespace-nowrap text-sm tracking-wide">Triafree</span>
                    <div className="w-6 h-6 rounded border-2 border-gray-900/20 rotate-45 mt-2"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center">

                {/* Title */}
                <motion.h1
                    className="text-6xl md:text-8xl font-bold text-black font-display mb-6 tracking-tight mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    salhakar
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-lg md:text-2xl text-gray-400 font-light mb-12 max-w-3xl mx-auto font-sans"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    India’s smartest & simplest <span className="font-bold text-gray-800">AI-Powered</span> multilingual legal research platform
                </motion.p>

                <div className="w-16 h-1 bg-secondary/50 mx-auto mb-10 rounded-full"></div>

                {/* Search Bar */}
                <motion.div
                    className="relative max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Youtube Summary"
                            className="w-full h-16 pl-8 pr-16 rounded-full border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-gray-600 outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans text-lg placeholder:text-gray-300"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                            <Mic className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                {/* Action Pills */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    {tabs.map((tab, idx) => (
                        <button
                            key={tab}
                            className={`px-6 py-3 rounded-full text-sm md:text-[15px] font-medium transition-all duration-200 border border-transparent
                    ${tab === "YouTube Summarizer"
                                    ? 'bg-white shadow-[0_4px_20px_rgb(0,0,0,0.08)] border-gray-200 text-gray-800 -translate-y-1'
                                    : 'bg-white/50 text-gray-600 hover:bg-white hover:shadow-md hover:text-gray-900 border-gray-100/50'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </motion.div>
            </div>

            {/* Spline Bot Badge */}
            <div className="fixed bottom-6 right-6 z-40 hidden md:block group cursor-pointer">
                <div className="relative">
                    {/* Simple visual representation of the bot/badge from image */}
                    <div className="absolute -top-16 right-0 w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center animate-bounce shadow-xl">
                        <Bot className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-black text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-lg">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-blue-400 to-pink-500"></div>
                        Built with Spline
                    </div>
                </div>
            </div>
        </div>
    );
}
