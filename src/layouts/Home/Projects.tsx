import ProjectCard from "../../components/ProjectCard";
import ScrollingHeading from "../../components/ScrollingHeading";

const projects = [
  {
    title: "VSAiT Web",
    image: {
      src: "/projects/vsait.jpg",
      alt: "VSAiT Web",
    },
    description:
      "A membership management system built with a modern tech stack for the student organisation, VSAiT, that manages events and registrations for their members. TypeScript and Next.js were utilized for its enhanced code quality, maintainability and robustness. This is a project that is still being worked on, the demo may subject to change.",
    stack: [
      "Next.js",
      "TypeScript",
      "MySQL",
      "TailwindCSS",
      "Prisma",
      "React Query",
      "Jotai",
    ],
    links: [
      { type: "demo", href: "https://www.vsait.org/" },
      { type: "github", href: "https://github.com/vsaIT/vsait.org" },
      {
        type: "figma",
        href: "https://www.figma.com/file/8WEtfHLJZxjADUfiSiEOKS/VsaIT",
      },
    ],
  },
  {
    title: "Anki-redesign",
    image: {
      src: "/projects/anki-redesign.jpg",
      alt: "Anki-redesign",
    },
    description:
      "A theming add-on, developed with Python 3 and Qt5, enhancing the popular spaced repetition-based flipcard application, Anki. This add-on addresses the outdated interface and poor user experience prevalent in the older version, and aims to make the application more enjoyable for users, thereby aiding their studies. With 67k downloads, it has significantly contributed to improving the user experience of many.",
    stack: ["Qt5", "Python 3"],
    links: [
      { type: "demo", href: "https://ankiweb.net/shared/info/308574457" },
      { type: "github", href: "https://github.com/Shirajuki/anki-redesign" },
    ],
  },
  {
    title: "HSK-flip-card",
    image: {
      src: "/projects/hsk-flip-card.jpg",
      alt: "HSK-flip-card",
    },
    description: `
    <p>A Progressive Web App made using HTML, CSS and javascript. Works as a flipcard mobile webapp used to memorize and learn chinese characters.
    <ul>
      <li>Possible for either Simplified- or Traditional chinese characters</li>
      <li>Cards learnt are saved using LocalStorage</li>
      <li>Spaced Repetition Study algorithm built in, using a custom algorithm of SM-2</li>
    </ul>
    </p>`,
    stack: ["JavaScript", "HTML5", "CSS3", "Web Storage API"],
    links: [
      { type: "demo", href: "https://shirajuki.js.org/hsk-flip-card/" },
      { type: "github", href: "https://github.com/Shirajuki/hsk-flip-card" },
    ],
  },
];

const smallProjects = [
  {
    title: "Daily Planner",
    image: {
      src: "/projects/dailyplanner.jpg",
      alt: "Daily Planner",
    },
    links: [
      { type: "demo", href: "https://shirajuki.js.org/daily-planner/" },
      { type: "github", href: "https://github.com/Shirajuki/daily-planner" },
      {
        type: "figma",
        href: "https://www.figma.com/file/1jsHNKFAHhiX95oUz7eEJo/Daily-Planner?node-id=0%3A1",
      },
    ],
  },
  {
    title: "Jukirecipes",
    image: {
      src: "/projects/jukirecipes.jpg",
      alt: "Jukirecipes",
    },
    links: [
      { type: "demo", href: "https://shirajuki.js.org/jukirecipes/" },
      { type: "github", href: "https://github.com/Shirajuki/jukirecipes" },
      {
        type: "figma",
        href: "https://www.figma.com/file/ptIEWo50Ftxj3I791KzNSA/Jukirecipes?node-id=0%3A1",
      },
    ],
  },
  {
    title: "NTNUi Taekwondo",
    image: {
      src: "/projects/ntnui-tkd.jpg",
      alt: "NTNUi Taekwondo",
    },
    links: [{ type: "demo", href: "https://tkd.no/" }],
  },
  {
    title: "Digital Descent",
    image: {
      src: "/projects/digital-descent.jpg",
      alt: "Digital Descent",
    },
    links: [
      { type: "demo", href: "https://shirajuki.js.org/digital-descent/" },
      { type: "github", href: "https://github.com/Shirajuki/digital-descent" },
    ],
  },
  {
    title: "Battleship",
    image: {
      src: "/projects/battleship.jpg",
      alt: "Daily Planner",
    },
    links: [
      { type: "demo", href: "https://shirajuki.js.org/battleship/" },
      { type: "github", href: "https://github.com/Shirajuki/battleship" },
    ],
  },
  {
    title: "Aqua",
    image: {
      src: "/projects/aqua.jpg",
      alt: "Daily Planner",
    },
    links: [
      { type: "demo", href: "https://shirajuki.js.org/aqua/" },
      { type: "github", href: "https://github.com/Shirajuki/aqua" },
    ],
  },
  {
    title: "JS rendering benchmark",
    image: {
      src: "/projects/js-rendering-benchmark.jpg",
      alt: "JavaScript Game Rendering Benchmark",
    },
    links: [
      {
        type: "demo",
        href: "https://shirajuki.js.org/js-game-rendering-benchmark/",
      },
      {
        type: "github",
        href: "https://github.com/Shirajuki/js-game-rendering-benchmark",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <ScrollingHeading
        heading="PROJECTS"
        wrap={[-4, -80]}
        className="!translate-y-10 text-white [text-shadow:initial] [--webkit-text-stroke:3px_white]"
      />
      <ScrollingHeading
        heading="PROJECTS"
        wrap={[-4, -80]}
        className="!translate-y-44"
        baseVelocity={-5}
      />

      <h2 className="text-center text-4xl font-bold pt-72 pb-8 tracking-wide opacity-0">
        Projects
      </h2>
      <div className="flex flex-col gap-12 mb-12">
        {projects.map((project, i) => (
          <ProjectCard key={`projects-${i}`} project={project} />
        ))}
      </div>

      <article className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {smallProjects.map((project, i) => (
          <ProjectCard
            key={`sm-projects-${i}`}
            project={project}
            type="small"
          />
        ))}
      </article>

      <div className="pt-6">
        <a
          href="/projects"
          className="inline-flex items-center justify-between gap-3 bg-primary-100 h-8 text-sm rounded-md p-[0.35rem] px-3 hover:brightness-125 hover:scale-105 transition-all duration-500"
        >
          <p>View full project archive</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
export default Projects;
