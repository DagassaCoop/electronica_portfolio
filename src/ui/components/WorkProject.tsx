import { FC } from "react";

// Entities
import { IWorkProject } from "@/entities/Work";

interface IWorkItemProps {
  project: IWorkProject;
}

const WorkItem: FC<IWorkItemProps> = ({ project }) => {
  return (
    <div
      key={project.id}
      className="works-item group flex flex-col justify-between w-full border-[3px] border-color-grey rounded-3xl px-7 pt-7 pb-8 transition ease-in-out hover:bg-color-blue hover:text-white hover:border-color-blue"
    >
      <div className="border-[3px] border-color-grey rounded-3xl mb-16 overflow-hidden transition ease-in-out cursor-pointer group-hover:scale-[102.5%]">
        <img src={project.cover} alt={project.title} />
      </div>
      <div>
        <h2 className="h2 mb-4">{project.title}</h2>
        {/* <p className="body-1 text-color-grey mb-12 group-hover:text-color-greyLight">
        {work.work.toDateString()}
      </p> */}
        <p className="body-1">{project.description}</p>
      </div>
    </div>
  );
};

export default WorkItem;
