import { useState } from "react";
import {
  RiComputerFill,
  RiServerFill,
  RiMessage2Fill,
  RiCheckboxFill,
  RiHeart2Fill,
  RiGridFill,
  RiMapPinFill,
  RiStockFill,
  RiCalendarFill,
  RiArticleFill,
  RiGraduationCapFill,
} from "react-icons/ri";
import { FaUserCircle, FaChess, FaShip } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  MdMap,
  MdPeople,
  MdHistory,
  MdSettings,
  MdAlarm,
  MdOutlineWork,
  MdShield,
} from "react-icons/md";
import { SubTitle, SubDescription } from "../../components";
import avionSchool from "../../assets/avion_school.png";
import ntmaSchool from "../../assets/ntma_logo.png";

// Reusable expandable section component
const ExpandableSection = ({ description, children, border }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details className={border}>
      <summary
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center py-3 sm:py-4 border-stone-300 list-none cursor-pointer"
      >
        <span className="text-sm sm:text-base md:text-lg font-light">
          {description}
        </span>
        <img
          src={
            isOpen
              ? "https://assets.mofoprod.net/static/_images/minus-circle.svg"
              : "https://assets.mofoprod.net/static/_images/plus-circle.07f676a21c6b.svg"
          }
          alt="toggle icon"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      </summary>
      <div className="pb-3 sm:pb-4">{children}</div>
    </details>
  );
};

// Reusable technology card component
const TechStackCard = ({ icon: Icon, title, items }) => (
  <div className="w-full border hover:border-black p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-md">
    <Icon className="text-indigo-500 text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4" />
    <h1 className="font-zilla text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">
      {title}
    </h1>
    <ul className="list-disc pl-4 md:pl-5 text-gray-700 text-sm md:text-base">
      {items.map((item, index) => (
        <li key={index} className="mb-1 md:mb-2">
          <strong>{item.name}</strong> – {item.description}
        </li>
      ))}
    </ul>
  </div>
);

// Reusable project card component
const ProjectCard = ({ icon: Icon, title, description, link }) => (
  <div className="w-full border hover:border-black p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-md">
    {Icon && (
      <Icon className="text-indigo-500 text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4" />
    )}
    {title && Icon && !title.includes("NYK") && !title.includes("Grace") ? (
      <h1 className="font-zilla text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">
        {title}
      </h1>
    ) : title ? (
      <div className="flex gap-2 sm:gap-4 items-center">
        <h1 className="font-zilla text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">
          {title}
        </h1>
      </div>
    ) : null}

    {description.position && (
      <p className="font-semibold text-sm md:text-base mb-2 sm:mb-3 md:mb-4">
        {description.position}
      </p>
    )}

    <div className="flex flex-col gap-1 sm:gap-2 text-gray-700 text-sm md:text-base">
      <p>
        {description.text && <strong>{description.appName || title}</strong>}{" "}
        {description.text}
      </p>
      {description.additionalText && (
        <p className="font-light mb-2 sm:mb-3 md:mb-4">
          {description.additionalText}
        </p>
      )}

      {link && (
        <a
          href={link}
          className="relative flex items-center gap-2 text-indigo-500 group"
        >
          <span className="group-hover:underline transition-all ease-in-out duration-300">
            Explore
          </span>
          <FaArrowRightLong className="absolute -z-10 text-white left-10 group-hover:text-indigo-500 group-hover:left-16 transition-all ease-in-out duration-300" />
        </a>
      )}
    </div>
  </div>
);

// Reusable info card component for longer descriptions
const InfoCard = ({ icon: Icon, title, paragraphs }) => (
  <div className="w-full border hover:border-black p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-md">
    <Icon className="text-indigo-500 text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4" />
    <h1 className="font-zilla text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">
      {title}
    </h1>
    {paragraphs.map((paragraph, index) => (
      <p
        key={index}
        className="font-light text-sm md:text-base mb-2 sm:mb-3 md:mb-4"
      >
        {paragraph}
      </p>
    ))}
  </div>
);

