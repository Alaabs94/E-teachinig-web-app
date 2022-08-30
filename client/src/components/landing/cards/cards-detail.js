import react, { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
              <img src="img/blog/1.jpg" alt="" />
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
            {/* <!-- blog post --> */}
            <div className="blog-post">
              <img src="img/blog/2.jpg" alt="" />
              <h3>5 Tips to make money from home</h3>
              <div className="blog-metas">
                <div className="blog-meta author">
                  <div
                    className="post-author set-bg"
                    data-setbg="img/authors/2.jpg"
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
            {/* <!-- blog post --> */}
            <div className="blog-post">
              <img src="img/blog/3.jpg" alt="" />
              <h3>Why choose an online course?</h3>
              <div className="blog-metas">
                <div className="blog-meta author">
                  <div
                    className="post-author set-bg"
                    data-setbg="img/authors/3.jpg"
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
            <div className="site-pagination">
              <span className="active">01.</span>
              <a href="/signup">02.</a>
              <a href="/signup">03</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-9 sidebar">
            <div className="sb-widget-item">
              <form className="search-widget">
                <input type="text" placeholder="Search" />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div className="sb-widget-item">
              <h4 className="sb-w-title">Categories</h4>
              <ul>
                <li>
                  <a href="/signup">Developement</a>
                </li>
                <li>
                  <a href="/signup">Social Media</a>
                </li>
                <li>
                  <a href="/signup">Press</a>
                </li>
                <li>
                  <a href="/signup">Events Lifestyle</a>
                </li>
                <li>
                  <a href="/signup">Uncategorizes</a>
                </li>
              </ul>
            </div>
            <div className="sb-widget-item">
              <h4 className="sb-w-title">Archives</h4>
              <ul>
                <li>
                  <a href="/signup">February 2018</a>
                </li>
                <li>
                  <a href="/signup">March 2018</a>
                </li>
                <li>
                  <a href="/signup">April 2018</a>
                </li>
                <li>
                  <a href="/signup">May 2018</a>
                </li>
                <li>
                  <a href="/signup">June 2018</a>
                </li>
              </ul>
            </div>
            <div className="sb-widget-item">
              <h4 className="sb-w-title">Archives</h4>
              <div className="tags">
                <a href="/signup">education</a>
                <a href="/signup">courses</a>
                <a href="/signup">development</a>
                <a href="/signup">design</a>
                <a href="/signup">on line courses</a>
                <a href="/signup">wp</a>
                <a href="/signup">html5</a>
                <a href="/signup">music</a>
              </div>
            </div>
            <div className="sb-widget-item">
              <div className="add">
                <a href="/signup">
                  <img src="img/add.jpg" alt="add" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardDetails;
