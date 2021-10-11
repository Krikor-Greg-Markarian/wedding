import React from "react";
import cn from "classnames";
import ReadMoreButton from "./ReadMoreButton";

function JournalSection(props) {
  return (
    <div>
      <p className={cn("text-red-600 font-bold pt-8")}>{props.date}</p>
      <p className={cn("font-bold text-2xl pt-2 pb-6")}>{props.title}</p>
      <p className={cn("text-gray-500 inline text-xs")}>{props.posted}</p>
      <p className={cn("text-red-600 inline pl-1 text-xs")}>{props.journal}</p>

      <img className={cn("w-full pt-3")} src={props.imageUrl} alt="" />
      <p className={cn("text-gray-500 text-sm pt-4")}>{props.text}</p>
      <div className={cn("flex justify-center items-center")}>
        <ReadMoreButton
          className={cn("text-red-600 text-sm pt-6")}
          ReadMoreButtonName={"READ MORE"}
        />
      </div>
    </div>
  );
}

export default JournalSection;
