import { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";

// Assets
import Logo from "@/assets/svg/Logo";

// Components
import IconButton from "./IconButton";

// Icons
import { List, X } from "@phosphor-icons/react";

// Mock
import { navLinks } from "@/mock";
import Button from "./Button";
import PulseLines from "@/assets/svg/PulseLines";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (e: MouseEvent) => {
    setOpen(false);
  };

  const lastNavLink = navLinks.at(-1);

  return (
    <div className="fixed z-50 top-0 w-full xl:absolute">
      <div
        className={[
          "w-full relative md:flex md:justify-between md:items-center md:w-fit md:mx-auto md:gap-8 md:py-2 xl:w-full xl:container",
          open ? "h-fit bg-color-black" : "",
        ].join(" ")}
      >
        <div className="max-md:container w-full flex justify-between items-center py-4 md:w-fit">
          <IconButton
            icon={
              <Logo
                className={[
                  "hover:text-color-greyLight transition ease-in-out cursor-pointer md:text-color-grey",
                  open ? "text-white" : "text-color-grey",
                ].join(" ")}
              />
            }
            href="/"
            isRoute
            onClick={handleLinkClick}
          />

          <div
            className={[
              "md:hidden cursor-pointer",
              open ? "text-white" : "text-color-grey",
            ].join(" ")}
          >
            {open ? (
              <X width={32} height={32} onClick={() => setOpen(false)} />
            ) : (
              <List width={32} height={32} onClick={() => setOpen(true)} />
            )}
          </div>
        </div>
        <div
          className={[
            "flex-col gap-5 p-6 md:flex md:flex-row md:items-center md:rounded-[100px] md:border-2 md:border-color-grey md:gap-6 md:py-1 xl:w-full xl:border-0 xl:justify-between xl:py-0",
            open ? "flex" : "hidden",
          ].join(" ")}
        >
          <div className="flex flex-col gap-5 md:flex-row md:gap-6 xl:rounded-[100px] xl:border-2 xl:border-color-grey xl:px-6 xl:py-1 min-[1360px]:border-0 min-[1360px]:gap-14">
            {navLinks.map((item, index) => {
              return (
                <div
                  key={item.path}
                  className={[
                    "w-full flex justify-end items-center p-3 text-white font-bold md:w-16 md:h-16 md:p-0 md:justify-center",
                    index === navLinks.length - 1 ? "hidden" : "",
                  ].join(" ")}
                >
                  {index !== navLinks.length - 1 ? (
                    <>
                      <Link
                        to={item.path}
                        className="hover:text-color-blue transition ease-in-out md:hidden min-[1360px]:block min-[1360px]:text-color-grey min-[1360px]:hover:text-color-black"
                        onClick={handleLinkClick}
                      >
                        {item.title}
                      </Link>
                      <IconButton
                        icon={item.icon}
                        href={item.path}
                        isRoute
                        className="hidden md:block min-[1360px]:hidden"
                      />
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="hidden w-[2px] h-6 mr-4 bg-color-grey md:block xl:hidden"></div>
          <div
            key={lastNavLink?.path}
            className="w-full flex justify-end items-center p-3 text-white font-bold md:w-14 md:h-14 md:p-0 md:justify-center md:bg-color-black md:rounded-full xl:rounded-none xl:bg-transparent xl:w-fit"
          >
            <Button
              className="w-full md:hidden"
              variant="white"
              href={lastNavLink?.path}
              isRoute
              onClick={handleLinkClick}
            >
              {lastNavLink?.title}
            </Button>
            <IconButton
              icon={lastNavLink?.icon}
              href={lastNavLink?.path}
              isRoute
              className="hidden md:block xl:hidden"
            />
            <div className="hidden xl:block relative hover:-translate-y-[6px] transition ease-in-out">
              <Button
                className=""
                variant="black"
                href={lastNavLink?.path}
                isRoute
                transition={false}
              >
                {lastNavLink?.title}
              </Button>
              <PulseLines className="absolute -right-5 -top-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
