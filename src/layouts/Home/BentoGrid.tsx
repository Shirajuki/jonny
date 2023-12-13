import Skills from '../../components/Skills';

const social = [
  {
    name: 'X',
    url: 'https://x.com/shirajuki',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="w-12 h-12">
        <path
          fill="currentColor"
          d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
        />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/shirajuki',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="w-12 h-12">
        <path
          fill="currentColor"
          d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shirajuki/',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="w-12 h-12">
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:jonny@ngoluong.no',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="w-12 h-12">
        <path
          fill="currentColor"
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64L12 9.548l6.545-4.91l1.528-1.145C21.69 2.28 24 3.434 24 5.457"
        />
      </svg>
    ),
  },
];

const BentoGrid = () => {
  return (
    <article id="content">
      <div className="grid grid-cols-3 gap-8 text-sm">
        {/* About me */}
        <article className="p-6 bg-clear backdrop-blur-md outline outline-primary-500 rounded-lg col-span-2 flex flex-col gap-4 hover:scale-[1.025] transition-transform duration-500">
          <p className="bg-clear backdrop-blur-md rounded-lg p-4 h-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolore harum. Odit architecto, dolorum
            iste, nobis eum dolor facilis deserunt at fugit nemo ut itaque tenetur illum dignissimos doloremque
            exercitationem.
          </p>
          <p className="bg-clear backdrop-blur-md rounded-lg p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt et dolore vitae ex vel?
          </p>
        </article>

        {/* Social medias */}
        <article className="p-6  bg-clear backdrop-blur-md outline outline-primary-500 rounded-lg grid grid-cols-2 gap-4 hover:scale-[1.025] transition-transform duration-500">
          {social.map((link) => (
            <div className="bg-clear flex py-2 px-5 justify-center items-center rounded-lg">
              <a href={link.url}>{link.icon()}</a>
            </div>
          ))}
        </article>

        {/* Skills */}
        <article className="p-2 bg-clear backdrop-blur-md outline outline-primary-500 rounded-lg hover:scale-[1.025] transition-transform duration-500">
          <Skills />
        </article>

        {/* Cybersecurity + digital garden */}
        <article className="flex flex-col justify-between p-6 bg-clear backdrop-blur-md outline outline-primary-500 rounded-lg col-span-2 hover:scale-[1.025] transition-transform duration-500">
          <p className="bg-clear backdrop-blur-md rounded-lg p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolore harum. Odit architecto, dolorum
            iste, nobis eum dolor facilis deserunt at fugit nemo ut itaque tenetur illum dignissimos doloremque
            exercitationem.
          </p>
          <div className="flex justify-end">
            <button className="bg-primary-500 w-8 h-8 rounded-md">
              <a href="https://shirajuki.js.org/">X</a>
            </button>
          </div>
        </article>
      </div>
    </article>
  );
};
export default BentoGrid;
