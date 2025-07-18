// Portfolio Application - Pure JavaScript Implementation

// Global variables
let currentStep = 0;
const typingSpeed = 50;
const techStackData = [
  { name: "Python", level: 95, experience: 2840, color: "text-yellow", category: "Languages", bgColor: "bg-yellow-400" },
  { name: "JavaScript", level: 90, experience: 2650, color: "text-yellow", category: "Languages", bgColor: "bg-yellow-400" },
  { name: "TypeScript", level: 85, experience: 2400, color: "text-blue", category: "Languages", bgColor: "bg-blue-400" },
  { name: "React", level: 92, experience: 2750, color: "text-cyan", category: "Frontend", bgColor: "bg-cyan-400" },
  { name: "Node.js", level: 88, experience: 2580, color: "text-green", category: "Backend", bgColor: "bg-green-400" },
  { name: "TensorFlow", level: 80, experience: 2200, color: "text-orange", category: "AI/ML", bgColor: "bg-orange-400" },
  { name: "MongoDB", level: 85, experience: 2350, color: "text-green", category: "Database", bgColor: "bg-green-400" },
  { name: "PostgreSQL", level: 82, experience: 2280, color: "text-blue", category: "Database", bgColor: "bg-blue-400" },
  { name: "Git/GitHub", level: 90, experience: 2600, color: "text-purple", category: "Tools", bgColor: "bg-purple-400" }
];

const projectsData = [
  {
    id: 1,
    title: "Portable Electronics Management System",
    category: "Full Stack Development",
    description: "A comprehensive rental service for electronics and gadgets with seamless browsing via Mobile WiFi HotSpots for hassle-free tech experience.",
    tech: ["HTML", "CSS", "JavaScript", "SQL", "MongoDB"],
    liveLink: "https://electronics-rental-demo.vercel.app",
    githubLink: "https://github.com/must-not-be-namedd/portable-electronics-management-system",
    icon: "database",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500"
  },
  {
    id: 2,
    title: "Intelligent Traffic Management System",
    category: "AI & Machine Learning",
    description: "AI-powered tool using Python libraries like TensorFlow, leveraging LiDAR technology and real-time environmental sensors.",
    tech: ["Python", "TensorFlow", "LiDAR", "IoT"],
    liveLink: "https://traffic-management-ai.vercel.app",
    githubLink: "https://github.com/must-not-be-namedd/intelligent-traffic-management-system",
    icon: "code",
    gradientFrom: "from-green-500",
    gradientTo: "to-cyan-500"
  },
  {
    id: 3,
    title: "Smart & Enhanced WhatsApp",
    category: "Mobile Development",
    description: "Enhanced WhatsApp with features like meme and image generation, real-time media deletion, meeting scheduler, and anti-ghost features.",
    tech: ["Mobile Development", "AI Integration", "Real-time Features"],
    liveLink: "https://enhanced-whatsapp-demo.vercel.app",
    githubLink: "https://github.com/must-not-be-namedd/smart-enhanced-whatsapp",
    icon: "smartphone",
    gradientFrom: "from-blue-500",
    gradientTo: "to-purple-500"
  },
  {
    id: 4,
    title: "Placement Statistics App",
    category: "Data Analytics",
    description: "Built a customized placement statistics app for college campus to keep track of the most frequently visited companies.",
    tech: ["Data Analytics", "Statistics", "Dashboard"],
    liveLink: "https://my-bms-placement-tracker-khushinataraj-replit.app/",
    githubLink: "https://github.com/must-not-be-namedd/placement-statistics-app",
    icon: "trending-up",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500"
  }
];

