// Assets
import { LinkedinLogo, InstagramLogo } from "@phosphor-icons/react";
import person from "@/assets/about-person.jpg";

// Components
import IconButton from "../components/IconButton";
import LoadFileButton from "../components/LoadFileButton";

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
            Hey! I'm Sasha. A passionate video production expert and digital
            marketer here to bring your vision to life!
          </p>
          <p className="body-3 mb-4">
            With a keen eye for detail and a flair for storytelling, I
            specialize in delivering powerful video production services,
            including videography, video editing, and sound design. Whether
            you're looking to craft an impactful brand story, engage viewers
            with captivating visuals, or enhance your social media presence,
            I've got you covered.
          </p>
          <p className="body-3 mb-12">
            Beyond video production, I offer comprehensive social media
            management, focusing on YouTube channel growth and community
            engagement. My approach ensures that each piece of content is not
            only beautifully crafted but also strategically designed to boost
            your digital footprint.
          </p>

          <LoadFileButton icon iconClass="text-color-blue" className="mb-16">
            resume
          </LoadFileButton>

          {/* <div className="w-fit flex justify-between items-center gap-3 mb-12">
            <p className="body-1">designs you&apos;ll</p>
            <Heart weight="fill" className="text-color-pink" />
            <p className="body-1">, guaranteed.</p>
          </div> */}

          <p className="body-1 text-color-grey opacity-80 text-sm mb-1">
            or find me on:
          </p>
          <div className="flex justify-start items-center gap-4 -translate-x-1">
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
