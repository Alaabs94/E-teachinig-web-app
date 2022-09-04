import "./cours-detail.css";
import video1 from "../../../videos/video-1.mp4";
import video2 from "../../../videos/video-2.mp4";
import video3 from "../../../videos/video-3.mp4";
import video4 from "../../../videos/video-4.mp4";
import video5 from "../../../videos/video-5.mp4";
import video6 from "../../../videos/video-6.mp4";

import React, { useState } from "react";

const CoursesDetails = () => {
  const [vid, setVid] = useState(video1);
  const onClickList = (vi) => {
    setVid(vi);
  };
  const arrVideos = [video1, video2, video3, video4, video5, video6];
  return (
    <div className="video-container">
      <div className="main-video">
        <div className="video">
          <video src={vid} controls muted autoplay></video>
          <h3 className="title">01.video title goes here</h3>
        </div>
      </div>
      <div className="video-list">
        {arrVideos.map((video) => (
          <div className="vid active" onClick={() => onClickList(video)}>
            <video src={video}></video>
            <h3 className="title">02.video title goes here</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CoursesDetails;