const achievementsData = [
  {
    id: 1,
    title: "CGPA: 9.83",
    description: "Grateful to maintain consistent academic performance throughout my engineering program with focus on core CS subjects",
    year: "2021-2025",
    category: "Academic Excellence",
    color: "text-yellow",
    icon: "🎓"
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    description: "Continuously learning DSA with practical implementation experience and problem-solving practice",
    year: "2023",
    category: "Technical Proficiency",
    color: "text-green",
    icon: "🧮"
  },
  {
    id: 3,
    title: "Full Stack Development",
    description: "Learning both frontend and backend technologies with personal project implementations",
    year: "2024",
    category: "Development Skills",
    color: "text-purple",
    icon: "💻"
  },
  {
    id: 4,
    title: "AI/ML Project Implementation",
    description: "Exploring machine learning concepts and building projects using TensorFlow and Python",
    year: "2024",
    category: "Artificial Intelligence",
    color: "text-orange",
    icon: "🤖"
  },
  {
    id: 5,
    title: "Open Source Contributions",
    description: "Contributing to open source projects and sharing code through GitHub repositories",
    year: "2023-2024",
    category: "Community Involvement",
    color: "text-cyan",
    icon: "🌐"
  },
  {
    id: 6,
    title: "Leadership & Team Collaboration",
    description: "Learning leadership skills through student projects and collaborative development experiences",
    year: "2022-2024",
    category: "Soft Skills",
    color: "text-purple",
    icon: "👥"
  }
];

// Utility functions
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function getIcon(iconName) {
  const icons = {
    database: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    smartphone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
    'trending-up': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    folder: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>`,
    play: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    'external-link': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><polyline points="15,3 21,3 21,9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    trophy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><path d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h3a1 1 0 011 1v5a3 3 0 01-3 3h-1l-1 3H8l-1-3H6a3 3 0 01-3-3V5a1 1 0 011-1h3z"></path></svg>`,
    star: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
  };
  return icons[iconName] || icons.code;
}

function getRankIcon(index) {
  if (index === 0) return getIcon('trophy');
  if (index === 1 || index === 2) return getIcon('star');
  return getIcon('code');
}

// Typing animation function
async function typeText(element, text, speed = typingSpeed) {
  element.textContent = '';
  for (let i = 0; i < text.length; i++) {
    element.textContent += text[i];
    await sleep(speed);
  }
}

// Navigation functionality
function initNavigation() {
  const navLogo = document.getElementById('nav-logo');
  const navItems = document.querySelectorAll('.nav-item');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navigation = document.getElementById('navigation');

  // Logo click
  navLogo.addEventListener('click', () => scrollToSection('hero'));

  // Navigation items
  [...navItems, ...mobileNavItems].forEach(item => {
    item.addEventListener('click', () => {
      const section = item.dataset.section;
      scrollToSection(section);
      mobileMenu.classList.remove('active');
    });
  });

  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navigation.classList.add('scrolled');
    } else {
      navigation.classList.remove('scrolled');
    }
  });

  // Hero buttons
  const heroButtons = document.querySelectorAll('.hero-buttons button');
  heroButtons.forEach(button => {
    button.addEventListener('click', () => {
      const section = button.dataset.section;
      scrollToSection(section);
    });
  });
}

// Terminal animation
async function initTerminal() {
  const terminalLines = document.getElementById('terminal-lines');
  const steps = [
    { text: "$ whoami", type: "prompt" },
    { text: "khushi-nataraj", type: "output" },
    { text: "$ cat profile.txt", type: "prompt" },
    { text: "Computer Science Engineering Student", type: "output" },
    { text: "$ ls skills/", type: "prompt" },
    { text: "python/ javascript/ react/ tensorflow/ mern-stack/", type: "output" },
    { text: "$ ./start_portfolio.sh", type: "prompt" },
    { text: "Loading portfolio... ✓", type: "output" },
    { text: "Welcome to my digital space! 🚀", type: "output" }
  ];

  let currentStep = 0;

  async function showNextStep() {
    if (currentStep < steps.length) {
      const step = steps[currentStep];
      const lineDiv = document.createElement('div');
      lineDiv.className = `terminal-line ${step.type}`;
      terminalLines.appendChild(lineDiv);

      await typeText(lineDiv, step.text, 30);
      currentStep++;
      
      setTimeout(showNextStep, 800);
    } else {
      // Add final cursor
      const cursorDiv = document.createElement('div');
      cursorDiv.className = 'terminal-line prompt';
      cursorDiv.innerHTML = '$ explore_portfolio<span class="cursor">|</span>';
      terminalLines.appendChild(cursorDiv);
    }
  }

  // Start terminal animation after a delay
  setTimeout(showNextStep, 1000);
}

