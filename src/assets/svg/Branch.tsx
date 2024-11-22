import { FC } from "react";

// Entities
import { ISvgBase } from "@/entities/Svg";

const Branch: FC<ISvgBase> = ({ className, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "54"}
      height={height || "54"}
      viewBox="0 0 54 54"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_7_258)">
        <path
          d="M0.0899658 27.3657H16.09M16.09 27.3657H26.84M16.09 27.3657L21.84 21.6157M34.59 27.3657H26.84M26.84 27.3657L32.215 32.7407"
          stroke="#211A1D"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M8.09296 36.6954C10.4361 39.0386 15.1848 38.0888 18.6996 34.5741C22.2143 31.0594 23.164 26.3106 20.8209 23.9675C18.4777 21.6243 13.729 22.5741 10.2143 26.0888C6.69956 29.6035 5.74982 34.3523 8.09296 36.6954Z"
          fill="#8075FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_7_258">
          <rect
            width="53"
            height="54"
            fill="white"
            transform="translate(0.0899658)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Branch;
