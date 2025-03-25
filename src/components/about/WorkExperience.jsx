import { useState } from "react";
import {
  MdMap,
  MdPeople,
  MdHistory,
  MdSettings,
  MdAlarm,
  MdOutlineWork,
  MdShield,
  MdCheckCircle,
  MdSchool,
  MdStar,
} from "react-icons/md";
import { FaShip } from "react-icons/fa";
import { SubTitle, SubDescription } from "../../components";
import rgsLogo from "../../assets/RGS_logo.png";
import nykLogo from "../../assets/NYK_logo.png";

// Reusable collapsible section component
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

// Reusable card component for job responsibilities
const ResponsibilityCard = ({ icon: Icon, title, description }) => (
  <div className="w-full border hover:border-black p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-md">
    <Icon className="text-indigo-500 text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4" />
    <h1 className="font-zilla text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">
      {title}
    </h1>
    <p className="font-light text-sm sm:text-base mb-2 sm:mb-3 md:mb-4">
      {description}
    </p>
  </div>
);

// Reusable card component for vessel information
const VesselCard = ({ name, position, description }) => (
  <div className="w-full border hover:border-black p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-md">
    <div className="flex gap-2 sm:gap-4 items-center">
      <FaShip className="text-indigo-500 text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4" />
      <h1 className="font-zilla text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">
        {name}
      </h1>
    </div>
    <p className="font-semibold text-sm sm:text-base mb-2 sm:mb-3 md:mb-4">
      {position}
    </p>
    <p className="font-light text-sm sm:text-base mb-2 sm:mb-3 md:mb-4">
      {description}
    </p>
  </div>
);

