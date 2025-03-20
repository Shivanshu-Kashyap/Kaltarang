import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate("/start"), 500); // Navigate after 100%
          return 100;
        }
        return oldProgress + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-blue-200">
      <div className="flex items-center space-x-2">
        <p className="text-black text-4xl font-bold">LOAD</p>
        <motion.div
          className="w-4 h-4 bg-black rounded-full self-center"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1]
          }}
          transition={{ 
            duration: 1, 
            ease: "easeInOut",
            repeat: Infinity
          }}
        />
        <motion.div
          className="w-4 h-4 bg-black rounded-full self-center"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1]
          }}
          transition={{ 
            duration: 1, 
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0.3
          }}
        />
        <motion.div
          className="w-4 h-4 bg-black rounded-full self-center"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1]
          }}
          transition={{ 
            duration: 1, 
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0.6
          }}
        />
        <p className="text-black text-4xl font-bold">ING</p>
      </div>
      <div className="relative w-[95%] max-w-3xl h-8 mt-4 bg-white rounded-full border-2 border-black">
        <motion.div
          className="absolute top-0 left-0 h-full bg-black rounded-full"
          style={{ width: `${progress}%` }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <p className="text-black text-4xl font-bold mt-2">{progress}%</p>
    </div>
  );
};

export default LoadingAnimation;
