import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Github } from "lucide-react";
import "../styles/gitHubContributions.css";

export default function GitHubContributions() {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div className="gitHubBody">
                <div className="gitHubHeader">
                    <Github />
                    <h2>My GitHub Activity ({currentYear})</h2>
                </div>

                {/* GitHub Contribution Graph */}
                <div className="gitHubSection">
                    <GitHubCalendar
                        username="codewithashishKumar"
                        year={currentYear}
                        blockSize={15}
                        blockMargin={5}
                        fontSize={14}
                        theme={{
                            light: [
                                "#ff6b0020", // no contributions
                                "#ff6b0040", // very low
                                "#ff6b0060",
                                "#ff6b0080",
                                "#ff6b00",
                            ],
                            dark: [
                                "#ff6b0020", // no contributions
                                "#ff6b0040", // very low
                                "#ff6b0060",
                                "#ff6b0080",
                                "#ff6b00",
                            ],
                        }}
                    />

                </div>

                {/* Profile Link */}
                <div className="gitHubLinkClass">
                    <a
                        href="https://github.com/codewithashishKumar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View My GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
}
