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
      <div className="relative h-full max-w-[1040px] mx-auto">
        <div className={`absolute w-[800px] drop-shadow ${position}`}>
          <p className="bg-violet-100 text-[0.875rem] mb-4 w-fit text-neutral-900 px-4 rounded-full py-1">
            {date}
          </p>
          <h1 className="font-zilla text-5xl mb-2 text-white">{title}</h1>
          <p className="text-[20px] leading-[1.3] font-extralight text-neutral-50 mb-4">
            {description}
          </p>
          <ButtonWhite buttonText={buttonText} icon={<FiExternalLink />} />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white">
      <div className="h-[600px] mx-auto">
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
              title="Sampl Text"
              date="14 FEBRUARY 2025"
              link="#"
              buttonText="Read more"
              description="Lorem ipsum"
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
              description="Lorem ipsum"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              backgroundColor="bg-gradient-to-t from-blue-900 to-zinc-100"
              position="bottom-12"
              title="Sample text"
              date="14 FEBRUARY 2025"
              link="#"
              buttonText="Read more"
              description="Lorem ipsum"
              Lorem
              ipsum
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
