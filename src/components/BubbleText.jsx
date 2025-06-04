import styles from "./bubble.module.css";

const BubbleText = ({ text, className = "" }) => {
  return (
    <h2 className={`${className} py-2`}>
      {text.split("").map((char, idx) => (
        <span className={styles.hoverText} key={idx}>
          {char}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;
