import { useState } from "react";
import {
  ButtonIndigo,
  Header,
  Navigation,
  SubDescription,
  SubTitle,
  Title,
} from "../components";
import {
  FaArrowRight,
  FaChess,
  FaGithub,
  FaLinkedin,
  FaRegLaughBeam,
  FaShip,
  FaUserCircle,
} from "react-icons/fa";
import {
  MdAlarm,
  MdCheckCircle,
  MdHistory,
  MdMap,
  MdMarkEmailUnread,
  MdOutlineWork,
  MdPeople,
  MdSchool,
  MdSettings,
  MdShield,
  MdStar,
} from "react-icons/md";
import {
  RiArticleFill,
  RiBookFill,
  RiBrushFill,
  RiCalendarFill,
  RiCheckboxFill,
  RiCloudFill,
  RiCodeFill,
  RiComputerFill,
  RiDatabaseFill,
  RiFlightTakeoffFill,
  RiGraduationCapFill,
  RiGridFill,
  RiHeart2Fill,
  RiMapPinFill,
  RiMessage2Fill,
  RiMovie2Fill,
  RiServerFill,
  RiSmartphoneFill,
  RiStackFill,
  RiStockFill,
  RiToolsFill,
} from "react-icons/ri";
import rgsLogo from "../assets/RGS_logo.png";
import nykLogo from "../assets/NYK_logo.png";
import vennDiagram from "../assets/venn_diagram.png";
import avionSchool from "../assets/avion_school.png";
import ntmaSchool from "../assets/ntma_logo.png";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

