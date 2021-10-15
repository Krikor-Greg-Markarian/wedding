import React from "react";
import cn from "classnames";

function LatestJournalStories(props) {
  return (
  
      <div className={cn("flex pt-6 border-b-2 pb-10")}>
        <div className={cn("flex-shrink")}>
          <img
            className={cn("w-36 rounded-full")}
            src={props.imageURl}
            alt=""
          />
        </div>
        <div className={cn("flex-shrink pl-2 text-base")}>
          <p>{props.text}</p>
        </div>
      </div>
    
  );
}

export default LatestJournalStories;
