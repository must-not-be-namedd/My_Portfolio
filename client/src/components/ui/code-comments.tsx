import React from 'react';
import { motion } from 'framer-motion';
import { TypingAnimation } from './typing-animation';

interface CodeCommentsProps {
  achievements: Array<{
    id: number;
    title: string;
    description: string;
    year: string;
    category: string;
    color: string;
  }>;
}

export function CodeComments({ achievements }: CodeCommentsProps) {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-xs ml-2">achievements.js</span>
      </div>
      
      <div className="space-y-4">
        <div className="text-green-400">
          <TypingAnimation text="// My Academic & Professional Achievements" speed={30} />
        </div>
        
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 1, duration: 0.5 }}
            className="border-l-2 border-gray-700 pl-4 py-2"
          >
            <div className="mb-2">
              <span className="text-gray-500">/* </span>
              <span className={`font-bold ${achievement.color}`}>{achievement.title}</span>
              <span className="text-gray-400"> - {achievement.year}</span>
            </div>
            <div className="text-gray-300 ml-3">
              <span className="text-gray-500">* </span>
              {achievement.description}
            </div>
            <div className="text-gray-500 ml-3 text-xs">
              <span className="text-gray-500">* Category: </span>
              <span className="text-cyan-400">{achievement.category}</span>
            </div>
            <div className="text-gray-500 ml-0 mt-1">
              <span>*/</span>
            </div>
          </motion.div>
        ))}
        
        <div className="mt-6 p-4 bg-gray-800 rounded">
          <div className="text-green-400">
            <TypingAnimation 
              text="// console.log('Achievements unlocked:', achievements.length);" 
              speed={20}
              startDelay={3000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}