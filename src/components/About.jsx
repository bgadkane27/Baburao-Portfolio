import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, zoomInRotate } from "../utils/motion";
import BubbleText from "./BubbleText";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className='xs:w-[250px] w-full'>
    <motion.div
      variants={zoomInRotate(0.2 * index, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.2 }}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={styles.sectionSubText}>Get to Know Me</p>
        <BubbleText
          text="Overview"
          className="sm:text-7xl text-4xl font-thin text-indigo-300"
        />
        {/* <h2 className={styles.sectionHeadText}>Overview <span className="text-pink-600">.</span></h2> */}
      </motion.div>

      <motion.p
        // variants={fadeIn("", "", 0.2, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        "I'm a skilled QA Engineer with hands-on experience in manual and
        automation testing, and expertise in tools and frameworks like Selenium,
        Postman, and MSTest. I'm a quick learner who collaborates closely with
        development and business teams to design reliable, scalable,
        and bug-free systems. I'm passionate about crafting effective test
        strategies that ensure product quality and deliver seamless user experiences.
        Let's work together to build systems you can trust!"
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
