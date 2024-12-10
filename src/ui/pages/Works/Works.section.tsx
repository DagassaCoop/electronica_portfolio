import { useState } from "react";

// Mock
import { longVideos, shortVideos } from "@/mock/works";

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
    }
  };

  return (
    <section id="works" className="relative container pt-12 pb-24">
      <h1 className="h1 mb-16">Past works</h1>

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
    </section>
  );
};

export default WorksSection;
