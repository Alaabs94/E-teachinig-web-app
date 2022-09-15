import react, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CoursesDetails from "./cours-detail";
const CardDetails = (props) => {
  const location = useLocation();
  const data = location.state;
  useEffect(() => {
    console.log(data);
  });

  return (
    <section className="blog-page spad pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            {/* <!-- blog post --> */}
            <div className="blog-post">
              <img src={data.picture} alt="" />
              <h3>Subscribe to our course and get the best offers</h3>
              <h4>{data.name}</h4>

              <div className="blog-metas">
                <div className="blog-meta author">
                  <div
                    className="post-author set-bg"
                    // data-setbg="img/authors/1.jpg"
                    style={{
                      backgroundImage: `url(${data.teacher.picture})`,
                    }}
                  ></div>
                  <a href="/signup">
                    {data.teacher.firstname + "" + data.teacher.lastname}
                  </a>
                </div>
                <div className="blog-meta">
                  <a href="/signup">{data.field}</a>
                </div>
                <div className="blog-meta">
                  <a href="/signup">June 12, 2018</a>
                </div>
                <div className="blog-meta">
                  <a href="/signup">2 Comments</a>
                </div>
              </div>
              <p>{data.description}</p>
              <a href="/signup" className="site-btn readmore">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
      <CoursesDetails videos={data.videos} />
    </section>
  );
};
export default CardDetails;
