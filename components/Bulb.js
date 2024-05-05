import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Bulbs = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div
        className="w-[450px] h-auto  mix-blend-hard-light animate-pulse duration-1000 z-10 "
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Image
          src={"/bulb.png"}
          width={200}
          height={200}
          className="w-full h-full"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Bulbs;
