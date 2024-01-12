import { motion } from "framer-motion";

export const MenuToggle = ({ toggle }: any) => (
  <motion.button
    onClick={toggle}
    className="relative w-12 h-12 z-10 bg-primary-600 display flex justify-center items-center rounded-full outline-none focus:outline-none"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 500, damping: 20 }}
  >
    <svg
      width="23"
      height="18"
      viewBox="0 0 23 18"
      className="w-6 h-6 fill-transparent stroke-white translate-x-[1px]"
    >
      <motion.path
        d="M 2 2.5 L 20 2.5"
        className="top"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
        strokeWidth="3"
        strokeLinecap="round"
      ></motion.path>
      <motion.path
        d="M 2 9.423 L 20 9.423"
        opacity="1"
        className="middle"
        strokeWidth="3"
        strokeLinecap="round"
      ></motion.path>
      <motion.path
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
        strokeWidth="3"
        strokeLinecap="round"
      ></motion.path>
    </svg>
  </motion.button>
);

export default MenuToggle;
