import React from "react";
import { motion } from "framer-motion";

const morphVariants = {
  initial: {
    opacity: 0,
    clipPath: "circle(0% at 50% 50%)", // Bentuk awal kecil
  },
  animate: {
    opacity: 1,
    clipPath: "circle(100% at 50% 50%)", // Membesar secara penuh
    transition: { duration: 1.2, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    clipPath: "circle(0% at 50% 50%)",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const MorphingTransition = ({ children }) => {
  return (
    <motion.div
      variants={morphVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen bg-white overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default MorphingTransition;
