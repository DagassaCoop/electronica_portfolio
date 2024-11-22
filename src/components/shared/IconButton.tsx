import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IIconButtonProps {
  icon: ReactNode;
  className?: string;
  href?: string;
  isRoute?: boolean;
  onClick?: () => void;
}

const IconButton: FC<IIconButtonProps> = ({
  icon,
  className,
  href,
  isRoute,
  onClick,
}) => {
  return (
    <>
      {href ? (
        <>
          {isRoute ? (
            <Link to={href}>{icon}</Link>
          ) : (
            <a href={href} className={className}>
              {icon}
            </a>
          )}
        </>
      ) : (
        <div className={className} onClick={onClick}>
          {icon}
        </div>
      )}
    </>
  );
};

export default IconButton;
