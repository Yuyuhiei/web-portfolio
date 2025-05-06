'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
// Removed unused import
// import { comma } from 'postcss/lib/list';


const experiences = [
  // ... your experiences array - Keep this array as is
  {
    id: 1,
    title: 'Student Trainee',
    company: 'Datacom',
    year: '2015',
    description: 'Attended a three-month workshop at DATACOM during my younger years, where we were taught about the fundamentals of MS Excel, the proficiency of keyboarding, and the main components of a computer system.',
    logo: '/exp_logos/datacom.svg',
  },
  {
    id: 2,
    title: 'External Scholar',
    company: 'Security Bank Corporation',
    year: '2022',
    description: 'One of the external scholars of the Security Bank Corporation. Inside this, we are tasked with attending related seminars and maintaining grades on our academic standings.',
    logo: '/exp_logos/sbc.svg',
  },
  {
    id: 3,
    title: 'Academe Committee Head',
    company: 'PLM College of Engineering Student Council',
    year: '2023',
    description: `As the head of the committee, I am in charge of developing new plans and events for the student body while collaborating with my members. We ensure that we give the best experience to the students academically. That's why we also receive and assess students' concerns around the campus.`,
    logo: '/exp_logos/plmce.svg',
  },
  {
    id: 4,
    title: 'Web Development Lead',
    company: 'Google Developer Student Clubs - PLM',
    year: '2024',
    description: 'As the Web Development Lead for GDSC PLM, I spearheaded initiatives to create impactful technology and web development projects and events, both online and in-person, aimed at benefiting not only PLM students but the wider community.',
    logo: '/exp_logos/gdscplm.svg',
  },
  {
    id: 5,
    title: 'Notion Campus Leader',
    company: 'Notion',
    year: '2024',
    description: `Holding the distinction of being one of the few chosen Notion Campus Leaders globally, my role is to drive the adoption and skillful utilization of Notion among users, especially students. This involves creating and leading campaigns, events, and initiatives designed to meet Notion's strategic goals.`,
    logo: '/exp_logos/notion.svg',
  },
  {
    id: 6,
    title: 'DataCamp Scholar',
    company: 'DataCamp',
    year: '2025',
    description: 'As a DataCamp Scholar, I am privileged to be part of a select group of students who have been recognized for their outstanding performance and potential in the field of data science. This recognition underscores my commitment to advancing my skills and knowledge in this dynamic field.',
    logo: '/exp_logos/datacamp.svg',
  },
];

const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Adjust offset as needed
  });

  // Smooth the scroll progress value for the line and dot
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    // Increased restDelta slightly. This means the spring animation
    // will consider itself 'at rest' sooner, potentially reducing
    // updates when the dot reaches the end of the scroll.
    restDelta: 0.01
  });

  // Create a motion value for the dot's top position, based on the *sprung* scaleY value
  // We map the scaleY value (which goes from 0 to 1) to the full height of the container (0% to 100%)
  const dotTop = useTransform(scaleY, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-10">
      {/* Central Timeline Line */}
      {/* Framer Motion automatically promotes transform properties for hardware acceleration */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800 transform -translate-x-1/2"
        style={{ scaleY: scaleY, transformOrigin: 'top' }}
      />

      {/* Glowing Dot */}
      {/* Framer Motion handles the 'top' style updates efficiently */}
      <motion.div
        className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2"
        // Use the dotTop motion value (derived from the sprung scaleY) for the top style
        style={{ top: dotTop }}
        // Optional: Add will-change property as a hint to the browser (use with caution)
        // className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2 will-change-top"
      />


      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          // Changed grid to 2 columns, removed the 'auto' middle column
          <div key={exp.id} className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 bg-black rounded-2xl p-6 shadow-lg md:bg-transparent">
            {/* Side 1: Title, Company, Year, Logo - Conditional Alignment */}
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h3 className="md:text-2xl text-xl font-bold text-gray-100">{exp.title}</h3>

              <p className="text-lg text-cyan-400 mb-1">{exp.company}</p>
              {/* Year */}
              <span
                className="md:text-xl text-md font-regular text-gray-400 mb-2"
                style={{ letterSpacing: '0.4em' }}
              >
                {exp.year}
              </span>

              {/* Logo */}
              <div className="w-10 h-10 relative flex items-center justify-center md:my-0 my-5"> {/* Added flex centering for logos */}
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  style={{ objectFit: 'contain' }} // Use contain to show the whole logo
                  unoptimized // Keep if necessary for SVGs, but test without if possible
                />
              </div>
            </div>

            {/* Side 2: Description - Conditional Alignment */}
            <div className={`text-gray-300 md:text-lg text:md ${index % 2 !== 0 ? 'md:text-right' : 'text-left'} ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;