import { useState } from "react";
import { ButtonWhite, Header, Navigation, Tile } from "../components";
import samplePhoto from "../assets/image.png";

function ListContainer({ list }) {
  return (
    <div>
      <div className="max-w-[1140px] px-6 mx-auto">
        <ul className="grid grid-cols-3 gap-8 font-zilla">
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

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navItems = ["Solution In Action", "Learning Lab", "My Archive"];

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
        title="Portfolio"
        description="Explore my projects showcasing scalable, intuitive web applications. From interactive UI components to full-stack solutions, I aim to create seamless user experiences with a focus on clean, efficient code."
        backgroundColor="bg-indigo-400"
      />
      <main>
        <Navigation
          navItems={navItems}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <ListContainer list={getCurrentList()} />
        <div className="h-12"></div>
      </main>
      <div className="bg-indigo-500 py-12">
        <div className="max-w-[1140px] mx-auto">
          <div className="mt-6 px-4">
            <p className="font-zilla text-[28px] text-white">
              We all love the web—let&apos;s keep it open and free!
            </p>
            <p className="font-zilla text-[28px] mb-6 text-white">
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
