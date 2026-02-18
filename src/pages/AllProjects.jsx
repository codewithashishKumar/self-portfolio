import { Link } from "react-router-dom";
import "../styles/allProjects.css";

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
];

const AllProjects = () => {
    return (
        <section className="all-projects">
            <div className="allprojectsHead">
                <div className="all-gobackBTN">
                    <Link to="/" className="all-brutal-btn-head">
                        ← Go Back
                    </Link>
                </div>

                <h2 className="all-section-title">All Projects</h2>
            </div>

            <div className="all-projects-grid">
                {projectsData.map((project) => (
                    <div
                        className="all-project-card"
                        key={project.id}
                    >
                        <div className="all-card-head">
                            {project.title}
                        </div>

                        <div className="all-card-content">

                            <p className="all-project-desc">
                                {project.description}
                            </p>

                            <div className="all-tech-stack">
                                {project.tech.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>

                            <div className="all-project-links">

                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="all-brutal-btn"
                                    >
                                        Live →
                                    </a>
                                )}

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="all-brutal-btn"
                                    >
                                        GitHub →
                                    </a>
                                )}

                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default AllProjects;
