"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React JS</li>
        <li>Redux.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Material UI</li>
        <li>Chakra UI</li>
        <li>React Query</li>
        <li>Docker</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>Firebase</li>
        <li>SQL Lite</li>
        <li>AngularJS</li>
        <li>REST APIs</li>
        <li>Node JS</li>
        <li>Express JS</li>
        <li>Python</li>
        <li>Machine Learning</li>
        <li>Data Science</li>
        <li>Artificial Intelligence</li>
        <li>Linux</li>
        <li>Click-Up</li>
        <li>Jira</li>
        <li>C++</li>
        <li>C</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>2+ year of experience as Full Stack Developer</li>
        <li>
          National University of Computer & Emerging Sciences(FAST),Lahore
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Champion in Coding Problem Solution</li>
        <li>Scrum Fundamentals Certified(SFC)</li>
        <li>ClickUp Novice</li>
        <li> ClickUp Intermediate</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="A" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As a Software Engineer specializing in MERN stack development, I am
            incredibly passionate about programming and possess a keen interest
            in cutting-edge technologies, particularly in the context of web
            development. With a strong foundation in MERN stack - MongoDB,
            Express.js, React.js, and Node.js, I possess the skills and
            knowledge to deliver robust and innovative software solutions.
            Having honed my expertise through hands-on experience and continuous
            learning, I take pride in my ability to design, develop, and
            maintain efficient web applications that meet the highest standards
            of quality and performance. My experience in working within an Agile
            development environment has sharpened my problem-solving skills and
            enhanced my ability to adapt to dynamic project requirements. I am
            particularly interested in the intersection of artificial
            intelligence and MERN stack development, as I believe this fusion
            can lead to revolutionary advancements in user experiences and
            application capabilities. As an integral part of the team, I
            actively contribute to code reviews, architectural discussions, and
            continuous improvement initiatives, ensuring that our projects
            remain on the cutting edge of technology and best practices.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
