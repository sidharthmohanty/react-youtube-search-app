import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const displayVideo = videos.map((video) => {
    return (
      <VideoItem video={video} key={video.etag} onVideoSelect={onVideoSelect} />
    );
  });
  return <div className="ui relaxed divided list">{displayVideo}</div>;
};

export default VideoList;
