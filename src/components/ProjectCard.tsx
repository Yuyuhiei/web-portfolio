import React from 'react';
import Image from 'next/image'; // Make sure you have 'next/image' imported
import { motion } from 'framer-motion'; // Optional: if you want card-specific animations

interface ProjectCardProps {
  project: {
    id: number;
    number: string;
    title: string;
    category: string;
    description: string;
    imageSrc: string; // Path to the project image
  };
  index: number; // The index of the project in the array
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Determine the layout pattern based on the index (0, 1, 2, 3 repeats)
  const pattern = index % 4;

  // Define classes for positioning the large project number absolutely
  let numberPositionClasses = '';
  // Define classes for text alignment of the content block
  let contentAlignmentClasses = '';
  // Define order classes for the image and text blocks
  let imageOrderClass = '';
  let textOrderClass = '';


  switch (pattern) {
    case 0: // Pattern 1: Number Top-Left, Text Top-Right, Image Below Text
      numberPositionClasses = 'top-4 left-4'; // Added padding from edge
      contentAlignmentClasses = 'text-right items-end'; // Align text to the right
      textOrderClass = 'order-1'; // Text comes first
      imageOrderClass = 'order-2'; // Image comes second
      break;
    case 1: // Pattern 2: Number Bottom-Left, Text Top-Right, Image Above Text
      numberPositionClasses = 'bottom-4 left-4'; // Added padding from edge
      contentAlignmentClasses = 'text-right items-end'; // Align text to the right
      textOrderClass = 'order-2'; // Text comes second
      imageOrderClass = 'order-1'; // Image comes first
      break;
    case 2: // Pattern 3: Number Top-Right, Text Top-Left, Image Below Text
      numberPositionClasses = 'top-4 right-4'; // Added padding from edge
      contentAlignmentClasses = 'text-left items-start'; // Align text to the left
      textOrderClass = 'order-1'; // Text comes first
      imageOrderClass = 'order-2'; // Image comes second
      break;
    case 3: // Pattern 4: Number Bottom-Right, Text Top-Left, Image Above Text
      numberPositionClasses = 'bottom-4 right-4'; // Added padding from edge
      contentAlignmentClasses = 'text-left items-start'; // Align text to the left
      textOrderClass = 'order-2'; // Text comes second
      imageOrderClass = 'order-1'; // Image comes first
      break;
  }

  return (
    // Use motion.div for potential future animations (like fade-in on scroll)
    // Add a thin white border and transparent background
    // Use 'relative' for positioning context for the absolute number
    // Use flex-col to stack content vertically, justify-between to space text and image
    // Removed aspect-square to allow height to be determined by content
    <motion.div
      className="relative flex flex-col justify-between p-6 border border-white border-opacity-20 bg-transparent overflow-hidden h-full" // Removed aspect-square
      // Optional: Add Framer Motion initial/animate/whileHover props here
      // For example: initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      // whileHover={{ scale: 1.02 }} // Example hover effect
    >
      {/* Large Project Number - Absolutely Positioned */}
      {/* Reduced text size from text-8xl to text-6xl */}
      <div className={`absolute text-6xl p-6 font-bold text-white text-opacity-10 ${numberPositionClasses}`}>
        {project.number}
      </div>

      {/* Content Area (Text Block and Image Block) */}
      {/* Use flex-col to stack text and image, use order classes */}
      {/* h-full is still needed here to ensure this flex container fills the parent's height */}
      <div className="flex flex-col justify-between h-full">

        {/* Text Content Block (Title, Category, Description) */}
        {/* Use flex-col to stack Title/Category and Description, apply alignment */}
        {/* Added some padding to the text block */}
        <div className={`flex flex-col ${contentAlignmentClasses} ${textOrderClass} z-10 p-6`}>
           {/* Title and Category */}
           <div>
             <h3 className="text-xl font-semibold text-white">{project.title}</h3>
             <p className="text-sm text-gray-400">{project.category}</p>
           </div>
           {/* Description */}
           <div className="mt-2"> {/* Add some space between title/category and description */}
             <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
           </div>
        </div>


        {/* Project Image Block */}
        {/* The image block, position controlled by orderClass. Use flex-grow to take available space. */}
        {/* Removed fixed height (h-48) and added flex-grow */}
        <div className={`relative w-full flex-grow rounded-xl overflow-hidden ${imageOrderClass} z-10`}>
           {/* Use the Image component here */}
           {/* layout="fill" makes the image take the size of its parent container */}
           {/* objectFit="cover" makes the image fill the container while maintaining aspect ratio (may crop) */}
           {/* If you want to show the *entire* image without cropping, use objectFit="contain" instead.
               This might leave some empty space within the container if the aspect ratios don't match. */}
           <Image
             src={project.imageSrc}
             alt={`${project.title} image`}
             width={500} // Adjust as needed
             height={500} // Adjust as needed
             //layout="fill"
             //objectFit="cover" // Or "contain" if you prefer no cropping
           />
           {/* Removed the placeholder div */}
        </div>

      </div> {/* End Content Area */}
    </motion.div>
  );
};

export default ProjectCard;