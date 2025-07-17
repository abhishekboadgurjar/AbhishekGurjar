// Navigation links
export interface NavLink {
  title: string;
  sectionId: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { title: "Home", sectionId: "home", path: "/" },
  { title: "About", sectionId: "about", path: "/about" },
  { title: "Skills", sectionId: "skills", path: "/skills" },
  { title: "Projects", sectionId: "projects", path: "/projects" },
  { title: "Contact", sectionId: "contact", path: "/contact" },
];

// Projects data
export const projects = [
  {
    title: "DocCare - Doctor Appointment Booking System",
    description: "A full-stack doctor appointment booking system with role-based dashboards and secure payment integration.",
    technologies: ["MERN Stack", "Redux Toolkit", "Tailwind CSS", "JWT", "Razorpay", "Stripe"],
    image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/abhishekboadgurjar/DocCare",
    demo: "https://doccare-website.vercel.app/",
    featured: true,
  },
  {
    title: "Abhishek Blog",
    description: "A full-stack blogging platform with post CRUD operations, likes, comments, and user roles.",
    technologies: ["MERN Stack", "Bootstrap", "JWT", "bcrypt"],
    image: "https://images.pexels.com/photos/6956018/pexels-photo-6956018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/abhishekboadgurjar/Abhishek-Blog",
    demo: "https://abhishek-blog.onrender.com/",
    featured: true,
  },
  {
    title: "MERN Ecommerce",
    description: "A seamless shopping experience with product management, user authentication, shopping cart, and admin features.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Material-UI", "JWT"],
    image: "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/abhishekboadgurjar/MERN-Ecommerce",
    demo: "https://ecommerce-gold-two-99.vercel.app/",
    featured: false,
  },
  {
    title: "MovieApp",
    description: "A React Native application that fetches and displays movie data using the OMDb API. Includes search and detailed views.",
    technologies: ["React", "React Native", "Axios", "OMDb API"],
    image: "https://images.pexels.com/photos/7991227/pexels-photo-7991227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/abhishekboadgurjar/MovieApp",
    demo: "",
    featured: false,
  },
  {
    title: "AI Code Review",
    description: "A web and mobile app using Gemini API to assist developers in reviewing code with AI insights and suggestions.",
    technologies: ["React", "Node.js", "Express", "React Native", "AI", "Gemini API"],
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/abhishekboadgurjar/Ai-Code-Review",
    demo: "https://ai-code-review-3sh7.vercel.app/",
    featured: false,
  },
  {
    title: "Chit-Chat",
    description: "A real-time chat app built with MERN Stack and Socket.io, featuring modern UI with Daisy UI.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "DaisyUI"],
    image: "https://images.pexels.com/photos/3394656/pexels-photo-3394656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/abhishekboadgurjar/Chit-Chat",
    demo: "",
    featured: false,
  },
  {
    title: "MERN Todo",
    description: "A simple CRUD Todo application built with the MERN stack and styled with Tailwind CSS.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/abhishekboadgurjar/MERN-Todo",
    demo: "",
    featured: false,
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website showcasing my skills, projects, and achievements as a MERN developer.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/abhishekboadgurjar/Portfolio",
    demo: "https://abhishekboadgurjar.vercel.app/",
    featured: true,
  },
  {
    title: "Blitz",
    description: "A React website for a 3-day SEO webinar, built with Tailwind CSS and deployed on Vercel using Vite.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    image: "https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/abhishekboadgurjar/Blitz",
    demo: "https://blitz-bice-gamma.vercel.app/",
    featured: false,
  },
];

// Skills data
export const skills = [
  {
    category: "Programming Languages",
    technologies: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "C++", level: 80 },
      { name: "C", level: 75 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Frontend Development",
    technologies: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux", level: 85 },
      { name: "Context API", level: 90 },
    ],
  },
  {
    category: "Backend & Database",
    technologies: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "RESTful APIs", level: 90 },
    ],
  },
  {
    category: "Tools & DevOps",
    technologies: [
      { name: "Git & GitHub", level: 95 },
      { name: "Vercel", level: 90 },
      { name: "Netlify", level: 85 },
      { name: "Firebase Hosting", level: 85 },
      { name: "Render", level: 80 },
      { name: "Postman", level: 90 },
    ],
  },
];

// About me data
export const aboutMe = {
  description: `I'm a passionate Full Stack MERN Developer skilled in building scalable, high-performance web applications. Proficient in creating responsive interfaces and secure RESTful APIs using MongoDB, Express.js, React.js, and Node.js. Dedicated to delivering efficient, user-friendly solutions that drive business growth.`,
  experience: [
{
    "position": "Frontend Developer Intern",
    "company": "Baron Capitale",
    "period": "June 2025 - Present",
    "description": "Developing and maintaining cross-platform mobile and web applications using React Native, React.js, and Next.js. Collaborating with UI/UX designers and backend developers to build seamless, high-performance experiences. Focused on optimizing performance, ensuring platform-specific compliance across Android, iOS, and web."
  },
  {
    "position": "Frontend Developer Intern",
    "company": "Quest Digiflex",
    "period": "February 2025 - May 2025",
    "description": "Built responsive and reusable UI components using React.js and Next.js, improving maintainability by 30%. Implemented state management using Redux and Context API, reducing data load time by 40%. Enhanced performance via lazy loading and code splitting techniques."
  },
    {
      position: "Backend Developer Intern",
      company: "Tastezy LLP",
      period: "October 2024 - January 2025",
      description: "Developed RESTful APIs using Node.js and Express, resulting in a 25% improvement in response times. Integrated MongoDB for efficient data storage and retrieval, optimizing database queries for faster access. Implemented JWT-based authentication system, enhancing application security and user session management.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Samrat Ashok Technological Institute (SATI)",
      period: "2021 - 2025",
    },
    {
      degree: "Higher Secondary Education (PCM)",
      institution: "Kakka International School",
      period: "2007 - 2021",
    },
  ],
};

// Contact information
export const contactInfo = {
  email: "abhishekboadgurjar@gmail.com",
  phone: "+91 8959727809",
  location: "Bangalore, Karnataka, India",
  social: {
    github: "https://github.com/abhishekboadgurjar",
    linkedin: "https://www.linkedin.com/in/abhishekboadgurjar",
    twitter: "https://x.com/abhishekbgurjar",
    instagram: "https://www.instagram.com/abhishekboadgurjar/",
  },
};
