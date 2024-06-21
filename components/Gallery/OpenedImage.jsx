import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";

const OpenedImage = ({ setOpened, src }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      onClick={() => setOpened(false)}
    >
      <motion.img
        src={src}
        alt="Vigneti"
        className="object-contain p-12 max-w-full max-h-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.25 }}
      />
      <IoIosClose
        className="absolute top-4 right-4 text-white text-4xl cursor-pointer"
        onClick={() => setOpened(false)}
      />
    </div>
  );
};

export default OpenedImage;
