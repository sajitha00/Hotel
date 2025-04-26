import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
      >
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="#F59E0B"
          strokeWidth="4"
          fill="#FEF3C7"
        />
        <path
          d="M20 36 L32 24 L44 36"
          stroke="#1E3A8A"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M20 36 H44 V44 H20 Z"
          stroke="#1E3A8A"
          strokeWidth="2"
          fill="#DBEAFE"
        />
      </svg>

      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-800 leading-tight">
          Paradise Hotel
        </span>
        <span className="text-sm text-primary font-medium tracking-wide">
          Hikkaduwa, Sri Lanka
        </span>
      </div>
    </Link>
  );
};

export default Logo;
