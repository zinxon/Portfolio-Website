"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      With over 5 years in the IT industry, I am an AWS-certified solution architect with hands-on cloud architecture experience in Fintech, E-Commerce & Cryptocurrency platforms. Moreover, I was a software engineer with a background in product development and management, as well as expertise in Web3, cryptocurrency trading, market making, and program trading. I have a passion for technology and have worked on various projects in the fintech industry, developing applications and infrastructure that drive innovation and enhance user experiences. I am a proactive and dedicated individual who thrives in fast-paced environments and enjoys tackling complex challenges. I have excellent problem-solving skills and a strong attention to detail, which allows me to deliver high-quality solutions. With my diverse skill set and experience in different areas of software development, I am confident in my ability to the future challenges. I am currently looking to get started in the Cloud Industry. Especially, cloud engineer / DevOps engineer / Solution Architect. I can apply and refine all the skills I have learned to get the job done!
      </p>
    </motion.section>
  );
}