// WorkExperience component
function WorkExperience() {
  // Job responsibilities data
  const jobResponsibilities = [
    {
      icon: MdMap,
      title: "Navigational Watchkeeping",
      description:
        "The Third Officer ensures safe navigation, maintains navigational equipment, and manages charts and logbooks.",
    },
    {
      icon: MdPeople,
      title: "Crew Management",
      description:
        "Oversees the crew's duties, coordinates training, and ensures compliance with maritime regulations.",
    },
    {
      icon: MdHistory,
      title: "Record Keeping",
      description:
        "Maintains accurate records of all navigational activities, weather conditions, and ship operations.",
    },
    {
      icon: MdSettings,
      title: "Equipment Maintenance",
      description:
        "Ensures all navigational and safety equipment is properly maintained and operational at all times.",
    },
    {
      icon: MdAlarm,
      title: "Watch Duty Management",
      description:
        "Coordinates the crew's watchkeeping schedules to ensure safe and continuous operation of the vessel.",
    },
    {
      icon: MdOutlineWork,
      title: "Operational Support",
      description:
        "Supports the captain and officers in operational decision-making, ensuring safe and efficient voyages.",
    },
  ];

  // Vessel data
  const vessels = [
    {
      name: "NBA Monet",
      position: "3M Level 5.",
      description:
        "Acted as 3M Level 5. Bulk carrier (IMO: 9512305), flag of Malta. LOA: 228.99m, width: 32.26m. Carries bulk materials like coal, grain, and minerals.",
    },
    {
      name: "NYK Remus",
      position: "3M Level 4.",
      description:
        "Container ship (IMO: 9633824), flag of Panama. LOA: 334.99m, width: 42.8m. Designed for containerized cargo transport.",
    },
    {
      name: "Asahi Maru",
      position: "3M Level 3.",
      description:
        "Bulk carrier (IMO: 9310231), flag of Japan. LOA: 225m, width: 32m. Transports coal, grains, and fertilizers.",
    },
    {
      name: "Taharoa Providence",
      position: "3M Level 2.",
      description:
        "Bulk carrier (IMO: 9386820), flag of New Zealand. LOA: 210m, width: 32m. Transports iron ore and coal.",
    },
    {
      name: "NYK Remus",
      position: "Deck Cadet.",
      description:
        "Container ship (IMO: 9633824), flag of Panama. LOA: 334.99m, width: 42.8m. Designed for containerized cargo transport.",
    },
    {
      name: "Grace Cosmos",
      position: "Deck Cadet.",
      description:
        "General cargo vessel (IMO: 9487636), flag of Marshall Islands. LOA: 220m, width: 32.5m. Transports general cargo and heavy lift items.",
    },
  ];

  // Achievements data
  const achievements = [
    {
      icon: MdShield,
      title: "Safety Excellence",
      description:
        "Maintained a flawless safety record with zero collisions during my 6-year tenure, significantly contributing to the company's outstanding safety statistics.",
    },
    {
      icon: MdCheckCircle,
      title: "Regulatory Compliance",
      description:
        "Achieved zero deficiencies during all port state control and vetting inspections, demonstrating a strong commitment to adhering to industry safety standards.",
    },
    {
      icon: MdSchool,
      title: "Career Growth",
      description:
        "Successfully passed the Second Mate (2M) Promotion Examination, which enabled my advancement to a higher level of responsibility within the company.",
    },
    {
      icon: MdStar,
      title: "Outstanding Leadership",
      description:
        "Recognized for exemplary leadership and the ability to manage diverse teams, fostering a collaborative work environment on board.",
    },
  ];

  // Work experience data
  const workExperienceData = [
    {
      logo: rgsLogo,
      title: "Software Engineer",
      company: "Really Good Software | 2025 - Present",
      details: [],
    },
    {
      logo: nykLogo,
      title: "Third Officer (Level 5)",
      company: "NYK-Fil Ship Management Inc. | 2017 - 2023",
      details: [
        {
          title: "Job Description",
          content: jobResponsibilities,
          border: "border-b",
        },
        {
          title: "Vessels Served On",
          content: vessels,
          border: "border-b",
          isVessel: true,
        },
        {
          title: "About",
          content: achievements,
          border: "",
          isAchievement: true,
        },
      ],
    },
  ];

  // Helper function to render responsibility cards in a grid
  const renderResponsibilityGrid = (items) => {
    return (
      <div className="w-full">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {items.map((item, idx) => (
            <ResponsibilityCard
              key={`job-responsibility-${idx}`}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    );
  };

  // Helper function to render vessel cards in a grid
  const renderVesselGrid = (vessels) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {vessels.map((vessel, idx) => (
          <VesselCard
            key={`vessel-${idx}`}
            name={vessel.name}
            position={vessel.position}
            description={vessel.description}
          />
        ))}
      </div>
    );
  };

  // Helper function to render achievement cards in a grid
  const renderAchievementGrid = (achievements) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {achievements.map((achievement, idx) => (
          <ResponsibilityCard
            key={`achievement-${idx}`}
            icon={achievement.icon}
            title={achievement.title}
            description={achievement.description}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="mb-8 md:mb-12 max-w-[1140px] mx-auto px-4 sm:px-6">
      {workExperienceData.map((experience, idx) => (
        <div key={`experience-${idx}`} className="w-full mb-6 sm:mb-8 border-b">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <img
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              src={experience.logo}
              alt={experience.title}
            />
            <div
              className={`w-full ${
                experience.details.length > 0 ? "mb-6 sm:mb-8" : ""
              }`}
            >
              <SubTitle subtitle={experience.title} />
              <SubDescription subdescription={experience.company} />

              {experience.details.map((detail, detailIdx) => (
                <ExpandableSection
                  key={`detail-${idx}-${detailIdx}`}
                  description={detail.title}
                  border={detail.border}
                >
                  {detail.isVessel
                    ? renderVesselGrid(detail.content)
                    : detail.isAchievement
                    ? renderAchievementGrid(detail.content)
                    : renderResponsibilityGrid(detail.content)}
                </ExpandableSection>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
