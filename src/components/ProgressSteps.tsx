import React from 'react';
import { Check, Clock } from 'lucide-react';

const steps = [
  { label: 'Physics', topics: '25 chapters', deadline: 'Dec 2024' },
  { label: 'Chemistry', topics: '28 chapters', deadline: 'Jan 2025' },
  { label: 'Biology', topics: '33 chapters', deadline: 'Mar 2025' },
  { label: 'Revision', topics: 'All subjects', deadline: 'Apr 2025' },
];

export function ProgressSteps() {
  const currentStep = 0; // You can make this dynamic based on your progress

  return (
    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Your Progress Path</h2>
      <div className="relative">
        {steps.map((step, index) => (
          <div key={step.label} className="flex mb-8 last:mb-0">
            <div className="relative">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center
                ${index <= currentStep ? 'bg-green-500' : 'bg-gray-600'}
              `}>
                {index < currentStep ? (
                  <Check size={16} />
                ) : (
                  <Clock size={16} />
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`
                  absolute top-8 left-4 w-0.5 h-12
                  ${index < currentStep ? 'bg-green-500' : 'bg-gray-600'}
                `} />
              )}
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">{step.label}</h3>
              <p className="text-purple-200">{step.topics}</p>
              <p className="text-sm text-purple-300">Target: {step.deadline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}