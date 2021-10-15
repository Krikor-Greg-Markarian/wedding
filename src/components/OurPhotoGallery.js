import React from "react";
import cn from "classnames";

function OurPhotoGallery(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "270px",
        backgroundImage: `url(${props.imageUrl})`,
      }}
    >
      <p className= {cn("text-white font-bold p-3")}>{props.title}</p>
    </div>
  );
}

export default OurPhotoGallery;
