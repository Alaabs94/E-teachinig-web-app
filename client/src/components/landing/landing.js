import React from "react";
import Header from "./header";
import SearchBar from "./search-bar";
import Cards from "./cards";
import Register from "./register";
import Footer from "./footer";
const Landing =()=>{
    return(
        <div>
            <Header/>
            <SearchBar/>
            <Cards/>
            <Register/>
            <Footer/>
            
        </div>
    )
}
export default Landing;
