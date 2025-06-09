import { Project, TimelineItem, SocialLink, QaSkill } from "@/types";
import { Code, Bug, TestTube } from "lucide-react";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Redesign",
    description:
      "Complete redesign of an e-commerce platform focusing on user experience, conversion optimization, and implementation of comprehensive testing strategies.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["UI Design", "UX Research", "Prototyping", "QA Testing"],
    link: "https://example.com",
  },
  {
    id: "2",
    title: "Banking Mobile App",
    description:
      "Designed and tested a modern banking app with focus on accessibility, security features, and rigorous quality assurance processes.",
    image: "/images/projects/banking.jpg",
    tags: ["Mobile Design", "User Testing", "Design System", "Test Automation"],
    link: "https://example.com",
  },
  {
    id: "3",
    title: "QA Testing Framework",
    description:
      "Developed a comprehensive testing framework for web applications with automated UI testing, accessibility validation, and regression testing.",
    image: "/images/projects/dashboard.jpg",
    tags: [
      "Test Automation",
      "QA Strategy",
      "CI/CD Integration",
      "Accessibility Testing",
    ],
    link: "https://example.com",
  },
  {
    id: "4",
    title: "Healthcare Platform",
    description:
      "Designed and implemented quality assurance for a patient-centered healthcare management system with telemedicine features and HIPAA compliance testing.",
    image: "/images/projects/healthcare.jpg",
    tags: [
      "UX Strategy",
      "User Research",
      "Accessibility",
      "Compliance Testing",
    ],
    link: "https://example.com",
  },
];

export const timeline: TimelineItem[] = [
  {
    id: "1",
    title: "Senior UI/UX Designer & QA Engineer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description:
      "Atualmente combino minhas habilidades em design e teste, liderando iniciativas de design para clientes enterprise e implementando processos de QA. Responsável tanto pelo design UI/UX quanto pelas estratégias de teste.",
    type: "work",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    company: "Digital Agency Co.",
    period: "2022 - 2023",
    description:
      "Transição para UI/UX design. Trabalhei em múltiplos projetos de clientes incluindo apps mobile e plataformas web. Conduzi pesquisas com usuários e testes de usabilidade.",
    type: "work",
  },
  {
    id: "3",
    title: "QA Engineer",
    company: "StartUp Hub",
    period: "2021 - 2022",
    description:
      "Iniciei minha carreira como QA Engineer, focando em testes de software para produtos de startups. Implementei automação de testes com Cypress e Selenium, e desenvolvi habilidades em metodologias ágeis.",
    type: "work",
  },
  {
    id: "4",
    title: "Bachelor in Computer Science",
    institution: "University of Technology",
    period: "2017 - 2021",
    description:
      "Formada com honras. Especializada em engenharia de software e garantia de qualidade, com estudos complementares em design de interação.",
    type: "education",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/izabelafattori",
    icon: "linkedin",
  },
  {
    name: "Behance",
    url: "https://behance.net/izabelafattori",
    icon: "behance",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/izabelafattori",
    icon: "dribbble",
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
    title: "Automação de Testes",
    description:
      "Experiência com frameworks de automação de testes para web e mobile, implementando testes end-to-end e de integração.",
    tools: ["Cypress", "Selenium", "WebdriverIO", "Playwright", "Appium"],
    icon: Code,
  },
  {
    id: "2",
    title: "Testes de Performance e Segurança",
    description:
      "Implementação de testes de carga, stress e segurança para garantir aplicações robustas e protegidas.",
    tools: ["JMeter", "Gatling", "OWASP ZAP", "Lighthouse", "k6"],
    icon: TestTube,
  },
  {
    id: "3",
    title: "Estratégias de QA & DevOps",
    description:
      "Desenvolvimento de processos de QA integrados ao ciclo DevOps, com foco em CI/CD e testes automatizados.",
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
