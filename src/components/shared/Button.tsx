import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface IButtonProps extends PropsWithChildren {
  className?: string;
  variant?: "blue" | "white" | "black";
  href?: string;
  isRoute?: boolean;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  className,
  variant,
  href,
  isRoute,
  onClick,
  children,
}) => {
  const getColors = (): string => {
    switch (variant) {
      case "blue":
        return "bg-color-blue text-white";
      case "black":
        return "bg-color-black text-white";
      case "white":
        return "bg-white text-color-black";
      default:
        return "bg-color-blue text-white";
    }
  };

  const classes = [
    "button w-fit flex justify-center items-center py-[16px] px-[48px] hover:-translate-y-[6px] transition ease-in-out",
    className,
    getColors(),
  ].join(" ");

  console.log(classes);

  const span = <span className="body-1 font-bold ">{children}</span>;

  return (
    <>
      {href ? (
        <>
          {isRoute ? (
            <Link to={href} className={classes}>
              {span}
            </Link>
          ) : (
            <a href={href} className={classes} target="_blank">
              {span}
            </a>
          )}
        </>
      ) : (
        <div className={classes} onClick={onClick}>
          {span}
        </div>
      )}
    </>
  );
};

export default Button;