// Assets
import { Heart, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react";
import person from "@/assets/about-person.webp";

// Components
import Button from "../components/Button";
import IconButton from "../components/IconButton";

// Mock
import { contactInfo } from "@/mock";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="relative grid pt-12 pb-24 md:container xl:grid-cols-2 xl:gap-32"
      >
        <div className="relative mb-12 w-[374px] md:w-[540px] mx-auto h-auto">
          <div className="relative z-2 h-full pb-6 px-8">
            <img src={person} alt="Person" />
          </div>
          <div className="absolute z-1 bottom-0 left-0 right-0 top-[75%] bg-color-blue" />
        </div>
        <div className="max-md:container flex flex-col">
          <h1 className="h1 mb-6">About me.</h1>
          <p className="body-3 mb-4">
            My name is Matt, and I am a passionate and experienced web designer
            and product designer.
          </p>
          <p className="body-3 mb-4">
            With a keen eye for aesthetics and a deep understanding of user
            experience, I strive to create digital experiences that are not only
            visually stunning but also highly functional and intuitive.
          </p>
          <p className="body-3 mb-12">
            My journey in design began 7 years ago, and since then, I have had
            the privilege of working with a diverse range of clients, from
            startups to established businesses, helping them elevate their
            online presence and product offerings.
          </p>

          <Button
            href="/contact"
            isRoute
            icon
            iconClass="text-color-blue"
            className="mb-4"
          >
            get in touch
          </Button>

          <div className="w-fit flex justify-between items-center gap-3 mb-12">
            <p className="body-1">designs you&apos;ll</p>
            <Heart weight="fill" className="text-color-pink" />
            <p className="body-1">, guaranteed.</p>
          </div>

          <p className="body-1 text-color-grey opacity-80 text-sm mb-1">
            or find me on:
          </p>
          <div className="flex justify-start items-center gap-8 -translate-x-1">
            {contactInfo.instagram && (
              <IconButton
                icon={
                  <InstagramLogo
                    weight="fill"
                    width={32}
                    height={32}
                    className="text-color-grey opacity-70 hover:opacity-50 hover:text-color-blue transition ease-in-out"
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
                    width={32}
                    height={32}
                    className="text-color-grey opacity-70 hover:opacity-50 hover:text-color-blue transition ease-in-out"
                  />
                }
                href={contactInfo.linkedIn}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
