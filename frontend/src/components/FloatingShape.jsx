import { motion } from 'framer-motion';

const FloatingShape = ({
  color = "bg-green-500",
  size = "w-32 h-32",
  top = "50%",
  left = "50%",
  delay = 0,
  duration = 20,
  blur = "blur-xl",
  opacity = "opacity-20",
  shape = "rounded-full",
  path = "default"
}) => {
  let animation;

  switch (path) {
    case "diagonal":
      animation = {
        y: ["0%", "-20%", "0%"],
        x: ["0%", "20%", "0%"],
        rotate: [0, 360],
      };
      break;
    case "vertical":
      animation = {
        y: ["0%", "-30%", "0%"],
        rotate: [0, 360],
      };
      break;
    case "rotate":
      animation = {
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      };
      break;
    default:
      animation = {
        y: ["0%", "100%", "0%"],
        x: ["0%", "100%", "0%"],
        rotate: [0, 360],
      };
  }

  return (
    <motion.div
      className={`absolute ${color} ${size} ${opacity} ${blur} ${shape}`}
      style={{ top, left }}
      animate={animation}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
        delay,
      }}
      aria-hidden="true"
    />
  );
};

export default FloatingShape;
