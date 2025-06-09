import { Project, TimelineItem, SocialLink, QaSkill } from "@/types";
import { Code, Bug, TestTube } from "lucide-react";

export const projects: Project[] = [
  {
    id: "1",
    title: "Chronly",
    description:
      "As a Frontend Developer, I designed and developed Chronly's landing page with modern UI/UX principles using React and Tailwind. I translated Figma designs into high-performance, responsive components with Vite.",
    image: "/images/projects/chronly.png",
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Figma",
      "Vite",
      "Responsive Design",
      "UI Engineering",
    ],
    link: "https://chronly.ai/",
  },
  {
    id: "2",
    title: "Pinely",
    description:
      "Acting as a QA Engineer and UI/UX Designer for over two years, I contributed to multiple international products at Pinely, conducting exploratory testing, UI validation, and designing user-centered flows in Figma.",
    image: "/images/projects/pinely.png",
    tags: [
      "QA Engineer",
      "Figma",
      "Jira",
      "Cypress",
      "Selenium",
      "Cross-Functional Collaboration",
      "UI Validation",
      "Agile QA",
    ],
    link: "https://www.pinely.eu/",
  },
  {
    id: "3",
    title: "Stream Signage",
    description:
      "Led the development of a robust test automation suite for Stream Signage, integrating automated checks, visual regression testing, and CI workflows to maintain high-quality delivery standards.",
    image: "/images/projects/stream-signage.png",
    tags: [
      "Test Automation",
      "QA Strategy",
      "Automated Testing",
      "Cypress",
      "Selenium",
    ],
    link: "https://streamsignage.com/",
  },
  {
    id: "4",
    title: "2add",
    description:
      "Owned the end-to-end design and frontend development of 2add's platform. Delivered pixel-perfect Figma designs, implemented dynamic interfaces in Next.js, and optimized for performance and usability.",
    image: "/images/projects/2add.png",
    tags: [
      "UX Strategy",
      "Frontend Developer",
      "Figma",
      "Next.js",
      "Tailwind CSS",
      "Component Libraries",
      "Performance Optimization",
      "Mobile First",
    ],
    link: "https://2add.com.br/",
  },
  {
    id: "5",
    title: "Influencia",
    description:
      "Created the entire UX/UI experience for Influencia from research to prototyping. Emphasized accessibility and compliance while delivering aesthetically compelling interfaces tailored to the audience.",
    image: "/images/projects/influencia.png",
    tags: [
      "UX Strategy",
      "User Research",
      "Accessibility",
      "Compliance Testing",
      "UI Prototyping",
      "Accessibility Standards",
      "Design Systems",
    ],
    link: "https://tiagofonseca.net/influencia",
  },
  {
    id: "6",
    title: "Negócio Viral",
    description:
      "Led UX research and interface design for Negócio Viral. Designed inclusive experiences with a focus on usability, clarity, and business goals alignment using Figma.",
    image: "/images/projects/negocio-viral.png",
    tags: [
      "UX Strategy",
      "User Research",
      "Accessibility",
      "Compliance Testing",
      "Inclusive Design",
      "Usability Heuristics",
      "Figma Components",
    ],
    link: "https://www.tiagofonseca.net/negocio-viral",
  },
  {
    id: "7",
    title: "Tiago Fonseca",
    description:
      "Crafted a clean, conversion-optimized interface for Tiago Fonseca’s digital platform. Focused on usability, accessibility, and visual storytelling through modern UI design.",
    image: "/images/projects/tiago-fonseca.png",
    tags: [
      "UX Strategy",
      "User Research",
      "Accessibility",
      "Compliance Testing",
      "Landing Page Design",
      "Storytelling",
      "UX Copywriting",
    ],
    link: "https://www.tiagofonseca.net/",
  },
  {
    id: "8",
    title: "Elodie Bouny",
    description:
      "Designed an intuitive and elegant user experience for Elodie Bouny’s online presence, combining minimalist aesthetics with clear user flows to enhance brand engagement.",
    image: "/images/projects/elodiebouny.png",
    tags: [
      "UX Strategy",
      "User Research",
      "Accessibility",
      "Compliance Testing",
      "Minimalist Design",
      "Brand Experience",
      "UI Flow Design",
    ],
    link: "https://elodiebouny.com/",
  },
];

export const timeline: TimelineItem[] = [
  {
    id: "1",
    title: "UI/UX Designer & QA Engineer",
    company: "Pinely International",
    period: "2023 - Present",
    description:
      "Working on international projects focused on delivering both high-quality user interfaces and robust quality assurance strategies. Responsible for creating intuitive interfaces in Figma and implementing automated testing flows including accessibility validation. Contributed to over 20 digital products across global teams.",
    type: "work",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    company: "Bruxinha dos Signos",
    period: "2024 - Present",
    description:
      "Designed the full visual identity and user experience for digital products in the mystical and spiritual niche. Created engaging landing pages, dashboards, and mobile-first interfaces focused on accessibility, usability, and emotional connection with the audience. Conducted usability testing and optimized for conversion.",
    type: "work",
  },
  {
    id: "3",
    title: "UI/UX Designer & QA Engineer",
    company: "Innova IA",
    period: "2024 - 2025",
    description:
      "Worked on AI-based platforms, contributing to both responsive UI design and automated QA processes. Managed projects from wireframes to production-level testing, integrating tools like Figma, Cypress, and Lighthouse to ensure high performance and seamless user experience.",
    type: "work",
  },
  {
    id: "4",
    title: "Freelancer QA & UI/UX Designer",
    institution: "Freelancer",
    period: "2021 - Present",
    description:
      "As a freelancer, delivered custom solutions for a variety of clients, combining strong visual design with testable and performant interfaces. Built web applications using Figma, Next.js, and Tailwind CSS, and implemented automated QA pipelines for continuous delivery and testing.",
    type: "work",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/izabela-fattori-316946247",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/izabelafattori",
    icon: "github",
  },
];

export const qaSkills: QaSkill[] = [
  {
    id: "1",
    title: "Test Automation",
    description:
      "Experience with test automation frameworks for web and mobile, implementing end-to-end and integration tests.",
    tools: ["Cypress", "Selenium", "WebdriverIO", "Playwright", "Appium"],
    icon: Code,
  },
  {
    id: "2",
    title: "Performance & Security Testing",
    description:
      "Implementation of load, stress, and security testing to ensure robust and secure applications.",
    tools: ["JMeter", "Gatling", "OWASP ZAP", "Lighthouse", "k6"],
    icon: TestTube,
  },
  {
    id: "3",
    title: "QA & DevOps Strategies",
    description:
      "Development of QA processes integrated with the DevOps cycle, focusing on CI/CD and automated testing.",
    tools: [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Test Management",
      "BDD/Cucumber",
    ],
    icon: Bug,
  },
];
