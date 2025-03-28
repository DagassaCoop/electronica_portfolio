import { Link } from "react-router-dom";

// Components
import Button from "./Button";
import IconButton from "./IconButton";

// Assets
import Logo from "@/assets/svg/Logo";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import Hypotrochoid from "@/assets/svg/Hypotrochoid";
import Spiral from "@/assets/svg/Spiral";

// Mock
import { navLinks, contactInfo } from "@/mock";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden flex flex-col items-center bg-color-black text-white text-center pt-24 pb-8">
      <h1 className="h1 mb-8">
        The best time <br /> is now.
      </h1>
      <Button
        href="/contact"
        isRoute
        variant="white"
        className="py-8 px-24 mb-24"
      >
        contact me
      </Button>
      <IconButton
        icon={
          <Logo className="text-white hover:text-color-grey transition ease-in-out cursor-pointer" />
        }
        href="/"
        isRoute
        className="mb-14"
      />
      <div className="flex justify-center items-center w-1/2 flex-wrap gap-y-7 mb-14">
        {navLinks.map((link, index) => {
          return (
            <Link
              key={link.title}
              to={link.path}
              className={[
                "w-1/2 font-bold hover:text-color-blue transition ease-in-out",
                navLinks.length % 2 !== 0 && index === navLinks.length - 1
                  ? "text-center p-0"
                  : "odd:text-right odd:pr-8 even:text-left even:pl-8",
              ].join(" ")}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      <a
        className="body-2 font-bold text-color-grey hover:text-color-blue hover:opacity-30 mb-10 cursor-pointer"
        href={`mailto:${contactInfo.email}`}
      >
        {contactInfo.email || "gmail.com"}
      </a>
      <div className="flex justify-center items-center gap-8">
        {contactInfo.instagram && (
          <IconButton
            icon={
              <InstagramLogo
                weight="fill"
                width={36}
                height={36}
                className="text-white opacity-30 hover:opacity-100 transition ease-in-out"
              />
            }
            href={contactInfo.instagram}
          />
        )}

        {contactInfo.linkedIn && (
          <IconButton
            icon={
              <LinkedinLogo
                weight="fill"
                width={36}
                height={36}
                className="text-white opacity-30 hover:opacity-100 transition ease-in-out"
              />
            }
            href={contactInfo.linkedIn}
          />
        )}
      </div>

      <div className="absolute left-0 top-[10%] -translate-x-1/2 w-fit h-fit hidden xl:block">
        <Spiral className="text-color-greyLight" />
      </div>
      <div className="absolute right-0 top-[-10%] translate-x-1/2 w-fit h-fit hidden xl:block">
        <Hypotrochoid className="text-color-greyLight" />
      </div>
    </footer>
  );
};

export default Footer;
