import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  in: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  out: {
    opacity: 0,
    x: 50,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
