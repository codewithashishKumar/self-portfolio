import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Github } from "lucide-react";
import "../styles/gitHubContributions.css";

export default function GitHubContributions() {
    const currentYear = new Date().getFullYear();
    const [stats, setStats] = useState({
        total: 0,
        longestStreak: 0,
        currentStreak: 0,
    });
    const [accountCreated, setAccountCreated] = useState("");
    const [firstContribution, setFirstContribution] = useState("");

    function formatPrettyDate(dateString) {
        const date = new Date(dateString);

        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "long" });
        const year = date.getFullYear();

        function getOrdinal(n) {
            if (n > 3 && n < 21) return "th";
            switch (n % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        }

        return `${day}${getOrdinal(day)} ${month} ${year}`;
    }
    useEffect(() => {
        async function fetchStats() {
            try {
                const username = "codewithashishKumar";
                const year = new Date().getFullYear();

                // Fetch contribution data
                const contribResponse = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${username}`
                );
                const contribData = await contribResponse.json();

                const contributions = contribData.contributions || [];

                // Total
                const total = contribData.total?.[year] || 0;

                // Streak calculations
                let currentStreak = 0;
                let longestStreak = 0;
                let tempStreak = 0;

                contributions.forEach((day) => {
                    if (day.count > 0) {
                        tempStreak++;
                        longestStreak = Math.max(longestStreak, tempStreak);
                    } else {
                        tempStreak = 0;
                    }
                });

                for (let i = contributions.length - 1; i >= 0; i--) {
                    if (contributions[i].count > 0) {
                        currentStreak++;
                    } else {
                        break;
                    }
                }

                // First contribution date
                const firstActiveDay = contributions.find(
                    (day) => day.count > 0
                );
                setFirstContribution(
                    firstActiveDay
                        ? formatPrettyDate(firstActiveDay.date)
                        : "N/A"
                );

                setStats({
                    total,
                    longestStreak,
                    currentStreak,
                });

                // Fetch account creation date
                const userResponse = await fetch(
                    `https://api.github.com/users/${username}`
                );
                const userData = await userResponse.json();

                setAccountCreated(
                    formatPrettyDate(userData.created_at)
                );

            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        }

        fetchStats();
    }, []);

    return (
        <div className="gitHubBody">
            <div className="gitHubHeader">
                <Github />
                <h2>My GitHub Activity ({currentYear})</h2>
            </div>

            {/* Calendar */}
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

            {/* Stats Section */}
            <div className="gitHubStats">
                <div className="statBox">
                    <h3>{stats.total.toLocaleString()}</h3>
                    <p>Contributions in the last year</p>
                </div>

                <div className="statBox">
                    <h3>{stats.longestStreak} days</h3>
                    <p>Longest streak</p>
                </div>

                <div className="statBox">
                    <h3>{stats.currentStreak} days</h3>
                    <p>Current streak</p>
                </div>
            </div>

            <div className="gitHubExtraInfo">
                <div className="extraItem">
                    <strong>First Contribution:</strong> {firstContribution}
                </div>

                <div className="extraItem">
                    <strong>GitHub Joined:</strong> {accountCreated}
                </div>
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
    );
}