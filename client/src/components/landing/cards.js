import React from "react";
const Cards = ()=>{
    return(
        <section className="course-section spad pb-0">
        {/* course section */}
		<div className="course-warp">
			<ul className="course-filter controls">
				<li className="control active" data-filter="all">All</li>
				<li className="control" data-filter=".finance">Finance</li>
				<li className="control" data-filter=".design">Design</li>
				<li className="control" data-filter=".web">Web Development</li>
				<li className="control" data-filter=".photo">Photography</li>
			</ul>                                       
			<div className="row course-items-area">
				{/* course */}
				<div className="mix col-lg-3 col-md-4 col-sm-6 finance">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{ backgroundImage: "url(img/authors/1.jpg)" }} >
							<div className="price">Price: $15</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>Art & Crafts</h5>
								<p>Lorem ipsum dolor sit amet, consectetur</p>
								<div className="students">120 Students</div>
							</div>
							<div className="course-author">
								<div className="ca-pic set-bg"   style={{ backgroundImage: "url(img/authors/1.jpg)" }}></div>
								<p>William Parker, <span>Developer</span></p>
							</div>
						</div>
					</div>
				</div>
				{/* course */}
				<div className="mix col-lg-3 col-md-4 col-sm-6 design">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{ backgroundImage: "url(img/authors/1.jpg)" }}>
							<div className="price">Price: $15</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>IT Development</h5>
								<p>Lorem ipsum dolor sit amet, consectetur</p>
								<div className="students">120 Students</div>
							</div>
							<div className="course-author">
								<div className="ca-pic set-bg" style={{ backgroundImage: "url(img/authors/1.jpg)" }}></div>
								<p>William Parker, <span>Developer</span></p>
							</div>
						</div>
					</div>
				</div>
				{/* course */}
				<div className="mix col-lg-3 col-md-4 col-sm-6 web">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{ backgroundImage: "url(img/authors/1.jpg)" }}>
							<div className="price">Price: $15</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>Graphic Design</h5>
								<p>Lorem ipsum dolor sit amet, consectetur</p>
								<div className="students">120 Students</div>
							</div>
							<div className="course-author">
								<div className="ca-pic set-bg" style={{ backgroundImage: "url(img/authors/1.jpg)" }}></div>
								<p>William Parker, <span>Developer</span></p>
							</div>
						</div>
					</div>
				</div>
				{/* course */}
				<div className="mix col-lg-3 col-md-4 col-sm-6 photo">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{ backgroundImage: "url(img/authors/1.jpg)" }}>
							<div className="price">Price: $15</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>IT Development</h5>
								<p>Lorem ipsum dolor sit amet, consectetur</p>
								<div className="students">120 Students</div>
							</div>
							<div className="course-author">
								<div className="ca-pic set-bg" style={{ backgroundImage: "url(img/authors/1.jpg)" }}></div>
								<p>William Parker, <span>Developer</span></p>
							</div>
						</div>
					</div>
				</div>
				{/* course */}
				<div className="mix col-lg-3 col-md-4 col-sm-6 finance">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{ backgroundImage: "url(img/authors/1.jpg)" }}>
							<div className="price">Price: $15</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>IT Development</h5>
								<p>Lorem ipsum dolor sit amet, consectetur</p>
								<div className="students">120 Students</div>
							</div>
							<div className="course-author">
								<div className="ca-pic set-bg" style={{ backgroundImage: "url(img/authors/1.jpg)" }}></div>
								<p>William Parker, <span>Developer</span></p>
							</div>
						</div>
					</div>
				</div>
				{/* course */}
				<div className="mix col-lg-3 col-md-4 col-sm-6 design">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{ backgroundImage: "url(img/authors/1.jpg)" }}>
							<div className="price">Price: $15</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>Socia Media</h5>
								<p>Lorem ipsum dolor sit amet, consectetur</p>
								<div className="students">120 Students</div>
							</div>
							<div className="course-author">
								<div className="ca-pic set-bg" style={{ backgroundImage: "url(img/authors/1.jpg)" }}></div>
								<p>William Parker, <span>Developer</span></p>
							</div>
						</div>
					</div>
				</div>
				{/* course */}
				<div className="mix col-lg-3 col-md-4 col-sm-6 web">
					<div className="course-item">
						<div className="course-thumb set-bg" style={{ backgroundImage: "url(img/authors/1.jpg)" }}>
							<div className="price">Price: $15</div>
						</div>
						<div className="course-info">
							<div className="course-text">
								<h5>IT Development</h5>
								<p>Lorem ipsum dolor sit amet, consectetur</p>
								<div className="students">120 Students</div>
							</div>
							<div className="course-author">
								<div className="ca-pic set-bg" style={{ backgroundImage: "url(img/authors/1.jpg)" }}></div>
								<p>William Parker, <span>Developer</span></p>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
    {/* course section end */}
	</section>

    )
}
export default Cards;
