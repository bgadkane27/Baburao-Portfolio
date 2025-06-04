import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import BubbleText from "./BubbleText";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[36px]'>"</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
      <div className='mt-6 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
           {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} <br /> @ {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Words from the People Who Work with Me</p>
          <BubbleText 
        text="Testimonials"
        className="sm:text-7xl text-4xl font-thin text-indigo-300"
      />
          {/* <h2 className={styles.sectionHeadText}>Testimonials <span className="text-pink-600">.</span></h2> */}
          <h2 className="text-start text-white sm:text-3xl text-xl leading-relaxed pb-2">
          Satisfaction isn't <span className="text-cyan-300 font-semibold">one-sided.</span> It’s built on trust, collaboration, 
          a legacy that transcends time.
        </h2>
        </motion.div>
      </div>
      <div className={`-mt-10 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>      
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedback");

