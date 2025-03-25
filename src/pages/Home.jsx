import { RiArrowRightWideFill } from "react-icons/ri";
import placeHolder from "../assets/placeholder.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiExternalLink } from "react-icons/fi";
import { ButtonWhite } from "../components";

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
          <SwiperSlide>
            <Slider
              backgroundColor="bg-gradient-to-t from-green-900 to-zinc-100"
              position="bottom-12"
              title="Sample Text"
              date="14 FEBRUARY 2025"
              link="#"
              buttonText="Read more"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              backgroundColor="bg-gradient-to-t from-blue-900 to-zinc-100"
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
