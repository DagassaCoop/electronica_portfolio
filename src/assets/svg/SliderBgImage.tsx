import { FC } from "react";

interface ISliderBgImageProps {
  className?: string;
  active: "left" | "center" | "right";
}

const SliderBgImage: FC<ISliderBgImageProps> = ({ className, active }) => {
  const width = 329;
  const height = 329;

  return (
    <div
      className={["relative flex justify-center", className].join(" ")}
      style={{ width: width + 300, height: height }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        className={[
          "absolute left-0 text-color-greyLight",
          active === "center"
            ? "text-color-greyLight/50 z-4"
            : active === "right"
              ? "text-color-greyLight/20 z-3"
              : "",
        ].join(" ")}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.9095 57.1868C6.83864 61.761 -3.29198 79.3077 1.28216 96.3788L57.187 305.019C61.7612 322.09 79.3079 332.22 96.3789 327.646L305.019 271.741C322.09 267.167 332.22 249.62 327.646 232.55L271.741 23.9093C267.167 6.8384 249.621 -3.29223 232.55 1.28192L23.9095 57.1868ZM40.1965 102.516C46.5981 100.801 50.3971 94.2208 48.6818 87.8191C46.9665 81.4175 40.3865 77.6185 33.9849 79.3338C27.5833 81.0491 23.7843 87.6291 25.4996 94.0308C27.2149 100.433 33.795 104.231 40.1965 102.516Z"
          fill="currentcolor"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        className={[
          "relative text-color-greyLight",
          active !== "center" ? "text-color-greyLight/60 z-4" : "z-5",
        ].join(" ")}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.9095 57.1868C6.83864 61.761 -3.29198 79.3077 1.28216 96.3788L57.187 305.019C61.7612 322.09 79.3079 332.22 96.3789 327.646L305.019 271.741C322.09 267.167 332.22 249.62 327.646 232.55L271.741 23.9093C267.167 6.8384 249.621 -3.29223 232.55 1.28192L23.9095 57.1868ZM40.1965 102.516C46.5981 100.801 50.3971 94.2208 48.6818 87.8191C46.9665 81.4175 40.3865 77.6185 33.9849 79.3338C27.5833 81.0491 23.7843 87.6291 25.4996 94.0308C27.2149 100.433 33.795 104.231 40.1965 102.516Z"
          fill="currentcolor"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        className={[
          "absolute right-0 text-color-greyLight",
          active === "center"
            ? "text-color-greyLight/50 z-4"
            : active === "left"
              ? "text-color-greyLight/20 z-3"
              : "",
        ].join(" ")}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.9095 57.1868C6.83864 61.761 -3.29198 79.3077 1.28216 96.3788L57.187 305.019C61.7612 322.09 79.3079 332.22 96.3789 327.646L305.019 271.741C322.09 267.167 332.22 249.62 327.646 232.55L271.741 23.9093C267.167 6.8384 249.621 -3.29223 232.55 1.28192L23.9095 57.1868ZM40.1965 102.516C46.5981 100.801 50.3971 94.2208 48.6818 87.8191C46.9665 81.4175 40.3865 77.6185 33.9849 79.3338C27.5833 81.0491 23.7843 87.6291 25.4996 94.0308C27.2149 100.433 33.795 104.231 40.1965 102.516Z"
          fill="currentcolor"
        />
      </svg>
    </div>
  );
};

export default SliderBgImage;
