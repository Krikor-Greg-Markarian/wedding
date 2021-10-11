import React from "react";
import cn from "classnames";

function AboutHorizontal(props) {
  return (
    <div>
      <div className={cn("flex justify-center items-center")}>
        <img
          className={cn("rounded-full w-20 h-20")}
          src={props.imageUrlSara}
          alt="girl picture"
        />
      </div>

      <p className={cn("text-sm text-center pt-2 pb-2")}>{props.girlName}</p>
      <p className={cn("text-sm text-gray-500 text-center")}>{props.text}</p>
    </div>
  );
}

export default AboutHorizontal;
