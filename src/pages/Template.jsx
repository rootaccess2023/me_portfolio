import { PopupButton } from "react-calendly";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import { ButtonIndigo, Logo } from "../components";
import { SlGlobe } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

function Navigation() {
  const navList = [
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Extras", link: "/extras" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 h-20 border-b bg-zinc-50 drop-shadow-sm shadow-sm">
      <nav className="h-full max-w-[1092px] flex justify-between items-center mx-auto">
        <Logo backgroundColor="bg-black" textColor="text-white" />
        <ul className="flex items-center font-bold text-black space-x-6">
          {navList.map((nav, index) => {
            return (
              <a href={nav.link} key={index}>
                <li className="cursor-pointer text-[17px] hover:text-indigo-800">
                  {nav.name}
                </li>
              </a>
            );
          })}
          <li className="flex items-center font-bold text-lg bg-indigo-500 hover:bg-blue-800 text-white px-4 py-2 cursor-pointer">
            Contact me
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Calendly() {
  return (
    <div className="w-fit flex items-center font-bold text-lg bg-indigo-500 hover:bg-blue-800 text-white px-4 py-2 cursor-pointer">
      <PopupButton
        url="https://calendly.com/polo-revilo19"
        rootElement={document.getElementById("root")}
        text="Schedulea meeting via Calendly"
      />
    </div>
  );
}

function Footer() {
  const navList = [
    { name: "About" },
    { name: "Portfolio" },
    { name: "Extras" },
    { name: "Blog" },
  ];

  const iconList = [
    { name: <FaGithubAlt /> },
    { name: <BsFillEnvelopeFill /> },
    { name: <FaLinkedin /> },
  ];

  return (
    <footer className="bg-black py-12">
      <div className="h-96 max-w-[1140px] grid grid-cols-2 text-white mt-6 mx-auto">
        <div className="h-full flex flex-col justify-between px-4">
          <div>
            <p className="text-[23.5px] font-zilla font-semibold leading-[1.3] mb-4">
              Paulo Oliver - Front-End Developer
            </p>
            <p className="text-lg mb-4">
              Building seamless, high-performance digital experiences with
              React, TypeScript, and cutting-edge web technologies.
            </p>
            <p className="text-[23.5px] font-zilla font-semibold leading-[1.3] mb-4">
              Get in Touch
            </p>
            <p className="text-lg mb-4">
              Have a project in mind? Let&apos;s collaborate!
            </p>
            <div className="flex justify-between items-center">
              <Calendly />
              <p className="text-lg">or</p>
              <ButtonIndigo
                buttonText="Send me an email"
                link="mailto:polo.revilo19@gmail.com?subject=🤘 Hi Paulo, I'd like to hire you"
              />
            </div>
          </div>
          <Logo backgroundColor="bg-white" textColor="text-black" />
        </div>
        <div className="px-4">
          <div className="flex mb-12">
            <div className="px-8">
              <p className="text-[23.5px] font-zilla font-semibold leading-[1.3] mb-4">
                More about me
              </p>
              <ul className="flex gap-4">
                {iconList.map((icon, index) => {
                  return (
                    <li
                      key={index}
                      className="cursor-pointer hover:text-indigo-300"
                    >
                      {icon.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul className="flex flex-col gap-1 px-8">
              {navList.map((name, index) => {
                return (
                  <li
                    key={index}
                    className="text-lg cursor-pointer hover:underline"
                  >
                    {name.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="px-4">
            <div className="px-4">
              <p className="text-[23.5px] font-zilla font-semibold leading-[1.3]">
                Built with Modern Technologies
              </p>
              <p className="text-lg mb-4">
                <span className="text-indigo-300 hover:underline cursor-pointer">
                  Learn more
                </span>{" "}
                about my tech stack.
              </p>
            </div>
          </div>
          <form className="px-4 mt-12">
            <div className="flex px-4 space-x-4">
              <label
                className="flex items-center gap-2 font-zilla text-[23.5px] font-semibold"
                htmlFor="language"
              >
                <SlGlobe />
                Language
              </label>
              <div className="relative w-full">
                <select
                  className="w-full text-[19px] bg-black border-2 px-3 py-1 appearance-none pr-10"
                  name="language"
                  id="language-switcher"
                >
                  <option value="de">Deutsch</option>
                  <option value="en" selected="">
                    English
                  </option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="fy-NL">Frysk</option>
                  <option value="sw">Kiswahili</option>
                  <option value="nl">Nederlands</option>
                  <option value="pl">Polski</option>
                  <option value="pt-BR">Português</option>
                </select>
                <IoIosArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-2xl pointer-events-none" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export function Template() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="mt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
