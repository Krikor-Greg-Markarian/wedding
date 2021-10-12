import React from "react";
import cn from "classnames";

function BrideGroomItem(props) {
  return (
    <div className={cn("")}>
      <div className={cn("flex justify-center items-center")}>
        <img
          className={cn(
            "rounded-full w-40 h-40 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          )}
          src={props.imageUrl}
          alt="bridesmaid image"
        />
      </div>
      <div className={cn("flex justify-center items-center pt-3")}>
        <p className={cn("font-bold text-sm")}>{props.name}</p>
      </div>
      <div className={cn("flex justify-center items-center")}>
        <p className={cn("text-red-600 text-sm")}>{props.description}</p>
      </div>
    </div>
  );
}

export default BrideGroomItem;
