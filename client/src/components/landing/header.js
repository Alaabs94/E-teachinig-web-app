import React from "react";
const Header = ()=>{ 
    return (
        // <!-- Header section -->
        <header className="header-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-3">
                        <div className="site-logo">
                            <img src="img/logo.png" alt=""/>
                        </div>
                        <div className="nav-switch">
                            <i className="fa fa-bars"></i>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <a href="#" className="site-btn header-btn">Login</a>
                        <nav className="main-menu">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="courses.html">Courses</a></li>
                                <li><a href="blog.html">News</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- Header section end --> */}
        </header>
    
    
   

    )
    
}
export default Header;