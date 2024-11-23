import { FC } from "react";

// Entities
import { ISvgBase } from "@/entities/Svg";

const PulseLines: FC<ISvgBase> = ({ className, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox={`0 0 ${width || "20"} ${height || "20"}`}
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_7_54)">
        <path
          d="M2 8.805L5.967 2.624M8.936 10.87L18 2M11.693 18L17.074 14.344"
          stroke="#211A1D"
          strokeWidth="4"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_7_54">
          <rect width={width || "20"} height={height || "20"} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PulseLines;
