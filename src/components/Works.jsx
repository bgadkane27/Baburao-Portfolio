import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import BubbleText from "./BubbleText";

const Card = ({ name, description, tags, link, hyperlink }) => {
    return (
        <motion.div
            whileHover="hover"
            transition={{
                duration: 1,
                ease: "backInOut",
            }}
            variants={{
                hover: {
                    scale: 1.05,
                },
            }}
            className="relative w-full sm:w-[360px] shrink-0 overflow-hidden rounded-2xl p-8 bg-tertiary/50"
        >
            <div className="relative z-10 text-white">
                <div className='flex justify-end'>
                    <div
                        onClick={() => window.open(hyperlink, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                        <img
                            src={link}
                            alt='source code'
                            className='w-1/2 h-1/2 object-contain'
                        />
                    </div>
                </div>
                <motion.span
                    initial={{ scale: 0.85 }}
                    variants={{
                        hover: {
                            scale: 1,
                        },
                    }}
                    transition={{
                        duration: 1,
                        ease: "backInOut",
                    }}
                    className="my-2 block origin-top-left font-mono font-black text-5xl leading-[1.2]"
                >
                    {name}
                </motion.span>
                <p className="mt-2 text-sm leading-6">{description}</p>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </div>
            <Background />
        </motion.div>
    );
};

const Background = () => {
    return (
        <motion.svg
            width="320"
            height="384"
            viewBox="0 0 320 384"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 z-0"
            variants={{
                hover: {
                    scale: 1.5,
                },
            }}
            transition={{
                duration: 1,
                ease: "backInOut",
            }}
        >
            <motion.circle
                variants={{
                    hover: {
                        scaleY: 0.5,
                        y: -25,
                    },
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2,
                }}
                cx="160.5"
                cy="114.5"
                r="101.5"
                fill="#47016DB3"
            />
            <motion.ellipse
                variants={{
                    hover: {
                        scaleY: 2.25,
                        y: -25,
                    },
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2,
                }}
                cx="160.5"
                cy="265.5"
                rx="101.5"
                ry="43.5"
                fill="#47016D99"
            />
        </motion.svg>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>Projects I'm Working On and Have Worked</p>
                <BubbleText
                    text="Projects"
                    className="sm:text-7xl text-4xl font-thin text-indigo-300"
                />
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] text-justify max-w-3xl leading-[30px]'
                >
                    Explore a collection of projects - Each project highlights some information and link to company website
                    which shows high-quality, reliable, and scalable software solutions for business.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-8">
                {projects.map((card, index) => (
                    <Card key={card.name} index={index} {...card} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "work");