import React from "react";
import cn from "classnames";
import ReadMoreButton from "./ReadMoreButton";

function TheItems(props) {
  return (
    <div>
      <p className={cn("font-bold text-3xl pb-6")}>{props.title}</p>
      <p className={cn("text-gray-500 text-sm")}>{props.description}</p>
      <div className={cn("flex justify-center items-center")}>
        <ReadMoreButton
          className={cn("text-red-600 text-sm pt-6")}
          ReadMoreButtonName={props.ReadMoreButtonName}
        />
      </div>
    </div>
  );
}

export default TheItems;
