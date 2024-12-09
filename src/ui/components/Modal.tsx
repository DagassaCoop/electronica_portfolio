import { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import { createPortal } from "react-dom";

// Assets
import { X } from "@phosphor-icons/react";

// Components
import IconButton from "./IconButton";

interface IModalProps extends PropsWithChildren {
  id: string;
  className?: string;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<IModalProps> = ({ children, show, setShow }) => {
  return (
    <>
      {show &&
        createPortal(
          <div className="absolute top-0 bottom-0 left-0 right-0 w-screen h-screen bg-color-black/75 z-[100] flex justify-center items-center">
            <div className="relative w-fit h-fit overflow-hidden bg-color-kidnapper rounded-2xl flex justify-center items-center p-10">
              <IconButton
                icon={<X />}
                onClick={() => setShow(false)}
                className="absolute right-4 top-4 z-[105] text-color-grey"
              />
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Modal;
