import React, { useEffect, useState, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Github } from "lucide-react";
import { Tooltip } from "react-tooltip";
import "../styles/gitHubContributions.css";

export default function GitHubContributions() {
    const calendarRef = useRef(null);
    const currentYear = new Date().getFullYear();
    const [stats, setStats] = useState({
        total: 0,
        longestStreak: 0,
        currentStreak: 0,
    });
    // const [accountCreated, setAccountCreated] = useState("");
    const [firstContribution, setFirstContribution] = useState("");
    const [lastContribution, setLastContribution] = useState("");

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
                // Streak calculations
                let currentStreak = 0;
                let longestStreak = 0;
                let tempStreak = 0;

                // Longest streak
                contributions.forEach((day) => {
                    if (day.count > 0) {
                        tempStreak++;
                        longestStreak = Math.max(longestStreak, tempStreak);
                    } else {
                        tempStreak = 0;
                    }
                });

                // Current streak
                let lastIndex = contributions.length - 1;

                // Skip trailing days with 0 contributions
                while (
                    lastIndex >= 0 &&
                    contributions[lastIndex].count === 0
                ) {
                    lastIndex--;
                }

                for (let i = lastIndex; i >= 0; i--) {
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

                const lastActiveDay = [...contributions]
                    .reverse()
                    .find((day) => day.count > 0);

                setFirstContribution(
                    firstActiveDay
                        ? formatPrettyDate(firstActiveDay.date)
                        : "N/A"
                );

                setLastContribution(
                    lastActiveDay
                        ? formatPrettyDate(lastActiveDay.date)
                        : "N/A"
                );

                setStats({
                    total,
                    longestStreak,
                    currentStreak,
                });

                // Fetch account creation date
                // const userResponse = await fetch(
                //     `https://api.github.com/users/${username}`
                // );
                // const userData = await userResponse.json();

                // setAccountCreated(
                //     formatPrettyDate(userData.created_at)
                // );

            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        }

        fetchStats();
    }, []);

    // 
    useEffect(() => {
        function centerCurrentMonth() {
            if (window.innerWidth > 1024) return;

            const container = calendarRef.current;
            if (!container) return;

            setTimeout(() => {
                const currentMonth = new Date().getMonth();

                const scrollWidth = container.scrollWidth;
                const visibleWidth = container.clientWidth;

                const targetScroll =
                    ((currentMonth + 0.5) / 12) * scrollWidth -
                    visibleWidth / 2;

                container.scrollTo({
                    left: Math.max(0, targetScroll),
                    behavior: "smooth",
                });
            }, 500);
        }

        centerCurrentMonth();

        window.addEventListener("resize", centerCurrentMonth);

        return () =>
            window.removeEventListener("resize", centerCurrentMonth);
    }, []);

    return (
        <div className="gitHubBody">
            <div className="gitHubHeader">
                <Github />
                <h2 data-text={`My GitHub Activity (${currentYear})`}>
                    My GitHub Activity ({currentYear})
                </h2>
            </div>

            {/* Calendar */}
            <div className="gitHubSection" ref={calendarRef}>
                <GitHubCalendar
                    username="codewithashishKumar"
                    year={currentYear}
                    blockSize={15}
                    blockMargin={5}
                    fontSize={14}
                    renderBlock={(block, activity) =>
                        activity.count > 0
                            ? React.cloneElement(block, {
                                "data-tooltip-id": "github-tooltip",
                                "data-tooltip-content": `${activity.count} contributions on ${formatPrettyDate(activity.date)}`,
                            })
                            : block
                    }
                    theme={{
                        light: [
                            "#ff6b0020",
                            "#ff6b0080",
                            "#ff6b0080",
                            "#ff6b0080",
                            "#ff6b00",
                        ],
                        dark: [
                            "#ff6b0020",
                            "#ff6b0080",
                            "#ff6b0080",
                            "#ff6b0080",
                            "#ff6b00",
                        ],
                    }}
                />
                <Tooltip
                    id="github-tooltip"
                    className="github-tooltip"
                    place="top"
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
                    <strong>Last Contribution:</strong> {lastContribution}
                </div>

                {/* <div className="extraItem">
                    <strong>GitHub Joined:</strong> {accountCreated}
                </div> */}
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