import React from "react";
import data from "../helper/data";

function Homepage() {
  return (
    <div>
      <div className="imageContainer">
        <div className="pictures">
          {data.map((item) => (
            <div className="picture">
              <div className="picture-hover">
                <img src={item.src.large} alt="" />
              </div>
              <h3>{item.photographer}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
