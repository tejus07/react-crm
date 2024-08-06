import React from "react";

interface CircularProgressBarProps {
    percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage }) => {
    const radius = 50;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex items-center justify-center">
            <svg
                className="rotate-[-90deg]"
                width="85"
                height="85"
                viewBox="0 0 120 120"
            >
                <circle
                    className="text-primary-foreground"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                />
                <circle
                    className="text-primary"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                />
            </svg>
            <div className="absolute text-base font-bold top-6">{percentage}%</div>
            <div className="progress-title absolute text-center">Goal <br></br>Completed</div>
        </div>
    );
};

export default CircularProgressBar;
