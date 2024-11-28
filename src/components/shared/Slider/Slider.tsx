import { FC, useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Assets
import SliderBgImage from "@/assets/svg/SliderBgImage";
import CaretLeft from "@/assets/svg/CaretLeft";
import CaretRight from "@/assets/svg/CaretRight";
import "./slider.css";

// Mock
import { SliderItems } from "@/mock";

// Components
import IconButton from "../IconButton";

interface ISliderProps {
  className?: string;
}

const SWIPE_SPEED = 750;

const Slider: FC<ISliderProps> = ({ className }) => {
  const swiperRef = useRef<{ swiper: SwiperClass } | null>(null);

  const handleLeftClick = () => {
    const swiper = swiperRef?.current?.swiper;
    swiper?.slidePrev(SWIPE_SPEED);
  };

  const handleRightClick = () => {
    const swiper = swiperRef?.current?.swiper;
    swiper?.slideNext(SWIPE_SPEED);
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      console.log(index, className);
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <div className={["relative flex flex-col", className].join(" ")}>
      <div className="flex w-fil mx-auto gap-4 xl:absolute xl:top-[45%] xl:left-1/2 xl:-translate-x-1/2 xl:w-[900px] xl:z-20 xl:justify-between">
        <IconButton
          icon={<CaretLeft />}
          className="text-color-grey bg-color-greyLight rounded-full"
          onClick={handleLeftClick}
        />
        <IconButton
          icon={<CaretRight />}
          className="text-color-grey bg-color-greyLight rounded-full"
          onClick={handleRightClick}
        />
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // autoplay={true}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full"
      >
        {SliderItems.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="relative min-h-[400px] justify-center items-center cursor-grab mask-x"
              style={{ height: "auto", display: "flex" }}
            >
              <div
                className={[
                  "relative z-10 flex justify-center items-center w-[416px] h-fit mx-auto gap-10",
                  item.iconPosition === "center" ? "flex-col" : "",
                ].join(" ")}
              >
                {(item.iconPosition === "left" ||
                  item.iconPosition === "center") && (
                  <IconButton
                    icon={item.icon}
                    className={[
                      "min-w-[80px] min-h-[80px] rounded-full bg-white flex justify-center items-center",
                      item.iconPosition === "left"
                        ? "mb-auto -translate-y-3"
                        : "",
                    ].join(" ")}
                  />
                )}
                <div style={{ textAlign: item.iconPosition }}>
                  <h2 className="h2 mb-4">{item.title}</h2>
                  <p className="body-1">{item.description}</p>
                </div>
                {item.iconPosition === "right" && (
                  <IconButton
                    icon={item.icon}
                    className="min-w-[80px] min-h-[80px] rounded-full bg-white flex justify-center items-center mb-auto -translate-y-3"
                  />
                )}
              </div>
              <div className="absolute sm:inset-0 z-5 flex justify-center items-center max-sm:w-fit">
                <SliderBgImage active={item.iconPosition} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
