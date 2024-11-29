// Components
import Button from "@/components/shared/Button";
import Carousel from "@/components/shared/Carousel";

// Assets
import Hypotrochoid from "@/assets/svg/Hypotrochoid";

const Works = () => {
  return (
    <section
      id="works"
      className="relative w-full mt-[128px] px-0 sm:px-8 max-lg:overflow-hidden"
    >
      <div className="relative w-full h-full bg-color-blue pb-[300px] lg:pb-[200px] overflow-hidden">
        <div className="relative z-5 flex flex-col justify-between items-center min-w-[300px] max-w-[500px] mx-auto pt-28 pb-[200px] lg:items-start lg:ml-[6rem] lg:pb-0 xl:max-w-[600px] xl:ml-[9rem]">
          <h1 className="relative h1 text-color-black text-center mb-20 lg:text-start">
            Here are some of my past projects.
          </h1>
          <Button
            variant="white"
            className="text-color-blue"
            href="/works"
            isRoute
          >
            see more works
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-1/3 md:top-1/4 lg:top-1/2">
          <div className="absolute bottom-0 left-4 right-4 top-0 translate-y-40 sm:translate-y-[10rem] md:left-0 md:right-0 lg:translate-y-1/3">
            <Hypotrochoid className="relative w-full max-h-full text-color-violet lg:max-h-none lg:scale-[115%]" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 -translate-x-1/3 translate-y-[50px] w-full flex justify-center sm:translate-x-0 lg:justify-end lg:translate-y-0 lg:-top-[2rem] lg:-bottom-[2rem]">
        <div className="h-full flex justify-center sm:max-w-[75%] md:w-full lg:justify-end lg:mr-[4rem] xl:mr-[8rem]">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Works;
