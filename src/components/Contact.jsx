import {motion} from 'framer-motion'
import { slideIn } from '../utils/motion';
import { styles } from '../styles';
import BubbleText from './BubbleText';
import { socialLinks } from '../constants';
import { Phone, Mail, Linkedin, Github, } from "lucide-react";
import { SectionWrapper } from '../hoc';

const iconMap = {
  Phone: Phone,
  Mail: Mail,
  Linkedin: Linkedin,
  Github: Github
};

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-primary h-screen overflow-hidden -mt-20">
      {/* Slider container */}
      <div className="relative w-full flex items-center justify-center">
        <motion.div
        variants={slideIn("left", "tween", 0.1, 1)}
        className='flex-[0.75] p-8 rounded-2xl bg-cover bg-black-100 bg-no-repeat'
        style={{ backgroundImage: "url('/main/back1.png')",
          filter: "brightness(0.8)"
         }}
      >
        <p className={styles.sectionSubText}>Let's Connect</p>
        <BubbleText 
        text="Get in touch"
        className="sm:text-7xl text-4xl font-thin text-indigo-300"
      />
        <p className="text-start text-white sm:text-2xl text-xl">for the best <span className="text-cyan-300">collaboration</span> experience.</p>
        <div className="mt-8 space-y-8">
          {socialLinks.map((item) => {
            const IconComponent = iconMap[item.Icon];
            return (
              <div key={item.id} className="flex items-center space-x-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-white hover:text-cyan-300 transition duration-300"
                >
                  <IconComponent
                    className="w-5 h-5"
                    style={{
                      filter: `drop-shadow(0 0 0 transparent)`,
                    }}
                    onMouseEnter={(e) => {
                      const [color1, color2] = item.gradient;
                      e.currentTarget.style.filter = `
              drop-shadow(0 0 24px ${color1})
              drop-shadow(0 0 24px ${color2})
            `;
                    }}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.filter = `drop-shadow(0 0 0 transparent)`)
                    }
                  />
                  <span>{item.text}</span>
                </a>
              </div>
            );
          })}
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");


