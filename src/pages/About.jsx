import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header, Navigation } from "../components";
import TechStack from "../components/about/TechStack";
import WorkExperience from "../components/about/WorkExperience";
import DevelopmentApproach from "../components/about/DevelopmentApproach";
import Education from "../components/about/Education";
import HobbiesAndInterest from "../components/about/HobbiesAndInterest";
import ContactInformation from "../components/about/ContactInformation";
import FAQ from "../components/about/FAQ";

export function About() {
  // Use the URL parameter to determine which content to show
  const { section } = useParams();
  const navigate = useNavigate();

  const aboutItems = [
    { id: "tech-stack", label: "Tech Stack" },
    { id: "work-experience", label: "Work Experience" },
    { id: "development-approach", label: "Development Approach" },
    { id: "education", label: "Education" },
    { id: "hobbies", label: "Hobbies & Interest" },
    { id: "contact", label: "Contact Information" },
    { id: "faq", label: "FAQ" },
  ];

  // Default to tech-stack if no section is specified
  useEffect(() => {
    if (!section) {
      navigate("/about/tech-stack", { replace: true });
    }
  }, [section, navigate]);

  // Find the active index based on the current section
  const activeIndex = aboutItems.findIndex((item) => item.id === section);

  // Handle changing sections
  const setActiveSection = (index) => {
    navigate(`/about/${aboutItems[index].id}`);
  };

  const renderContent = () => {
    switch (section) {
      case "tech-stack":
        return <TechStack />;
      case "work-experience":
        return <WorkExperience />;
      case "development-approach":
        return <DevelopmentApproach />;
      case "education":
        return <Education />;
      case "hobbies":
        return <HobbiesAndInterest />;
      case "contact":
        return <ContactInformation />;
      case "faq":
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
          navItems={aboutItems.map((item) => item.label)}
          activeIndex={activeIndex !== -1 ? activeIndex : 0}
          setActiveIndex={setActiveSection}
        />
        {renderContent()}
      </main>
    </>
  );
}
