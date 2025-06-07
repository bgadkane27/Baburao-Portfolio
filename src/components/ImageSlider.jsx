import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { ParticleRing } from "./canvas";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const videos = [
    {
      video: "/videos/001.mp4",
      title: "What is Docker?",
      subtitle: "A tool for containerizing applications.",
    },
    {
      video: "/videos/002.mp4",
      title: "What is Figma?",
      subtitle: "A collaborative UI/UX design tool.",
    },
    {
      video: "/videos/003.mp4",
      title: "What is Git?",
      subtitle: "A distributed version control system.",
    },
    {
      video: "/videos/004.mp4",
      title: "What is JavaScript?",
      subtitle: "The language of the web.",
    },
    {
      video: "/videos/005.mp4",
      title: "What is Node.js?",
      subtitle: "JavaScript runtime for backend development.",
    },
  ];

  const positions = ["center", "left1", "left2", "right2", "right1"];

  const cardVariants = {
    center: { x: "0%", scale: 1.1, opacity: 1 },
    left1: { x: "-50%", scale: 0.8, opacity: 0.6 },
    left2: { x: "-120%", scale: 0.6, opacity: 0.4 },
    right1: { x: "50%", scale: 0.8, opacity: 0.6 },
    right2: { x: "120%", scale: 0.6, opacity: 0.4 },
  };

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-primary min-h-screen overflow-hidden text-white">
      {/* Slider container */}
      <div className="relative w-full h-[500px] flex items-center justify-center">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={positions[positionIndexes[index]]}
            animate={positions[positionIndexes[index]]}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-2 px-4 py-8 bg-black rounded-2xl min-h-[450px] absolute"
            style={{
              width: "320px",
              zIndex: 5 - positionIndexes[index],
            }}
          >
            <h2 className="sm:text-2xl text-[14px] text-center font-semibold break-words max-w-[90%]">
              {video.title}
            </h2>
            <video
              src={video.video}
              className="w-[280px] h-[280px] object-cover rounded-lg"
              autoPlay
              muted
              loop
              playsInline
            />
            <p className="text-gray-400 text-base text-center">{video.subtitle}</p>
          </motion.div>
        ))}
        {/* <ParticleRing /> */}
      </div>      
    </div>
  );
};

export default ImageSlider;