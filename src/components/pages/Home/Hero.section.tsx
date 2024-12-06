// Components
import Button from "@/components/shared/Button";

// Assets
import Branch from "@/assets/svg/Branch";
import Hypotrochoid from "@/assets/svg/Hypotrochoid";
import heroPerson from "@/assets/hero-person.png";

// Icons
import { Heart } from "@phosphor-icons/react";
import Promo from "@/components/shared/Promo";

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
          Building unique brands and visual experiences to bring out the best in
          what you offer.
        </p>

        <div className="flex gap-6 mt-16 mb-5">
          <Button href="/contact" isRoute>
            book a free call
          </Button>
          <Branch />
        </div>
        <div className="w-fit flex justify-between items-center gap-3">
          <p className="body-1">designs you&apos;ll</p>
          <Heart weight="fill" className="text-color-pink" />
          <p className="body-1">, guaranteed.</p>
        </div>
      </div>

      {/* Image */}
      <div className="absolute pointer-events-none z-2 bottom-0 right-0 translate-x-1/3 translate-y-[4rem] md:translate-x-20 xl:overflow-hidden xl:w-[800px] xl:translate-x-[100px] xl:translate-y-0 2xl:right-40">
        <div className="relative z-3 w-[650px] xl:w-full">
          <img src={heroPerson} alt="person" className="relative z-3 w-full" />
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
