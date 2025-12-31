import React from 'react';
import { Accordion, AccordionPanel, AccordionTitle, AccordionContent } from 'flowbite-react';
import { motion } from 'framer-motion';

export default function FAQ() {
    const faqs = [
        {
            question: "What is सलाहकर and how does it help legal professionals?",
            answer: "सलाहकर is an advanced AI-powered legal research platform designed to simplify case law research, act navigation, and legal drafting for Indian legal professionals. It saves time by providing instant summaries, accurate case citations, and multilingual support."
        },
        {
            question: "How accurate is the AI chatbot for legal queries?",
            answer: "Our AI is trained on millions of legal documents and judgments. While it provides highly accurate and relevant information to assist your research, we recommend using it as a powerful assistant alongside your professional judgment."
        },
        {
            question: "Is my data secure and confidential?",
            answer: "Yes, we prioritize data security with enterprise-grade encryption. Your search history and private notes are confidential and protected by strict privacy protocols."
        },
        {
            question: "How do I get started with सलाहकर?",
            answer: "Getting started is easy! Simply sign up for a free account, choose your preferred language, and start searching using keywords or natural language queries."
        },
        {
            question: "What types of legal documents and templates are available?",
            answer: "We offer a wide range of legal templates including affidavits, contracts, agreements, and court applications, all customizable to your specific needs."
        },
        {
            question: "How does the judgment search feature work?",
            answer: "Our intelligent search understands legal context. You can search by case name, citation, judge name, or even by describing the legal situation in simple English or regional languages."
        }
    ];

    return (
        <section className="py-20 ">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        FA<span className="underline decoration-secondary decoration-4 underline-offset-4">Q</span>'s
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Accordion collapseAll className="border-none ">
                        {faqs.map((faq, index) => (
                            <AccordionPanel key={index}>
                                <AccordionTitle className="text-lg font-bold text-gray-900 font-display hover:text-gray-700 py-4 px-6 focus:ring-0 hover:bg-gray-50 hover:rounded-lg transition-all duration-200">
                                    {faq.question}
                                </AccordionTitle>
                                <AccordionContent className="py-4 bg-gray-50/50 rounded-b-xl">
                                    <p className="text-gray-600 font-sans leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionPanel>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
