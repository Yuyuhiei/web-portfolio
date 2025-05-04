"use client"

import React, { useState } from "react";
import Image from "next/image";
import GooeyNav from "@/blocks/Components/GooeyNav/GooeyNav";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";

// Define items for GooeyNav
const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#101112] font-gilroy">
      {/* Header Section */}
      <header className="relative flex w-full items-center justify-between p-10">
        {/* Logo */}
        <Image 
          src="/logo/lauv-logo.svg"
          alt="Lauv Logo"
          width={40}
          height={40}
          className="m-10 transition-all duration-300 hover:scale-150 hover:rotate-10 hover:brightness-125 cursor-pointer"
        />

        {/* Desktop Navigation - hidden on small screens */}
        <div className="hidden md:block font-medium" style={{ height: '70px', width: '400px', position: 'relative' }}>
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* Hamburger button - visible only on small screens */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ease-in-out"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ease-in-out"></div>
          <div className="w-6 h-0.5 bg-white transition-all duration-300 ease-in-out"></div>
        </button>
      </header>

      {/* Mobile menu - only visible when mobileMenuOpen is true */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a1b1c] absolute top-[90px] right-0 left-0 z-50 p-5">
          <nav className="flex flex-col space-y-4">
            {items.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                className="text-white hover:text-gray-300 py-2 px-4 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Main content area */}
      <main className="flex flex-grow flex-col p-8 sm:p-20 text-white max-w-10xl mx-auto">
        <div className="w-full flex justify-center items-center my-8 text-center font-bold text-">
          <BlurText
            text="Lauvigne Lumeda"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-9xl text-center"
          />
        </div>

        <div className="font-bold text-3xl text-center opacity-0 animate-fadeIn">
          <TrueFocus 
            sentence="Web Developer"
            manualMode={true}
            blurAmount={5}
            borderColor="cyan"
            animationDuration={0.3}
            pauseBetweenAnimations={1}
            />
          </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
            animation-delay: 0.8s;
          }
        `}</style>
      </main>

      {/* Footer Section */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

