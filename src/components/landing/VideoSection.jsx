import React from 'react';
import { FileText, Mic, Globe, Languages, FileOutput, Bot, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VideoSection() {
    const features = [
        {
            icon: FileText,
            title: "Instant research",
            description: "Judgments and acts in just one to three clicks."
        },
        {
            icon: Mic,
            title: "Voice assistance",
            description: "Speak your query; get instant, accurate results."
        },
        {
            icon: Globe,
            title: "Universal Search",
            description: "Find cases with keywords or simple questions - no details needed."
        },
        {
            icon: Languages,
            title: "Multilingual Access",
            description: "Instantly view research in any Indian language."
        },
        {
            icon: FileOutput,
            title: "Concise Summaries",
            description: "Get the gist in two to three lines instantly."
        },
        {
            icon: Bot,
            title: "Kiki AI",
            description: "Smart assistant answers, automates, and guides your legal research."
        }
    ];

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gray-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Why Choose Salhakar
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-500 mb-12 max-w-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Salhakar aims to make legal research in India simple, convenient, and reliable, leveraging advanced AI to give every user a smarter edge.
                        </motion.p>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-start gap-4 group cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                >
                                    <motion.div
                                        className="p-2 bg-white rounded-lg shadow-sm border border-gray-100 shrink-0 transition-all duration-300 group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:shadow-lg"
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: [0, -5, 5, 0],
                                            transition: { duration: 0.5 }
                                        }}
                                    >
                                        <feature.icon className="w-6 h-6 text-gray-700 transition-colors duration-300 group-hover:text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-gray-900">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Video Placeholder */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                            {/* Overlay content as per image "Video unavailable" */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 group-hover:bg-black/30 transition-colors">
                                <h3 className="text-6xl md:text-8xl font-black tracking-tighter opacity-20 select-none">SALHAKAR</h3>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                            <Play className="w-5 h-5 text-gray-900 ml-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-8 left-0 right-0 text-center">
                                    <span className="text-white/80 text-sm font-medium tracking-widest uppercase">The Legend of an Extraordinary Indian Spy</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements behind video */}
                        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-dashed border-gray-200 rounded-2xl"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
