"use client"

import React, { useState } from "react";
import Image from "next/image";
import GooeyNav from "@/blocks/Components/GooeyNav/GooeyNav";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import Threads from "@/blocks/Backgrounds/Threads/Threads";
import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";
import ScrollReveal from "@/blocks/TextAnimations/ScrollReveal/ScrollReveal";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";

// Define items for GooeyNav
const items = [
  { label: "About", href: "#" },
  { label: "Experience", href: "#" },
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
          src="/logo/lauv-logo2.svg"
          alt="Lauv Logo"
          width={35}
          height={35}
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
      <main className="flex-grow flex flex-col items-center h-full relative">
        <div style={{ width: '100%', height: '600px', position: 'absolute', bottom: '50'}}>
          <Threads
            amplitude={3}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        <div className="w-full flex justify-center items-center my-4 md:mt-15 text-center font-bold relative px-4 md:px-0">
          <BlurText
            text="Lauvigne Lumeda"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="lg:text-9xl md:text-7xl sm:text-5xl text-center"  
          />
        </div>

        <div className="font-bold text-center opacity-0 animate-fadeIn mt-3">
          <TrueFocus 
            sentence="Developer   Creator   Solopreneur"
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

        <div className="w-full flex items-center mt-8 mb-4 relative h-[300px]">
          <CircularText
            text="SCROLL-DOWN*SCROLL-DOWN*"
            onHover="slowDown"
            spinDuration={10}
            className="absolute left-45 bottom-10"
          />
          <Image 
            src="/logo/lauv-logo.svg"
            alt="Lauv Logo"
            width={20}
            height={20}
            className="m-10 transition-all duration-300 hover:scale-150 hover:rotate-10 hover:brightness-125 cursor-pointer absolute left-44 bottom-9"
          />
        </div>

        <div className="flex-grow flex flex-row items-center justify-center w-9xl mt-35 space-x-50">
          {/* Tech Stack Section Start */}
          <div className="flex flex-col w-full max-w-lg px-4 md:px-0 mt-10 mb-20 space-y-8"> {/* Increased max-width slightly, increased spacing */}

          {/* DEVELOP Card */}
          {/* Removed background, added dashed border */}
          <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-dashed border-gray-800">

            <h3 className="text-purple-400 font-bold text-2xl tracking-wide mb-3"> {/* Increased size, adjusted margin */}
              DEVELOP
            </h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed mb-5"> {/* Adjusted margins */}
              Started building websites with javascript and PHP, now I craft them with TypeScript, React, Node.js, Next and a little bit of magic!
              {/* Updated description to match image */}
            </p>

            <h4 className="text-gray-300 font-semibold mb-3 text-base"> {/* Adjusted text color/size */}
              Skillset &amp; tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {/* List your development skills here - updated to match image */}
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">Next.js</span> {/* Increased padding, added border */}
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">Tailwind</span>
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">React</span>
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">Javascript</span>
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">CSS</span>
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">Node.js</span>
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">Python</span>
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">Springboot</span>
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">Flutterflow</span>
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">MySQL</span>
              {/* Add more development technologies if needed */}
            </div>
          </div>

          {/* DESIGN Card (Styled similarly) */}
          {/* Removed background, added dashed border */}
          <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-dashed border-gray-800">

            <h3 className="text-cyan-400 font-bold text-2xl tracking-wide mb-3"> {/* Changed color, Increased size, adjusted margin */}
              CONTENTS
            </h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed mb-5"> {/* Adjusted margins */}
              Crafting intuitive and visually appealing interfaces. I focus on user experience and aesthetics.
              {/* Kept previous description, adjust as needed */}
            </p>
            <h4 className="text-gray-300 font-semibold mb-3 text-base"> {/* Adjusted text color/size */}
              Skillset &amp; Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {/* List your design skills here */}
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">Figma</span> {/* Increased padding, added border */}
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">Canva</span>
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">Capcut</span>
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">Adobe Premiere Pro</span>
              <span className="bg-transparent text-gray-300 py-1 px-4 rounded-full text-sm font-medium border border-gray-600">Adobe Illustrator</span>
              {/* Add more design technologies here */}
            </div>
          </div>

          {/* Removed Custom CSS for the borders */}
          {/* <style jsx global>{` ... `}</style> */}

          </div>
          {/* Tech Stack Section End */}

          <div className="flex flex-col">
          <BlurText
            text="What I do"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-7xl font-extrabold"
          />

          <TiltedCard
            imageSrc="/photos/tiltedcard.svg"
            altText="Yuyuhiei"
            captionText="Lauvigne Lumeda"
            containerHeight="600px"
            containerWidth="500px"
            imageHeight="600px"
            imageWidth="500px"
            rotateAmplitude={10}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="bg-transparent px-4 py-2 border-1 border-dashed rounded-lg opacity-50 font-bold m-5 absolute top-5 left-85">
                Lauvigne
              </p>
            }
          />
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

