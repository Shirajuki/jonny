import { motion } from "framer-motion";

export const HeroLottieWrapper = () => {
  return (
    <motion.div
      className="absolute overflow-hidden top-8 left-1/2 -translate-x-1/2 w-[calc(100vw-4rem)] h-[calc(100vh-4rem)] [mask:linear-gradient(0deg,transparent,white_30%,white_70%,transparent)] opacity-40 rounded-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 2.1,
        duration: 20,
      }}
    >
      <div className="w-full h-full overflow-hidden rounded-3xl [background-image:url(/hero.webp)] bg-cover bg-center [box-shadow:inset_0px_0px_40px_20px_rgba(0,0,0,0.75)] [mask:linear-gradient(90deg,transparent,white_30%,white_70%,transparent)]" />
    </motion.div>
  );
};
