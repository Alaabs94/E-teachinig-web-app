import React, { useEffect, useState } from "react";
import { showAction } from "../../../actions/course-action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Cards = () => {
  const [course, setCourse] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAction()).then((res) => {
      console.log("yu-hikoplp", res);
      setCourse(res);
    });
  }, []);
  return (
    <section className="course-section spad pb-0">
      {/* course section */}
      <div className="course-warp">
        <ul className="course-filter controls">
          {course.map((el) => (
            <li key={el.id} className="control active" data-filter="all">
              {el.field}
            </li>
          ))}
        </ul>
        <div className="row course-items-area">
          {/* course */}
          {course.map((el) => (
            <Link
              to={`/card/${el.id}`}
              state={el}
              className="mix col-lg-3 col-md-4 col-sm-6 finance"
              key={el.id}
            >
              {" "}
              <div
                className="course-item"
                style={{ backgroundImage: `url(${el.picture})` }}
              >
                <div className="course-thumb set-bg">
                  <div className="price">Price: $15</div>
                </div>
                <div className="course-info">
                  <div className="course-text">
                    <h5>{el.name}</h5>
                    <p>{el.description}</p>
                    <div className="students">{el.users.length}</div>
                  </div>
                  <div className="course-author">
                    <div
                      className="ca-pic set-bg"
                      style={{ backgroundImage: `url(${el.picture})` }}
                    ></div>
                    <p>
                      {el.teacher.firstname + " " + el.teacher.lastname},{" "}
                      <span>{el.field}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* course section end */}
    </section>
  );
};
export default Cards;
