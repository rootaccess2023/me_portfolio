import { RiArrowRightWideFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiExternalLink } from "react-icons/fi";
import { ButtonWhite } from "../components";
import { BsFillPuzzleFill } from "react-icons/bs";
import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaMicrophone,
  FaSearch,
  FaUsers,
} from "react-icons/fa";
import {
  MdOutlineAccessTime,
  MdOutlineAppShortcut,
  MdOutlineCode,
  MdOutlineComputer,
  MdOutlineDeveloperMode,
  MdOutlineIntegrationInstructions,
  MdOutlineLaptopMac,
  MdOutlineWeb,
} from "react-icons/md";

function Slider({
  title,
  description,
  position,
  backgroundColor,
  date,
  buttonText,
  link,
}) {
  return (
    <div className={`h-full ${backgroundColor} mx-auto`}>
      <div className="relative h-full max-w-[1140px] mx-auto">
        <div
          className={`absolute w-[calc(100%-2rem)] md:w-4/5 lg:w-[800px] drop-shadow left-4 right-4 md:left-8
          ${
            position === "bottom-12"
              ? "bottom-6 sm:bottom-8 md:bottom-12"
              : position
          }`}
        >
          <p className="bg-violet-100 text-xs sm:text-sm mb-2 sm:mb-4 w-fit text-neutral-900 px-3 sm:px-4 rounded-full py-1">
            {date}
          </p>
          <h1 className="font-zilla text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 text-white">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-[20px] leading-[1.3] font-extralight text-neutral-50 mb-2 sm:mb-4 line-clamp-3 md:line-clamp-none">
            {description}
          </p>
          <div className="mt-4">
            <ButtonWhite
              buttonText={buttonText}
              icon={<FiExternalLink />}
              link={link}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white">
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mx-auto">
        <Swiper
          fadeEffect={true}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full"
        >
          <SwiperSlide>
            <Slider
              backgroundColor="bg-gradient-to-t from-indigo-900 to-zinc-100"
              position="bottom-12"
              title="Sample Text"
              date="14 FEBRUARY 2025"
              link="#"
              buttonText="Read more"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <section className="py-16 md:py-20">
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div>
              <h2 className="font-zilla text-3xl md:text-4xl lg:text-3xl font-light leading-tight mb-6">
                Building digital experiences that combine functionality with
                exceptional design.
              </h2>
              <p className="text-base md:text-lg mb-8">
                As a frontend developer, I create seamless user interfaces and
                engaging web applications. I focus on clean code, performance
                optimization, and intuitive design to deliver experiences that
                resonate with users and help businesses achieve their goals.
              </p>
              <a
                href="/about/development-approach"
                className="inline-flex text-lg font-semibold items-center text-indigo-700 font-medium hover:underline"
              >
                More about my approach
                <FaArrowRight className="pl-2" />
              </a>
            </div>
            {/* Right Column - Stats */}
            <div className="space-y-12">
              {/* Projects completed */}
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="bg-indigo-100 rounded-lg p-3 text-indigo-500">
                    <MdOutlineCode size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="font-zilla text-3xl md:text-4xl font-medium mb-1">
                    5+ projects
                  </h3>
                  <p className="text-base md:text-lg">
                    including personal and collaborative work
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="bg-indigo-100 rounded-lg p-3 text-indigo-500">
                    <MdOutlineAppShortcut size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="font-zilla text-3xl md:text-4xl font-medium mb-1">
                    3 core technologies
                  </h3>
                  <p className="text-base md:text-lg">
                    focused on React, Ruby on Rails, and responsive design
                  </p>
                </div>
              </div>

              {/* Learning commitment */}
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="bg-indigo-100 rounded-lg p-3 text-indigo-500">
                    <MdOutlineAccessTime size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="font-zilla text-3xl md:text-4xl font-medium mb-1">
                    500+ hours
                  </h3>
                  <p className="text-base md:text-lg">
                    of coding practice and continuous learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Home() {
  return (
    <div className="w-full mx-auto">
      <Main />
    </div>
  );
}
