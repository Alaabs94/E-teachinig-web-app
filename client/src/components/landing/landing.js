import React from "react";
import Header from "./header";
import SearchBar from "./search-bar";
import Cards from "./cards/cards";
import Register from "./register";

const Landing = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Cards />
      <Register />
    </div>
  );
};
export default Landing;
