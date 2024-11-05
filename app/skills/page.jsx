import { useLanguage } from "../hooks/useLanguages";
import Image from "next/image";

import img from "../assets/img/Group 6.png";
import Ai from "../assets/img/Group 6-1.png";
import Au from "../assets/img/Group 6-2.png";
import Figma from "../assets/img/Group 7.png";
import { text } from "../util/text";

export default function Skills() {
  const { language } = useLanguage();
  return (
    <section className="text-2xl flex flex-col justify-center items-center py-20">
      <p className="text-5xl font-bold "> {text.something[language]}</p>
      <p className="mt-10"> {text.skilswork[language]}</p>
      <div className="flex gap-20 mt-20 md:flex-row flex-col">
        <Image src={img} />
        <Image src={Ai} />
        <Image src={Au} />
        <Image src={Figma} />
      </div>
    </section>
  );
}
