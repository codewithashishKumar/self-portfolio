import "../styles/home.css";
import luffy from "../images/profile.jpeg";
import { useNavigate } from "react-router-dom";
import SkillsSection from "./Skills.jsx";
import ExperienceSection from "./Experience.jsx";
import ProjectsSection from "./Projects.jsx";
import GitHubContributions from "./GitHubContributions.jsx";
import useReveal from "../data/useReveal";

const Home = () => {

    const navigate = useNavigate();
    useReveal();
    return (
        <>
            <section className="hero">
                <div className="hero-left">
                    <h1 className="hero-title">
                        Hello, I'm <br />
                        Ashish <span className="accent">Kumar</span>
                    </h1>
                    <p className="hero-subtitle">
                        Frontend Developer specializing in interactive and user-focused web experiences.
                    </p>
                    <p className="hero-subtitle">
                        I design and build clean, scalable, and high-performing web applications.
                    </p>
                    <p className="hero-subtitle">
                        Bringing over 4 years of professional experience in frontend development.
                    </p>
                    <button
                        className="hero-btn"
                        onClick={() => navigate("/contact")}
                    >
                        Let's Talk →
                    </button>
                </div>
                <div className="hero-right">
                    <div className="circle">
                        <img
                            src={luffy}
                            alt="Ashish"
                            className="hero-img"
                        />
                    </div>
                    <div className="badge">
                        10+ Projects <br />
                        Completed
                    </div>
                </div>
            </section>
            <div className="reveal">
                <SkillsSection />
            </div>

            <div className="reveal">
                <ExperienceSection />
            </div>

            <div className="reveal">
                <ProjectsSection />
            </div>

            <div className="reveal">
                <GitHubContributions />
            </div>
        </>



    );
};

export default Home;
