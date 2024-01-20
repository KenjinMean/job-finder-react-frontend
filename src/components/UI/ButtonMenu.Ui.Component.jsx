import React from "react";
import { motion } from "framer-motion";

export default function ButtonMenuUiComponent({ className, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      whileFocus={{ scale: 1.1 }}
      {...props}
      className={`flex items-center rounded-full hover:bg-accent-blue500 focus:ring-4 focus:outline-none focus:ring-accent-blue500 ${className}`}
    >
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-background-gray_stable hover:text-content-black_inverted"
      >
        <path
          d="M8 12H8.00901M12.0045 12H12.0135M15.991 12H16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </motion.button>
  );
}