// Hero typing animations
async function initHeroAnimations() {
  const heroTyping = document.getElementById('hero-typing');
  const heroSubtitleTyping = document.getElementById('hero-subtitle-typing');

  // Main typing animation
  await typeText(heroTyping, 'cd ~/portfolio && ls -la', 80);
  await sleep(1000);
  
  // Subtitle typing animation
  await typeText(heroSubtitleTyping, 'A passionate Computer Science student building the future', 60);
}

// Skills section
function initSkillsSection() {
  const skillsTyping = document.getElementById('skills-typing');
  const skillsSubtitleTyping = document.getElementById('skills-subtitle-typing');
  const techStackList = document.getElementById('tech-stack-list');
  const totalXp = document.getElementById('total-xp');

  // Typing animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeText(skillsTyping, '// skills.loadTechStack()', 50);
        setTimeout(() => {
          typeText(skillsSubtitleTyping, 'Ranked by proficiency and experience • Updated daily', 40);
        }, 1000);
        
        // Render tech stack
        setTimeout(() => {
          renderTechStack();
        }, 2000);
        
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(document.getElementById('skills'));

  function renderTechStack() {
    techStackList.innerHTML = '';
    let totalExperience = 0;

    techStackData.forEach((tech, index) => {
      totalExperience += tech.experience;
      
      const techItem = document.createElement('div');
      techItem.className = 'tech-item';
      techItem.style.animationDelay = `${index * 100}ms`;
      
      techItem.innerHTML = `
        <div class="tech-rank">#${index + 1}</div>
        <div class="tech-icon">${getRankIcon(index)}</div>
        <div class="tech-info">
          <div class="tech-name ${tech.color}">${tech.name}</div>
          <div class="tech-category">${tech.category}</div>
          <div class="tech-progress">
            <div class="tech-progress-bar ${tech.bgColor}" style="width: 0%"></div>
          </div>
        </div>
        <div class="tech-xp">${tech.experience} XP</div>
      `;
      
      techStackList.appendChild(techItem);
      
      // Animate progress bar
      setTimeout(() => {
        const progressBar = techItem.querySelector('.tech-progress-bar');
        progressBar.style.width = `${tech.level}%`;
      }, 500 + index * 100);
    });

    // Update total XP
    totalXp.textContent = totalExperience.toLocaleString();
  }
}

