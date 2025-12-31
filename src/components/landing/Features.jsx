import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
    const features = [
        {
            title: "Legal Judgment",
            description: "Access comprehensive database of legal judgments from High Courts and Supreme Court with advanced search and filtering capabilities.",
            link: "#"
        },
        {
            title: "Law Mapping",
            description: "Seamlessly map between old and new legal frameworks including BNS to IEA, BNSS to CrPC, and BNS to IPC transitions.",
            link: "#"
        },
        {
            title: "Law Library",
            description: "Comprehensive collection of Central Acts and State Acts with detailed provisions, amendments, and cross-references.",
            link: "#"
        },
        {
            title: "Smart Dashboard",
            description: "Intelligent legal assistant powered by AI to answer queries, provide legal guidance, and assist with research.",
            link: "#"
        },
        {
            title: "YouTube Summarizer",
            description: "AI-powered summarization of legal YouTube videos, extracting key insights and important legal concepts.",
            link: "#"
        },
        {
            title: "Kiki AI",
            description: "Smart assistant answers, automates, and guides your legal research.",
            link: "#"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Features
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-500 max-w-2xl mx-auto font-sans leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Comprehensive legal-tech solutions for lawyers, students, and researchers that save hours every week.
                    </motion.p>
                    <div className="w-16 h-1 bg-secondary mx-auto mt-8 rounded-full"></div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="h-full p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between group">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-500 font-sans leading-relaxed mb-6">
                                        {feature.description}
                                    </p>
                                </div>

                                <a href={feature.link} className="inline-flex items-center text-gray-900 font-medium hover:gap-2 transition-all group-hover:text-gray-700">
                                    Explore Feature
                                    <div className="ml-2 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
