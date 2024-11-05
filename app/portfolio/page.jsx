import { useLanguage } from "../hooks/useLanguages";

import Image from "next/image";
import girl from "../assets/img/image.png";
import black from "../assets/img/imgs.png";
import camera from "../assets/img/camera.png";
import { text } from "../util/text";

export default function Portfolio() {
  const { language } = useLanguage();

  return (
    <>
      <section
        id="skills"
        className="text-2xl flex flex-col justify-center items-center py-20 bg-slate-200"
      >
        <p className="text-5xl font-bold relative bottom-10">
          {text.portfolio[language]}
        </p>
        <div>
          <Image
            src={girl}
            className=" w-full container mx-auto max-w-screen-xl md:flex-row flex-col"
          />
        </div>
      </section>
      <section className="text-2xl flex flex-col justify-center items-center py-20 bg-slate-200">
        <p className="relative bottom-[75px]">Online fashon store-Homepage</p>
        <hr />
        <div>
          <Image
            src={black}
            className=" w-full container mx-auto max-w-screen-xl md:flex-row flex-col "
          />
        </div>
      </section>
      <section className="text-2xl flex flex-col justify-center items-center py-20 bg-slate-200">
        <p className="relative bottom-20">Reebok Store-Consept</p>
        <hr />
        <div>
          <Image
            src={camera}
            className="w-full container mx-auto max-w-screen-xl md:flex-row flex-col"
          />
        </div>
        <p className="pt-12 text-center">Braun Landing Page-Concept</p>
      </section>
    </>
  );
}
