import { motion } from "framer-motion";

const MorphingShape = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <motion.svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <motion.path
          fill="#10B981"
          strokeWidth="2"
          stroke="white"
          d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,197.3C840,192,960,160,1080,138.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L0,320Z"
          initial={{ d: "M0,160L1440,160L1440,0L0,0Z" }}
          animate={{
            d: [
              "M0,224L60,213.3C120,203,240,181,360,160C480,139,600,117,720,112C840,107,960,117,1080,144C1200,171,1320,213,1380,229.3L1440,256L1440,320L0,320Z",
              "M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,197.3C840,192,960,160,1080,138.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L0,320Z",
              "M0,160L60,144C120,128,240,96,360,106.7C480,117,600,171,720,186.7C840,203,960,181,1080,160C1200,139,1320,117,1380,106.7L1440,96L1440,320L0,320Z",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 6,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default MorphingShape;
