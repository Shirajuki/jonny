import { motion } from 'framer-motion';
import Logo from '../components/svg/Logo';

const endpoints = [
  { href: '#home', site: 'Home' },
  { href: '#experience', site: 'Experience' },
  { href: '#projects', site: 'Projects' },
  { href: 'https://shirajuki.js.org', site: 'Digital garden' },
];
const Navigation = () => {
  return (
    <motion.header
      initial={{ scale: 1, translateX: '-50%', translateY: '-200%' }}
      animate={{ scale: 1, translateY: '0' }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 2.0,
      }}
      className="fixed z-50 top-6 backdrop-blur-md left-1/2 flex text-white items-center py-2 px-12 justify-between w-full max-w-[640px] mx-auto bg-clear rounded-full outline-primary-500 outline"
    >
      <a href="/">
        <motion.h1
          className="text-2xl fancy-font flex items-center justify-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
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
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            onClick={() => endpoint.href.startsWith('#') && lenis.scrollTo(endpoint.href, { offset: -50, duration: 1 })}
            className="hover:bg-clear rounded-md p-[0.35rem] px-2 transition-background duration-300"
          >
            {endpoint.site}
          </motion.a>
        ))}
      </nav>
    </motion.header>
  );
};

export default Navigation;
