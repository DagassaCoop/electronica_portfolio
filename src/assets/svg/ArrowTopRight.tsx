import { FC } from "react";

import { ISvgBase } from "@/entities/Svg";

const ArrowTopRight: FC<ISvgBase> = ({ className, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      viewBox={`0 0 ${width || "24"} ${height || "24"}`}
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_1_47)">
        <mask
          id="mask0_1_47"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={width || "24"}
          height={height || "24"}
        >
          <path d="M24 0H0V24H24V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_1_47)">
          <path
            d="M6 18L18 6"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.25 6H18V15.75"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_47">
          <rect width={width || "24"} height={height || "24"} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowTopRight;
