import { useEffect, useRef } from "react";

const findFirstParentArticle = (
  element: HTMLElement | null
): HTMLElement | null => {
  if (element?.tagName === "BODY" || element === null) return null;
  if (element?.tagName === "ARTICLE") return element;
  return findFirstParentArticle(element.parentElement || null);
};

const Spotlight = () => {
  const spotlightRef: any = useRef<HTMLDivElement>(null);

  // Mouse cursor
  useEffect(() => {
    if (spotlightRef.current === null) return;

    function handleOnMouseMove(e: MouseEvent) {
      spotlightRef.current.style.background = `radial-gradient(600px at ${e.pageX}px ${e.pageY}px, rgba(207,194,232,0.05), transparent 80%)`;
      const article = findFirstParentArticle(e.target as HTMLElement);
      if (article === null) return;
      const rect = article.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      article.style.setProperty("--x", x + "px");
      article.style.setProperty("--y", y + "px");
      if (x > rect.width - rect.width / 4) {
        article.style.setProperty("--rotate", "5deg");
      } else if (x < rect.width / 4) {
        article.style.setProperty("--rotate", "-5deg");
      } else {
        article.style.setProperty("--rotate", "0deg");
      }
    }
    function handleResize() {
      spotlightRef.current.style.height = document.body.scrollHeight + "px";
    }
    handleResize();
    document.addEventListener("mousemove", handleOnMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousemove", handleOnMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [spotlightRef.current]);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none absolute inset-0 z-10 transition duration-300"
    ></div>
  );
};
export default Spotlight;
