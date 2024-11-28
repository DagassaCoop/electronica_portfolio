import { FC } from "react";

// Entities
import { ISvgBase } from "@/entities/Svg";

const CaretLeft: FC<ISvgBase> = ({ className, width, height }) => {
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
          d="M39 43.5 31.5 36l7.5-7.5"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M24 24h24v24H24z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CaretLeft;
