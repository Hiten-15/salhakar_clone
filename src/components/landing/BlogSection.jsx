import React, { useState } from 'react';
import { ArrowRight, Briefcase, ClipboardList, Scale, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const blogs = [
        {
            tag: "Business",
            title: "Digital Transformation in Law Firms",
            excerpt: "Learn how law firms are embracing digital transformation to improve efficiency and client service. Discover best practices and implementation strategies.",
            author: "Anita Mehta",
            date: "Dec 10, 2024",
            readTime: "10 min",
            icon: Briefcase,
            color: "red"
        },
        {
            tag: "Contracts",
            title: "Contract Management Strategies",
            excerpt: "Master the art of digital contract management with modern tools and proven strategies. Learn how to streamline your contract workflow.",
            author: "Vikram Singh",
            date: "Dec 8, 2024",
            readTime: "7 min",
            icon: ClipboardList,
            color: "blue",
            highlight: true
        },
        {
            tag: "Ethics",
            title: "Legal Ethics in the Digital Era",
            excerpt: "Explore the evolving landscape of legal ethics in our digital world. Understand new challenges and responsibilities for modern lawyers.",
            author: "Dr. Meera Patel",
            date: "Dec 5, 2024",
            readTime: "9 min",
            icon: Scale,
            color: "orange"
        },
        {
            tag: "Research",
            title: "AI in Legal Research: A New Frontier",
            excerpt: "Discover how artificial intelligence is uncovering insights in legal databases that were previously invisible to the human eye.",
            author: "Rajesh Khanna",
            date: "Dec 15, 2024",
            readTime: "12 min",
            icon: Scale,
            color: "blue"
        },
        {
            tag: "Technology",
            title: "The Future of Legal Tech in India",
            excerpt: "An in-depth look at how the Indian judiciary and legal professionals are adopting technology to clear the massive backlog of cases.",
            author: "Sneha Roy",
            date: "Dec 12, 2024",
            readTime: "15 min",
            icon: Briefcase,
            color: "orange"
        },
        {
            tag: "Operations",
            title: "Optimizing Law Firm Operations",
            excerpt: "Practical steps for small to mid-sized law firms to automate their daily administrative tasks and focus on client advocacy.",
            author: "Amit Shah",
            date: "Dec 20, 2024",
            readTime: "8 min",
            icon: ClipboardList,
            color: "red"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % blogs.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
    };

    const getVisibleBlogs = () => {
        const visibleCount = 3;
        let items = [];
        for (let i = 0; i < visibleCount; i++) {
            items.push(blogs[(currentIndex + i) % blogs.length]);
        }
        return items;
    };

    const visibleBlogs = getVisibleBlogs();

    const getColorClasses = (color) => {
        switch (color) {
            case 'red': return 'bg-red-50 text-red-500';
            case 'blue': return 'bg-gray-50 text-gray-500';
            case 'orange': return 'bg-orange-50 text-orange-500';
            default: return 'bg-gray-50 text-gray-500';
        }
    };

    return (
        <section className="py-24 bg-gray-50/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Latest Insights
                    </motion.h2>
                    <p className="text-gray-500 text-lg font-sans max-w-2xl mx-auto">
                        Stay updated with the latest trends in legal technology and best practices
                    </p>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <AnimatePresence mode="wait">
                            {visibleBlogs.map((blog, index) => (
                                <motion.div
                                    key={`${currentIndex}-${index}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <div className={`
                                        h-full p-8 rounded-3xl transition-all duration-300 flex flex-col group
                                        ${blog.highlight='bg-white hover:shadow-lg border border-gray-100 hover:-translate-y-1'
                                        }
                                    `}>
                                        <div className="flex justify-between items-start mb-8">
                                            <div className={`p-4 rounded-2xl ${getColorClasses(blog.color)}`}>
                                                <blog.icon className="w-8 h-8" />
                                            </div>
                                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-semibold uppercase tracking-wider">
                                                {blog.tag}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-4 font-display leading-tight group-hover:text-gray-700 transition-colors">
                                            {blog.title}
                                        </h3>

                                        <p className="text-gray-500 font-sans mb-8 leading-relaxed flex-grow">
                                            {blog.excerpt}
                                        </p>

                                        <div className="border-t border-gray-100 pt-6">
                                            <div className="flex justify-between items-center mb-4">
                                                <div>
                                                    <p className="font-bold text-gray-900 text-sm">{blog.author}</p>
                                                    <p className="text-xs text-gray-400">{blog.date} · {blog.readTime}</p>
                                                </div>
                                            </div>
                                            <div className={`
                                                w-10 h-10 rounded-full flex items-center justify-center transition-colors ml-auto
                                                ${blog.highlight ? 'bg-gray-900/10 text-gray-900' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-900 group-hover:text-white'}
                                            `}>
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-6">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-110 transition-all border border-gray-100 group"
                        >
                            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                        </button>

                        {/* Pagination Dots */}
                        <div className="flex gap-2">
                            {blogs.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-gray-900' : 'w-2 bg-gray-200'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-110 transition-all border border-gray-100 group"
                        >
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
