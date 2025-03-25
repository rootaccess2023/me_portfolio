import { PopupButton } from "react-calendly";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import { ButtonIndigo, Logo } from "../components";
import { SlGlobe } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navList = [
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Extras", link: "/extras" },
    { name: "Blog", link: "/blog" },
  ];

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('[data-section="contact"]');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 h-auto md:h-20 border-b bg-zinc-50 drop-shadow-sm shadow-sm">
      <nav className="h-full max-w-[1092px] flex flex-wrap justify-between items-center mx-auto px-4 py-4 md:py-0">
        <Logo backgroundColor="bg-black" textColor="text-white" />

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:text-indigo-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center font-bold text-black space-x-6">
          {navList.map((nav, index) => {
            return (
              <a href={nav.link} key={index}>
                <li className="cursor-pointer text-[17px] hover:text-indigo-800">
                  {nav.name}
                </li>
              </a>
            );
          })}
          <button
            onClick={scrollToContact}
            className="font-bold text-base md:text-lg bg-indigo-500 hover:bg-indigo-800 text-white px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out"
          >
            Contact me
          </button>
        </ul>

        {/* Mobile Navigation */}
        <div
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } md:hidden w-full mt-4`}
        >
          <ul className="flex flex-col font-bold text-black space-y-4 pb-4">
            {navList.map((nav, index) => {
              return (
                <a href={nav.link} key={index}>
                  <li className="cursor-pointer text-[17px] hover:text-indigo-800 py-2 border-b border-gray-200">
                    {nav.name}
                  </li>
                </a>
              );
            })}
            <div className="w-full">
              <button
                onClick={scrollToContact}
                className="w-full font-bold text-base md:text-lg bg-indigo-500 hover:bg-indigo-800 text-white px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out"
              >
                Contact me
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function Calendly() {
  return (
    <div className="w-full sm:w-fit">
      <PopupButton
        url="https://calendly.com/polo-revilo19"
        rootElement={document.getElementById("root")}
        text="Schedule a meeting via Calendly"
        className="w-full flex items-center justify-center font-bold text-base md:text-lg bg-indigo-500 hover:bg-blue-800 text-white px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out"
      />
    </div>
  );
}

function Footer() {
  const navList = [
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Extras", link: "/extras" },
    { name: "Blog", link: "/blog" },
  ];

  const iconList = [
    { name: <FaGithubAlt size={20} />, link: "https://github.com/" },
    {
      name: <BsFillEnvelopeFill size={20} />,
      link: "mailto:polo.revilo19@gmail.com",
    },
    { name: <FaLinkedin size={20} />, link: "https://linkedin.com/" },
  ];

  return (
    <footer className="bg-black py-12">
      <div className="max-w-[1140px] mx-auto px-8">
        {/* Row 1: Developer info, More about me, Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white mb-12">
          <div>
            <p className="text-xl md:text-[23.5px] font-zilla font-semibold leading-[1.3] mb-4">
              Paulo Oliver - Front-End Developer
            </p>
            <p className="text-base md:text-lg mb-8">
              Building seamless, high-performance digital experiences with
              React, TypeScript, and cutting-edge web technologies.
            </p>
          </div>

          <div>
            <p className="text-xl md:text-[23.5px] font-zilla font-semibold leading-[1.3] mb-4">
              More about me
            </p>
            <ul className="flex gap-6">
              {iconList.map((icon, index) => {
                return (
                  <a href={icon.link} key={index}>
                    <li className="cursor-pointer hover:text-indigo-300 transition duration-300">
                      {icon.name}
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="text-xl md:text-[23.5px] font-zilla font-semibold leading-[1.3] mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {navList.map((item, index) => {
                return (
                  <a href={item.link} key={index}>
                    <li className="text-base md:text-lg cursor-pointer hover:underline hover:text-indigo-300 transition duration-300">
                      {item.name}
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Row 2: Get in Touch section */}
        <div
          className="text-white border-t border-gray-800 pt-12 mb-12"
          data-section="contact"
        >
          <div>
            <p className="text-xl md:text-[23.5px] font-zilla font-semibold leading-[1.3] mb-4">
              Get in Touch
            </p>
            <p className="text-base md:text-lg mb-6">
              Have a project in mind? Let&apos;s collaborate!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Calendly />
              <p className="text-lg my-2 sm:my-0 sm:mx-4">or</p>
              <ButtonIndigo
                buttonText="Send me an email"
                link="mailto:polo.revilo19@gmail.com?subject=🤘 Hi Paulo, I'd like to hire you"
                icon={<BsFillEnvelopeFill className="w-4 h-4" />}
              />
            </div>
          </div>
        </div>

        {/* Row 3: Built with Modern Technologies and Logo */}
        <div className="text-white border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl md:text-[23.5px] font-zilla font-semibold leading-[1.3]">
                Built with Modern Technologies
              </p>
              <p className="text-base md:text-lg">
                <span className="text-indigo-300 hover:underline cursor-pointer">
                  Learn more
                </span>{" "}
                about my tech stack.
              </p>
            </div>

            <div className="flex justify-start md:justify-end">
              <Logo backgroundColor="bg-white" textColor="text-black" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Template() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-grow mt-16 md:mt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
