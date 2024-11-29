import { FC, MouseEvent, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

// Assets
import PulseLines from "@/assets/svg/PulseLines";

interface IButtonProps extends PropsWithChildren {
  className?: string;
  variant?: "blue" | "white" | "black";
  href?: string;
  isRoute?: boolean;
  icon?: boolean;
  iconClass?: string;
  onClick?: (e: MouseEvent) => void;
}

const Button: FC<IButtonProps> = ({
  className,
  variant,
  href,
  isRoute,
  icon,
  iconClass,
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
    "button relative w-fit flex justify-center items-center py-[16px] px-[48px] hover:-translate-y-[6px] transition ease-in-out cursor-pointer",
    className,
    getColors(),
  ].join(" ");

  console.log(classes);

  const span = <span className="body-1 font-bold">{children}</span>;
  const iconEl = (
    <PulseLines className={["absolute -right-5 -top-4", iconClass].join(" ")} />
  );

  const content = (
    <>
      {span}
      {icon && iconEl}
    </>
  );

  return (
    <>
      {href ? (
        <>
          {isRoute ? (
            <Link to={href} className={classes} onClick={onClick}>
              {content}
            </Link>
          ) : (
            <a
              href={href}
              className={classes}
              target="_blank"
              onClick={onClick}
            >
              {content}
            </a>
          )}
        </>
      ) : (
        <div className={classes} onClick={onClick}>
          {content}
        </div>
      )}
    </>
  );
};

export default Button;
