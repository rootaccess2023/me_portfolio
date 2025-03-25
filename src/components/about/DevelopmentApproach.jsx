import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { FaRegLaughBeam } from "react-icons/fa";
import { SubTitle, SubDescription } from "../../components";
import vennDiagram from "../../assets/venn_diagram.png";

// Reusable component for approach items
const ApproachItem = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="flex flex-col justify-center mb-6 sm:mb-8 relative">
      {/* Icon Circle - Responsive sizing */}
      <div
        className={`size-16 sm:size-20 md:size-24 absolute flex items-center justify-center ${color} text-white rounded-full`}
      >
        <Icon className="size-6 sm:size-8 md:size-10" />
      </div>
      {/* Content Box - Responsive padding and positioning */}
      <div className="ml-4 sm:ml-6 md:ml-8 pl-14 sm:pl-16 md:pl-20 py-4 sm:py-6 md:py-8 border transition-all duration-300 hover:shadow-md">
        <SubTitle subtitle={title} />
        <SubDescription subdescription={description} />
      </div>
    </div>
  );
};

function DevelopmentApproach() {
  // Data for development approach items
  const approachItems = [
    {
      icon: AiOutlineCheckCircle,
      title: "Simple",
      description:
        "I transform complex problems into elegant solutions by writing clean, maintainable code and designing intuitive interfaces. Using modern frameworks like React and Ruby on Rails, I create applications that are both powerful and easy to use.",
      color: "bg-indigo-500",
    },
    {
      icon: FiTarget,
      title: "Smart",
      description:
        "I transform complex problems into elegant solutions by writing clean, maintainable code and designing intuitive interfaces. Using modern frameworks like React and Ruby on Rails, I create applications that are both powerful and easy to use.",
      color: "bg-purple-700",
    },
    {
      icon: FaRegLaughBeam,
      title: "Human",
      description:
        "I transform complex problems into elegant solutions by writing clean, maintainable code and designing intuitive interfaces. Using modern frameworks like React and Ruby on Rails, I create applications that are both powerful and easy to use.",
      color: "bg-black",
    },
  ];

  return (
    <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col justify-center items-center max-w-[1140px] mx-auto px-4 sm:px-6">
      {/* Responsive Venn diagram image */}
      <div className="w-full mb-6 sm:mb-8 md:mb-10 flex justify-center">
        <img
          className="w-full sm:w-4/5 md:w-2/3 object-contain"
          src={vennDiagram}
          alt="Development approach Venn diagram"
        />
      </div>

      {/* Approach items container */}
      <div className="w-full">
        {approachItems.map((item, index) => (
          <ApproachItem
            key={`approach-${index}`}
            icon={item.icon}
            title={item.title}
            description={item.description}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}

export default DevelopmentApproach;
