import {
  RiComputerFill,
  RiServerFill,
  RiStackFill,
  RiCloudFill,
  RiDatabaseFill,
  RiSmartphoneFill,
  RiBrushFill,
  RiToolsFill,
} from "react-icons/ri";

// Create a reusable TechCard component
const TechCard = ({ icon: Icon, title, description, items }) => (
  <div className="w-full border hover:border-black p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-md">
    <Icon className="text-indigo-500 text-2xl md:text-3xl mb-2 md:mb-4" />
    <h1 className="font-zilla text-xl sm:text-xl md:text-2xl mb-2 md:mb-4">
      {title}
    </h1>
    <p className="text-gray-700 text-sm md:text-base mb-2 md:mb-3">
      {description}
    </p>
    <ul className="list-disc pl-4 md:pl-5 text-gray-700 text-sm md:text-base">
      {items.map((item, index) => (
        <li key={index} className="mb-1 md:mb-2">
          <strong>{item.name}</strong> – {item.description}
        </li>
      ))}
    </ul>
  </div>
);

// Main TechStack component
function TechStack() {
  // Define tech categories and their details
  const techData = [
    {
      cards: [
        {
          icon: RiComputerFill,
          title: "Front End",
          description: "Building modern, scalable UIs using:",
          items: [
            { name: "React", description: "Component-based UI" },
            { name: "TypeScript", description: "Static typing for better DX" },
            { name: "Tailwind CSS", description: "Utility-first styling" },
            { name: "Framer Motion", description: "Animations & transitions" },
          ],
        },
        {
          icon: RiServerFill,
          title: "Back End",
          description: "Developing robust server-side applications:",
          items: [
            { name: "Ruby on Rails", description: "Scalable backend for APIs" },
            { name: "Node.js", description: "JavaScript runtime for backend" },
          ],
        },
      ],
    },
    {
      cards: [
        {
          icon: RiStackFill,
          title: "Full Stack",
          description: "Building end-to-end web applications:",
          items: [{ name: "Next.js", description: "SSR & SSG capabilities" }],
        },
        {
          icon: RiCloudFill,
          title: "DevOps / Deployment",
          description: "Hosting & infrastructure management:",
          items: [
            { name: "Netlify", description: "Frontend deployment" },
            { name: "Vercel", description: "Serverless deployments" },
            { name: "Render", description: "Full-stack hosting" },
            { name: "Docker", description: "Containerized environments" },
          ],
        },
      ],
    },
    {
      cards: [
        {
          icon: RiDatabaseFill,
          title: "Database",
          description: "Data storage & management:",
          items: [
            { name: "PostgreSQL", description: "Relational database" },
            { name: "Supabase", description: "Firebase alternative" },
          ],
        },
        {
          icon: RiSmartphoneFill,
          title: "Mobile Development",
          description: "Cross-platform mobile app development:",
          items: [{ name: "React Native", description: "Hybrid mobile apps" }],
        },
      ],
    },
    {
      cards: [
        {
          icon: RiBrushFill,
          title: "UI/UX & Design",
          description: "Creating user-friendly experiences:",
          items: [
            { name: "Figma", description: "UI/UX design tool" },
            { name: "Tailwind CSS", description: "Rapid styling" },
          ],
        },
        {
          icon: RiToolsFill,
          title: "Tools & Workflow",
          description: "Development workflow & productivity:",
          items: [
            { name: "Git", description: "Version control" },
            { name: "GitHub", description: "Code collaboration" },
            { name: "Zustand", description: "Lightweight state management" },
            { name: "React Query", description: "Efficient data fetching" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="mb-8 md:mb-12 max-w-[1140px] mx-auto px-4 sm:px-6">
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
        {/* Section headings for each category */}
        {techData.map((row, rowIndex) => (
          <div key={`section-${rowIndex}`} className="w-full">
            {/* Optional: Add category heading */}
            <h2 className="text-lg md:text-xl font-medium text-gray-800 mb-3 md:mb-4">
              {row.category}
            </h2>

            {/* Card container - stack on mobile, side by side on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {row.cards.map((card, cardIndex) => (
                <TechCard
                  key={`card-${rowIndex}-${cardIndex}`}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  items={card.items}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
