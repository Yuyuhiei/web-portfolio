// app/page.tsx (or wherever your page file is)

"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Import your data
import { projects } from '@/data/projects'; // Adjust the path if your file is in a different location

// Import your components and blocks
import GooeyNav from "@/blocks/Components/GooeyNav/GooeyNav";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import Threads from "@/blocks/Backgrounds/Threads/Threads";
import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";
// ScrollReveal is imported but not used in the provided code snippet, keep if used elsewhere
// import ScrollReveal from "@/blocks/TextAnimations/ScrollReveal/ScrollReveal";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillTag from '@/components/SkillTag'; // Assuming SkillTag is in components folder
import ProjectCard from '@/components/ProjectCard'; // Import the new ProjectCard component


// Define items for GooeyNav
const items = [
  { label: "About", href: "#" },
  { label: "Experience", href: "#" },
  { label: "Contact", href: "#" },
];

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

// Define your skill arrays (you could also move these to a data file if they get long)
const devSkills = [
  'Next.js', 'Tailwind', 'React', 'Javascript', 'CSS', 'Node.js',
  'Python', 'Springboot', 'Flutterflow', 'Firebase', 'Supabase', 'MySQL'
];

const contentSkills = [
  'Figma', 'Canva', 'Capcut', 'Adobe Premiere Pro', 'Adobe Illustrator'
];

// Remove the 'const projects = [...]' block from here


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- Custom Cursor Implementation ---
  // Use MotionValues to track the raw mouse position
  // Initialize to 0 on both server and client to prevent hydration errors
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Configure spring physics for the dot (follows closely)
  const dotSpringConfig = { damping: 25, stiffness: 300 };
  // Configure spring physics for the outline (trails the dot)
  const outlineSpringConfig = { damping: 35, stiffness: 200 }; // More damping/less stiffness for trailing

  // Create sprung motion values for the inner dot
  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);

  // Create sprung motion values for the outer outline, based on the dot's sprung values
  const outlineX = useSpring(dotX, outlineSpringConfig);
  const outlineY = useSpring(dotY, outlineSpringConfig);

  // Effect to update mouse position on mousemove AND set initial position after mount
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Set initial cursor position to the center of the window after the component mounts
    // This runs only on the client after hydration
    cursorX.set(window.innerWidth / 2);
    cursorY.set(window.innerHeight / 2);


    // Add event listener for subsequent mouse movements
    window.addEventListener('mousemove', moveCursor);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]); // Dependencies: update effect if motion values change (they won't here, but good practice)
  // --- End Custom Cursor Implementation ---


  return (
    // The cursor: 'none' style is now applied globally in layout.tsx
    <div className="flex flex-col min-h-screen bg-[#101112] font-gilroy">
      {/* --- Custom Cursor Elements --- */}
      {/* Inner Glowing Dot */}
      <motion.div
        style={{
          x: dotX, // Bind x position to the dot's sprung motion value
          y: dotY, // Bind y position to the dot's sprung motion value
          pointerEvents: 'none', // Ensure the cursor doesn't block clicks on elements below it
          left: 0, // Position relative to the viewport
          top: 0,
          position: 'fixed', // Stay in fixed position relative to the viewport
          zIndex: 9999, // Ensure it's always on top
          transform: 'translate(-50%, -50%)', // Center the div exactly on the cursor coordinates
          width: '8px', // Size of the inner dot
          height: '8px',
          borderRadius: '50%', // Make it round
          backgroundColor: '#06b6d4', // Cyan color (Tailwind cyan-500 equivalent)
          boxShadow: '0 0 10px 4px rgba(6, 182, 212, 0.7)', // Glowing effect
        }}
      />

      {/* Outer Trailing Circle */}
      <motion.div
        style={{
          x: outlineX, // Bind x position to the outline's sprung motion value
          y: outlineY, // Bind y position to the outline's sprung motion value
          pointerEvents: 'none', // Ensure the cursor doesn't block clicks
          left: 0, // Position relative to the viewport
          top: 0,
          position: 'fixed', // Stay in fixed position
          zIndex: 9998, // Z-index slightly lower than the dot
          transform: 'translate(-50%, -50%)', // Center the div
          width: '30px', // Size of the outer circle
          height: '30px',
          borderRadius: '50%', // Make it round
          border: '2px solid #0891b2', // Border color (Tailwind cyan-600 equivalent)
          // Optional: opacity for transparency
          // opacity: 0.5,
        }}
      />
      {/* --- End Custom Cursor Elements --- */}


      {/* Header Section */}
      <header className="sticky top-0 z-50 flex w-full items-center justify-between p-6 md:p-8 bg-[#101112]/90 backdrop-blur-sm">
        {/* Logo */}
        <Image
          src="/logo/lauv-logo2.svg"
          alt="Lauv Logo"
          width={35}
          height={35}
          className="m-10 transition-all duration-300 hover:scale-150 hover:rotate-10 hover:brightness-125 cursor-pointer"
        />

        {/* Desktop Navigation - hidden on small screens */}
        <div className="hidden md:block font-medium" style={{ height: '70px', width: '450px', position: 'relative' }}>
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

        {/* ... other main content elements ... */}
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

        {/* style jsx block is fine */}
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
             <div className="flex flex-col w-full max-w-lg px-4 md:px-0 mt-10 mb-20 space-y-8">
             {/* DEVELOP Card */}
             {/* custom-corner-border class is kept from previous step */}
             {/* hover:scale-105 on the card wrapper is kept */}
             <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
               <h3 className="text-white font-bold text-2xl tracking-wide mb-3">
                 DEVELOP
               </h3>
               <p className="text-gray-400 text-sm mt-2 leading-relaxed mb-5">
                 Started creating mobile applications using Flutter, FlutterFlow, and Firebase and eventually switched to Web Development using NextJS, React, and Tailwind
               </p>
               <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                 Skillset &amp; tools
               </h4>
               <div className="flex flex-wrap gap-2">
                 {devSkills.map(skill => (
                   <SkillTag key={skill} skillName={skill} />
                 ))}
               </div>
             </div>

             {/* CONTENTS Card */}
             {/* custom-corner-border class is kept from previous step */}
             {/* hover:scale-105 on the card wrapper is kept */}
             <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
               <h3 className="text-white font-bold text-2xl tracking-wide mb-3">
                 CREATE {/* Updated title based on your code */}
               </h3>
               <p className="text-gray-400 text-sm mt-2 leading-relaxed mb-5">
                   My content creation journey evolved from a side hustle to serving other creators, achieving an average reach of 15 million within 90 days. {/* Updated description */}
               </p>
               <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                 Skillset &amp; Tools
               </h4>
               <div className="flex flex-wrap gap-2">
                 {contentSkills.map(skill => (
                   <SkillTag key={skill} skillName={skill} />
                 ))}
               </div>
             </div>
           </div>
           {/* Tech Stack Section End */}


          {/* What I do Section */}
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

        {/* Experience Section */}
        <div className="flex w-full items-center justify-center p-4 mt-40">
          <BlurText
            text=" My Experience"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-7xl font-extrabold"
          />
        </div>
        <ExperienceTimeline />

        <div className="flex w-full items-center justify-center p-4 mt-40">
          <BlurText
            text=" My Projects"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-7xl font-extrabold"
          />
        </div>

        {/* Projects Section Start */}
        {/* Modified this div to use a grid layout for two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl mx-auto mt-10">
             {/* Now mapping over the imported projects array */}
             {projects.map((project, index) => (
               <ProjectCard key={project.id} project={project} index={index} />
             ))}
           </div>
        {/* Projects Section End */}


      </main>

      {/* Footer Section */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}