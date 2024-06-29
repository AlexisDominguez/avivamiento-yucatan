import { useState } from "react";

interface IMediaDevices {
  videoCameras: MediaDeviceInfo[];
  microphones: MediaDeviceInfo[];
  speakers: MediaDeviceInfo[];
}

interface ISelectedMediaDevice {
  videoCamera: string;
  microphone: string;
  speaker: string;
}

export const Radio = () => {
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const [mediaDevices, setMediaDevices] = useState<IMediaDevices | null>(null);
  const [selectedMediaDevice, setSelectedMediaDevice] =
    useState<ISelectedMediaDevice | null>(null);

  const getMediaDevice = async (type: MediaDeviceKind) => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter((device) => device.kind === type);
  };

  const requestAccessToMediaDevices = async () => {
    try {
      const videoCameras = await getMediaDevice("videoinput");
      const microphones = await getMediaDevice("audioinput");
      const speakers = await getMediaDevice("audiooutput");

      setMediaDevices({ videoCameras, microphones, speakers });
    } catch (error) {
      console.log(error);
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setVideoStream(stream);
    } catch (error) {
      console.error(error);
    }
  };

  const getMediaDevicesOptions = (kind: keyof IMediaDevices) => {
    if (!mediaDevices?.[kind]) return [];

    const mediaDevicesOptions = mediaDevices[kind].map((mediaDevice) => {
      return {
        value: mediaDevice.deviceId,
        label: <label>{mediaDevice.label}</label>,
      };
    });

    return mediaDevicesOptions;
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        {videoStream && (
          <video
            ref={(video) => {
              if (video) {
                video.srcObject = videoStream;
              }
            }}
            autoPlay
            playsInline
            controls={true}
          />
        )}
      </div>
      <div className="flex mt-4 gap-4"></div>
    </div>
  );
};
