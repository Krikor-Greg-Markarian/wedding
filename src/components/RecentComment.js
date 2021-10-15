import React from "react";
import cn from "classnames";

function RecentComment(props) {
  return (
    <div>
      <p className={cn("border-b-2 p-2 text-sm")}>{props.text1}</p>
      <p className={cn("border-b-2 p-2 text-sm")}>{props.text2}</p>
      <p className={cn("border-b-2 p-2 text-sm")}>{props.text3}</p>
      <p className={cn("border-b-2 p-2 text-sm")}>{props.text4}</p>
    </div>
  );
}

export default RecentComment;
