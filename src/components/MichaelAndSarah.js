import React from "react";
import cn from "classnames";

function MichaelAndSarah(props) {
  return (
    <div className={cn("p-8")}>
      <div className={cn("flex justify-center items-center")}>
        <p className={cn("font-bold text-2xl")}>michale &amp; Sarah</p>
      </div>
      <div className={cn("flex justify-center items-center")}>
        <p className={cn("text-red-600 pt-12")}>25 june 2021</p>
      </div>
      <p className={cn("text-gray-500 font-normal text-2xl")}>Our Photo Gallery</p>
      <div className={cn("border-2")}></div>
    </div>
  );
}

export default MichaelAndSarah;
