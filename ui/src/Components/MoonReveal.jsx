import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import moonImage from "../assets/moon.png"; // Replace with actual moon image path

const MoonReveal = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-white to-blue-200 overflow-hidden">
      <motion.div
        className="relative"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: [0.5, 1, 25],
          opacity: [0, 1, 1]
        }}
        transition={{
          duration: 4,
          times: [0, 0.3, 0.95],
          ease: "easeOut"
        }}
        onAnimationComplete={() => {
          // Navigate at the exact moment zoom completes
          navigate("/home", { replace: true });
        }}
      >
        <motion.img
          src={moonImage}
          alt="KALTARANG"
          className="w-64 h-64 md:w-[40rem] md:h-[40rem] object-cover"
        />
        <motion.p 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl md:text-6xl font-bold whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            times: [0, 0.3, 0.8],
            ease: "easeInOut"
          }}
        >
          KALTARANG
        </motion.p>
      </motion.div>
    </div>
  );
};

export default MoonReveal;
