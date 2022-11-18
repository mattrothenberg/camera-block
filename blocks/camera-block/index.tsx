import { FileBlockProps } from "@githubnext/blocks";
import { useEffect, useRef } from "react";

export default function (props: FileBlockProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        let video = videoRef.current;
        if (!video) return;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  return (
    <div>
      <div>
        <button>Take a photo</button>
        <video ref={videoRef} />
      </div>
    </div>
  );
}
