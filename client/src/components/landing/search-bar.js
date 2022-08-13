import React from "react";
const SearchBar = ()=> {
    return (
        <section className="hero-section set-bg" style={{ backgroundImage: "url(img/bg.jpg)" }} >
                
             <div className="container">
                 <div className="hero-text text-white">
                     <h2>Get The Best Free Online Courses</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla <br/> dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                 </div>
                 <div className="search-warp">
				<div className="section-title text-white">
					<h2><span>Search your course</span></h2>
				</div>
				<div className="row">
					<div className="col-lg-10 offset-lg-1">
						{/* <!-- search form --> */}
						<form className="course-search-form">
							<input type="text" placeholder="Course"/>
							<input type="text" className="last-m" placeholder="Category"/>
							<button className="site-btn ">Search Couse</button>
						</form>
					</div>
				</div>
			</div>
        
             </div>
         </section>


    )
}
export default SearchBar;