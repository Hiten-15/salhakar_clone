import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import Features from "../components/landing/Features";
import VideoSection from "../components/landing/VideoSection";
import Testimonials from "../components/landing/Testimonials";
import BlogSection from "../components/landing/BlogSection";
import FAQ from "../components/landing/FAQ";
// import FreeTrialPopup from "../components/landing/FreeTrialPopup"; // Disabled - not needed now

import Footer from "../components/common/Footer";

function LandingPage() {
    return (
        <div className="font-sans bg-white overflow-x-hidden">
            <Navbar />
            <Hero />
            <div id="features">
                <Features />
            </div>
            <Stats />
            <VideoSection />
            <Testimonials />
            <div id="blogs">
                <BlogSection />
            </div>
            <FAQ />
            <Footer />
            {/* <FreeTrialPopup /> */}
        </div>
    );
}

export default LandingPage;
