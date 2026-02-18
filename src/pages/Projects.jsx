import "../styles/projects.css";
import { useState } from "react";


const projectsData = [
    {
        title: "Portfolio Website",
        description:
            "A modern personal portfolio built with React showcasing my skills, experience, and projects.",
        tech: ["React", "CSS", "Vite"],
        live: "https://self-portfolio-sepia.vercel.app/",
        github: "https://github.com/codewithashishKumar/self-portfolio",
    },
    {
        title: "To-Do List App",
        description:
            "A responsive and user-friendly task management application built with React. It allows users to add, edit, delete, and mark tasks as complete to stay organized and productive.",
        tech: ["React", "CSS", "Vite"],
        live: "https://todolist-rho-cyan.vercel.app/",
        github: "https://github.com/codewithashishKumar/todoList",
    },
    {
        title: "WeatherSphere - Weather App",
        description:
            "A responsive weather forecasting application that provides real-time weather updates, temperature details, humidity levels, wind speed, and dynamic weather conditions for any city worldwide. Built with a clean and modern UI for a seamless user experience.",
        tech: ["React", "CSS", "Vite", "OpenWeather API"],
        live: "https://weather-sphere-steel.vercel.app/",
        github: "https://github.com/codewithashishKumar/WeatherSphere",
    },


    // {
    //     title: "Org Chart Builder",
    //     description:
    //         "Interactive organization chart using OrgChartJS with dynamic data rendering.",
    //     tech: ["JavaScript", "OrgChartJS", "HTML", "CSS"],
    //     live: "#",
    //     github: "#",
    // },
    // {
    //     title: "Full Stack App",
    //     description:
    //         "A MERN stack application with authentication, REST APIs, and responsive UI.",
    //     tech: ["React", "Node", "Express", "MongoDB"],
    //     live: "#",
    //     github: "#",
    // },
];


const ProjectsSection = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <section className="projects">
            <h2 className="section-title">Projects</h2>
            <p className="section-subProject">
                A curated selection of projects showcasing my work across design and development. Each project reflects a focus on problem-solving, usability, and thoughtful execution.
            </p>

            <div className="projects-grid">
                {projectsData.map((project) => {


                    return (
                        <div
                            className="project-card"
                            key={project.title}
                            style={{ background: project.color || "#fff" }}
                        >

                            {/* TOP BAR */}
                            <div className="card-head">
                                {project.title}
                            </div>

                            {/* CONTENT */}
                            <div className="card-content">

                                <p className={`project-desc ${expanded ? "expanded" : ""}`}>
                                    {project.description}
                                </p>

                                {project.description.length > 120 && (
                                    <span
                                        className="show-more"
                                        onClick={() => setExpanded(!expanded)}
                                    >
                                        {expanded ? "Show Less" : "Show More"}
                                    </span>
                                )}

                                <div className="tech-stack">
                                    {project.tech.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="brutal-btn"
                                    >
                                        Live →
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="brutal-btn"
                                    >
                                        GitHub →
                                    </a>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>


        </section>
    );
};

export default ProjectsSection;
