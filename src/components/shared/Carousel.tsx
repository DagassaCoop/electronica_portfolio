import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// Mock
import { Works } from "@/mock";

// Entities
import { IWorkPreview } from "@/entities/Work";

const DURATION = 15;
const ITEM_H = 336;
const GAP = 30;

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const worksPreview: IWorkPreview[] = Works.map((item) => {
    return {
      id: item.id,
      title: item.title,
      img: item.img,
    };
  });

  useGSAP(() => {
    const container = containerRef?.current;
    if (!container) return;

    const ms = container.offsetHeight / DURATION;
    const blockMoveTime = ITEM_H / ms;
    const itemMoveTime = blockMoveTime + GAP / ms;

    let delay = 0;
    if (itemMoveTime * worksPreview.length > DURATION) {
      delay = itemMoveTime * worksPreview.length - DURATION;
    }

    gsap.to(".carousel__item", {
      y: -container.offsetHeight,
      duration: DURATION,
      ease: "none",
      stagger: {
        each: itemMoveTime,
        repeatDelay: delay,
        repeat: -1,
      },
    });
  }, []);

  return (
    <div
      className="relative w-[595px] h-full overflow-hidden z-[100]"
      style={{
        maskImage:
          "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
        minHeight: ITEM_H + GAP * 2 + "px",
      }}
    >
      <div
        ref={containerRef}
        className="carousel__container absolute left-0 right-0 z-5 flex flex-col justify-center"
        style={{ top: -ITEM_H, bottom: -ITEM_H }}
      >
        {worksPreview.map((item) => {
          return (
            <div
              key={item.id}
              className="carousel__item bg-color-kidnapper text-white flex justify-center items-center absolute bottom-0 left-12 right-12 md:left-4 md:right-4"
              style={{ height: ITEM_H }}
            >
              <div className="absolute inset-3">
                <div className="relative w-full h-full flex justify-center items-center">
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
