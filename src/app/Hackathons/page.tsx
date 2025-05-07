// src/app/Hackathons.tsx

"use client";

import React from "react";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import FallingText from "@/blocks/TextAnimations/FallingText/FallingText";
import Threads from "@/blocks/Backgrounds/Threads/Threads";
import HackathonEntry from "./HackathonEntry";

const handleAnimationComplete = () => {
  console.log('Hackathon page animation completed!');
};

// Define your hackathon entry data
const hackathonEntriesData = [
  {
    entryNumber: "01",
    title: "Procrash",
    award: "3rd Place",
    description: "Designed for procrastinators and anyone striving for self-improvement, this gamified app transforms productivity into an adventure. By setting ultimate goals, breaking them into small missions, and battling monsters with each completed task, users can build better habits one level at a time.",
    imageSrc: '/solutions/procrash.svg', // Replace with the actual image path
    projectLink: "https://procrash-hdps5h.flutterflow.app/?fbclid=IwZXh0bgNhZW0CMTEAAR6V1DkZeKy8dZetXVGOk7A33bbXy5Ue001oiPqO8CxLwXM40uhn5cdDCW9RUQ_aem_cvDKSgLmGXTzEsuIRtzhrw", // <-- Add the link for Procrash
    trophyType: "third", // Specify the trophy type
    techStackIcons: [ // <-- Add paths to tech stack icons for Procrash
        '/techstack/flutterflow.svg',
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "02",
    title: "Talento",
    award: "Special Award",
    description: "Talento is a mobile app designed to help you visually showcase your talents and skills through videos and images. It's like a \"Tinder for jobs,\" allowing you to immediately grab the attention of HR professionals with your abilities, making your application unmissable.",
    imageSrc: '/solutions/talento.svg', // Replace with the actual image path
    projectLink: "https://talento-xi.vercel.app/", // <-- Add the link for Talento
    trophyType: "special", // Specify the trophy type
    techStackIcons: [ // <-- Add paths to tech stack icons for Talento
        '/techstack/javascript.svg',
        '/techstack/css.svg',
    ],
  },
  {
    entryNumber: "03",
    title: "KachingKo",
    award: "4th Place",
    description: "Scan your receipts, unlock financial intelligence. This AI companion uses videos or images of receipts to categorize spending, analyze habits, guide your budget towards goals, and reward smart money decisions. KachingKo makes understanding your finances instant and engaging.",
    imageSrc: '/solutions/kachingko.svg', // Replace with the actual image path
    projectLink: "https://neosolve-hackit-kachingko.vercel.app/", // <-- Add the link for KachingKo
    trophyType: "participant", // Specify the trophy type (using participant as a placeholder for 4th)
    techStackIcons: [ // <-- Add paths to tech stack icons for KachingKo
        '/techstack/nextjs.svg',
        '/techstack/tailwind.svg',
        '/techstack/gemini.svg',
    ],
  },
  {
    entryNumber: "04",
    title: "eCarga",
    award: "Finalist - 1st Place Mock Pitch",
    description: "A mobile app for booking specialized, accessible vehicles, created to cater to individuals with mobility disabilities. It serves as a direct link, connecting users in need of adapted transport (like wheelchair users) with suitable vehicles, providing convenient pickup service rather than requiring travel to a terminal.",
    imageSrc: '/solutions/ecarga.svg', // Replace with the actual image path
    projectLink: "https://github.com/Feinpoint/eCarga", // <-- Add the link for eCarga
    trophyType: "first", // Specify the trophy type
     techStackIcons: [ // <-- Add paths to tech stack icons for eCarga
        '/techstack/flutter.svg',
        '/techstack/gcp.svg',
     ],
  },
  // Add more entries here
];

export default function Hackathons() {
  return (
    <>
      {/* Main content area for Hackathons */}
      <main className="flex-grow flex flex-col items-center h-full relative pt-20">
      { /* Make this hidden on mobile */ }
      {/* Added responsive hidden class */}
        <div className="hidden md:block" style={{ width: '100%', height: '600px', position: 'absolute', top: '0', zIndex: -1, opacity: 0.5 }}>
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        {/* Hackathon Entries Section */}
        <div className="flex w-full items-center justify-center p-4">
          <BlurText
            text="Hackathon Entries"
            delay={50}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl md:text-7xl font-extrabold text-center"
          />
        </div>

        <RollingGallery autoplay={true} pauseOnHover={false} />

        {/* Adjusted padding for responsiveness */}
        <div className="flex flex-col w-full max-w-5xl mx-auto p-4 md:p-4 my-10 md:my-20"> {/* Changed p-15 to p-4 */}
          {/* Falling Text for Desktop */}
          <div className="hidden md:block">
            <FallingText
              text={` Besides being a developer and content creator, I am big on joining competitions, like hackathons. It is a great way to work on solving actual problems and meet interesting people. Here are some of the events I've participated in:`}
              highlightWords={["hackathons", "competitions", "problems", "interesting", "events"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>

          {/* Falling Text for Mobile */}
          {/* Adjusted margin bottom */}
          <div className="md:hidden mb-10"> {/* Changed mb-25 to mb-10 for smaller mobile margin */}
            <FallingText
              text={` Besides being a developer and content creator, I am big on joining competitions, like hackathons. It is a great way to work on solving actual problems and meet interesting people. Here are some of the events I've participated in:`}
              highlightWords={["hackathons", "competitions", "problems", "interesting", "events"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1rem"
              mouseConstraintStiffness={0.9}
            />
          </div>


          {/* Render Hackathon Entries */}
          {/* Adjusted margin top for responsiveness */}
          <div className="mt-20 md:mt-40"> {/* Adjusted margin top */}
            {hackathonEntriesData.map((entry, index) => (
              <HackathonEntry
                key={index}
                entryNumber={entry.entryNumber}
                title={entry.title}
                award={entry.award}
                description={entry.description}
                imageSrc={entry.imageSrc}
                projectLink={entry.projectLink} // Pass the project link
                trophyType={entry.trophyType} // Pass the trophy type
                techStackIcons={entry.techStackIcons} // Pass the tech stack icons array
              />
            ))}
          </div>
        </div>


      </main>

      {/* Footer Section */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20">
        <p>&copy; {new Date().getFullYear()} Lauvigne Lumeda. All rights reserved.</p>
      </footer>
    </>
  );
};
