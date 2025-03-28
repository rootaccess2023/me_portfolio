import { useState, useRef, useEffect, createContext } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { ButtonIndigo, Logo } from "../components";
import { FaArrowRight, FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { PopupButton } from "react-calendly";
import { IoIosArrowDown } from "react-icons/io";

// Create a context for navigation state

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navItemsRef = useRef([]);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      // Prevent scrolling on body
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure scroll is re-enabled if component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !navItemsRef.current.some((ref) => ref && ref.contains(event.target))
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Main navigation items with updated structure for dropdowns
  const navList = [
    {
      name: "About",
      link: "/about",
      dropdownContent: {
        mainSection: {
          title: "About",
          description:
            "I craft engaging web experiences that blend technical skill with design sensibility to solve business problems.",
          cta: { text: "Learn more", link: "/about" },
        },
        sections: [
          {
            title: "CAREER BACKGROUND",
            links: [
              {
                name: "Work Experience",
                link: "/about/work-experience",
                description:
                  "Professional roles and projects throughout my career.",
              },
              {
                name: "Education",
                link: "/about/education",
                description:
                  "Academic background and continued learning paths.",
              },
              {
                name: "Tech Stack",
                link: "/about/tech-stack",
                description:
                  "Tools, languages, and frameworks I specialize in.",
              },
              {
                name: "Development Approach",
                link: "/about/development-approach",
                description:
                  "My methodology and philosophy for creating software.",
              },
            ],
          },
          {
            title: "PERSONAL DETAILS",
            links: [
              {
                name: "Hobbies & Interests",
                link: "/about/hobbies",
                description: "What keeps me inspired outside of coding.",
              },
              {
                name: "Contact Information",
                link: "/about/contact",
                description: "Ways to reach me for opportunities or questions.",
              },
              {
                name: "FAQ",
                link: "/about/faq",
                description: "Common questions about my work and services.",
              },
            ],
          },
        ],
      },
    },
    {
      name: "Portfolio",
      link: "/portfolio/solutions", // Default to solutions
      dropdownContent: {
        mainSection: {
          title: "Portfolio",
          description:
            "My projects showcase intuitive web applications that deliver seamless user experiences through clean, efficient code.",
          cta: { text: "View all projects", link: "/portfolio/solutions" },
        },
        sections: [
          {
            title: "PROJECT CATEGORIES",
            links: [
              {
                name: "Solution In Action",
                link: "/portfolio/solutions",
                description:
                  "Live projects solving real-world problems with polished, production-ready implementations.",
              },
              {
                name: "Learning Lab",
                link: "/portfolio/learning-lab",
                description:
                  "Experimental projects exploring new technologies and concepts through hands-on development.",
              },
              {
                name: "My Archive",
                link: "/portfolio/archive",
                description:
                  "Historical collection of past work showcasing my professional growth and technical evolution.",
              },
            ],
          },
        ],
      },
    },
    {
      name: "Extras",
      link: "/extras",
      dropdownContent: {
        mainSection: {
          title: "Extras",
          description:
            "Explore additional resources, tools, and side projects that complement my main portfolio work.",
          cta: { text: "See Certificates", link: "/extras" },
        },
        sections: [
          {
            title: "LEARNINGS & CREDENTIALS",
            links: [
              {
                name: "Certificates",
                link: "/extras/certificates",
                description:
                  "Professional certifications and credentials showcasing specialized skills and knowledge.",
              },
              {
                name: "Events",
                link: "/extras/events",
                description:
                  "Conferences, workshops, and meetups I've attended or presented at in the tech community.",
              },
              {
                name: "Upskill",
                link: "/extras/upskill",
                description:
                  "Ongoing learning resources, courses, and materials for continuous professional development.",
              },
            ],
          },
        ],
      },
    },
    {
      name: "Blog",
      link: "/blog",
      dropdownContent: {
        mainSection: {
          title: "Blog",
          description:
            "Insights, tutorials, and thoughts on web development trends, techniques, and best practices from my professional journey.",
          cta: { text: "Read more", link: "/blog" },
        },
        sections: [
          {
            title: "FEATURED POST",
            links: [
              {
                name: "How I became a coder?",
                link: "#",
                description:
                  "My personal journey from beginner to professional developer, with key lessons and turning points.",
              },
              {
                name: "The Future of Web Development",
                link: "#",
                description:
                  "Analysis of emerging technologies and trends shaping the next generation of web applications.",
              },
              {
                name: "My Journey with JavaScript",
                link: "#",
                description:
                  "Reflections on years of working with JavaScript, from early challenges to modern frameworks.",
              },
            ],
          },
        ],
      },
    },
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

  // Handle both hover and click on nav items
  const handleNavInteraction = (index, isClick = false) => {
    if (navList[index].dropdownContent) {
      if (isClick && activeDropdown === index) {
        setActiveDropdown(null);
      } else {
        setActiveDropdown(index);
      }
      return index; // Return the index for use in the Template component
    }
    return null;
  };

  return (
    <header className="fixed top-0 w-full z-50 h-auto lg:h-20 border-b bg-zinc-50 drop-shadow-sm shadow-sm">
      <nav className="h-full max-w-[1092px] flex flex-wrap justify-between items-center mx-auto md:px-16 py-4 xl:px-0 relative">
        <div className="flex items-center px-4 lg:px-2">
          <Logo backgroundColor="bg-black" textColor="text-white" />

          {/* Desktop Navigation - Now next to the logo */}
          <ul className="hidden lg:flex items-center font-bold text-black space-x-6 ml-10">
            {navList.map((nav, index) => {
              return (
                <li
                  key={index}
                  className="relative"
                  ref={(el) => (navItemsRef.current[index] = el)}
                  onMouseEnter={() => handleNavInteraction(index)}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default navigation
                    handleNavInteraction(index, true);
                  }}
                >
                  <a
                    href={nav.link}
                    className={`cursor-pointer text-[17px] hover:text-indigo-800 py-8 ${
                      activeDropdown === index ? "text-indigo-800" : ""
                    }`}
                  >
                    {nav.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mozilla-style dropdown menu - Modified to handle single section */}
        {activeDropdown !== null && navList[activeDropdown].dropdownContent && (
          <div
            ref={dropdownRef}
            className="hidden lg:block absolute left-0 top-20 mt-0 bg-white shadow-md w-[819px] z-10 p-12"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {/* Conditional grid layout based on number of sections */}
            <div
              className={`grid ${
                navList[activeDropdown].dropdownContent.sections.length === 1
                  ? "grid-cols-2"
                  : "grid-cols-3"
              } gap-8`}
            >
              {/* Main content section (left column) */}
              <div className="col-span-1">
                <h3 className="text-2xl font-zilla italic mb-4">
                  {navList[activeDropdown].dropdownContent.mainSection.title}
                </h3>
                <p className="text-[0.95rem] mb-8">
                  {
                    navList[activeDropdown].dropdownContent.mainSection
                      .description
                  }
                </p>
                <ButtonIndigo
                  buttonText={
                    navList[activeDropdown].dropdownContent.mainSection.cta.text
                  }
                  icon={<FaArrowRight />}
                  link={
                    navList[activeDropdown].dropdownContent.mainSection.cta.link
                  }
                />
              </div>

              {/* Additional sections - if only one section, it spans the remaining columns */}
              {navList[activeDropdown].dropdownContent.sections.map(
                (section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className={`${
                      navList[activeDropdown].dropdownContent.sections
                        .length === 1
                        ? "col-span-1"
                        : "col-span-1"
                    }`}
                  >
                    <h4 className="pl-3 text-xs text-gray-600 mb-6">
                      {section.title}
                    </h4>
                    <div className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.link}
                          className="block text-base font-bold p-3 rounded-md hover:bg-violet-50 hover:text-indigo-800 hover:underline"
                        >
                          <p>{link.name}</p>
                          {link.description && (
                            <span className="text-sm font-light">
                              {link.description}
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Mobile menu button */}
        <div className="flex items-center">
          <button
            onClick={scrollToContact}
            className="hidden lg:block font-bold text-base lg:text-lg bg-indigo-500 hover:bg-indigo-800 text-white px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out"
          >
            Contact me
          </button>

          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:text-indigo-800 focus:outline-none ml-2"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <div className="h-7 w-7 flex justify-center items-center">
                <div className="relative w-6 h-6">
                  <span className="absolute top-1/2 left-0 w-full h-[3px] bg-black transform -translate-y-1/2 rotate-45"></span>
                  <span className="absolute top-1/2 left-0 w-full h-[3px] bg-black transform -translate-y-1/2 -rotate-45"></span>
                </div>
              </div>
            ) : (
              <div className="h-7 w-7 flex flex-col justify-center gap-y-[6px]">
                <span className="h-[3px] w-3/5 bg-black"></span>
                <span className="h-[3px] w-full bg-black"></span>
                <span className="h-[3px] w-4/5 bg-black"></span>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Navigation - Updated to match desktop styling */}
        <div
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } lg:hidden w-full mt-4 h-screen overflow-y-auto`}
        >
          <ul className="flex flex-col font-bold text-black">
            {navList.map((nav, index) => {
              return (
                <li key={index} className="border-b border-gray-200">
                  {nav.dropdownContent ? (
                    <details className="group">
                      <summary
                        className={`flex justify-between items-center py-4 cursor-pointer list-none hover:bg-violet-50 group-open:bg-violet-50 group-open:rounded-t-md ${
                          mobileMenuOpen ? "px-4" : ""
                        }`}
                      >
                        <span className="text-2xl hover:text-indigo-800 hover:underline">
                          {nav.name}
                        </span>
                        <div className="px-2 py-1 text-black">
                          {/* Using a single arrow with rotation transition instead of swapping icons */}
                          <div className="flex justify-center items-center transition-transform duration-100 ease-in-out group-open:rotate-180">
                            <IoIosArrowDown className="size-6" />
                          </div>
                        </div>
                      </summary>

                      <div className="p-6">
                        {/* Main content section */}
                        <div className="mb-8">
                          <p className="text-[0.95rem] font-light mb-8">
                            {nav.dropdownContent.mainSection.description}
                          </p>
                          <ButtonIndigo
                            buttonText={
                              nav.dropdownContent.mainSection.cta.text
                            }
                            icon={<FaArrowRight />}
                            link={nav.dropdownContent.mainSection.cta.link}
                          />
                        </div>

                        {/* Additional sections */}
                        {nav.dropdownContent.sections.map(
                          (section, sectionIndex) => (
                            <div key={sectionIndex} className="mb-6">
                              <h4 className="text-xs text-gray-600 mb-6">
                                {section.title}
                              </h4>
                              <div className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                  <a
                                    key={linkIndex}
                                    href={link.link}
                                    className="block text-base font-bold p-3 rounded-md hover:bg-violet-50 hover:text-indigo-800 hover:underline"
                                  >
                                    <p>{link.name}</p>
                                    {link.description && (
                                      <span className="text-sm font-light">
                                        {link.description}
                                      </span>
                                    )}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </details>
                  ) : (
                    <a
                      href={nav.link}
                      className="block cursor-pointer text-[17px] hover:text-indigo-800 py-2"
                    >
                      {nav.name}
                    </a>
                  )}
                </li>
              );
            })}
            <div className="w-full pt-4 pb-2 px-4">
              <ButtonIndigo buttonText="Contact me" onClick={scrollToContact} />
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
        className="w-full flex items-center justify-center font-bold text-base lg:text-lg bg-indigo-500 hover:bg-blue-800 text-white px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out"
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-white mb-12">
          <div>
            <p className="text-xl lg:text-[23.5px] font-zilla font-semibold leading-[1.3] mb-4">
              Paulo Oliver - Front-End Developer
            </p>
            <p className="text-base lg:text-lg mb-8">
              Building seamless, high-performance digital experiences with
              React, TypeScript, and cutting-edge web technologies.
            </p>
          </div>

          <div>
            <p className="text-xl lg:text-[23.5px] font-zilla font-semibold leading-[1.3] mb-4">
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
            <p className="text-xl lg:text-[23.5px] font-zilla font-semibold leading-[1.3] mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {navList.map((item, index) => {
                return (
                  <a href={item.link} key={index}>
                    <li className="text-base lg:text-lg cursor-pointer hover:underline hover:text-indigo-300 transition duration-300">
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
            <p className="text-xl lg:text-[23.5px] font-zilla font-semibold leading-[1.3] mb-4">
              Get in Touch
            </p>
            <p className="text-base lg:text-lg mb-6">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl lg:text-[23.5px] font-zilla font-semibold leading-[1.3]">
                Built with Modern Technologies
              </p>
              <p className="text-base lg:text-lg">
                <span className="text-indigo-300 hover:underline cursor-pointer">
                  Learn more
                </span>{" "}
                about my tech stack.
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
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
      <div className="flex-grow mt-16 lg:mt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
