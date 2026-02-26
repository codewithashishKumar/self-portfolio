import { Link } from "react-router-dom";
import "../styles/projects.css";

const projectsData = [
    {
        id: 1,
        title: "Portfolio Website",
        description:
            "A responsive React portfolio showcasing my projects, skills, and experience with clean UI design, reusable components, and optimized performance across devices.",
        tech: ["React", "CSS", "Vite"],
        live: "https://self-portfolio-sepia.vercel.app/",
        github: "https://github.com/codewithashishKumar/self-portfolio",
    },
    {
        id: 2,
        title: "To-Do List App",
        description:
            "A React-based task management app enabling users to add, edit, delete, and track tasks with dynamic state updates and intuitive interface design.",
        tech: ["React", "CSS", "Vite"],
        live: "https://todolist-rho-cyan.vercel.app/",
        github: "https://github.com/codewithashishKumar/todoList",
    },
    {
        id: 3,
        title: "WeatherSphere - Weather App",
        description:
            "A real-time weather app using React and OpenWeather API to display temperature, humidity, wind speed, and live city-based forecasts.",
        tech: ["React", "CSS", "Vite", "OpenWeather API"],
        live: "https://weather-sphere-steel.vercel.app/",
        github: "https://github.com/codewithashishKumar/WeatherSphere",
    },
    {
        id: 4,
        title: "AssetTrack - Asset Management App",
        description:
            "A full-stack asset management application that enables users to add, track, update, and manage organizational assets efficiently. Features include asset categorization, status tracking, search functionality, and a responsive dashboard for streamlined asset monitoring.",
        tech: ["React", "Node.js", "Express", "MongoDB", "CSS", "Vercel"],
        live: "https://assettrack-app.vercel.app/",
        github: "https://github.com/codewithashishKumar/assettrack-app",
    }
];

const ProjectsSection = ({ showAll = false }) => {

    // 👇 Show only 3 on homepage
    const displayedProjects = showAll
        ? projectsData
        : projectsData.slice(0, 3);

    return (
        <section className="projects">
            <h2 className="section-title">Projects</h2>
            <p className="section-subProject">
                A curated selection of projects showcasing my work across design and development.
            </p>

            <div className="projects-grid">
                {displayedProjects.map((project) => (

                    <div
                        className="project-card"
                        key={project.id}
                        style={{ background: project.color || "var(--card-bg)" }}
                    >

                        <div className="card-head">
                            {project.title}
                        </div>

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

                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="brutal-btn"
                                    >
                                        Live →
                                    </a>
                                )}

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="brutal-btn"
                                    >
                                        GitHub →
                                    </a>
                                )}

                            </div>

                        </div>
                    </div>

                ))}
            </div>

            {/* 👇 Show button only if not on AllProjects page */}
            {!showAll && projectsData.length > 3 && (
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <Link to="/AllProjects" className="brutal-btn">
                        View All Projects →
                    </Link>
                </div>
            )}

        </section>
    );
};

export default ProjectsSection;
