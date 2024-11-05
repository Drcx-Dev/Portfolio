"use client";
import Image from "next/image";
import picture from "./assets/img/surat.jpg";

// import Link from "next/link";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitlem,
  Transition,
  icon,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import About from "./about/page";
import Denis from "./Denis/page";
import Skills from "./skills/page";
import Portfolio from "./portfolio/page";
import Contacts from "./contacts/page";

const links = [
  {
    url: "#home",
    text: "Home",
  },

  {
    url: "#about",
    text: "About Me",
  },
  {
    url: "#skills",
    text: "Skills",
  },
  {
    url: "#contacts",
    text: "Contacts",
  },
];
export default function Main() {
  const [openModal, setOpenModal] = useState(false);

  function closeMenu() {
    setOpenModal(false);
  }

  function openMenu() {
    setOpenModal(true);
    console.log(openModal);
  }
  return (
    <div className="">
      <nav className="w-full container mx-auto max-w-screen-xl relative ">
        <ul className="w-full md:flex justify-between font-bold text-lg py-6 border-b-2 hidden">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
        <div className="flex md:hidden z-50 absolute right-11">
          <button onClick={openMenu} className="fixed">
            <svg
              xmlns="http://www.w3.org/2000/svg "
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      <Denis />
      <Image
        src={picture}
        className=" w-full mx-auto max-w-screen-xl object-cover"
      />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
      <Transition appear show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[1100] md:hidden"
          onClose={closeMenu}
        >
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out  transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out  transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto min-h-screen bg-white w-full h-screen opacity-80">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-400 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-400 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-full h-full bg-white relative p-4 opacity-90">
                <div className="">
                  <button
                    className="absolute top-4 right-4  font-bold text-2xl"
                    onClick={closeMenu}
                  >
                    X
                  </button>
                </div>
                <Dialog.Panel>
                  <div className="flex flex-col font-bold items-center">
                    <a
                      href="#home"
                      className="py-2 relative top-4 text-2xl left-2 "
                      onClick={() => setOpenModal(false)}
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      className="py-2 pl-4 relative top-4 text-2xl"
                      onClick={() => setOpenModal(false)}
                    >
                      About
                    </a>
                    <a
                      href="#skills"
                      className="py-2 pl-4 relative top-4 text-2xl"
                      onClick={() => setOpenModal(false)}
                    >
                      Skills
                    </a>
                    <a
                      href="#contacts"
                      className="py-2 pl-4 relative top-4 text-2xl"
                      onClick={() => setOpenModal(false)}
                    >
                      Contacts
                    </a>
                    <div className=" mr-99 text-base -rotate-90 self-end pt-10">
                      <button>RU</button>{" "}
                      <button className="px-2 font-bold">|ENG</button>
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      ;
    </div>
  );
}
