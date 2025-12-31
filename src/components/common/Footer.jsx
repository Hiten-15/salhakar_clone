import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand & Contact */}
                    <div>
                        <h2 className="text-3xl font-bold font-display mb-6">salhakar</h2>
                        <p className="text-gray-400 font-sans mb-8 leading-relaxed text-sm">
                            Empowering legal professionals with AI-driven research tools, comprehensive judgment access, and modern practice management solutions.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:inquiry@salhakar.com" className="font-sans text-sm hover:text-white transition-colors">inquiry@salhakar.com</a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-4 h-4" />
                                <span className="font-sans text-sm">+91 7069900088</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-4 h-4" />
                                <span className="font-sans text-sm">Gandhinagar, Gujarat, India</span>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            {[Linkedin, Twitter, Instagram, Youtube].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all text-white">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold font-display mb-6">Services</h4>
                        <ul className="space-y-3">
                            {['Legal Judgment', 'Law Library', 'Law Mapping', 'YouTube Summarizer'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-400 hover:text-white transition-colors font-sans text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold font-display mb-6">Company</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Our Team', 'Careers', 'Blog'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-400 hover:text-white transition-colors font-sans text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Stay Updated Section */}
                <div className="border-t border-white/5 pt-10 pb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex-1">
                            <h4 className="text-lg font-bold font-display mb-2">Stay Updated</h4>
                            <p className="text-gray-400 font-sans text-sm">
                                Get the latest legal insights and platform updates delivered to your inbox.
                            </p>
                        </div>
                        <div className="flex-1 flex items-center gap-3 relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-white/20 font-sans text-sm"
                            />
                            <button className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors font-display whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
