import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import {Link } from 'react-router-dom' ;



const faqData = [
  {
    question: 'How will I get admission confirmation?',
    answer: 'Upon successful review of your application, the university will typically send you an official admission offer through email or mail.',
  },
  {
    question: 'Are there English language proficiency requirements?',
    answer: 'Yes, many universities have English language proficiency requirements for international applicants.',
  },
  {
    question: 'What are the admission requirements?',
    answer: 'Admission requirements typically include a completed application form and submission of academic transcripts, standardized test scores, and letters of recommendation.',
  },
  {
    question: 'How do I apply to the university?',
    answer: 'To apply to the university, visit the official admissions page on the university website. Follow the application instructions, complete the online application form, and submit the required documents before the specified deadline.',
  },
];

function Faq() {
  // const history = useHistory();

  // const handleContactClick = () => {
    
  //   history.push('/contact');

  const [faqOpen, setFaqOpen] = useState(Array(faqData.length).fill(false));

  const toggleFaq = (index) => {
    setFaqOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section className="mx-auto max-w-7xl mt-12 px-4 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-3xl font-bold h-24 leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions...
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`cursor-pointer rounded-md border border-gray-400 transition-all duration-300 ${
                faqOpen[i] ? 'shadow-md' : ''
              }`}
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => toggleFaq(i)}
              >
                <span className="flex text-start text-lg font-semibold text-black">
                  {item.question}
                </span>
                {faqOpen[i] ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
              </button>
              {faqOpen[i] && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-base mt-6 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <Link to="/contact" className="font-semibold text-black hover:underline">
            Contact our support
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Faq;