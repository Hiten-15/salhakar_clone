import React from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
    const stats = [
        { count: "16M", label: "Legal Judgments" },
        { count: "11K", label: "Total Acts" },
        { count: "12", label: "Languages Supported" },
        { count: "24/7", label: "Consumer Support" }
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-16 relative">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        We're Good with Numbers
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Decorative Dot */}
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full z-10 transition-transform group-hover:scale-125"></div>

                            <div
                                className={`
                                    bg-white rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center relative z-0
                                    transition-all duration-300
                                    ${stat.highlighted
                                        ? 'border-2 border-primary/50 shadow-[0_10px_40px_rgba(30,101,173,0.1)]'
                                        : 'shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg border border-transparent'
                                    }
                                `}
                            >
                                <div className="flex items-start justify-center gap-1 mb-4 select-none">
                                    <span className="text-5xl md:text-6xl font-bold text-gray-900 font-display tracking-tight">
                                        {stat.count}
                                    </span>
                                    <span className="text-3xl md:text-4xl font-bold text-secondary font-display mt-2">
                                        +
                                    </span>
                                </div>
                                <p className="text-gray-500 font-medium text-lg font-sans">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
