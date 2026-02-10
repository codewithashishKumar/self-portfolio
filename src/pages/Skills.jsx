import "../styles/skills.css";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiVite, SiGithub } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { SiMysql } from "react-icons/si";
import React from 'react'


const skillsData = [
    {
        title: "Frontend",
        barColor: "#000",
        level: 75,
        skills: [
            { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
            { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
            { name: "JavaScript (ES6+)", icon: <FaJs />, color: "#F7DF1E" },
            { name: "React", icon: <FaReact />, color: "#61DAFB" },
        ],
    },
    {
        title: "Backend",
        barColor: "#000",
        level: 40,
        skills: [
            { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
            { name: "Express", icon: <SiExpress />, color: "#444" },
            { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
            { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        ],
    },
    {
        title: "Tools",
        barColor: "#000",
        level: 60,
        skills: [
            { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
            { name: "GitHub", icon: <SiGithub />, color: "#181717" },
            { name: "Vite", icon: <SiVite />, color: "#646CFF" },
            { name: "REST APIs", icon: <MdApi />, color: "#009688" },
        ],
    },
];



const SkillsSection = () => {
    return (
        <section className="skills">
            <h2 className="skills-title">Proficiency</h2>
            <p className="skills-sub">      I build modern, scalable web applications with a strong focus on performance, clean code, and user experience. Proficient across both frontend and backend technologies, I develop responsive interfaces, reliable server-side systems, and efficient APIs while leveraging industry-standard tools to deliver high-quality digital solutions.</p>

            <div className="skills-grid">
                {skillsData.map((category) => (
                    <div className="skill-card" key={category.title}>
                        <div className="skillCarHead">
                            <h3>{category.title}</h3>

                        </div>

                        <ul>
                            {category.skills.map((skill) => (
                                <li key={skill.name} style={{ color: skill.color }}>
                                    {React.cloneElement(skill.icon, { color: skill.color })}
                                    <span>{skill.name}</span>
                                </li>

                            ))}
                        </ul>
                        <div className="progress-wrapper">

                            <div
                                className="progress-fill"
                                style={{
                                    width: `${category.level}%`,
                                    background: category.barColor,
                                }}
                            >
                                <span className="progress-text">{category.level}%</span>
                            </div>
                        </div>



                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
