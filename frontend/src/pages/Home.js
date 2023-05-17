import React from "react";
import Bird from "./animals/bird";
import Kangaroo from "./animals/kangaroo";
import Butterfly from "./animals/butterfly";

const Home = () => {
  return (
    <div className="home">
      <Butterfly />
      <Bird />
      <Kangaroo />
    </div>
  );
};

export default Home;
