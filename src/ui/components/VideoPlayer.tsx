import { FC, useRef } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

const VideoPlayer: FC<ReactPlayerProps> = ({ url, ...props }) => {
  const videoRef = useRef<any>(null);

  return (
    <ReactPlayer
      ref={videoRef}
      url={url}
      width="100%"
      playing
      controls
      {...props}
      className="relative"
    />
  );
};

export default VideoPlayer;
