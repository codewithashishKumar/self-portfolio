import "../styles/experience.css";

const experienceData = [
    {
        role: "Frontend Developer",
        company: "72 DRAGONS, LLC",
        period: "2021 - Present",
        desc: "Develop modern, responsive web applications using HTML, CSS, JavaScript, and React, focusing on performance, usability, and clean code. Work closely with designers and cross-functional teams to turn ideas into reliable, user-friendly products. Contributed to a variety of projects including CC, Webex Tracker, The Annual and Probation Tool, healthcare websites, media platforms, and digital initiatives supporting Cannes 2025, consistently delivering high-quality features while managing multiple priorities in fast-paced environments."
    },
    {
        role: "Started Web Development",
        company: "Self Taught",
        period: "October 2020 - November 2021",
        desc: "Initiated a focused, self-directed path into modern web development, building a strong technical foundation in HTML, CSS, and JavaScript before advancing into contemporary frameworks and tooling. Developed numerous hands-on projects to strengthen problem-solving skills, deepen understanding of responsive design, and apply real-world engineering practices. Demonstrated discipline and adaptability by independently researching complex concepts, debugging production-like challenges, and continuously refining code quality. This period established the structured thinking, curiosity, and growth mindset that continue to shape my approach as an engineer."
    }
];

const Experience = () => {
    return (
        <section className="experience">

            <h2 className="section-title">Experience</h2>
            <p className="section-sub">
                I'm a frontend engineer with four years of experience building modern, scalable web applications using HTML, CSS, JavaScript, and React, with a strong focus on performance, accessibility, and clean user experiences. I also work with Node.js, Express, MongoDB, and MySQL, bringing a growing full-stack mindset, strong ownership, and a collaborative approach to building reliable, high-quality products.
            </p>

            <div className="timeline">

                {experienceData.map((item, index) => (
                    <div className="timeline-item" key={index}>

                        <div className="timeline-dot"></div>

                        <div className="timeline-content">
                            <h3>{item.role}</h3>
                            <span className="company">
                                {item.company} • {item.period}
                            </span>

                            <p>{item.desc}</p>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
};



export default Experience;
