// Mock
import { works } from "@/mock";

// Components
import Button from "@/components/shared/Button";

// Assets
import { Heart } from "@phosphor-icons/react";

const WorksSection = () => {
  return (
    <section id="works" className="relative container section-start">
      <h1 className="h1 mb-4">Past works</h1>
      <p className="body-1 mb-16">
        Here are some our past projects. We take care in bringing the best out
        of their offering and making them stand out both in their field, and in
        the real world.
      </p>
      <div className="w-full grid xl:grid-cols-2 gap-14 mb-20">
        {works.map((item) => {
          return (
            <div
              key={item.id}
              className="works-item group w-full border-[3px] border-color-grey rounded-3xl px-7 pt-7 pb-8 transition ease-in-out hover:bg-color-blue hover:text-white hover:border-color-blue"
            >
              <div className="border-[3px] border-color-grey rounded-3xl mb-16 overflow-hidden transition ease-in-out cursor-pointer group-hover:scale-[102.5%]">
                <img src={item.img} alt={item.title} />
              </div>
              <h2 className="h2 mb-4">{item.title}</h2>
              <p className="body-1 text-color-grey mb-12 group-hover:text-color-greyLight">
                {item.date.toDateString()}
              </p>
              <p className="body-1">{item.description}</p>
            </div>
          );
        })}
      </div>
      <div>
        <p className="body-1 mb-4">Want to collaborate on a future project?</p>
        <Button
          href="/contact"
          isRoute
          variant="blue"
          className="mb-5 py-4 px-12"
        >
          get in touch
        </Button>
        <div className="w-fit flex justify-between items-center gap-3">
          <p className="body-1">designs you&apos;ll</p>
          <Heart weight="fill" className="text-color-pink" />
          <p className="body-1">, guaranteed.</p>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
