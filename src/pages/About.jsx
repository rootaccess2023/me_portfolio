import { useState } from "react";
import { Header, Navigation } from "../components";
import TechStack from "../components/about/TechStack";
import WorkExperience from "../components/about/WorkExperience";
import DevelopmentApproach from "../components/about/DevelopmentApproach";
import Education from "../components/about/Education";
import HobbiesAndInterest from "../components/about/HobbiesAndInterest";
import ContactInformation from "../components/about/ContactInformation";
import FAQ from "../components/about/FAQ";

export function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const aboutItems = [
    "Tech Stack",
    "Work Experience",
    "Development Approach",
    "Education",
    "Hobbies & Interest",
    "Contact Information",
    "FAQ",
  ];

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return <TechStack />;
      case 1:
        return <WorkExperience />;
      case 2:
        return <DevelopmentApproach />;
      case 3:
        return <Education />;
      case 4:
        return <HobbiesAndInterest />;
      case 5:
        return <ContactInformation />;
      case 6:
        return <FAQ />;
      default:
        return <TechStack />;
    }
  };

  return (
    <>
      <Header
        title="About"
        description="A front-end developer who combines technical expertise with design sensibility to create seamless, high-performance web experiences that engage users and solve real business problems."
        backgroundColor="bg-indigo-400"
      />
      <main>
        <Navigation
          navItems={aboutItems}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        {renderContent()}
      </main>
    </>
  );
}
