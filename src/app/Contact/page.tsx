// src/app/Contact.tsx

'use client'; // This page uses client-side interactivity (form, potential animations)

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText'; 
import Squares from '@/blocks/Backgrounds/Squares/Squares';

// Define social media links (can reuse from layout or define here)
const socialLinks = [
    { platform: "GitHub", href: "https://github.com/Yuyuhiei", iconPath: "/icons/github_icon.svg" }, // <-- Replace YOUR_GITHUB_LINK and icon path
    { platform: "LinkedIn", href: "https://www.linkedin.com/in/lauvigne-lumeda/", iconPath: "/icons/linkedin_icon.svg" }, // <-- Replace YOUR_LINKEDIN_LINK and icon path
    { platform: "Gmail", href: "mailto:lumedalauvigne@gmail.com", iconPath: "/icons/gmail_icon.svg" }, // <-- Replace YOUR_EMAIL_ADDRESS and icon path
];

// Define contact information
const contactInfo = {
    email: "lumedalauvigne@gmail.com",
};


export default function Contact() {
  // Updated form submission handler to open mail client with mailto link
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Get form values
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const subject = formData.get('subject')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    // Construct the email body
    const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    // Encode subject and body for the mailto link
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(emailBody);

    // Construct the mailto link
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;

    // Open the default email client
    window.location.href = mailtoLink;

    // Optional: You might want to reset the form after opening the mail client
    // form.reset();
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        {/* Using BlurText for consistency, adjust as needed */}
        <BlurText
          text="Get In Touch"
          delay={50}
          animateBy="letters"
          direction="top"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
        />
      </div>

      {/* Contact Content Container */}
      <div className="w-full max-w-md md:max-w-3xl lg:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Information Section */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Information</h2>
          {contactInfo.email && (
            <div className="flex items-center text-white/80">
              {/* You can add an icon here, e.g., a mail icon SVG or Image */}
              <span className="mr-2 text-cyan-500">📧</span> {/* Example icon */}
              <a href={`mailto:${contactInfo.email}`} className="hover:underline text-base sm:text-lg">{contactInfo.email}</a>
            </div>
          )}
          {/* Add phone and location here if included in contactInfo */}
          {/*
          {contactInfo.phone && (
            <div className="flex items-center text-white/80">
              <span className="mr-2 text-cyan-500">📞</span>
              <a href={`tel:${contactInfo.phone}`} className="hover:underline text-base sm:text-lg">{contactInfo.phone}</a>
            </div>
          )}
          {contactInfo.location && (
            <div className="flex items-center text-white/80">
              <span className="mr-2 text-cyan-500">📍</span>
              <span className="text-base sm:text-lg">{contactInfo.location}</span>
            </div>
          )}
          */}

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Connect with Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <Image
                    src={link.iconPath} // Use the icon path
                    alt={`${link.platform} icon`}
                    width={30} // Adjust size as needed
                    height={30} // Adjust size as needed
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain" // Responsive sizing
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-[#1a1b1c] border border-white/[.15] rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-[#1a1b1c] border border-white/[.15] rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 bg-[#1a1b1c] border border-white/[.15] rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 bg-[#1a1b1c] border border-white/[.15] rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-cyan-600 text-white font-bold rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

      <div className="absolute top-0 left-0 w-full h-full z-[-5] opacity-15">
      <Squares 
        speed={0.5} 
        squareSize={50} // Adjust size as needed
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='#fff'
        hoverFillColor='#222'
        />
      </div>

      {/* Optional: Add a footer here if this page doesn't use the global layout footer */}
       {/* <footer className="mt-16 text-center text-white/50 text-sm">
         <p>&copy; {new Date().getFullYear()} Lauvigne Lumeda. All rights reserved.</p>
       </footer> */}
    </main>
  );
}
