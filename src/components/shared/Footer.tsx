import { Link } from "react-router-dom";

// Components
import Button from "./Button";

// Assets
import Logo from "@/assets/svg/Logo";
import IconButton from "./IconButton";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

// Mock
import { navLinks, contactInfo } from "@/mock";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-color-black text-white text-center pt-24 pb-8">
      <h1 className="h1 mb-4">The best time is now.</h1>
      <p className="body-1 mb-16">
        Let me tell you more about how life-changing this is.
      </p>
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
    </footer>
  );
};

export default Footer;
