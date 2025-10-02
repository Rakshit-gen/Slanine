"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Mail } from 'lucide-react';
import Particles from './ui/particles';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How do I get started?",
    answer: "Simply create an account and follow our easy setup guide."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial with full access to all features."
  },
  {
    question: "How can I cancel my subscription?",
    answer: "You can cancel anytime from your account settings page."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-transparent py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center rounded-full">
    <div className="max-w-4xl w-full">
      <h2 className="text-center text-4xl font-bold text-black dark:text-white mb-12">FAQ Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-left transform transition-all duration-500 hover:scale-105">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">FAQ Section</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Find answers to commonly asked questions about our services and features. 
            We're here to help you get the most out of our platform.
          </p>
          <div className="border-t pt-6">
            <p className="font-bold text-gray-700 dark:text-gray-200 mb-2">
              <span className='flex flex-row'>
                <Mail className='mr-1' />
                Got any questions?
              </span>
            </p>
            <a 
              href="mailto:sisodiarakshit456@gmail.com" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors duration-300"
            >
              Contact me
            </a>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="space-y-4">
          {faqs.map((faq: FAQ, index: number) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-500 transform hover:scale-105"
            >
              <button
                className="w-full px-6 pt-6 pb-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
                type="button"
              >
                <span className="font-medium text-gray-900 dark:text-gray-200">{faq.question}</span>
                {openIndex === index ? 
                  <ChevronDown className="text-gray-500 dark:text-gray-300 transition-transform duration-300 transform rotate-180" /> : 
                  <ChevronRight className="text-gray-500 dark:text-gray-300 transition-transform duration-300 transform rotate-0" />
                }
              </button>
  
              <div 
                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[70px] opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ overflow: 'hidden', transitionProperty: 'max-height, opacity' }}
              >
                <div className="px-6 pb-4 pt-1 bg-gray-50 dark:bg-gray-700">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Particles
        className="absolute inset-0 h-full object-cover"
        quantity={300}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <Particles
        className="absolute inset-0 h-full"
        quantity={300}
        ease={80}
        color={"#000000"}
        refresh
      />
  </div>
  
   
  );
};

export default FAQSection;
