import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQPage = () => {
  const faqs = [
    {
      question: "What is That Sky Mod?",
      answer: "That Sky Mod is an all-in-one modification menu for Sky: Children of the Light, offering enhanced gameplay features, customization options, and quality-of-life improvements."
    },
    {
      question: "Is it safe to use?",
      answer: "While I strive to make the mod as safe as possible, any third-party modification carries some risk. Use at your own discretion and be aware that it may violate the game's terms of service."
    },
    {
      question: "How do I install the mod?",
      answer: "Download the installer from the main page, run it, and click 'Install'. If a folder selection dialog appears, you need to select the root of the games folder."
    },
    {
      question: "Do I need to pay for the mod?",
      answer: "No, That Sky Mod is completely free and. However, if you'd like to support development, you can contribute to the developer via Crypto or Discord Nitro."
    }
  ];

  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openItems.has(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openItems.has(index) ? 'py-4' : 'py-0 h-0'
                }`}
              >
                <p className={`text-gray-300 transition-opacity duration-200 ${
                  openItems.has(index) ? 'opacity-100' : 'opacity-0'
                }`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;