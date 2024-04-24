import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Bulbs = () => {
  return (
    <motion.div
      className="w-full h-[95%] lg:h-auto lg:w-[400px] absolute -left-[200px] md:-left-[150px] text-center -bottom-2  mix-blend-hard-light animate-pulse duration-500 z-[1] "
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Image
        src={"/bulb.png"}
        width={200}
        height={200}
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default Bulbs;
