import React from "react";
import cn from "classnames";
import ReadMoreButton from "./ReadMoreButton";

function AboutItems(props) {
  return (
    <div className={cn("flex pt-14")}>
      <div className={cn("flex-shrink")}>
        <img
          className={cn("rounded-full w-60 h-20 pt-2")}
          src={props.imageUrl}
          alt=""
        />
      </div>
      <div className={cn("flex-shrink pl-3")}>
        <p className={cn("italic 2xl ")}>{props.title}</p>
        <p className={cn("text-sm text-gray-500 pt-2")}>{props.description}</p>
        <ReadMoreButton
          className={cn("text-red-500 text-sm pt-5")}
          ReadMoreButtonName={"READ MORE"}
        />
      </div>
    </div>
  );
}

export default AboutItems;
