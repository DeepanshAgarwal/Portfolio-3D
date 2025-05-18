const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    // {
    //     name: "Testimonials",
    //     link: "#testimonials",
    // },
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
    { value: 3, suffix: "+", label: "Years of Coding & Learning" },
    { value: 12, suffix: "+", label: "Projects Built" },
    { value: 150, suffix: "+", label: "LeetCode Problems Solved" },
    { value: 10, suffix: "+", label: "Technologies Used Across Projects" },
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
        title: "Clean & Scalable Code",
        desc: "Building applications with clean architecture and reusable components that scale smoothly.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Problem-Solving Mindset",
        desc: "Approaching challenges with a logical, structured mindset—especially through DSA and real-world projects.",
    },
    {
        imgPath: "/images/time.png",
        title: "Consistent & Curious",
        desc: "Always exploring new tools and tech—learning every day, coding every week.",
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
        name: "Frontend Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Java DSA",
        modelPath: "/models/java-transformed.glb",
        scale: 1.3,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Version Control",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Actively building a strong foundation in Java and DSA by consistently solving problems on LeetCode. Each challenge helps sharpen my logic, improve speed, and push me one step closer to becoming a more efficient problem solver.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: " DSA Problem Solver – LeetCode Practice",
        date: "May 2024 - Present",
        responsibilities: [
            "Solved 120+ LeetCode problems in Java, focusing on algorithms and data structures.",
            "Continuously improving problem-solving skills and efficiency through regular practice.",
            "Currently deepening understanding of Java DSA since May 2024, applying it to solve increasingly complex problems.",
            "Actively participate in contests to enhance problem-solving speed and logic.",
        ],
    },
    {
        review: "Exploring the MERN stack through real-world projects to deepen my understanding of full-stack development. Every project helps me write cleaner code, design better UIs, and build more complete, scalable applications.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Full Stack Developer – Personal Projects",
        date: "June 2023 - Present",
        responsibilities: [
            "Built and deployed full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js).",
            "Developed features like user authentication, CRUD operations, and admin dashboards.",
            "Designed responsive UI with Tailwind CSS and ensured smooth user experience.",
            "Deployed projects using Vercel and MongoDB Atlas for production-ready applications.",
        ],
    },
    {
        review: "Built my personal portfolio as a creative playground to apply my web dev skills — and experimented with 3D elements and animations for the first time, pushing myself beyond traditional UI design.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "Portfolio Developer – Deepansh Agarwal",
        date: "April 2025",
        responsibilities: [
            "Developed a professional portfolio website using React and deployed on Vercel.",
            "Integrated 3D elements with Three.js and smooth animations using GSAP.",
            "Designed with Tailwind CSS for a responsive, user-friendly experience.",
            "Focused on clean UI/UX for seamless navigation.",
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
        name: "Esther Howard",
        mentions: "@estherhoward",
        review: "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review: "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review: "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review: "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review: "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "github",
        imgPath: "/images/github.png",
        link: "https://github.com/DeepanshAgarwal",
    },
    {
        name: "leetcode",
        imgPath: "/images/leetcode.png",
        link: "https://leetcode.com/u/Deepansh_Agarwal/",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        link: "https://www.linkedin.com/in/deepansh-agarwal/",
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
