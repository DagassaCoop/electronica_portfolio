// Components
import LoadFileButton from "@/ui/components/LoadFileButton";
import Promo from "@/ui/components/Promo";

// Assets
import Branch from "@/assets/svg/Branch";
import Hypotrochoid from "@/assets/svg/Hypotrochoid";
import heroPerson from "@/assets/hero-person.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="container relative pt-[200px] md:pt-[96px] xl:pt-[200px] pb-[290px] xl:pb-[200px] overflow-hidden max-w-full m-0 xl:px-[10%] xl:h-screen xl:max-h-[800px] xl:overflow-visible"
    >
      {/* Text content */}
      <div className="relative z-2 max-w-[60%] min-w-[400px] xl:max-w-1/2 pb-[300px] md:pb-[150px] xl:pb-0 xl:max-w-[50%]">
        <h1 className="h1 mb-4">
          I&apos;m Sasha. Videographer, professional content creator.
        </h1>
        <p className="body-1">
          Creating videos from start to finish, turning ideas into engaging
          stories that connect with your audience.
        </p>

        <div className="flex gap-6 mt-16 mb-5">
          <LoadFileButton>resume</LoadFileButton>
          <Branch />
        </div>
      </div>

      {/* Image */}
      <div className="absolute pointer-events-none z-2 bottom-0 right-0 translate-x-[20%] translate-y-[4rem] md:translate-x-20 xl:overflow-hidden xl:w-[800px] xl:translate-x-[100px] xl:translate-y-0 2xl:right-40">
        <div className="relative z-3 flex justify-center w-[650px] xl:w-full">
          <div className="w-[350px] lg:w-[400px] xl:w-[450px]">
            <img
              src={heroPerson}
              alt="person"
              className="hero-img relative z-3 w-full"
            />
          </div>

          <div className="absolute inset-0 flex justify-center items-center translate-y-32 -translate-x-4 md:-translate-x-24 md:inset-6 xl:translate-x-0 xl:inset-0">
            <Hypotrochoid className="relative text-color-violet rotate-12" />
          </div>
        </div>
      </div>

      {/* Contact */}
      <Promo className="absolute hidden z-10 -bottom-4 right-[150px] " />

      {/* Backgrounds */}
      <div className="absolute z-1 bottom-0 left-0 right-0 bg-color-blue h-[290px] xl:hidden"></div>
      <div className="absolute hidden z-1 -top-1/2 right-0 bottom-0 w-[600px]  bg-color-blue xl:block 2xl:right-40"></div>
      <div className="absolute hidden z-1 right-0 -top-1/2 bottom-full translate-y-36 w-[50px] bg-color-blue 2xl:block"></div>
    </section>
  );
};

export default Hero;
