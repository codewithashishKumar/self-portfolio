import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Github } from "lucide-react";

export default function GitHubContributions() {
    return (
        <div className="w-full flex justify-center items-center py-10 px-4">
            <div className="w-full max-w-4xl shadow-xl rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <Github className="w-7 h-7" />
                    <h2 className="text-2xl font-bold">My GitHub Activity</h2>
                </div>

                {/* GitHub Contribution Graph */}
                <div className="overflow-x-auto">
                    <GitHubCalendar
                        username="codewithashishKumar"
                        blockSize={15}
                        blockMargin={5}
                        fontSize={14}
                    />
                </div>

                {/* Profile Link */}
                <div className="mt-6 text-center">
                    <a
                        href="https://github.com/codewithashishKumar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 rounded-xl bg-black text-white hover:opacity-80 transition"
                    >
                        View My GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
}
