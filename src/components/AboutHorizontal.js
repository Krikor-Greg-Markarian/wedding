import React from "react";
import cn from "classnames";
import Button from "./Button";

function AboutHorizontal(props) {
  return (
    <div>
      <div className={cn("flex justify-end")}>
        <input className={cn("focus:outline-none")} type="text" />

        <Button
          className={cn(
            "w-3/12 bg-black text-white text-center text-xs p-1 hover:bg-green-300 "
          )}
          ButtonName={"SEARCH"}
        />
      </div>

      <div className={cn("flex justify-center items-center  pt-12")}>
        <img
          className={cn("rounded-full w-40 h-40 ")}
          src={props.imageUrlSara}
          alt="girl picture"
        />
      </div>

      <p className={cn("text-sm text-center pt-3 pb-2")}>{props.girlName}</p>
      <p className={cn("text-sm text-gray-500 text-center")}>{props.text}</p>
    </div>
  );
}

export default AboutHorizontal;
