import { motion } from "framer-motion";
import { styles } from "../styles";
import BubbleText from "./BubbleText";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/main/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div
        className={`relative z-10 max-w-7xl mx-auto -mt-10 ${styles.paddingX} flex flex-col items-center justify-center h-full gap-5`}
      >
        <div className="sm:block w-40 h-40 rounded-full overflow-hidden">
          <img
            src="/main/profile.jpeg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-center">
          {/* <h1 className={`${styles.heroHeadText} text-white tracking-wider`}>
            QA Engineer
          </h1> */}
          <BubbleText
            // text="QA Engineer"
            text="Baburao Adkane"
            className="sm:text-7xl text-4xl font-thin text-indigo-300"
          />
          <p className={`${styles.heroSubText} mt-5`}>
            I'm <strong>Baburao</strong> - a skilled QA engineer who designs test strategies
            <br className="sm:block hidden" />
            that deliver bug-free, reliable and scalable systems.
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-24 bottom-24 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

