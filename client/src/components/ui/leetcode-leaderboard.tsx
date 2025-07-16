import React, { useState, useEffect } from 'react';
import { Trophy, Star, Code, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  experience: number;
  color: string;
  category: string;
}

export function LeetcodeLeaderboard() {
  const [animate, setAnimate] = useState(false);

  const skills: Skill[] = [
    { name: "Python", level: 95, experience: 2840, color: "text-yellow-400", category: "Languages" },
    { name: "JavaScript", level: 90, experience: 2650, color: "text-yellow-300", category: "Languages" },
    { name: "TypeScript", level: 85, experience: 2400, color: "text-blue-400", category: "Languages" },
    { name: "React", level: 92, experience: 2750, color: "text-cyan-400", category: "Frontend" },
    { name: "Node.js", level: 88, experience: 2580, color: "text-green-400", category: "Backend" },
    { name: "TensorFlow", level: 80, experience: 2200, color: "text-orange-400", category: "AI/ML" },
    { name: "MongoDB", level: 85, experience: 2350, color: "text-green-500", category: "Database" },
    { name: "PostgreSQL", level: 82, experience: 2280, color: "text-blue-500", category: "Database" },
    { name: "Git/GitHub", level: 90, experience: 2600, color: "text-purple-400", category: "Tools" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 1: return <Star className="w-5 h-5 text-gray-300" />;
      case 2: return <Star className="w-5 h-5 text-orange-400" />;
      default: return <Code className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-6">
        <Zap className="w-6 h-6 text-purple-400" />
        <h3 className="text-2xl font-bold">Tech Stack Rankings</h3>
        <span className="text-sm text-gray-400">// skills.ranking()</span>
      </div>
      
      <div className="space-y-3 max-w-full overflow-x-auto">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`flex items-center gap-2 sm:gap-4 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-500 min-w-0 ${
              animate ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <span className="text-gray-400 text-sm w-6 sm:w-8 flex-shrink-0">#{index + 1}</span>
              <div className="flex-shrink-0">{getRankIcon(index)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`font-semibold ${skill.color} text-sm sm:text-base`}>{skill.name}</span>
                  <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded flex-shrink-0">
                    {skill.category}
                  </span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      skill.color.includes('yellow') ? 'bg-yellow-400' :
                      skill.color.includes('blue') ? 'bg-blue-400' :
                      skill.color.includes('green') ? 'bg-green-400' :
                      skill.color.includes('orange') ? 'bg-orange-400' :
                      skill.color.includes('purple') ? 'bg-purple-400' :
                      skill.color.includes('cyan') ? 'bg-cyan-400' : 'bg-gray-400'
                    }`}
                    style={{ 
                      width: animate ? `${skill.level}%` : '0%',
                      transitionDelay: `${500 + index * 100}ms`
                    }}
                  />
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs sm:text-sm text-gray-400">{skill.experience} XP</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <div className="flex items-center gap-2 text-green-400 text-sm">
          <Code className="w-4 h-4" />
          <span>// Total Experience: {skills.reduce((acc, skill) => acc + skill.experience, 0).toLocaleString()} XP</span>
        </div>
      </div>
    </div>
  );
}