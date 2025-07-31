import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Logo from "../components/svg/Logo";
import { useState } from "react";
import MenuToggle from "../components/MenuToggle";

const endpoints = [
  { href: "#home", site: "Home" },
  { href: "#experience", site: "Experience" },
  { href: "#projects", site: "Projects" },
  { href: "https://shirajuki.js.org", site: "Digital garden" },
];

const Navigation = () => {
  const opacityP = useMotionValue(0);
  const y = useMotionValue(0);
  const [prev, setPrev] = useState(0);

  const [toggled, setToggled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useMotionValue(0);
  const scale = useMotionValue("80%");

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest < prev) {
      animate(opacityP, 1, { duration: 0.25 });
      animate(y, 0, { duration: 0.15 });
    } else if (latest > 100 && latest > prev) {
      animate(opacityP, 0, { duration: 0.25 });
      animate(y, -120, { duration: 0.15 });
    }
    setPrev(latest);
  });

  const clickHandler = () => {
    setToggled((toggled) => {
      animate(opacity, toggled ? 0 : 1, { duration: 0.15 });
      animate(scale, toggled ? "80%" : "100%", {});
      animate([
        [
          "path.top",
          { d: !toggled ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
          { at: "<", duration: 0.5, ease: "easeInOut" },
        ],
        [
          "path.middle",
          { opacity: !toggled ? 0 : 1 },
          { at: "<", duration: 0.5, ease: "easeInOut" },
        ],
        [
          "path.bottom",
          { d: !toggled ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
          { at: "<", duration: 0.5, ease: "easeInOut" },
        ],
      ]);
      return !toggled;
    });
  };

  return (
    <>
      <motion.header
        initial={{
          scale: 1,
          translateX: "-50%",
          translateY: "-200%",
          opacity: 1,
        }}
        animate={{ scale: 1, translateY: "0" }}
        style={{ opacity: opacityP, y }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2.0,
        }}
        className="fixed z-50 top-6 backdrop-blur-md left-1/2 text-white items-center py-2 px-6 justify-between w-full max-w-[580px] mx-auto bg-clear rounded-full outline-primary-500 outline !hidden md:!flex"
      >
        <a href="/">
          <motion.h1
            className="text-2xl fancy-font flex items-center justify-center gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Logo />
            Jonny
          </motion.h1>
        </a>
        <nav className="flex gap-3 text-sm">
          {endpoints.map((endpoint) => (
            <motion.a
              key={endpoint.site}
              href={endpoint.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              onClick={() =>
                endpoint.href.startsWith("#") &&
                lenis.scrollTo(endpoint.href, { offset: -50, duration: 1 })
              }
              className={`hover:bg-clear rounded-md p-[0.35rem] px-2 transition-background duration-300 ${
                !endpoint.href.startsWith("#") ? "bg-clear" : ""
              }`}
            >
              {endpoint.site}
            </motion.a>
          ))}
        </nav>
      </motion.header>

      <motion.header
        initial={{ scale: 1, translateY: "-200%" }}
        animate={{ scale: 1, translateY: "0" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2.0,
        }}
        className="!flex md:!hidden fixed z-50 right-6 top-6 w-full justify-end"
      >
        <MenuToggle toggle={clickHandler} />

        <motion.nav
          style={{ scale, opacity }}
          className="fixed flex flex-col gap-3 text-sm backdrop-blur-md left-12 min-w-[90%] text-white py-3 px-6 justify-between items-start mx-auto bg-clear rounded-md outline-primary-500 outline nav"
        >
          {endpoints.map((endpoint) => (
            <motion.a
              key={endpoint.site}
              href={endpoint.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              onClick={() => {
                clickHandler();
                if (endpoint.href.startsWith("#"))
                  lenis.scrollTo(endpoint.href, { offset: -50, duration: 1 });
              }}
              className={`hover:bg-clear rounded-md p-[0.35rem] px-2 transition-background text-left duration-300 ${
                !endpoint.href.startsWith("#") ? "bg-clear" : ""
              }`}
            >
              {endpoint.site}
            </motion.a>
          ))}
        </motion.nav>
      </motion.header>

      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={`fixed w-screen h-screen z-[49] pointer-events-none transition-all ${toggled ? "bg-black/80 backdrop-blur-sm pointer-events-auto" : "backdrop-blur-none"}`}
        onClick={() => clickHandler()}
      />
    </>
  );
};

export default Navigation;
