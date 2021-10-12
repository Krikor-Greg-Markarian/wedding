import React from "react";
import cn from "classnames";

function AboutHorizontal(props) {
  return (
    <div>
      <div className={cn("flex justify-center items-center w-6/12")}>
        <img
          className={cn("rounded-full w-40 h-40 ")}
          src={props.imageUrlSara}
          alt="girl picture"
        />
      </div>

      <p className={cn("text-sm text-center pt-3 pb-2 w-6/12 ")}>
        {props.girlName}
      </p>
      <p className={cn("text-sm text-gray-500 text-center w-6/12")}>
        {props.text}
      </p>
    </div>
  );
}

export default AboutHorizontal;
