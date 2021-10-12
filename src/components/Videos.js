import React from "react";

function Videos(props) {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={props.videoUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Videos;
