import { FC } from "react";

// Components
import Button, { IButtonProps } from "./Button";

// Mock
// import cv from "@/assets/cv/Oleksandra_Babich_CV_Video_Producer.pdf";
import cv from '@/assets/cv/Video_Producer.pdf'

const LoadFileButton: FC<IButtonProps> = ({
  children,
  className,
  href,
  icon,
  iconClass,
  isRoute,
  onClick,
  variant,
}) => {
  return (
    <a className="no-underline" href={cv} target="_blank">
      <Button
        className={className}
        href={href}
        icon={icon}
        iconClass={iconClass}
        isRoute={isRoute}
        onClick={onClick}
        variant={variant}
      >
        {children}
      </Button>
    </a>
  );
};

export default LoadFileButton;
