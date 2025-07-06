'use client';

import React, { useState } from 'react';

// --- Updated Data Structure with Answers ---
// Each item is now an object with a question and an answer.
const faqItems = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission."
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom."
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required."
  },
  {
    question: "What are the in-person session options?",
    answer: "Tue & Thu, 10 AM–6 PM in 1287 Maplewood Drive, Los Angeles, CA 90026"
  },
  {
    question: "What are the Virtual session options?",
    answer: " Mon, Wed & Fri, 1 PM–5 PM PM via Zoom"
  },
 
];

// --- Main FAQ Section Component ---
const FaqSection: React.FC = () => {
  // State to keep track of the currently open FAQ item index.
  // 'null' means no item is open.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle an FAQ item
  const handleToggle = (index: number) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white font-serif py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-center text-5xl md:text-6xl text-[#27546F] font-normal mb-16 md:mb-20">
          Frequently Asked Questions
        </h1>

        <div>
          <h2 className="text-4xl text-[#58798C] font-normal mb-10">
            Therapy
          </h2>
          
          <div className="border-t border-[#58798C]/30">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-[#58798C]/30">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center text-left py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58798C]/50"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <p className="text-xl md:text-2xl text-[#58798C] font-normal">
                    {item.question}
                  </p>
                  
                  {/* Icon with Rotation */}
                  <div className="flex-shrink-0 ml-4">
                     <svg 
                        width="28" 
                        height="28" 
                        viewBox="0 0 28 28" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`transform transition-transform duration-500 ease-in-out text-[#58798C] ${openIndex === index ? 'rotate-90' : ''}`}
                        aria-hidden="true"
                     >
                        <circle cx="14" cy="14" r="13.5" stroke="currentColor" strokeOpacity="0.8"/>
                        <path d="M12 19L17 14L12 9" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  </div>
                </button>
                
                {/* Answer Panel with Slide Animation */}
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-max-height duration-700 ease-in-out`}
                  style={{ maxHeight: openIndex === index ? '300px' : '0px' }}
                >
                  <div className="pb-6 pr-12 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;