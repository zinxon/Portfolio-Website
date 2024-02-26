import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Hong Kong",
    description:
      "Designed a solution that enables advanced integration aggregating Restful & WebSocket APIs from most popular cryptocurrency exchanges (e.g. Binance, OKX, Huobi etc.) in the one unified API service offering, resulting in the improvement in performance with up to 25% faster data retrieval time.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2022 – Jun 2023",
  },
  {
    title: "Software Engineer",
    location: "Hong Kong",
    description:
      "Enhanced performance efficiency by 40% through the utilization of Nest.js for the Fintech backend deployed in AWS EC2 Auto Scaling group behind an Application Load Balancer and integrated with AWS RDS for Mysql, serving 1000+ merchants generating HKD$1.4 Billion GMV.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2020 – Apr 2022",
  },
  {
    title: "Junior Software Engineer",
    location: "Hong Kong",
    description:
      "Collaborated with cross-functional teams on Agile methodologies to develop a travel IOS mobile application by using Swift, achieved 20% faster delivery",
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 – Dec 2019",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Mysql",
  "PostgreSQL",
  "Flutter",
  "Python",
  "Flask",
  "AWS",
  "GCP",
] as const;
