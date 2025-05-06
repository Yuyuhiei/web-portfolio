// app/page.tsx (or wherever your page file is)

"use client"

import React from "react"; // Removed useState
import Image from "next/image"; // Keep Image for CircularText section

// Import your data
import { projects } from '@/data/projects'; // Adjust the path if your file is in a different location

// Import your components and blocks
// Removed GooeyNav import
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


// Removed items constant

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
  // Removed mobileMenuOpen state
  return (
    // The cursor: 'none' style is now applied globally in layout.tsx
    // Removed outer div as layout.tsx now handles the main structure
    // <div className="flex flex-col min-h-screen bg-[#101112] font-gilroy"> // Removed this line
    <> {/* Added React Fragment wrapper */}
      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center h-full relative pt-20"> {/* Added padding top to account for fixed header */}
        <div style={{ width: '100%', height: '600px', position: 'absolute', bottom: '50'}} className="hidden md:block">
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        <div style={{ width: '100%', height: '600px', position: 'absolute', bottom: '50'}} className="md:hidden opacity-10">
          <Threads
            amplitude={2.5}
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
            className="lg:text-9xl md:text-7xl text-4xl text-center"
          />
        </div>

        <div className="font-bold text-center opacity-0 animate-fadeIn mt-1 md:mt-3">
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

        <div className="w-full items-center mt-8 mb-4 relative h-[300px] hidden md:block">
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
            className="m-10 transition-all duration-300 hover:scale-150 hover:rotate-10 hover:brightness-125 absolute left-44 bottom-9"
          />
        </div>

        <div className="flex-grow flex flex-col md:flex-row items-center justify-center w-full md:w-9xl md:mt-35 mt-10 md:space-x-50 space-x-0">
          {/* Tech Stack Section Start */}
             <div className="flex flex-col w-full max-w-lg px-4 md:px-0 mt-10 mb-20 space-y-8">
             {/* DEVELOP Card */}
             {/* custom-corner-border class is kept from previous step */}
             {/* hover:scale-105 on the card wrapper is kept */}
             <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
               <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                 DEVELOP
               </h3>
               <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
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
               <h3 className="text-white font-bold md:text-2xl text:lg tracking-wide mb-3">
                 CREATE {/* Updated title based on your code */}
               </h3>
               <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
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
              className="md:text-7xl text-3xl font-extrabold"
            />

            <div className="hidden md:block mt-10 mb-20">
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

            <div className="md:hidden mt-10 mb-20">
              <TiltedCard
                imageSrc="/photos/tiltedcard.svg"
                altText="Yuyuhiei"
                captionText="Lauvigne Lumeda"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <p className="bg-transparent px-4 py-2 border-1 border-dashed rounded-lg opacity-50 font-bold m-5 absolute">
                    Lauvigne
                  </p>
                }
              />
            </div>

            
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex w-full items-center justify-center p-4 md:mt-40 mt-5">
          <BlurText
            text=" My Experience"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>
        <ExperienceTimeline />

        <div className="flex w-full items-center justify-center p-4 md:mt-40 mt-5 font-extrabold">
          <BlurText
            text=" My Projects"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
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


      {/* Footer Section - Consider moving this to layout.tsx as well for consistency */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20"> {/* Added margin top */}
        <p>&copy; {new Date().getFullYear()} Lauvigne Lumeda. All rights reserved.</p> {/* Updated name */}
      </footer>
    </> // Closed React Fragment wrapper
    // </div> // Removed this closing tag
  );
}