function TechStack() {
  return (
    <div className="mb-12 max-w-[1140px] mx-auto px-6">
      <div className="flex flex-col gap-8">
        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row gap-8 transition-all ease-in-out duration-300">
          {/* Front End */}
          <div className="w-full border hover:border-black p-8 cursor-pointer">
            <RiComputerFill className="text-indigo-500 text-3xl mb-4" />
            <h1 className="font-zilla text-2xl mb-4">Front End</h1>
            <p className="text-gray-700">
              Building modern, scalable UIs using:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>React</strong> – Component-based UI
              </li>
              <li>
                <strong>TypeScript</strong> – Static typing for better DX
              </li>
              <li>
                <strong>Tailwind CSS</strong> – Utility-first styling
              </li>
              <li>
                <strong>Framer Motion</strong> – Animations & transitions
              </li>
            </ul>
          </div>

          {/* Back End */}
          <div className="w-full border hover:border-black p-8 cursor-pointer">
            <RiServerFill className="text-indigo-500 text-3xl mb-4" />
            <h1 className="font-zilla text-2xl mb-4">Back End</h1>
            <p className="text-gray-700">
              Developing robust server-side applications:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Ruby on Rails</strong> – Scalable backend for APIs
              </li>
              <li>
                <strong>Node.js</strong> – JavaScript runtime for backend
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row gap-8 transition-all ease-in-out duration-300">
          {/* Full Stack */}
          <div className="w-full border hover:border-black p-8 cursor-pointer">
            <RiStackFill className="text-indigo-500 text-3xl mb-4" />
            <h1 className="font-zilla text-2xl mb-4">Full Stack</h1>
            <p className="text-gray-700">
              Building end-to-end web applications:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Next.js</strong> – SSR & SSG capabilities
              </li>
            </ul>
          </div>

          {/* DevOps / Deployment */}
          <div className="w-full border hover:border-black p-8 cursor-pointer">
            <RiCloudFill className="text-indigo-500 text-3xl mb-4" />
            <h1 className="font-zilla text-2xl mb-4">DevOps / Deployment</h1>
            <p className="text-gray-700">
              Hosting & infrastructure management:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Netlify</strong> – Frontend deployment
              </li>
              <li>
                <strong>Vercel</strong> – Serverless deployments
              </li>
              <li>
                <strong>Render</strong> – Full-stack hosting
              </li>
              <li>
                <strong>Docker</strong> – Containerized environments
              </li>
            </ul>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col sm:flex-row gap-8 transition-all ease-in-out duration-300">
          {/* Database */}
          <div className="w-full border hover:border-black p-8 cursor-pointer">
            <RiDatabaseFill className="text-indigo-500 text-3xl mb-4" />
            <h1 className="font-zilla text-2xl mb-4">Database</h1>
            <p className="text-gray-700">Data storage & management:</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>PostgreSQL</strong> – Relational database
              </li>
              <li>
                <strong>Supabase</strong> – Firebase alternative
              </li>
            </ul>
          </div>

          {/* Mobile Development */}
          <div className="w-full border hover:border-black p-8 cursor-pointer">
            <RiSmartphoneFill className="text-indigo-500 text-3xl mb-4" />
            <h1 className="font-zilla text-2xl mb-4">Mobile Development</h1>
            <p className="text-gray-700">
              Cross-platform mobile app development:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>React Native</strong> – Hybrid mobile apps
              </li>
            </ul>
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col sm:flex-row gap-8 transition-all ease-in-out duration-300">
          {/* UI/UX & Design */}
          <div className="w-full border hover:border-black p-8 cursor-pointer">
            <RiBrushFill className="text-indigo-500 text-3xl mb-4" />
            <h1 className="font-zilla text-2xl mb-4">UI/UX & Design</h1>
            <p className="text-gray-700">Creating user-friendly experiences:</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Figma</strong> – UI/UX design tool
              </li>
              <li>
                <strong>Tailwind CSS</strong> – Rapid styling
              </li>
            </ul>
          </div>

          {/* Tools & Workflow */}
          <div className="w-full border hover:border-black p-8 cursor-pointer">
            <RiToolsFill className="text-indigo-500 text-3xl mb-4" />
            <h1 className="font-zilla text-2xl mb-4">Tools & Workflow</h1>
            <p className="text-gray-700">
              Development workflow & productivity:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Git</strong> – Version control
              </li>
              <li>
                <strong>GitHub</strong> – Code collaboration
              </li>
              <li>
                <strong>Zustand</strong> – Lightweight state management
              </li>
              <li>
                <strong>React Query</strong> – Efficient data fetching
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Work Experience Item component
function WEItem({ description, children, border }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details className={border}>
      <summary
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center py-4 border-stone-300 list-none cursor-pointer"
      >
        <span className="text-base sm:text-lg font-light">{description}</span>
        <img
          src={
            isOpen
              ? "https://assets.mofoprod.net/static/_images/minus-circle.svg"
              : "https://assets.mofoprod.net/static/_images/plus-circle.07f676a21c6b.svg"
          }
          alt="toggle icon"
        />
      </summary>
      <div className="pb-4">{children}</div>
    </details>
  );
}

function WorkExperience() {
  return (
    <div className="mb-12 max-w-[1140px] mx-auto px-6">
      <div className="w-full mb-8 border-b">
        <div className="flex gap-4">
          <img className="size-20" src={rgsLogo} alt="" />
          <div>
            <SubTitle subtitle="Software Engineer" />
            <SubDescription subdescription="Really Good Software | 2025 - Present" />
          </div>
        </div>
      </div>
      <div className="w-full mb-8 border-b">
        <div className="flex gap-4">
          <img className="size-20" src={nykLogo} alt="" />
          <div className="w-full mb-8">
            <SubTitle subtitle="Third Officer (Level 5)" />
            <SubDescription subdescription="NYK-Fil Ship Management Inc. | 2017 - 2023" />
            <WEItem description="Job Description" border="border-b">
              <div className="w-full">
                <div className="flex  gap-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdMap className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">
                      Navigational Watchkeeping
                    </h1>
                    <p className="font-light mb-4">
                      The Third Officer ensures safe navigation, maintains
                      navigational equipment, and manages charts and logbooks.
                    </p>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdPeople className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">
                      Crew Management
                    </h1>
                    <p className="font-light mb-4">
                      Oversees the crew’s duties, coordinates training, and
                      ensures compliance with maritime regulations.
                    </p>
                  </div>
                </div>

                <div className="flex  gap-4 mt-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdHistory className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Record Keeping</h1>
                    <p className="font-light mb-4">
                      Maintains accurate records of all navigational activities,
                      weather conditions, and ship operations.
                    </p>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdSettings className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">
                      Equipment Maintenance
                    </h1>
                    <p className="font-light mb-4">
                      Ensures all navigational and safety equipment is properly
                      maintained and operational at all times.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdAlarm className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">
                      Watch Duty Management
                    </h1>
                    <p className="font-light mb-4">
                      Coordinates the crew's watchkeeping schedules to ensure
                      safe and continuous operation of the vessel.
                    </p>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdOutlineWork className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">
                      Operational Support
                    </h1>
                    <p className="font-light mb-4">
                      Supports the captain and officers in operational
                      decision-making, ensuring safe and efficient voyages.
                    </p>
                  </div>
                </div>
              </div>
            </WEItem>
            <WEItem description="Vessels Served On" border="border-b">
              <div className="flex flex-col gap-4">
                <div className="w-full flex gap-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <div className="flex gap-4">
                      <FaShip className="text-indigo-500 text-3xl mb-4" />
                      <h1 className="font-zilla text-2xl mb-4">NBA Monet</h1>
                    </div>
                    <p className="font-semibold mb-4">3M Level 5.</p>
                    <p className="font-light mb-4">
                      Acted as 3M Level 5.Bulk carrier (IMO: 9512305), flag of
                      Malta. LOA: 228.99m, width: 32.26m. Carries bulk materials
                      like coal, grain, and minerals.
                    </p>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <div className="flex gap-4">
                      <FaShip className="text-indigo-500 text-3xl mb-4" />
                      <h1 className="font-zilla text-2xl mb-4">NYK Remus</h1>
                    </div>
                    <p className="font-semibold mb-4">3M Level 4.</p>
                    <p className="font-light mb-4">
                      Container ship (IMO: 9633824), flag of Panama. LOA:
                      334.99m, width: 42.8m. Designed for containerized cargo
                      transport.
                    </p>
                  </div>
                </div>

                <div className="w-full flex gap-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <div className="flex gap-4">
                      <FaShip className="text-indigo-500 text-3xl mb-4" />
                      <h1 className="font-zilla text-2xl mb-4">Asahi Maru</h1>
                    </div>
                    <p className="font-semibold mb-4">3M Level 3.</p>
                    <p className="font-light mb-4">
                      Bulk carrier (IMO: 9310231), flag of Japan. LOA: 225m,
                      width: 32m. Transports coal, grains, and fertilizers.
                    </p>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <div className="flex gap-4">
                      <FaShip className="text-indigo-500 text-3xl mb-4" />
                      <h1 className="font-zilla text-2xl mb-4">
                        Taharoa Providence
                      </h1>
                    </div>
                    <p className="font-semibold mb-4">3M Level 2.</p>
                    <p className="font-light mb-4">
                      Bulk carrier (IMO: 9386820), flag of New Zealand. LOA:
                      210m, width: 32m. Transports iron ore and coal.
                    </p>
                  </div>
                </div>

                <div className="w-full flex gap-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <div className="flex gap-4">
                      <FaShip className="text-indigo-500 text-3xl mb-4" />
                      <h1 className="font-zilla text-2xl mb-4">NYK Remus</h1>
                    </div>
                    <p className="font-semibold mb-4">Deck Cadet.</p>
                    <p className="font-light mb-4">
                      Container ship (IMO: 9633824), flag of Panama. LOA:
                      334.99m, width: 42.8m. Designed for containerized cargo
                      transport.
                    </p>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <div className="flex gap-4">
                      <FaShip className="text-indigo-500 text-3xl mb-4" />
                      <h1 className="font-zilla text-2xl mb-4">Grace Cosmos</h1>
                    </div>
                    <p className="font-semibold mb-4">Deck Cadet.</p>
                    <p className="font-light mb-4">
                      General cargo vessel (IMO: 9487636), flag of Marshall
                      Islands. LOA: 220m, width: 32.5m. Transports general cargo
                      and heavy lift items.
                    </p>
                  </div>
                </div>
              </div>
            </WEItem>

            <WEItem description="About">
              <div className="flex flex-col gap-4">
                <div className="w-full flex gap-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdShield className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">
                      Safety Excellence
                    </h1>
                    <p className="font-light mb-4">
                      Maintained a flawless safety record with zero collisions
                      during my 6-year tenure, significantly contributing to the
                      company’s outstanding safety statistics.
                    </p>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdCheckCircle className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">
                      Regulatory Compliance
                    </h1>
                    <p className="font-light mb-4">
                      Achieved zero deficiencies during all port state control
                      and vetting inspections, demonstrating a strong commitment
                      to adhering to industry safety standards.
                    </p>
                  </div>
                </div>

                <div className="w-full flex gap-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdSchool className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Career Growth</h1>
                    <p className="font-light mb-4">
                      Successfully passed the Second Mate (2M) Promotion
                      Examination, which enabled my advancement to a higher
                      level of responsibility within the company.
                    </p>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdStar className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">
                      Outstanding Leadership
                    </h1>
                    <p className="font-light mb-4">
                      Recognized for exemplary leadership and the ability to
                      manage diverse teams, fostering a collaborative work
                      environment on board.
                    </p>
                  </div>
                </div>
              </div>
            </WEItem>
          </div>
        </div>
      </div>
    </div>
  );
}

function DevelopmentApproach() {
  return (
    <div className="mb-12 flex flex-col justify-center items-center max-w-[1140px] mx-auto px-6">
      <img className="w-2/3" src={vennDiagram} alt="" />
      <div className="flex flex-col justify-center mb-8 relative">
        <div className="size-24 absolute flex items-center justify-center bg-indigo-500 text-white rounded-full">
          <AiOutlineCheckCircle className="size-10" />
        </div>
        <div className="ml-8 pl-20 py-8 border">
          <SubTitle subtitle="Simple" />
          <SubDescription subdescription="I transform complex problems into elegant solutions by writing clean, maintainable code and designing intuitive interfaces. Using modern frameworks like React and Ruby on Rails, I create applications that are both powerful and easy to use." />
        </div>
      </div>
      <div className="flex flex-col justify-center mb-8 relative">
        <div className="size-24 absolute flex items-center justify-center bg-purple-700 text-white rounded-full">
          <FiTarget className="size-10" />
        </div>
        <div className="ml-8 pl-20 py-8 border">
          <SubTitle subtitle="Smart" />
          <SubDescription subdescription="I transform complex problems into elegant solutions by writing clean, maintainable code and designing intuitive interfaces. Using modern frameworks like React and Ruby on Rails, I create applications that are both powerful and easy to use." />
        </div>
      </div>
      <div className="flex flex-col justify-center mb-8 relative">
        <div className="size-24 absolute flex items-center justify-center bg-black text-white rounded-full">
          <FaRegLaughBeam className="size-10" />
        </div>
        <div className="ml-8 pl-20 py-8 border">
          <SubTitle subtitle="Human" />
          <SubDescription subdescription="I transform complex problems into elegant solutions by writing clean, maintainable code and designing intuitive interfaces. Using modern frameworks like React and Ruby on Rails, I create applications that are both powerful and easy to use." />
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="mb-12 max-w-[1140px] mx-auto px-6">
      <div className="w-full mb-8 border-b">
        <div className="flex gap-4">
          <img className="size-16 sm:size-20" src={avionSchool} alt="" />
          <div className="w-full mb-8">
            <SubTitle subtitle="Full Stack Developer" />
            <SubDescription subdescription="Avion School | Dec 2023 -Jul 2024" />
            <WEItem description="Front End Development" border="border-b">
              <div className="w-full">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <RiComputerFill className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Tech Stack</h1>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>
                        <strong>Basics</strong> – Understanding HTML, CSS, and
                        JavaScript
                      </li>
                      <li>
                        <strong>React</strong> – Component-based UI
                      </li>
                      <li>
                        <strong>Tailwind CSS</strong> – Utility-first styling
                      </li>
                    </ul>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <FaUserCircle className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Banking App</h1>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <p>
                        <strong>Argent</strong> is a secure React-based banking
                        app for managing accounts, transfers, and budgeting.
                      </p>
                      <a
                        href="#"
                        className="relative flex items-center gap-2 text-indigo-500 group"
                      >
                        <span className="group-hover:underline transition-all ease-in-out duration-300">
                          Explore
                        </span>
                        <FaArrowRightLong className="absolute -z-10 text-white left-10 group-hover:text-indigo-500 group-hover:left-16 transition-all ease-in-out duration-300" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex  gap-4 mt-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <RiMessage2Fill className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Room</h1>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <p>
                        <strong>Room</strong> is a secure messaging app for
                        chatting and sharing media.
                      </p>

                      <a
                        href="#"
                        className="relative flex items-center gap-2 text-indigo-500 group"
                      >
                        <span className="group-hover:underline transition-all ease-in-out duration-300">
                          Explore
                        </span>
                        <FaArrowRightLong className="absolute -z-10 text-white left-10 group-hover:text-indigo-500 group-hover:left-16 transition-all ease-in-out duration-300" />
                      </a>
                    </div>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <FaChess className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Chess</h1>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <p>
                        <strong>Chess</strong> is a secure messaging app for
                        chatting and sharing media.
                      </p>

                      <a
                        href="#"
                        className="relative flex items-center gap-2 text-indigo-500 group"
                      >
                        <span className="group-hover:underline transition-all ease-in-out duration-300">
                          Explore
                        </span>
                        <FaArrowRightLong className="absolute -z-10 text-white left-10 group-hover:text-indigo-500 group-hover:left-16 transition-all ease-in-out duration-300" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <RiHeart2Fill className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Tribute</h1>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <p>
                        <strong>Chess</strong> is a secure messaging app for
                        chatting and sharing media.
                      </p>

                      <a
                        href="#"
                        className="relative flex items-center gap-2 text-indigo-500 group"
                      >
                        <span className="group-hover:underline transition-all ease-in-out duration-300">
                          Explore
                        </span>
                        <FaArrowRightLong className="absolute -z-10 text-white left-10 group-hover:text-indigo-500 group-hover:left-16 transition-all ease-in-out duration-300" />
                      </a>
                    </div>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <RiCheckboxFill className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Forms</h1>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <p>
                        <strong>Chess</strong> is a secure messaging app for
                        chatting and sharing media.
                      </p>

                      <a
                        href="#"
                        className="relative flex items-center gap-2 text-indigo-500 group"
                      >
                        <span className="group-hover:underline transition-all ease-in-out duration-300">
                          Explore
                        </span>
                        <FaArrowRightLong className="absolute -z-10 text-white left-10 group-hover:text-indigo-500 group-hover:left-16 transition-all ease-in-out duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <RiGridFill className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Blog</h1>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <p>
                        <strong>Blog</strong> is a secure messaging app for
                        chatting and sharing media.
                      </p>

                      <a
                        href="#"
                        className="relative flex items-center gap-2 text-indigo-500 group"
                      >
                        <span className="group-hover:underline transition-all ease-in-out duration-300">
                          Explore
                        </span>
                        <FaArrowRightLong className="absolute -z-10 text-white left-10 group-hover:text-indigo-500 group-hover:left-16 transition-all ease-in-out duration-300" />
                      </a>
                    </div>
                  </div>

                  <div className="w-full hover:border-black p-8 cursor-pointer"></div>
                </div>
              </div>
            </WEItem>
            <WEItem description="Back End Development" border="border-none">
              <div className="w-full">
                <div className="flex  gap-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <RiServerFill className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Tech Stack</h1>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>
                        <strong>Ruby</strong> – A dynamic, object-oriented
                        language.
                      </li>
                      <li>
                        <strong>Ruby on Rails</strong> – A convention-driven web
                        framework.
                      </li>
                      <li>
                        <strong>PostgreSQL</strong> – A powerful, open-source
                        database.
                      </li>
                    </ul>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <RiMapPinFill className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">POGO</h1>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <p>
                        <strong>Argent</strong> is a secure React-based banking
                        app for managing accounts, transfers, and budgeting.
                      </p>
                      <a
                        href="#"
                        className="relative flex items-center gap-2 text-indigo-500 group"
                      >
                        <span className="group-hover:underline transition-all ease-in-out duration-300">
                          Explore
                        </span>
                        <FaArrowRightLong className="absolute -z-10 text-white left-10 group-hover:text-indigo-500 group-hover:left-16 transition-all ease-in-out duration-300" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex  gap-4 mt-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <RiStockFill className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Investo</h1>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <p>
                        <strong>Room</strong> is a secure messaging app for
                        chatting and sharing media.
                      </p>

                      <a
                        href="#"
                        className="relative flex items-center gap-2 text-indigo-500 group"
                      >
                        <span className="group-hover:underline transition-all ease-in-out duration-300">
                          Explore
                        </span>
                        <FaArrowRightLong className="absolute -z-10 text-white left-10 group-hover:text-indigo-500 group-hover:left-16 transition-all ease-in-out duration-300" />
                      </a>
                    </div>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <RiCalendarFill className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Journal</h1>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <p>
                        <strong>Journal</strong> is a secure messaging app for
                        chatting and sharing media.
                      </p>

                      <a
                        href="#"
                        className="relative flex items-center gap-2 text-indigo-500 group"
                      >
                        <span className="group-hover:underline transition-all ease-in-out duration-300">
                          Explore
                        </span>
                        <FaArrowRightLong className="absolute -z-10 text-white left-10 group-hover:text-indigo-500 group-hover:left-16 transition-all ease-in-out duration-300" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <RiArticleFill className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Blog</h1>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <p>
                        <strong>Blog</strong> is a secure messaging app for
                        chatting and sharing media.
                      </p>

                      <a
                        href="#"
                        className="relative flex items-center gap-2 text-indigo-500 group"
                      >
                        <span className="group-hover:underline transition-all ease-in-out duration-300">
                          Explore
                        </span>
                        <FaArrowRightLong className="absolute -z-10 text-white left-10 group-hover:text-indigo-500 group-hover:left-16 transition-all ease-in-out duration-300" />
                      </a>
                    </div>
                  </div>

                  <div className="w-full hover:border-black p-8 cursor-pointer"></div>
                </div>
              </div>
            </WEItem>
          </div>
        </div>
      </div>
      <div className="w-full mb-8 border-b">
        <div className="flex gap-4">
          <img className="size-16 sm:size-20" src={ntmaSchool} alt="" />
          <div className="w-full mb-8">
            <SubTitle subtitle="BS Marine Transportation" />
            <SubDescription subdescription="NYK-TDG Maritime Academy | 2013 - 2017" />
            <WEItem description="Awards & Scholarship" border="border-b">
              <div className="w-full">
                <div className="flex  gap-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdMap className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">
                      Navigational Watchkeeping
                    </h1>
                    <p className="font-light mb-4">
                      The Third Officer ensures safe navigation, maintains
                      navigational equipment, and manages charts and logbooks.
                    </p>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdPeople className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">
                      Crew Management
                    </h1>
                    <p className="font-light mb-4">
                      Oversees the crew’s duties, coordinates training, and
                      ensures compliance with maritime regulations.
                    </p>
                  </div>
                </div>

                <div className="flex  gap-4 mt-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdHistory className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Record Keeping</h1>
                    <p className="font-light mb-4">
                      Maintains accurate records of all navigational activities,
                      weather conditions, and ship operations.
                    </p>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdSettings className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">
                      Equipment Maintenance
                    </h1>
                    <p className="font-light mb-4">
                      Ensures all navigational and safety equipment is properly
                      maintained and operational at all times.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdAlarm className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">
                      Watch Duty Management
                    </h1>
                    <p className="font-light mb-4">
                      Coordinates the crew's watchkeeping schedules to ensure
                      safe and continuous operation of the vessel.
                    </p>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdOutlineWork className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">
                      Operational Support
                    </h1>
                    <p className="font-light mb-4">
                      Supports the captain and officers in operational
                      decision-making, ensuring safe and efficient voyages.
                    </p>
                  </div>
                </div>
              </div>
            </WEItem>
            <WEItem description="Training Ships" border="border-b">
              <div className="flex flex-col gap-4">
                <div className="w-full flex gap-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <div className="flex gap-4">
                      <FaShip className="text-indigo-500 text-3xl mb-4" />
                      <h1 className="font-zilla text-2xl mb-4">NYK Remus</h1>
                    </div>
                    <p className="font-semibold mb-4">Deck Cadet.</p>
                    <p className="font-light mb-4">
                      Container ship (IMO: 9633824), flag of Panama. LOA:
                      334.99m, width: 42.8m. Designed for containerized cargo
                      transport.
                    </p>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <div className="flex gap-4">
                      <FaShip className="text-indigo-500 text-3xl mb-4" />
                      <h1 className="font-zilla text-2xl mb-4">Grace Cosmos</h1>
                    </div>
                    <p className="font-semibold mb-4">Deck Cadet.</p>
                    <p className="font-light mb-4">
                      General cargo vessel (IMO: 9487636), flag of Marshall
                      Islands. LOA: 220m, width: 32.5m. Transports general cargo
                      and heavy lift items.
                    </p>
                  </div>
                </div>
              </div>
            </WEItem>

            <WEItem description="Program">
              <div className="flex flex-col gap-4">
                <div className="w-full flex gap-4">
                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <RiGraduationCapFill className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">BSMT</h1>
                    <p className="font-light mb-4">
                      BSMT is a four-year diploma program leading to the career
                      of a Marine Deck Officer, i.e., Third Officer, Second
                      Officer, Chief Officer and finally Captain. Graduates of
                      this program can also hold positions on land such as Ship
                      Manager, Shipping Company Executive, Crewing Manager or
                      Harbor Pilot, among others.
                    </p>
                    <p className="font-light mb-4">
                      After successfully passing the three (3) years of academic
                      requirements, all cadets are required to take the one year
                      onboard training. Training onboard ships is a
                      pre-requisite to graduation in accordance with 1978 STCW
                      Convention, as amended, and the policies and standards of
                      the CHED. NTMA guarantees shipboard training to all NTMA
                      cadets onboard NYK Line vessels.
                    </p>
                  </div>

                  <div className="w-full border hover:border-black p-8 cursor-pointer">
                    <MdShield className="text-indigo-500 text-3xl mb-4" />
                    <h1 className="font-zilla text-2xl mb-4">Program</h1>
                    <p className="font-light mb-4">
                      The quality of NTMA's maritime education is customized to
                      ensure that Cadets acquire the necessary knowledge and
                      skills for them to be successful Marine Deck and Engine
                      Officers. NTMA offers baccalaureate degrees in Marine
                      Transportation and Marine Engineering.
                    </p>
                    <p className="font-light mb-4">
                      The Academy implements the 3-1 Curriculum where the first
                      three (3) years are spent in the Campus and one (1) year
                      onboard training. Training onboard ships is a
                      pre-requisite to graduation in accordance with 1978 STCW
                      Convention, as amended, and the policies and standards of
                      the Commission on Higher Education (CHED). During the
                      onboard training, three (3) months are conducted onboard
                      NYK Line training ships and nine (9) months onboard
                      regular vessels of NYK Line.
                    </p>
                  </div>
                </div>
              </div>
            </WEItem>
          </div>
        </div>
      </div>
    </div>
  );
}

function HobbiesAndInterest() {
  return (
    <div className="mb-12 flex flex-col justify-center items-center max-w-[1140px] mx-auto px-6">
      <div className="flex flex-col justify-center mb-8 relative">
        <div className="size-24 absolute flex items-center justify-center bg-indigo-500 text-white rounded-full">
          <RiBookFill className="size-10" />
        </div>
        <div className="ml-8 pl-20 py-8 border">
          <SubTitle subtitle="Reading" />
          <SubDescription subdescription="I have a particular fondness for isekai novels, as they provide an escape into exciting and imaginative worlds. I enjoy reading various genres and find it a great way to unwind after a busy day." />
        </div>
      </div>
      <div className="flex flex-col justify-center mb-8 relative">
        <div className="size-24 absolute flex items-center justify-center bg-violet-500 text-white rounded-full">
          <RiMovie2Fill className="size-10" />
        </div>
        <div className="ml-8 pl-20 py-8 border">
          <SubTitle subtitle="Series & Movies" />
          <SubDescription subdescription="Whether it's a gripping drama or an interesting documentary, I enjoy watching series and films on platforms like Netflix, staying updated with new trends, and discussing them with friends." />
        </div>
      </div>
      <div className="flex flex-col justify-center mb-8 relative">
        <div className="size-24 absolute flex items-center justify-center bg-purple-700 text-white rounded-full">
          <RiCodeFill className="size-10" />
        </div>
        <div className="ml-8 pl-20 py-8 border">
          <SubTitle subtitle="Technology & Coding" />
          <SubDescription subdescription="I'm passionate about web development, from designing engaging UI experiences to building scalable back-end systems. I love working with modern tools like React, TypeScript, Ruby on Rails, and more to bring innovative ideas to life." />
        </div>
      </div>
      <div className="flex flex-col justify-center mb-8 relative">
        <div className="size-24 absolute flex items-center justify-center bg-black text-white rounded-full">
          <RiFlightTakeoffFill className="size-10" />
        </div>
        <div className="ml-8 pl-20 py-8 border">
          <SubTitle subtitle="Travel" />
          <SubDescription subdescription="Exploring new places, experiencing different cultures, and capturing beautiful moments through photography are some of my greatest joys. I've traveled to Amsterdam, Italy, and many other exciting destinations, always on a budget, and enjoying the experience to its fullest." />
        </div>
      </div>
    </div>
  );
}

function ContactInformation() {
  return (
    <div className="mb-12 max-w-[1140px] mx-auto px-6">
      <div className="flex justify-between gap-8">
        {/* Email Contact */}
        <div className="w-full md:w-1/3 border hover:border-black p-8 cursor-pointer">
          <MdMarkEmailUnread className="text-indigo-500 text-3xl mb-4" />
          <h1 className="font-zilla text-2xl mb-4">Email Me</h1>
          <p className="font-light mb-4">
            Have questions, ideas, or just want to connect? Send me an email,
            and I'll get back to you soon!
          </p>
          <ButtonIndigo buttonText="Send Email" icon={<FaArrowRight />} />
        </div>

        {/* LinkedIn Contact */}
        <div className="w-full md:w-1/3 border hover:border-black p-8 cursor-pointer">
          <FaLinkedin className="text-indigo-500 text-3xl mb-4" />
          <h1 className="font-zilla text-2xl mb-4">Connect on LinkedIn</h1>
          <p className="font-light mb-4">
            Let's connect on LinkedIn! Follow me for insights, updates, and
            networking opportunities.
          </p>
          <ButtonIndigo buttonText="Visit LinkedIn" icon={<FaArrowRight />} />
        </div>

        {/* GitHub Contact */}
        <div className="w-full md:w-1/3 border hover:border-black p-8 cursor-pointer">
          <FaGithub className="text-indigo-500 text-3xl mb-4" />
          <h1 className="font-zilla text-2xl mb-4">Check My GitHub</h1>
          <p className="font-light mb-4">
            Interested in my projects? Visit my GitHub to see my latest work and
            open-source contributions.
          </p>
          <ButtonIndigo buttonText="Visit GitHub" icon={<FaArrowRight />} />
        </div>
      </div>
    </div>
  );
}

// FAQ Item component
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details>
      <summary
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center py-4 border-t border-stone-300 list-none cursor-pointer"
      >
        <span className="text-lg font-light">{question}</span>
        <img
          src={
            isOpen
              ? "https://assets.mofoprod.net/static/_images/minus-circle.svg"
              : "https://assets.mofoprod.net/static/_images/plus-circle.07f676a21c6b.svg"
          }
          alt="toggle icon"
        />
      </summary>
      <div className="pb-4">
        <p className="text-lg">{answer}</p>
      </div>
    </details>
  );
}

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-12 max-w-[1140px] mx-auto px-6">
      <div>
        <div>
          <Title title="General" />
        </div>
      </div>
      <div>
        <div>
          <FAQItem
            question="Why did you shift your career?"
            answer="I decided to shift my career to pursue my passion and explore new opportunities that align better with my personal values and goals."
          />
          <FAQItem
            question="What challenges did you face during the transition?"
            answer="The transition came with its own set of challenges, including learning new skills and adapting to a different work culture, but each obstacle was a stepping stone to growth."
          />
          <FAQItem
            question="How did you prepare for the career change?"
            answer="I dedicated time to self-education, attended relevant workshops, and networked with industry professionals to ensure a smooth and informed transition."
          />
          <FAQItem
            question="What advice would you give to others considering a similar shift?"
            answer="Be patient and persistent. Do your research, embrace continuous learning, and don't be afraid to step out of your comfort zone to follow your true calling."
          />
          <FAQItem
            question="What has been the most rewarding aspect of your new career?"
            answer="The most rewarding part has been the sense of fulfillment I get from aligning my work with my interests and contributing to projects that inspire me."
          />
          <FAQItem
            question="How do you see your career evolving in the future?"
            answer="I plan to keep growing by taking on new challenges, acquiring advanced skills, and exploring leadership opportunities to make a broader impact in my field."
          />
        </div>
      </div>
    </div>
  );
}

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
        description="We are committed to the realization of Artificial Intelligence
                      that is worthy of trust, both on and offline. This commitment
                      brings important topics such as bias, transparency, and the
                      stewardship of data to the forefront of the internet health
                      movement."
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