function Education() {
  // Education data - structured to make it maintainable
  const educationData = [
    {
      school: "Avion School",
      logo: avionSchool,
      degree: "Full Stack Developer",
      period: "Avion School | Dec 2023 - Jul 2024",
      sections: [
        {
          title: "Front End Development",
          border: "border-b",
          content: [
            // Row 1
            [
              {
                type: "tech",
                icon: RiComputerFill,
                title: "Tech Stack",
                items: [
                  {
                    name: "Basics",
                    description: "Understanding HTML, CSS, and JavaScript",
                  },
                  { name: "React", description: "Component-based UI" },
                  {
                    name: "Tailwind CSS",
                    description: "Utility-first styling",
                  },
                ],
              },
              {
                type: "project",
                icon: FaUserCircle,
                title: "Banking App",
                description: {
                  appName: "Argent",
                  text: "is a secure React-based banking app for managing accounts, transfers, and budgeting.",
                },
                link: "#",
              },
            ],
            // Row 2
            [
              {
                type: "project",
                icon: RiMessage2Fill,
                title: "Room",
                description: {
                  text: "is a secure messaging app for chatting and sharing media.",
                },
                link: "#",
              },
              {
                type: "project",
                icon: FaChess,
                title: "Chess",
                description: {
                  text: "is a secure messaging app for chatting and sharing media.",
                },
                link: "#",
              },
            ],
            // Row 3
            [
              {
                type: "project",
                icon: RiHeart2Fill,
                title: "Tribute",
                description: {
                  text: "is a secure messaging app for chatting and sharing media.",
                },
                link: "#",
              },
              {
                type: "project",
                icon: RiCheckboxFill,
                title: "Forms",
                description: {
                  text: "is a secure messaging app for chatting and sharing media.",
                },
                link: "#",
              },
            ],
            // Row 4
            [
              {
                type: "project",
                icon: RiGridFill,
                title: "Blog",
                description: {
                  text: "is a secure messaging app for chatting and sharing media.",
                },
                link: "#",
              },
              {
                type: "empty",
              },
            ],
          ],
        },
        {
          title: "Back End Development",
          border: "border-none",
          content: [
            // Row 1
            [
              {
                type: "tech",
                icon: RiServerFill,
                title: "Tech Stack",
                items: [
                  {
                    name: "Ruby",
                    description: "A dynamic, object-oriented language.",
                  },
                  {
                    name: "Ruby on Rails",
                    description: "A convention-driven web framework.",
                  },
                  {
                    name: "PostgreSQL",
                    description: "A powerful, open-source database.",
                  },
                ],
              },
              {
                type: "project",
                icon: RiMapPinFill,
                title: "POGO",
                description: {
                  appName: "Argent",
                  text: "is a secure React-based banking app for managing accounts, transfers, and budgeting.",
                },
                link: "#",
              },
            ],
            // Row 2
            [
              {
                type: "project",
                icon: RiStockFill,
                title: "Investo",
                description: {
                  text: "is a secure messaging app for chatting and sharing media.",
                },
                link: "#",
              },
              {
                type: "project",
                icon: RiCalendarFill,
                title: "Journal",
                description: {
                  text: "is a secure messaging app for chatting and sharing media.",
                },
                link: "#",
              },
            ],
            // Row 3
            [
              {
                type: "project",
                icon: RiArticleFill,
                title: "Blog",
                description: {
                  text: "is a secure messaging app for chatting and sharing media.",
                },
                link: "#",
              },
              {
                type: "empty",
              },
            ],
          ],
        },
      ],
    },
    {
      school: "NYK-TDG Maritime Academy",
      logo: ntmaSchool,
      degree: "BS Marine Transportation",
      period: "NYK-TDG Maritime Academy | 2013 - 2017",
      sections: [
        {
          title: "Awards & Scholarship",
          border: "border-b",
          content: [
            // Row 1
            [
              {
                type: "info",
                icon: MdMap,
                title: "Navigational Watchkeeping",
                paragraphs: [
                  "The Third Officer ensures safe navigation, maintains navigational equipment, and manages charts and logbooks.",
                ],
              },
              {
                type: "info",
                icon: MdPeople,
                title: "Crew Management",
                paragraphs: [
                  "Oversees the crew's duties, coordinates training, and ensures compliance with maritime regulations.",
                ],
              },
            ],
            // Row 2
            [
              {
                type: "info",
                icon: MdHistory,
                title: "Record Keeping",
                paragraphs: [
                  "Maintains accurate records of all navigational activities, weather conditions, and ship operations.",
                ],
              },
              {
                type: "info",
                icon: MdSettings,
                title: "Equipment Maintenance",
                paragraphs: [
                  "Ensures all navigational and safety equipment is properly maintained and operational at all times.",
                ],
              },
            ],
            // Row 3
            [
              {
                type: "info",
                icon: MdAlarm,
                title: "Watch Duty Management",
                paragraphs: [
                  "Coordinates the crew's watchkeeping schedules to ensure safe and continuous operation of the vessel.",
                ],
              },
              {
                type: "info",
                icon: MdOutlineWork,
                title: "Operational Support",
                paragraphs: [
                  "Supports the captain and officers in operational decision-making, ensuring safe and efficient voyages.",
                ],
              },
            ],
          ],
        },
        {
          title: "Training Ships",
          border: "border-b",
          content: [
            // Row 1
            [
              {
                type: "project",
                icon: FaShip,
                title: "NYK Remus",
                description: {
                  position: "Deck Cadet.",
                  additionalText:
                    "Container ship (IMO: 9633824), flag of Panama. LOA: 334.99m, width: 42.8m. Designed for containerized cargo transport.",
                },
              },
              {
                type: "project",
                icon: FaShip,
                title: "Grace Cosmos",
                description: {
                  position: "Deck Cadet.",
                  additionalText:
                    "General cargo vessel (IMO: 9487636), flag of Marshall Islands. LOA: 220m, width: 32.5m. Transports general cargo and heavy lift items.",
                },
              },
            ],
          ],
        },
        {
          title: "Program",
          border: "",
          content: [
            // Row 1
            [
              {
                type: "info",
                icon: RiGraduationCapFill,
                title: "BSMT",
                paragraphs: [
                  "BSMT is a four-year diploma program leading to the career of a Marine Deck Officer, i.e., Third Officer, Second Officer, Chief Officer and finally Captain. Graduates of this program can also hold positions on land such as Ship Manager, Shipping Company Executive, Crewing Manager or Harbor Pilot, among others.",
                  "After successfully passing the three (3) years of academic requirements, all cadets are required to take the one year onboard training. Training onboard ships is a pre-requisite to graduation in accordance with 1978 STCW Convention, as amended, and the policies and standards of the CHED. NTMA guarantees shipboard training to all NTMA cadets onboard NYK Line vessels.",
                ],
              },
              {
                type: "info",
                icon: MdShield,
                title: "Program",
                paragraphs: [
                  "The quality of NTMA's maritime education is customized to ensure that Cadets acquire the necessary knowledge and skills for them to be successful Marine Deck and Engine Officers. NTMA offers baccalaureate degrees in Marine Transportation and Marine Engineering.",
                  "The Academy implements the 3-1 Curriculum where the first three (3) years are spent in the Campus and one (1) year onboard training. Training onboard ships is a pre-requisite to graduation in accordance with 1978 STCW Convention, as amended, and the policies and standards of the Commission on Higher Education (CHED).",
                ],
              },
            ],
          ],
        },
      ],
    },
  ];

  // Helper function to render a row of content
  const renderContentRow = (row, rowIndex) => (
    <div
      key={`row-${rowIndex}`}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4"
    >
      {row.map((item, itemIndex) => {
        if (item.type === "tech") {
          return (
            <TechStackCard
              key={`tech-${rowIndex}-${itemIndex}`}
              icon={item.icon}
              title={item.title}
              items={item.items}
            />
          );
        } else if (item.type === "project") {
          return (
            <ProjectCard
              key={`project-${rowIndex}-${itemIndex}`}
              icon={item.icon}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          );
        } else if (item.type === "info") {
          return (
            <InfoCard
              key={`info-${rowIndex}-${itemIndex}`}
              icon={item.icon}
              title={item.title}
              paragraphs={item.paragraphs}
            />
          );
        } else if (item.type === "empty") {
          return (
            <div
              key={`empty-${rowIndex}-${itemIndex}`}
              className="w-full hidden sm:block"
            ></div>
          );
        }
        return null;
      })}
    </div>
  );

  return (
    <div className="mb-8 md:mb-12 max-w-[1140px] mx-auto px-4 sm:px-6">
      {educationData.map((education, idx) => (
        <div key={`education-${idx}`} className="w-full mb-6 sm:mb-8 border-b">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <img
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-2 sm:mb-0"
              src={education.logo}
              alt={education.school}
            />
            <div className="w-full mb-6 sm:mb-8">
              <SubTitle subtitle={education.degree} />
              <SubDescription subdescription={education.period} />

              {education.sections.map((section, sectionIdx) => (
                <ExpandableSection
                  key={`section-${idx}-${sectionIdx}`}
                  description={section.title}
                  border={section.border}
                >
                  <div className="w-full">
                    {section.content.map((row, rowIdx) =>
                      renderContentRow(row, rowIdx)
                    )}
                  </div>
                </ExpandableSection>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
