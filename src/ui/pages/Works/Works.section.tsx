import { useState } from "react";

// Mock
import { longVideos, shortVideos } from "@/mock/works";

// Components
import Button from "@/ui/components/Button";

// Assets
import { Heart } from "@phosphor-icons/react";

// Entities
import { IWorkProject, TWorkGroup } from "@/entities/Work";
import WorkProject from "@/ui/components/WorkProject";

const WORK_TYPES: TWorkGroup[] = ["long video", "short video"];

const WorksSection = () => {
  const [workGroup, setWorkGroup] = useState<TWorkGroup>("long video");
  const [works, setWorks] = useState<IWorkProject[]>(longVideos);

  const handleWorkGroupUpdate = (groupName: TWorkGroup) => {
    setWorkGroup(groupName);
    switch (groupName) {
      case "long video":
        setWorks(longVideos);
        break;
      case "short video":
        setWorks(shortVideos);
        break;
      // case "photo":
      //   setWorks(photos);
      //   break;
      // case "graphic design":
      //   setWorks(graphicDesigns);
      //   break;
    }
  };

  return (
    <section id="works" className="relative container pt-12 pb-24">
      <h1 className="h1 mb-4">Past works</h1>
      <p className="body-1 mb-16">
        Here are some our past projects. I take care in bringing the best out of
        their offering and making them stand out both in their field, and in the
        real world.
      </p>

      <div className="grid grid-cols-2 max-sm:gap-4 sm:flex justify-around items-center w-full h-auto mb-8">
        {WORK_TYPES.map((item) => {
          return (
            <button
              key={item}
              className={[
                "font-trap px-4 py-2 border-2 rounded-md border-color-grey hover:border-color-blue transition ease-in-out",
                item === workGroup
                  ? "bg-color-blue text-white border-color-blue"
                  : "",
              ].join(" ")}
              onClick={() => handleWorkGroupUpdate(item)}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="w-full grid xl:grid-cols-2 gap-14 mb-20">
        {works.map((item) => {
          return <WorkProject project={item} key={item.id} />;
        })}
      </div>
      {/* <div>
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
      </div> */}
    </section>
  );
};

export default WorksSection;