// Projects section
function initProjectsSection() {
  const projectsTyping = document.getElementById('projects-typing');
  const projectsSubtitleTyping = document.getElementById('projects-subtitle-typing');
  const projectsGrid = document.getElementById('projects-grid');

  // Typing animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeText(projectsTyping, '// projects.showcase()', 50);
        setTimeout(() => {
          typeText(projectsSubtitleTyping, 'Built with passion and modern tech stack', 40);
        }, 1000);
        
        // Render projects
        setTimeout(() => {
          renderProjects();
        }, 2000);
        
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(document.getElementById('projects'));

  function renderProjects() {
    projectsGrid.innerHTML = '';
    
    projectsData.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.style.animationDelay = `${index * 100}ms`;
      
      projectCard.innerHTML = `
        <div class="project-header">
          <div class="project-controls">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
          <div class="project-folder">
            ${getIcon('folder')}
            <span>${project.title.toLowerCase().replace(/\s+/g, '-')}</span>
          </div>
          <div class="project-actions">
            <button class="project-action" onclick="window.open('${project.liveLink}', '_blank')">
              ${getIcon('play')}
            </button>
            <button class="project-action" onclick="window.open('${project.githubLink}', '_blank')">
              ${getIcon('github')}
            </button>
          </div>
        </div>
        <div class="project-breadcrumb">
          <span>📁</span>
          <span>src</span>
          <span>/</span>
          <span class="text-purple">components</span>
          <span>/</span>
          <span class="text-yellow">main.tsx</span>
        </div>
        <div class="project-thumbnail">
          <div class="project-gradient" style="background: linear-gradient(135deg, ${project.gradientFrom.replace('from-', '#')}, ${project.gradientTo.replace('to-', '#')});"></div>
          <div class="project-icon-container">
            <div class="project-icon-wrapper">
              <div class="project-icon" style="background: linear-gradient(135deg, ${project.gradientFrom.replace('from-', '#')}, ${project.gradientTo.replace('to-', '#')});">
                ${getIcon(project.icon)}
              </div>
              <div class="project-status">
                <div class="project-status-dot"></div>
              </div>
              <h3 class="project-title">${project.title}</h3>
              <p class="project-category">${project.category}</p>
            </div>
          </div>
          <div class="project-code">
            <div class="project-code-line">
              <span style="color: #6b7280;">1</span>
              <span style="color: #3b82f6;">export</span>
              <span style="color: #f59e0b;">default</span>
              <span style="color: #ffffff;">function</span>
              <span style="color: #10b981;">${project.title.replace(/\s+/g, '')}()</span>
              <span style="color: #ffffff;">{</span>
            </div>
          </div>
        </div>
        <div class="project-content">
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.tech.map(tech => `<span class="project-tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.liveLink}" target="_blank" class="project-link primary">
              ${getIcon('external-link')}
              Live Demo
            </a>
            <a href="${project.githubLink}" target="_blank" class="project-link secondary">
              ${getIcon('github')}
              Code
            </a>
          </div>
        </div>
      `;
      
      projectsGrid.appendChild(projectCard);
      
      // Add click handler for card
      projectCard.addEventListener('click', (e) => {
        if (!e.target.closest('.project-action') && !e.target.closest('.project-link')) {
          window.open(project.liveLink, '_blank');
        }
      });
    });
  }
}

// Achievements section
function initAchievementsSection() {
  const achievementsTyping = document.getElementById('achievements-typing');
  const achievementsSubtitleTyping = document.getElementById('achievements-subtitle-typing');
  const achievementsGrid = document.getElementById('achievements-grid');

  // Typing animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeText(achievementsTyping, '// achievements.loadMilestones()', 50);
        setTimeout(() => {
          typeText(achievementsSubtitleTyping, 'Key accomplishments that showcase my growth and dedication', 40);
        }, 1000);
        
        // Render achievements
        setTimeout(() => {
          renderAchievements();
        }, 2000);
        
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(document.getElementById('achievements'));

  function renderAchievements() {
    achievementsGrid.innerHTML = '';
    
    achievementsData.forEach((achievement, index) => {
      const achievementCard = document.createElement('div');
      achievementCard.className = 'achievement-card';
      achievementCard.style.animationDelay = `${index * 100}ms`;
      
      achievementCard.innerHTML = `
        <div class="achievement-header">
          <div class="achievement-icon" style="background: linear-gradient(135deg, ${achievement.color.replace('text-', '#')}, ${achievement.color.replace('text-', '#')});">
            ${achievement.icon}
          </div>
          <div class="achievement-meta">
            <h3 class="achievement-title">${achievement.title}</h3>
            <div class="achievement-year">${achievement.year}</div>
          </div>
        </div>
        <p class="achievement-description">${achievement.description}</p>
        <div class="achievement-category">${achievement.category}</div>
      `;
      
      achievementsGrid.appendChild(achievementCard);
    });
  }
}

// Contact form
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    contactForm.reset();
  });
}

// Smooth scrolling for all internal links
function initSmoothScrolling() {
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-section]')) {
      e.preventDefault();
      const section = e.target.getAttribute('data-section');
      scrollToSection(section);
    }
  });
}

// Initialize intersection observer for animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
      }
    });
  });

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTerminal();
  initHeroAnimations();
  initSkillsSection();
  initProjectsSection();
  initAchievementsSection();
  initContactForm();
  initSmoothScrolling();
  initScrollAnimations();
});

// Handle window resize
window.addEventListener('resize', () => {
  // Close mobile menu on resize
  const mobileMenu = document.getElementById('mobile-menu');
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove('active');
  }
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});