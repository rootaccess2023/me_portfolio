import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ButtonWhite, Header, Navigation, Tile } from "../components";
import samplePhoto from "../assets/image.png";

function ListContainer({ list }) {
  return (
    <div>
      <div className="max-w-[1140px] px-4 sm:px-6 mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 font-zilla">
          {list.map((project, index) => {
            return (
              <Tile key={index} imgSrc={project.imgSrc} title={project.title} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function Extras() {
  // Use URL parameters instead of state
  const { section } = useParams();
  const navigate = useNavigate();

  // Define extras sections
  const extrasSections = [
    { id: "certificates", label: "Certificates" },
    { id: "events", label: "Events" },
    { id: "upskill", label: "Upskill" },
  ];

  // Redirect to default section if none specified
  useEffect(() => {
    if (!section) {
      navigate("/extras/certificates", { replace: true });
    }
  }, [section, navigate]);

  // Calculate the active index based on the current section
  const activeIndex = extrasSections.findIndex((item) => item.id === section);

  // Handle section changes
  const setActiveSection = (index) => {
    navigate(`/extras/${extrasSections[index].id}`);
  };

  // Content for each section
  const certificatesList = [
    { imgSrc: samplePhoto, title: "WhatsApp Must Act to Protect Elections" },
    { imgSrc: samplePhoto, title: "Privacy in the Digital Age" },
    { imgSrc: samplePhoto, title: "The Future of AI" },
  ];

  const eventsList = [
    { imgSrc: samplePhoto, title: "Exploring the Metaverse" },
    { imgSrc: samplePhoto, title: "Data Security Challenges" },
    { imgSrc: samplePhoto, title: "Sustainable Tech Innovations" },
  ];

  const upskillList = [
    { imgSrc: samplePhoto, title: "Sustainable Tech Innovations" },
    { imgSrc: samplePhoto, title: "The Rise of Remote Work" },
    { imgSrc: samplePhoto, title: "Digital Privacy Laws" },
  ];

  // Get the current list based on the URL section
  const getCurrentList = () => {
    switch (section) {
      case "certificates":
        return certificatesList;
      case "events":
        return eventsList;
      case "upskill":
        return upskillList;
      default:
        return certificatesList;
    }
  };

  return (
    <>
      <Header
        title="Extras"
        description="Explore additional resources, tools, and side projects that complement my main portfolio work."
        backgroundColor="bg-indigo-400"
      />
      <main className="py-6 md:py-8">
        <Navigation
          navItems={extrasSections.map((item) => item.label)}
          activeIndex={activeIndex !== -1 ? activeIndex : 0}
          setActiveIndex={setActiveSection}
        />
        <div className="mt-6 md:mt-8 mb-8 md:mb-12">
          <ListContainer list={getCurrentList()} />
        </div>
      </main>
      <div className="bg-indigo-500 py-8 md:py-12">
        <div className="max-w-[1140px] mx-auto">
          <div className="px-4 sm:px-6">
            <p className="font-zilla text-xl sm:text-2xl md:text-[28px] text-white">
              We all love the web—let&apos;s keep it open and free!
            </p>
            <p className="font-zilla text-xl sm:text-2xl md:text-[28px] mb-4 md:mb-6 text-white">
              Support my work—buy me a coffee, fuel my coding!
            </p>
            <ButtonWhite
              buttonText="Donate now"
              link="https://buymeacoffee.com/rootaccess"
            />
          </div>
        </div>
      </div>
    </>
  );
}
