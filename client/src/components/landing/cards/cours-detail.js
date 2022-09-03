import "./cours-detail.css";

const CoursesDetails = () => {
  return (
    <div className="container">
      <div className="main-video">
        <div className="video">
          <video width="320" height="240" controls>
            <source src="img/videos/video-1.mp4" type="video/mp4" />
          </video>
          {/* <video src="video-1.mp4" controls muted autoplay></video>
          <h3 className="title">01.video title goes here</h3> */}
        </div>
      </div>
      <div className="video-list">
        <div className="vid active">
          <video src="img/video-1.mp4" controls muted autoplay></video>
          <h3 className="title">02.video title goes here</h3>
        </div>
        <div className="vid">
          <video src="img/videos/video-2.mp4" controls muted autoplay></video>
          <h3 className="title">03.video title goes here</h3>
        </div>
        <div className="vid">
          <video src="img/videos/video-3.mp4" controls muted autoplay></video>
          <h3 className="title">04.video title goes here</h3>
        </div>
        <div className="vid">
          <video src="img/videos/video-4.mp4" controls muted autoplay></video>
          <h3 className="title">05.video title goes here</h3>
        </div>
        <div className="vid">
          <video src="img/videos/video-5.mp4" controls muted autoplay></video>
          <h3 className="title">06.video title goes here</h3>
        </div>
        <div className="vid">
          <video src="img/video-1.mp4" controls muted autoplay></video>
          <h3 className="title">07.video title goes here</h3>
        </div>
      </div>
    </div>
  );
};
export default CoursesDetails;
