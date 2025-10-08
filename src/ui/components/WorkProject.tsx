import { FC, useState } from "react";

// Entities
import { IWorkProject, IPhoto } from "@/entities/Work";

// Components
import { Dialog, DialogContent, DialogTrigger } from "@/ui/shadcn/dialog";
import VideoPlayer from "./VideoPlayer";
import PhotoCarousel from "./PhotoCarousel";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Skeleton } from "@/ui/shadcn/skeleton";

interface IWorkItemProps {
  project: IWorkProject;
}

const WorkItem: FC<IWorkItemProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Check if work is photos or videos
  const isPhotoProject =
    project.work.length > 0 && !("type" in project.work[0]);

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogTrigger asChild>
        <div
          key={project.id}
          className="works-item group flex flex-col justify-between w-full border-[3px] border-color-grey rounded-3xl px-7 pt-7 pb-8 transition ease-in-out hover:bg-color-blue hover:text-white hover:border-color-blue cursor-pointer"
        >
          <div className="max-h-[30vh] flex justify-center items-center border-[3px] border-color-grey rounded-3xl mb-8 overflow-hidden transition ease-in-out group-hover:scale-[102.5%]">
            {!isImageLoaded && <Skeleton className="w-full h-[30vh]" />}
            <img
              src={project.cover}
              alt={project.title}
              className={`scale-[101%] w-full transition-opacity duration-300 ${
                isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
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
      </DialogTrigger>
      <DialogContent
        className={`p-4 sm:p-10 bg-color-kidnapper border-none duration-500 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-98 ${
          isPhotoProject
            ? "max-w-[90vw] md:max-w-[60vw] lg:max-w-[40vw]"
            : "sm:max-w-[98vw] md:max-w-[90vw] w-fit"
        }`}
      >
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        {isPhotoProject ? (
          <PhotoCarousel
            photos={project.work as IPhoto[]}
            onClose={() => setShowModal(false)}
          />
        ) : (
          <VideoPlayer url={project.work[0].source} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WorkItem;
