import { FC, useState } from "react";

// Entities
import { IWorkProject, IPhoto } from "@/entities/Work";

// Components
import { Dialog, DialogContent, DialogTrigger } from "@/ui/shadcn/dialog";
import VideoPlayer from "./VideoPlayer";
import PhotoCarousel from "./PhotoCarousel";
import { DialogTitle } from "@radix-ui/react-dialog";

interface IWorkItemProps {
  project: IWorkProject;
}

const WorkItem: FC<IWorkItemProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  // Check if work is photos or videos
  const isPhotoProject =
    project.work.length > 0 && !("type" in project.work[0]);

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <div
        key={project.id}
        className="works-item group flex flex-col justify-between w-full border-[3px] border-color-grey rounded-3xl px-7 pt-7 pb-8 transition ease-in-out hover:bg-color-blue hover:text-white hover:border-color-blue"
      >
        <DialogTrigger asChild>
          <div className="max-h-[30vh] flex justify-center items-center border-[3px] border-color-grey rounded-3xl mb-8 overflow-hidden transition ease-in-out cursor-pointer group-hover:scale-[102.5%]">
            <img
              src={project.cover}
              alt={project.title}
              className="scale-[101%] w-full"
            />
          </div>
        </DialogTrigger>
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h2 className="h2 mb-4">{project.title}</h2>
            <p className="body-1 text-color-grey mb-12 group-hover:text-color-greyLight">
              {project.type}
            </p>
          </div>

          <p className="body-1">{project.description}</p>
        </div>
      </div>
      {isPhotoProject ? (
        <DialogContent className="w-[80vw] md:w-[60vw] sm:max-w-[90vw] p-4 sm:p-10 bg-color-kidnapper border-none duration-500 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-98">
          <DialogTitle />
          <PhotoCarousel
            photos={project.work as IPhoto[]}
            onClose={() => setShowModal(false)}
          />
        </DialogContent>
      ) : (
        <DialogContent className="sm:max-w-[98vw] md:max-w-[90vw] w-fit p-4 sm:p-10 bg-color-kidnapper border-none duration-500 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-98">
          <DialogTitle />
          <VideoPlayer url={project.work[0].source} />
        </DialogContent>
      )}
    </Dialog>
  );
};

export default WorkItem;
