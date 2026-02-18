import "../styles/projects.css";


const projectsData = [
    {
        title: "Portfolio Website",
        description:
            "A responsive React portfolio showcasing my projects, skills, and experience with clean UI design, reusable components, and optimized performance across devices.",
        tech: ["React", "CSS", "Vite"],
        live: "https://self-portfolio-sepia.vercel.app/",
        github: "https://github.com/codewithashishKumar/self-portfolio",
    },
    {
        title: "To-Do List App",
        description:
            "A React-based task management app enabling users to add, edit, delete, and track tasks with dynamic state updates and intuitive interface design.",
        tech: ["React", "CSS", "Vite"],
        live: "https://todolist-rho-cyan.vercel.app/",
        github: "https://github.com/codewithashishKumar/todoList",
    },
    {
        title: "WeatherSphere - Weather App",
        description:
            "A real-time weather app using React and OpenWeather API to display temperature, humidity, wind speed, and live city-based forecasts.",
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
    return (
        <section className="projects">
            <h2 className="section-title">Projects</h2>
            <p className="section-subProject">
                A curated selection of projects showcasing my work across design and development. Each project reflects a focus on problem-solving, usability, and thoughtful execution.
            </p>

            <div className="projects-grid">
                {projectsData.map((project) => (

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

                            <p className="project-desc">
                                {project.description}
                            </p>

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

                ))}
            </div>

        </section>
    );
};

export default ProjectsSection;
