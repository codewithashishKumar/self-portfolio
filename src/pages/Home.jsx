import "../styles/home.css";
import luffy from "../images/profile.jpeg";
import { useNavigate } from "react-router-dom";
import SkillsSection from "./Skills.jsx";
import ExperienceSection from "./Experience.jsx";
import ProjectsSection from "./Projects.jsx";
import GitHubContributions from "./GitHubContributions.jsx";


const Home = () => {

    const navigate = useNavigate();
    return (
        <>
            <section className="hero">

                {/* LEFT */}
                <div className="hero-left">

                    <h1 className="hero-title">
                        Hey, This is <br />
                        Ashish <span className="accent">Kumar</span>
                    </h1>

                    <p className="hero-subtitle">
                        An interactive Frontend Developer
                    </p>

                    <p className="hero-subtitle">
                        I build beautifully simple web apps and love what I do.
                    </p>
                    <p className="hero-subtitle">
                        4+ years of Experience
                    </p>
                    <button
                        className="hero-btn"
                        onClick={() => navigate("/contact")}
                    >
                        Let's Talk →
                    </button>

                </div>

                {/* RIGHT */}
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
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <GitHubContributions />
        </>



    );
};

export default Home;
