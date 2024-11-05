import Language from "../change.language";
import { useLanguage } from "../hooks/useLanguages";
import { text } from "../util/text.js";
export default function Denis() {
  const { language } = useLanguage();

  return (
    <section>
      <div className="w-full flex justify-between md:flex-row flex-col font bold text-lg py-12 container mx-auto max-w-screen-xl md:items-end items-start ">
        <p className="text-3xl md:text-5xl">
          {text.name[language]} <br /> {text.seconName[language]}
        </p>
        <div className="w-full flex text-base mt-10 md:ml-80 ml-0 ">
          <p>{text.shortbio[language]}</p>
        </div>
        <Language />
      </div>
    </section>
  );
}
