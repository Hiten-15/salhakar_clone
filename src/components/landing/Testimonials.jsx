import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "'सलाहकार has transformed our legal research process completely. The AI-powered features save us hours every day.'",
            name: "Vikram Singh",
            role: "Managing Partner",
            company: "Singh & Partners",
            rating: 5
        },
        {
            quote: "\"The platform's AI capabilities are remarkable. It's become an essential part of our research workflow.\"",
            name: "Dr. Meera Patel",
            role: "Legal Researcher",
            company: "Institute of Legal Studies",
            highlight: true
        },
        {
            quote: "\"The old-to-new law mapping feature helps me stay updated with legislative changes effortlessly.\"",
            name: "Arjun Gupta",
            role: "Corporate Lawyer",
            company: "Gupta & Associates",
            rating: 5
        },
        {
            quote: "\"The legal templates are exceptionally well-drafted. They've saved us countless hours in drafting motions and contracts.\"",
            name: "Adv. Rahul Sharma",
            role: "Senior Advocate",
            company: "Supreme Court",
            rating: 5
        },
        {
            quote: "\"YouTube Summarizer is a game-changer! I can now digest hour-long legal seminars in just 5 minutes.\"",
            name: "Priya Iyer",
            role: "Law Student",
            company: "NLSIU Bangalore",
            rating: 5
        },
        {
            quote: "\"The most intuitive legal tech platform I've used. Finding relevant judgments is now faster than ever before.\"",
            name: "Rajesh Varma",
            role: "Independent Practitioner",
            company: "Varma Legal Services",
            rating: 5,
            highlight: true
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Calculate which testimonials to show (circular)
    const getVisibleTestimonials = () => {
        const visibleCount = 3;
        let items = [];
        for (let i = 0; i < visibleCount; i++) {
            items.push(testimonials[(currentIndex + i) % testimonials.length]);
        }
        return items;
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 bg-white border border-gray-100 text-gray-900 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
                    >
                        Success Stories
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">
                        What Our Users Say
                    </h2>
                    <p className="text-gray-500 text-lg font-sans max-w-2xl mx-auto">
                        Trusted by thousands of legal professionals across India for clarity and precision.
                    </p>
                </div>

                {/* Content */}
                <div className="relative">
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <AnimatePresence mode="wait">
                            {visibleTestimonials.map((testimonial, idx) => (
                                <motion.div
                                    key={`${currentIndex}-${idx}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                    className={`
                                        p-8 rounded-[32px] relative flex flex-col h-full
                                        ${testimonial.highlight='bg-white/70 border border-white shadow-sm hover:shadow-md transition-shadow'
                                        }
                                    `}
                                >
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-4 h-4 ${i < (testimonial.rating || 5) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                                        ))}
                                    </div>
                                    <blockquote className="text-gray-700 font-medium mb-8 leading-relaxed flex-grow italic">
                                        {testimonial.quote}
                                    </blockquote>

                                    <div className="mt-auto">
                                        {testimonial.highlight && (
                                            <div className="w-10 h-1 bg-gray-950 rounded-full mb-6"></div>
                                        )}
                                        <div>
                                            <h4 className="text-base font-bold font-display text-gray-900">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-xs text-gray-500 font-sans mt-1">
                                                {testimonial.role}, {testimonial.company}
                                            </p>
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
                            {testimonials.map((_, i) => (
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
