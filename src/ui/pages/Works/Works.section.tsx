import { useState } from "react";

// Mock
import { longVideos, shortVideos } from "@/mock/works";

// Entities
import { TWorkGroup, WORK_GROUPS } from "@/entities/Work";
import WorkProject from "@/ui/components/WorkProject";

const WorksSection = () => {
  const [workGroup, setWorkGroup] = useState<TWorkGroup>("long video");

  const handleWorkGroupUpdate = (groupName: TWorkGroup) => {
    setWorkGroup(groupName);
  };

  return (
    <section id="works" className="relative container pt-12 pb-24">
      <h1 className="h1 mb-16">Past works scripted, filmed and edited by me</h1>

      <div className="grid grid-cols-2 max-sm:gap-4 sm:flex justify-around items-center w-full h-auto mb-8">
        {WORK_GROUPS.map((item) => {
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

      {/* Content */}
      {workGroup === "long video" && (
        <div className="w-full grid xl:grid-cols-2 gap-14 mb-20">
          {longVideos.map((item) => {
            return <WorkProject project={item} key={item.id} />;
          })}
        </div>
      )}

      {workGroup === "short video" && (
        <div className="w-full grid xl:grid-cols-2 gap-14 mb-20">
          {shortVideos.map((item) => {
            return <WorkProject project={item} key={item.id} />;
          })}
        </div>
      )}
    </section>
  );
};

export default WorksSection;
