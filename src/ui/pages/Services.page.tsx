// Mock
import { services } from "@/mock";

// Components
import Button from "../components/Button";

// Assets
import OlPoint from "@/assets/svg/OlPoint";
import services_img from "@/assets/services_img.avif";
import Spiral from "@/assets/svg/Spiral";

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="relative container pt-12 pb-20 grid min-[1200px]:grid-cols-2"
      >
        <div className="relative z-5 flex flex-col mb-32 min-[1200px]:mb-0 w-[450px] xl:w-[500px]">
          <h1 className="h1 mb-4">Services</h1>
          <p className="body-2 mb-14">
            Whether you're a startup seeking a captivating brand identity, a
            business looking to elevate your web presence, we've got you
            covered.
          </p>
          <ol className="mb-10">
            {services.map((item, index) => {
              return (
                <li
                  key={index}
                  className="body-1 text-2xl font-medium border-b-color-grey border-b-2 py-5 flex gap-5"
                >
                  <OlPoint />
                  {item}
                </li>
              );
            })}
          </ol>
          <p className="body-2 mb-4">
            We tailor your experience to your specific needs, if you’d like to
            hear more, hop on a free call with us.
          </p>
          <Button>see my experience</Button>
        </div>
        <div className="flex justify-center min-[1200px]:justify-end">
          <div className="relative z-5 p-8 bg-color-greyLight max-w-[300px] min-[1200px]:max-w-[400px] h-fit xl:max-w-[500px]">
            <div className="bg-white">
              <img src={services_img} alt="" className="" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-1 w-[400px] h-[600px] hidden min-[1200px]:block bg-color-blue xl:translate-x-[100px] xl:w-[550px]" />
          <div className="absolute bottom-0 -left-1/2 -right-1/2 h-[300px] min-[1200px]:hidden bg-color-blue" />
          <Spiral className="absolute right-0 bottom-0 z-2 text-color-violet scale-75 translate-y-[12rem] max-sm:-right-1/2 max-md:-right-1/3 min-[1200px]:scale-100 min-[1200px]:translate-x-[6rem] min-[1200px]:translate-y-[6rem] xl:translate-x-[14rem] xl:translate-y-[4rem] xl:scale-110" />
        </div>
      </section>
    </>
  );
};

export default Services;
