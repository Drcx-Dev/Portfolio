import { useLanguage } from "../hooks/useLanguages";
import { text } from "../util/text";

export default function About() {
  const { language } = useLanguage();
  return (
    <section
      id="about"
      className=" mt-10 text-2xl flex flex-col justify-center items-center py-20 gap-6 bg-neutral-200 "
    >
      <p
        className="text-5xl font-bold"
        dangerouslySetInnerHTML={{ __html: text.about[language] }}
      ></p>
      <div className="w-1/2 flex flex-col text-center gap-6">
        <p>{text.abouttext[language]}</p>
        <p>{text.abouttext1[language]}</p>
        <p>{text.abouttext2[language]}</p>
      </div>
    </section>
  );
}
