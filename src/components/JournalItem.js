import React from "react";
import cn from "classnames";

function JournalItem(props) {
  return (
    <div>
      <div className={cn("flex justify-center items-center")}>
        <p>{props.title}</p>
      </div>
      <p className={cn("text-sm text-gray-500 italic")}>{props.date}</p>

      <a className={cn("")} href="/">
        <p
          className={cn(
            "text-red-500 text-sm pt-4 font-bold hover:text-black transition duration-500 ease-in-out transform "
          )}
        >
          {props.description}
        </p>
      </a>

      <p className={cn("text-xs pt-2 font-bold")}>{props.byAdmin}</p>
    </div>
  );
}

export default JournalItem;
