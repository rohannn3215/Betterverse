import { motion } from 'framer-motion';

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-[#050508]"
  >
    <motion.div
      className="relative"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
      }}
    >
      <motion.div
        className="w-16 h-16 border-4 border-purple-500"
        animate={{
          boxShadow: [
            "0 0 20px rgba(139, 92, 246, 0.5)",
            "0 0 60px rgba(139, 92, 246, 0.5)",
            "0 0 20px rgba(139, 92, 246, 0.5)",
          ],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute inset-0 border-4 border-blue-500 opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </motion.div>
    <motion.h1
      className="absolute mt-32 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
      animate={{
        opacity: [0.5, 1, 0.5],
        scale: [0.95, 1, 0.95],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      Betterverse Loading...
    </motion.h1>
  </motion.div>
);

export default LoadingScreen;