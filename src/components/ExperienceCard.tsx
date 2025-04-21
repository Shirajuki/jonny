import Card from "./Card";
import Link from "./svg/Link";

type Props = {
  experience: {
    title: string;
    company: string;
    date: string;
    description: string;
    stack: string[];
    href: string;
  };
};
const ExperienceCard = ({ experience }: Props) => {
  return (
    <Card className="flex flex-col gap-2 sm:flex-row">
      <div className="text-gray sm:w-3/12 text-left leading-3 text-sm pt-2">
        <p>{experience.date}</p>
      </div>
      <section className="grid grid-cols-2 text-gray w-full gap-4">
        <h3 className="text-white text-lg font-bold">
          {experience.title} · {experience.company}
        </h3>
        <article className="flex gap-2 justify-end text-white">
          <a
            href={experience.href}
            className="flex items-center justify-center bg-primary-100 w-8 h-8 rounded-md p-[0.35rem] hover:brightness-125 hover:scale-105 transition-all duration-500"
          >
            <Link />
          </a>
        </article>
        <div
          className="col-span-2"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: experience.description }}
        />
        <p className="col-span-2">{experience.stack.join(" · ")}</p>
      </section>
    </Card>
  );
};
export default ExperienceCard;
