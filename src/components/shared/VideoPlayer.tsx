import React, { FC, useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface IVideoPlayerProps {
  options: any;
  onReady: any;
}

const VideoPlayer: FC<IVideoPlayerProps> = ({ options, onReady }) => {
  const videoRef = useRef<any>(null);
  const playerRef = useRef<any>(null);

  // const options = {};

  useEffect(() => {
    // Initialize Video.js player
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (videoElement) {
        const player = videojs(videoElement, options, () => {
          console.log("Player is ready");
          if (onReady) {
            onReady(player);
          }
        });
        playerRef.current = player;
      }
    }

    return () => {
      // Dispose of the Video.js player on component unmount
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options, onReady]);

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js" />
      </div>
    </div>
  );
};

export default VideoPlayer;
