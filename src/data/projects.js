export const projects = [
  {
    id: "arraytical",
    title: "Arraytical",
    description: "A purpose-driven platform to improve human lives by creating software that promotes better habits and healthy lives. Currently in active development.",
    longDescription: `Arraytical is my flagship project - a comprehensive platform designed from the ground up to help people build and maintain healthy habits.

Unlike traditional habit trackers that treat habits as simple checkboxes, Arraytical understands the psychology behind behavior change. It adapts to your rhythm, celebrates your progress (not just perfection), and connects you with a community of like-minded individuals.

The platform is built with scalability in mind, using a modern tech stack that can grow from prototype to millions of users.`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    github: "https://github.com",
    live: "https://arraytical.com",
    featured: true,
    features: [
      "Adaptive habit tracking that learns your patterns",
      "Community features for accountability and support",
      "Detailed analytics and progress visualization",
      "Smart reminders based on your schedule",
      "Gamification elements to keep you motivated",
    ],
    challenges: [
      "Designing a database schema that scales with user growth",
      "Building real-time sync across multiple devices",
      "Creating an intuitive UX that doesn't overwhelm new users",
      "Implementing efficient notification systems",
    ],
    learnings: [
      "User research is invaluable - build what people need, not what you think they need",
      "Start with a simple MVP and iterate based on feedback",
      "Performance optimization should be considered from the start",
      "Documentation saves future-you countless hours",
    ],
  },
  {
    id: "habit-tracker-pro",
    title: "Habit Tracker Pro",
    description: "A minimal habit tracking application with streak counting, analytics, and daily reminders to help users build positive routines.",
    longDescription: `Habit Tracker Pro was my first serious attempt at building a mobile application. It's a React Native app that focuses on simplicity and effectiveness.

The app was born from my frustration with overly complex habit trackers. I wanted something that would take less than 30 seconds to use daily, with just enough features to be useful without being overwhelming.

This project taught me a lot about mobile development, state management, and the importance of offline-first architecture.`,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com",
    featured: false,
    features: [
      "Simple one-tap habit completion",
      "Streak counting with visual calendar",
      "Push notifications for reminders",
      "Weekly and monthly analytics",
      "Offline support with cloud sync",
    ],
    challenges: [
      "Managing state across online/offline modes",
      "Handling timezone differences for streaks",
      "Optimizing battery usage for background notifications",
    ],
    learnings: [
      "Mobile users have different expectations than web users",
      "Offline-first is harder than it sounds but worth it",
      "Redux can be overkill for simple apps",
    ],
  },
  {
    id: "devnotes",
    title: "DevNotes",
    description: "A markdown-based note-taking app designed specifically for developers. Supports code snippets, syntax highlighting, and cloud sync.",
    longDescription: `DevNotes is a note-taking application built specifically for developers who think in markdown and code.

I built this because I was tired of switching between different apps for notes, code snippets, and documentation. DevNotes brings everything together in one clean interface.

The app features real-time markdown preview, syntax highlighting for 50+ programming languages, and seamless cloud synchronization.`,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    tags: ["Next.js", "Tailwind", "MongoDB"],
    github: "https://github.com",
    live: "https://devnotes.app",
    featured: false,
    features: [
      "Real-time markdown preview",
      "Syntax highlighting for 50+ languages",
      "Code snippet library with tags",
      "Full-text search across all notes",
      "Keyboard shortcuts for power users",
    ],
    challenges: [
      "Implementing efficient full-text search",
      "Building a responsive split-pane editor",
      "Handling large documents without performance issues",
    ],
    learnings: [
      "Text editors are surprisingly complex to build well",
      "Keyboard accessibility matters a lot to developers",
      "Sometimes the best feature is what you leave out",
    ],
  },
  {
    id: "portfolio-v2",
    title: "Portfolio v2",
    description: "My previous portfolio website built with vanilla JavaScript and CSS. A minimalist approach to showcase projects and skills.",
    longDescription: `Before the current portfolio you're viewing, there was Portfolio v2 - a minimalist website built entirely with vanilla JavaScript and CSS.

This project was an exercise in doing more with less. No frameworks, no build tools, just pure HTML, CSS, and JavaScript. It taught me to appreciate the fundamentals and understand what frameworks actually do under the hood.

The site featured smooth animations, a dark mode toggle, and responsive design - all without a single npm package.`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com",
    live: "https://v2.akshatgupta.dev",
    featured: false,
    features: [
      "Pure CSS animations and transitions",
      "Dark/light mode with system preference detection",
      "Intersection Observer for scroll animations",
      "Zero dependencies - no npm packages",
      "Perfect Lighthouse scores",
    ],
    challenges: [
      "Managing state without a framework",
      "Building reusable components with vanilla JS",
      "Ensuring cross-browser compatibility",
    ],
    learnings: [
      "Frameworks are helpful but not always necessary",
      "Understanding the fundamentals makes you better at frameworks",
      "Constraints can breed creativity",
    ],
  },
  {
    id: "api-gateway",
    title: "API Gateway",
    description: "A lightweight API gateway solution for managing microservices. Features rate limiting, authentication, and request logging.",
    longDescription: `API Gateway is a lightweight, configurable gateway for managing microservices communication. It sits between your clients and your services, handling cross-cutting concerns.

I built this after struggling with existing solutions that were either too complex or too expensive for small projects. This gateway is designed to be simple to deploy and configure while still providing essential features.

The project is containerized with Docker and can be deployed to any cloud platform with minimal configuration.`,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tags: ["Node.js", "Express", "Redis", "Docker"],
    github: "https://github.com",
    featured: false,
    features: [
      "Configurable rate limiting per route",
      "JWT authentication and validation",
      "Request/response logging with rotation",
      "Health checks and circuit breakers",
      "Docker-ready with compose files",
    ],
    challenges: [
      "Ensuring minimal latency overhead",
      "Building a flexible configuration system",
      "Handling high concurrency with Redis",
    ],
    learnings: [
      "Infrastructure code needs excellent documentation",
      "Performance testing is crucial for gateway services",
      "Simple solutions often outperform complex ones",
    ],
  },
  {
    id: "cli-task-manager",
    title: "CLI Task Manager",
    description: "A terminal-based task management tool for developers who prefer staying in the command line. Simple, fast, and efficient.",
    longDescription: `CLI Task Manager is a command-line tool for developers who live in the terminal. It's built with Python and provides a fast, keyboard-driven interface for managing tasks.

The tool integrates with Git to automatically create branches for tasks, syncs with popular project management tools, and supports custom workflows through a simple plugin system.

I use this daily and it has significantly improved my productivity by keeping me in the terminal where I'm most comfortable.`,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop",
    tags: ["Python", "Click", "SQLite"],
    github: "https://github.com",
    featured: false,
    features: [
      "Lightning-fast task creation and completion",
      "Git integration for automatic branch creation",
      "Customizable keyboard shortcuts",
      "Plugin system for custom workflows",
      "Export to JSON, CSV, or markdown",
    ],
    challenges: [
      "Building an intuitive CLI interface",
      "Handling concurrent access to SQLite",
      "Creating a flexible plugin architecture",
    ],
    learnings: [
      "CLI tools have their own UX considerations",
      "Good defaults are more important than options",
      "Documentation with examples is essential for CLI tools",
    ],
  },
];

export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};
