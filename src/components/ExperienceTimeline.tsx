'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'; // Keep useTransform
import Image from 'next/image';
// Remove unused import
// import { comma } from 'postcss/lib/list';


const experiences = [
  // ... your experiences array
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

  // Smooth the scroll progress value for the line (and now the dot too)
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Create a motion value for the dot's top position, based on the *sprung* scaleY value
  // We map the scaleY value (which goes from 0 to 1) to the full height of the container (0% to 100%)
  const dotTop = useTransform(scaleY, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-10">
      {/* Central Timeline Line */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800 transform -translate-x-1/2"
        style={{ scaleY: scaleY, transformOrigin: 'top' }}
      />

      {/* Glowing Dot */}
      <motion.div
        className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2"
        // Use the dotTop motion value (derived from the sprung scaleY) for the top style
        style={{ top: dotTop }}
      />


      <div className="relative space-y-24"> {/* Increased spacing */}
        {experiences.map((exp, index) => (
          // Changed grid to 2 columns, removed the 'auto' middle column
          <div key={exp.id} className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20">
            {/* Side 1: Title, Company, Year, Logo - Conditional Alignment */}
            {/* Adjusted order classes for 2 columns */}
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h3 className="text-2xl font-bold text-gray-100">{exp.title}</h3>

              <p className="text-lg text-cyan-400 mb-1">{exp.company}</p>
              {/* Year */}
              <span
                className="text-xl font-light text-gray-500 mb-2" // Adjusted year style/size
                style={{ letterSpacing: '0.1em' }} // Reduced letter spacing slightly
              >
                {exp.year}
              </span>

              {/* Logo */}
              <div className="w-10 h-10 relative"> {/* Added relative positioning for Image */}
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill // Use fill to make image cover the div
                  style={{ objectFit: 'contain' }} // Adjust objectFit as needed (contain, cover, etc.)
                  className="rounded-full" // Optional: if logos should be circular
                  unoptimized // Add this prop to prevent Next.js optimization for SVGs
                />
              </div>
            </div>

            {/* Removed the middle year div entirely */}

            {/* Side 2: Description - Conditional Alignment */}
            {/* Adjusted order classes for 2 columns */}
            <div className={`text-gray-300 text-lg ${index % 2 !== 0 ? 'md:text-right' : 'text-left'} ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;