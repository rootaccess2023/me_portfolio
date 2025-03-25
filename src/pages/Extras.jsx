import { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const navItems = ["Certificates", "Events", "Upskill"];

  const solutionList = [
    { imgSrc: samplePhoto, title: "WhatsApp Must Act to Protect Elections" },
    { imgSrc: samplePhoto, title: "Privacy in the Digital Age" },
    { imgSrc: samplePhoto, title: "The Future of AI" },
  ];

  const learningList = [
    { imgSrc: samplePhoto, title: "Exploring the Metaverse" },
    { imgSrc: samplePhoto, title: "Data Security Challenges" },
    { imgSrc: samplePhoto, title: "Sustainable Tech Innovations" },
  ];

  const archiveList = [
    { imgSrc: samplePhoto, title: "Sustainable Tech Innovations" },
    { imgSrc: samplePhoto, title: "The Rise of Remote Work" },
    { imgSrc: samplePhoto, title: "Digital Privacy Laws" },
  ];

  const getCurrentList = () => {
    switch (activeIndex) {
      case 0:
        return solutionList;
      case 1:
        return learningList;
      case 2:
        return archiveList;
      default:
        return solutionList;
    }
  };

  return (
    <>
      <Header
        title="Extras"
        description="Explore my projects showcasing scalable, intuitive web applications. From interactive UI components to full-stack solutions, I aim to create seamless user experiences with a focus on clean, efficient code."
        backgroundColor="bg-indigo-400"
      />
      <main className="py-6 md:py-8">
        <Navigation
          navItems={navItems}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
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
