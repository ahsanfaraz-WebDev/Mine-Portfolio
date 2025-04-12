const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Projects",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Journey",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 7, suffix: "+", label: "Project Build" },
  { value: 12, suffix: "+", label: "Technologies Mastered" },
  { value: 1, suffix: "+", label: "Certificate Earned" },
  { value: 1, suffix: "+", label: "Academic Achievements" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];
const expCards = [
  {
    review: "Ahsan’s work on ElevateX demonstrates his ability to build scalable, enterprise-ready applications with modern technologies, delivering a seamless user experience.",
    reviewer: "Dr. Khubaib Amjad",
    reviewerTitle: "Professor of Software Engineering, FAST NUCES",
    logoPath: "/images/logo1.png", // Unchanged
    title: "ElevateX: Startup Directory Platform",
    date: "Feb 2025",
    responsibilities: [
      "Designed a full-stack platform using Next.js 15, Sanity, and Tailwind CSS to showcase startup profiles.",
      "Utilized Next.js features like Server/Client Components, dynamic routing, and data-fetching methods (SSR, SSG, ISR, PPR).",
      "Integrated Sanity for content management and NextAuth for secure authentication, enhancing SEO with Next.js Metadata.",
    ],
  },
  {
    review: "Ahsan’s Forever E-Commerce project showcases his full-stack development skills, creating a responsive and user-friendly platform for online shopping.",
    reviewer: "Dawood Hussain",
    reviewerTitle: "Classmate, FAST NUCES",
    logoPath: "/images/logo2.png", // Unchanged
    title: "Forever E-Commerce Website",
    date: "Dec 2024",
    responsibilities: [
      "Developed a MERN stack e-commerce platform with React, Node.js, Express, and MongoDB.",
      "Implemented features like user authentication, product search, cart management, and order tracking.",
      "Focused on creating a visually appealing design and responsive layout for an enhanced user experience.",
    ],
  },
  {
    review: "Ahsan’s Movie Recommendation System highlights his ability to build functional backend systems with a focus on user engagement and seamless API integration.",
    reviewer: "Ms. Laiba Imran",
    reviewerTitle: "Professor of Data Structures, FAST NUCES",
    logoPath: "/images/logo3.png", // Unchanged
    title: "Movie Recommendation System",
    date: "Mar 2024",
    responsibilities: [
      "Built a recommendation system using Node.js and MongoDB to suggest movies based on user preferences.",
      "Integrated MongoDB to manage user data, movies, and recommendation history, with API testing via Postman.",
      "Designed the application for a seamless and engaging user experience.",
    ],
  },
];
const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Started My Software Engineering Journey",
    mentions: "Aug 2022",
    review:
      "Began my BSc in Software Engineering at FAST NUCES, diving into programming fundamentals and software development. This marked the start of my journey as a developer.",
  },
  {
    name: "Completed My First Project",
    mentions: "Mar 2024",
    review:
      "Developed the Movie Recommendation System, my first full-stack project, using Node.js and MongoDB. This project taught me the basics of backend development and API integration.",
  },
  {
    name: "Earned a Web Development Certification",
    mentions: "2024",
    review:
      "Completed The Complete Web Development Bootcamp 2024 on Udemy, enhancing my skills in HTML, CSS, JavaScript, React.js, and other essential web development tools.",
  },
  {
    name: "Built a MERN Stack E-Commerce Platform",
    mentions: "Dec 2024",
    review:
      "Created the Forever E-Commerce Website using the MERN stack (React, Node.js, Express, MongoDB). This project helped me master full-stack development and user authentication.",
  },
  {
    name: "Developed ElevateX for Startups",
    mentions: "Feb 2025",
    review:
      "Built ElevateX, a startup directory platform, using Next.js 15, Sanity, and Tailwind CSS. This project advanced my skills in modern frameworks and scalable architecture.",
  },
  {
    name: "Achieved Academic Excellence",
    mentions: "Aug 2022",
    review:
      "Secured 3rd position in the Sargodha Board Intermediate Examination, scoring 1055/1100. This achievement highlighted my dedication and strong academic foundation.",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/ahsan_faraz.17/?next=%2F", // Replace with your Instagram URL
  },
  {
    name: "fb",
    imgPath: "/images/github.png",
    url: "https://github.com/ahsanfaraz-WebDev", // Replace with your Facebook URL
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://www.x.com/your_x_username", // Replace with your X URL
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/ahsan-faraz-34138b319/", // Replace with your LinkedIn URL
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
