import { FC } from "react";

// Entities
import { ISvgBase } from "@/entities/Svg";

const OlPoint: FC<ISvgBase> = ({ className, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "33"}
      height={height || "33"}
      viewBox={`0 0 ${width || "33"} ${height || "33"}`}
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_51_627)">
        <mask
          id="mask0_51_627"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="33"
          height="33"
        >
          <path
            d="M32.8726 0.966797H0.872559V32.9668H32.8726V0.966797Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_51_627)">
          <path
            d="M16.8726 18.4668C17.701 18.4668 18.3726 17.7952 18.3726 16.9668C18.3726 16.1384 17.701 15.4668 16.8726 15.4668C16.0442 15.4668 15.3726 16.1384 15.3726 16.9668C15.3726 17.7952 16.0442 18.4668 16.8726 18.4668Z"
            fill="#211A1D"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_51_627">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.872559 0.966797)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default OlPoint;
