import Image from "next/image";
import grupa from "../assets/img/Group 12.png";
import { useLanguage } from "../hooks/useLanguages";
import { text } from "../util/text";

export default function Contacts() {
  const { language } = useLanguage();

  return (
    <>
      <section
        id="contacts"
        className="text-2xl flex flex-col justify-center items-center pt-20"
      >
        <p className="mt-20 font-bold text-4xl">{text.contactss[language]}</p>
        <p className="mt-10">{text.chat[language]}</p>
        <p className="">{text.welc[language]}</p>
        <button className="mt-10 px-4 py-2 rounded-3xl bg-black text-white  ">
          {text.but[language]}
        </button>
        <div className="mt-[60px]"></div>
      </section>
      <section className="flex justify-center pb-10">
        <Image src={grupa} />
      </section>
    </>
  );
}
