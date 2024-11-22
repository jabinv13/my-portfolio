import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
const Info = {
  name: "Jabin v Chandran",
  stack: ["FrontEnd Developer", "Full Stack Developer", "Backend Developer"],
  bio: "I'm Full-stack developer with a passion for crafting elegant and efficient web applications. Proficient in both front-end and back-end technologies, I thrive on building innovative solutions that deliver exceptional user experiences !",
};

const ProjectInfo = [
  {
    title: "CrunchCab ",
    desc: "Modern Architecture ● Microservices-based design for scalability ●Event-driven architecture using Kafka ●Multi-tenant data isolation ●Real-time order tracking",
    image: "Pizza.png",
    live: false,
    technologies: [
      "React",
      "Node js",
      "Microservices",
      "Tailwind",
      "Redux",
      "Next js",
      "Docker",
      "Kubernetes,Aws,Ci/Cd ,Node js ,Express js",
    ],
    link: "https://github.com/jabinv13/CrunchCab_Microservice",
    github: "https://github.com/jabinv13/CrunchCab_Microservice",
  },
  {
    title: "Taskify",
    desc: "a robust task management system to streamline workflow and boost productivity. This web-based applicationempowers users to create, organize, and track tasks effectively ● Consist of Kanban Board view, Calendar view, Data table view,to help teams visualize their work and maximizeefficiency ● workspaces, editing and deleting tasks, invite system, role-based access control system, image uploads, analytics,authentication and more!● Applied a minimalist design system using shadcn/ui components and TailwindCSS.",
    image: "Taskify.png",
    live: false,
    technologies: ["Next JS", "Typescript", "React", "Tailwind"],
    link: "https://github.com/jabinv13/takify",
    github: "https://github.com/jabinv13/takify",
  },
  {
    title: "Scrape Flow(Under development)",
    desc: "A Workflow based Web scrapper.Create custom work flows and scrap it",
    image: "Scrapper.png",
    live: false,
    technologies: ["Next JS", "Typescript", "React", "Tailwind", "React flow"],
    link: "/",
    github: "/",
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "React Query",
      "Zustand",
      "SASS",
      "JavaScript",
      "React JS",
      "Redux",
      "Tailwind CSS",
      "NextJs",
    ],
  },
  {
    title: "Backend",
    skills: ["Node JS", "Express JS", "Redis", "MongoDB", "Firebase"],
  },
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"],
  },
  {
    title: "Devops",
    skills: ["Docker", "Kubernetes", "Jenkins", "Argocd", "Aws"],
  },
];
const socialLinks = [
  { link: "https://github.com/jabinv13", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/jabin-v-707489252/",
    icon: IconBrandLinkedin,
  },
  { link: "", icon: IconBrandInstagram },
  {
    link: "",
    icon: IconBrandYoutube,
  },
  { link: "", icon: IconBrandLeetcode },
];

const ExperienceInfo = [
  {
    role: "Full stack Developer",
    company: "Dare2Digital",
    date: "Jun 2022 - Present",
    desc: "Spearheaded efforts to secure funding for a cutting-edge AR/VR project, collaborating closely with cross-functional teams and contributing to an increase in grant applications by 25%, resulting in successful capital acquisition,Implementing code splitting to reduce initial bundle size by 20% , Implementing memoization strategies to optimize component rendering, leading to a noticeable improvement inapplication speed and overall user satisfaction.Implemented caching strategies (Redis) to reduce database load by 30%,By using React Query , i significantly reduced loading times and improved overall performance through efficient datafetching and caching strategies",
    skills: [
      "Express JS",
      "React JS",
      "Next JS",
      "Node JS",
      "MySQL",
      "MongoDB",
      "Microservices",
    ],
  },
  {
    role: "Front  End Developer",
    company: "Probat",
    date: "Mar 2022 - May 2022",
    desc: " We developed a cloud-based solution for Probat USA to automate their coffee factory processes.Implemented custom workflows using react flow.Implemented Remote Accessing of coffee factory's manufacturing unit  ",
    skills: ["Express JS", "React JS", "Next JS", "Node JS,React Flow"],
  },
];
const Slugs = [
  "typescript",
  "spring",
  "javascript",
  "dart",
  "java",
  "react",
  "angular",
  "flutter",
  "android",
  "html5",
  "css3",
  "ReacTQuery",
  "mongodb",
  "selenium",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "amazonaws",
  "firebase",
  "nginx",
  "vercel",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "sonarqube",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
