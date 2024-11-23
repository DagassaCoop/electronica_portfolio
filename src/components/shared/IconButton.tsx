import { FC, MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IIconButtonProps {
  icon: ReactNode;
  className?: string;
  href?: string;
  isRoute?: boolean;
  onClick?: (e: MouseEvent) => void;
}

const IconButton: FC<IIconButtonProps> = ({
  icon,
  className,
  href,
  isRoute,
  onClick,
}) => {
  const classes = ["cursor-pointer", className].join(" ");

  return (
    <>
      {href ? (
        <>
          {isRoute ? (
            <Link to={href} className={classes} onClick={onClick}>
              {icon}
            </Link>
          ) : (
            <a href={href} className={classes} onClick={onClick}>
              {icon}
            </a>
          )}
        </>
      ) : (
        <div className={classes} onClick={onClick}>
          {icon}
        </div>
      )}
    </>
  );
};

export default IconButton;
