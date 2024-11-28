// Entities
import { ISvgBase } from "@/entities/Svg";
import { FC } from "react";

const CaretRight: FC<ISvgBase> = ({ className, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "72"}
      height={height || "72"}
      fill="none"
      className={className}
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="m33 28.5 7.5 7.5-7.5 7.5"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M48 48H24V24h24z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CaretRight;
