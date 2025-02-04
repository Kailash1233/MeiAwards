import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: 'What Is The Mei International Film Festival?',
      answer: 'The Mei International Film Festival is a celebration of cinematic excellence, providing a platform for filmmakers worldwide to showcase their creative vision.'
    },
    {
      id: 2,
      question: 'How Can I Submit My Film To The Festival?',
      answer: 'You can submit your film through our online submission platform. Click the "SUBMIT NOW" button in the navigation bar to start the process.'
    },
    {
      id: 3,
      question: 'What Are The Submission Categories?',
      answer: 'We accept submissions in various categories including Feature Films, Short Films, Documentaries, and Animation. Each category may have specific requirements, so please refer to our submission guidelines for more details.'
    },
    {
      id: 4,
      question: 'What Is The Eligibility Criteria For Submitting A Film?',
      answer: 'Films must be completed within the last two years and must not have been previously submitted to our festival. Please check our complete eligibility criteria for detailed requirements.'
    },
    {
      id: 5,
      question: 'What Are The Awards And Prizes?',
      answer: 'We offer various awards across different categories, including Best Feature Film, Best Documentary, Best Short Film, and special jury prizes.'
    }
  ];

  useEffect(() => {
    // Animate items up one by one
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev.length < faqItems.length) {
          return [...prev, prev.length];
        }
        clearInterval(timer);
        return prev;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h3 className="text-fuchsia-600 font-semibold mb-2">FAQ</h3>
        <h2 className="text-4xl font-bold mb-12 text-white">
          Frequently Asked
          <br />
          Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`transform transition-all duration-500 ${
                visibleItems.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className={`font-medium ${
                    activeIndex === index ? 'text-fuchsia-600' : 'text-white'
                  }`}>
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`transform transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180 text-fuchsia-600' : ''
                    }`}
                    size={20}
                  />
                </div>
                {activeIndex === index && (
                  <div className="mt-4 text-gray-300 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;