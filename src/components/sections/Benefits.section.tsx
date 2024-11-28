// Components
import SliderBgImage from "@/assets/svg/SliderBgImage";
import Button from "../shared/Button";
import Slider from "../shared/Slider/Slider";

const Benefits = () => {
  return (
    <section id="benefit" className="container relative mt-[128px]">
      <h1 className="h1 mb-16">
        Calculated, Tailored <br /> Marketing.
      </h1>
      <Slider className="mb-16" />
      <div className="w-full flex flex-col justify-center items-center">
        <p className="body-1 text-sm mb-4">
          let me tell you more about how life-changing this is.
        </p>
        <Button>contact me</Button>
      </div>
      {/* <div className="w-full flex justify-center">
        <SliderBgImage active="right" />
      </div> */}
    </section>
  );
};

export default Benefits;
