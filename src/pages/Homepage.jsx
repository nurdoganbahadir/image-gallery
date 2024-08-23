import React from "react";
import data from "../helper/data";

function Homepage() {
  return (
    <div>
      <h1>homepage</h1>
      <div className="imageContainer">
        <div className="pictures">
          {data.map((item) => (
            <div className="picture">
              <img src={item.src.large} alt="" />
              <h3>{item.photographer}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
