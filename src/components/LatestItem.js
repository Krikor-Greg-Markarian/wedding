import React from "react";
import cn from "classnames";

function LatestItem(props) {
  return (
    <div>
      <div className={cn("flex  ")}>
        <div className={cn("flex-shrink border-b-2 pb-3 pt-2")}>
          <img
            className={cn("rounded-full w-20 h-20 ")}
            src={props.imageUrl}
            alt=""
          />
        </div>
        <div className={cn("flex-shrink pl-3 text-sm pt-2 w-5/12 border-b-2")}>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default LatestItem;
