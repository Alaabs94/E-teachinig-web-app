import react, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CoursesDetails from "./cours-detail";
const CardDetails = (props) => {
  const location = useLocation();

  useEffect(() => {
    const data = location.state;
    console.log("jjjjjjjjjjjj", data);
  }, []);
  return (
    <section className="blog-page spad pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            {/* <!-- blog post --> */}
            <div className="blog-post">
              <img src="./img/blog/1.jpg" alt="" />
              <h3>How to create the perfect resume</h3>
              <div className="blog-metas">
                <div className="blog-meta author">
                  <div
                    className="post-author set-bg"
                    data-setbg="img/authors/1.jpg"
                    style={{ backgroundImage: `url(img/authors/1.jpg)` }}
                  ></div>
                  <a href="/signup">James Smith</a>
                </div>
                <div className="blog-meta">
                  <a href="/signup">Development</a>
                </div>
                <div className="blog-meta">
                  <a href="/signup">June 12, 2018</a>
                </div>
                <div className="blog-meta">
                  <a href="/signup">2 Comments</a>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin
                et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in,
                eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur
                molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a
                metus. Aenean vel congue diam, sed bibendum ipsum. Nunc
                vulputate aliquet tristique. Integer et pellentesque urna.{" "}
              </p>
              <a href="/signup" className="site-btn readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <CoursesDetails />
    </section>
  );
};
export default CardDetails;
