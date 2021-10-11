import React from "react";
import cn from "classnames";
import ReadMoreButton from "./ReadMoreButton";

function WeddingItem(props) {
  return (
    <div>
      <p className={cn("font-bold text-2xl")}>{props.title}</p>
      <img className={cn("w-full pt-3")} src={props.imageUrl} alt="" />
      <p className={cn("text-sm text-gray-500 pt-4")}>{props.description}</p>
      <div className={cn("flex justify-center items-center")}>
        <ReadMoreButton
          className={cn("text-red-500 pt-4 text-sm")}
          ReadMoreButtonName={"READ MORE"}
        />
      </div>
    </div>
  );
}

export default WeddingItem;