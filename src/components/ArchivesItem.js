import React from "react";
import cn from "classnames";

function ArchivesItem(props) {
  return (
    <div className={cn("w-6/12")}>
      <p className={cn("border-b-2 p-2")}>{props.date}</p>
      <p className={cn("border-b-2 p-2")}>{props.anotherDate}</p>
    </div>
  );
}

export default ArchivesItem;
