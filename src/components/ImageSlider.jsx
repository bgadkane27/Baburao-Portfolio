import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { ParticleRing } from "./canvas";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const videos = [
    {
      video: "/videos/001.mp4",
      title: "What is the Aspiration?",
      subtitle: "To deliver quality-first, user-centric products by transforming testing into a proactive, value-adding process.",
    },
    {
      video: "/videos/005.mp4",
      title: "Ongoing Projects",
      subtitle: "Currently contributing to diverse projects involving ERP/HRMS/CRM/RETAIL/RESTAURANT/SUBSCRIPTION/REAL ESTATE quality assurance.",
    },    
    {
      video: "/videos/004.mp4",
      title: "Consolidating my Transformation",
      subtitle: "Turning knowledge into practice, enhancing test strategies, and driving continuous process improvements.",
    },    
    {
      video: "/videos/003.mp4",
      title: "Where do I focus my Transformation?",
      subtitle: "From finding bugs to preventing them — mastering process improvement, quality advocacy and automation.",
    },
    {
      video: "/videos/002.mp4",
      title: "Where am I now?",
      subtitle: "At a stage of mastering defect detection, process assurance, and evolving into proactive quality ownership.",
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
            <p className="text-gray-400 text-base text-center max-w-[90%] break-words">{video.subtitle}</p>
          </motion.div>
        ))}
        {/* <ParticleRing /> */}
      </div>      
    </div>
  );
};

export default ImageSlider;