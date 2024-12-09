import { FC, useState } from "react";

// Entities
import { IWorkProject } from "@/entities/Work";

// Components
import Modal from "./Modal";
import VideoPlayer from "./VideoPlayer";

interface IWorkItemProps {
  project: IWorkProject;
}

const WorkItem: FC<IWorkItemProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={project.id}
      className="works-item group flex flex-col justify-between w-full border-[3px] border-color-grey rounded-3xl px-7 pt-7 pb-8 transition ease-in-out hover:bg-color-blue hover:text-white hover:border-color-blue"
    >
      <div
        onClick={() => setShowModal(true)}
        className="max-h-[60vh] flex justify-center items-center border-[3px] border-color-grey rounded-3xl mb-16 overflow-hidden transition ease-in-out cursor-pointer group-hover:scale-[102.5%]"
      >
        <img src={project.cover} alt={project.title} className="scale-[101%]" />
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
      <Modal id={"modal_" + project.id} show={showModal} setShow={setShowModal}>
        <VideoPlayer url={project.work[0].source} />
      </Modal>
    </div>
  );
};

export default WorkItem;
