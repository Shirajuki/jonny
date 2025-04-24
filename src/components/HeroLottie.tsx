import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { initializedAtom } from "../utils/store";
import Lottie, { useLottie } from "lottie-react";
import animationData from "../lotties/jonny.json";
import { useEffect, useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 2.25,
    },
  },
};
const item = {
  hidden: { opacity: 0, translateY: "-10%" },
  show: { opacity: 1, translateY: "0" },
};

export const HeroLottie = () => {
  const [_initialized, setInitialized] = useAtom(initializedAtom);
  const { play, View } = useLottie({
    loop: false,
    autoplay: false,
    onComplete: () => {
      setInitialized(true);
    },
    style: {
      display: "flex",
      justifyContent: "center",
    },
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "!h-[auto] !w-[auto]",
    },
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setTimeout(() => {
      play();
    }, 1000);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pt-4 h-screen">
      <motion.section
        className="py-14 text-center h-screen flex justify-center items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-9xl [line-height:1] fancy-font -translate-y-6">
          <motion.p variants={item} className="text-4xl">
            Hello, I'm
          </motion.p>
          {View}
          <motion.p variants={item} className="text-4xl px-16">
            A fullstack software developer based in Lillehammer, Norway
          </motion.p>
        </h1>
      </motion.section>
    </div>
  );
};
