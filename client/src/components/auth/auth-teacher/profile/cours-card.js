import React, { useState, useEffect } from "react";
import { showAction } from "../../../../actions/course-action";
import { useDispatch, useSelector } from "react-redux";
const CourseCard = () => {
  const [course, setCourse] = useState([]);
  const teacherId = useSelector((state) => state.authTeacherReducer);
  const dispatch = useDispatch();
  console.log(teacherId.id);
  useEffect(() => {
    getAllCoursesById();
  }, []);
  const getAllCoursesById = () => {
    dispatch(showAction()).then((data) => {
      setCourse(data);
    });
  };
  return (
    // <!-- categories section -->
    <section className="categories-section spad">
      <div className="container">
        <div className="section-title">
          <h2>Our Course Categories</h2>
        </div>
        <div className="row">
          {/* <!-- categorie --> */}
          {course
            .filter((category) => category.teacher.id === teacherId.id)
            .map((el) => (
              <div className="col-lg-4 col-md-6">
                <div className="categorie-item">
                  <div
                    className="ci-thumb set-bg"
                    style={{ backgroundImage: `url(${el.picture})` }}
                  ></div>
                  <div className="ci-text">
                    <h5>{el.name}</h5>
                    <p>{el.description}</p>
                    <span>{el.teacher.firstname}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
    // <!-- categories section end -->
  );
};
export default CourseCard;
