import React from "react";
import { motion } from "framer-motion";

export default function BackdropUtil({ onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className="fixed inset-0 z-10 bg-black opacity-25"
    ></motion.div>
  );
}
