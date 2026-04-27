import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Layout/Navbar";
import Features from "../components/Features/Features";

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden no-scrollbar">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
