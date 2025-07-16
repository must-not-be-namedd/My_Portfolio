import React, { useState, useEffect } from 'react';
import { TypingAnimation } from './typing-animation';

interface TerminalProps {
  className?: string;
}

export function Terminal({ className = "" }: TerminalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const steps = [
    "$ whoami",
    "khushi-nataraj",
    "$ cat profile.txt",
    "Computer Science Engineering Student",
    "$ ls skills/",
    "python/ javascript/ react/ tensorflow/ mern-stack/",
    "$ ./start_portfolio.sh",
    "Loading portfolio... ✓",
    "Welcome to my digital space! 🚀"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleStepComplete = () => {
    if (currentStep < steps.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 500);
    }
  };

  return (
    <div className={`bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm relative overflow-hidden ${className}`}>
      {/* Terminal background with colored lines */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className={`h-px mb-4 animate-pulse ${
              i % 4 === 0 ? 'bg-cyan-400' :
              i % 4 === 1 ? 'bg-purple-400' :
              i % 4 === 2 ? 'bg-green-400' :
              'bg-yellow-400'
            }`}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
      
      <div className="flex items-center gap-2 mb-4 relative z-10">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-xs ml-2">terminal</span>
      </div>
      
      <div className="space-y-2 relative z-10">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {index <= currentStep && (
              <>
                {step.startsWith('$') ? (
                  <span className="text-blue-400">{step.substring(0, 1)}</span>
                ) : null}
                <TypingAnimation
                  text={step.startsWith('$') ? step.substring(1) : step}
                  speed={50}
                  className={step.startsWith('$') ? "text-white" : "text-green-400"}
                  onComplete={index === currentStep ? handleStepComplete : undefined}
                />
              </>
            )}
          </div>
        ))}
        
        {currentStep === steps.length - 1 && (
          <div className="flex items-center">
            <span className="text-blue-400">$ </span>
            <span className="text-white">explore_portfolio</span>
            {showCursor && <span className="text-green-400 animate-pulse ml-1">|</span>}
          </div>
        )}
      </div>
    </div>
  );
}