import {
  RiBookFill,
  RiMovie2Fill,
  RiCodeFill,
  RiFlightTakeoffFill,
} from "react-icons/ri";
import { SubTitle, SubDescription } from "../../components";

// Reusable interest item component
const InterestItem = ({ icon: Icon, title, description, backgroundColor }) => {
  return (
    <div className="flex flex-col justify-center mb-6 sm:mb-8 relative">
      {/* Circle icon with responsive sizing */}
      <div
        className={`size-16 sm:size-20 md:size-24 absolute flex items-center justify-center ${backgroundColor} text-white rounded-full`}
      >
        <Icon className="size-6 sm:size-8 md:size-10" />
      </div>

      {/* Content box with responsive padding and positioning */}
      <div className="ml-4 sm:ml-6 md:ml-8 pl-14 sm:pl-16 md:pl-20 py-4 sm:py-6 md:py-8 border transition-all duration-300 hover:shadow-md">
        <SubTitle subtitle={title} />
        <SubDescription subdescription={description} />
      </div>
    </div>
  );
};

function HobbiesAndInterest() {
  // Data structure for hobbies and interests
  const interests = [
    {
      icon: RiBookFill,
      title: "Reading",
      description:
        "I have a particular fondness for isekai novels, as they provide an escape into exciting and imaginative worlds. I enjoy reading various genres and find it a great way to unwind after a busy day.",
      backgroundColor: "bg-indigo-500",
    },
    {
      icon: RiMovie2Fill,
      title: "Series & Movies",
      description:
        "Whether it's a gripping drama or an interesting documentary, I enjoy watching series and films on platforms like Netflix, staying updated with new trends, and discussing them with friends.",
      backgroundColor: "bg-violet-500",
    },
    {
      icon: RiCodeFill,
      title: "Technology & Coding",
      description:
        "I'm passionate about web development, from designing engaging UI experiences to building scalable back-end systems. I love working with modern tools like React, TypeScript, Ruby on Rails, and more to bring innovative ideas to life.",
      backgroundColor: "bg-purple-700",
    },
    {
      icon: RiFlightTakeoffFill,
      title: "Travel",
      description:
        "Exploring new places, experiencing different cultures, and capturing beautiful moments through photography are some of my greatest joys. I've traveled to Amsterdam, Italy, and many other exciting destinations, always on a budget, and enjoying the experience to its fullest.",
      backgroundColor: "bg-black",
    },
  ];

  return (
    <div className="mb-8 md:mb-12 flex flex-col justify-center items-center max-w-[1140px] mx-auto px-4 sm:px-6">
      {/* Heading container - optional */}
      <div className="w-full mb-6 sm:mb-8">
        {/* You could add section heading here if needed */}
      </div>

      {/* Interest items container */}
      <div className="w-full">
        {interests.map((interest, index) => (
          <InterestItem
            key={`interest-${index}`}
            icon={interest.icon}
            title={interest.title}
            description={interest.description}
            backgroundColor={interest.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
}

export default HobbiesAndInterest;
