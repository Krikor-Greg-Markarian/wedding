import React from "react";
import cn from "classnames";

function PopularItems(props) {
  return (
    <div>
      <p
        className={cn(
          "text-red-600 hover:text-black bg-gray-100 p-1 w-5/12 text-center rounded-lg mt-1 mb-1 text-xs"
        )}
      >
        {props.text1}
      </p>
      <p
        className={cn(
          "text-red-600 hover:text-black bg-gray-100 p-1 w-5/12 text-center rounded-lg mt-1 mb-1 text-lg"
        )}
      >
        {props.text2}
      </p>
      <p
        className={cn(
          "text-red-600 hover:text-black bg-gray-100 p-1 w-6/12 text-center rounded-lg mt-1 mb-1 inline text-xs"
        )}
      >
        {props.text3}
      </p>
      <p
        className={cn(
          "text-red-600 hover:text-black bg-gray-100 p-1 w-6/12 text-center rounded-lg mt-1 mb-1 inline ml-2 text-xs"
        )}
      >
        {props.text4}
      </p>
      <p
        className={cn(
          "text-red-600 hover:text-black bg-gray-100 p-1 w-6/12 text-center rounded-lg mt-1 mb-1 inline ml-2 text-xs"
        )}
      >
        {props.text5}
      </p>
      <div className={cn("mt-2 mb-2")}>
        <p
          className={cn(
            "text-red-600 hover:text-black bg-gray-100 p-1 w-6/12 text-center rounded-lg mb-1 inline text-xs"
          )}
        >
          {props.text6}
        </p>
        <p
          className={cn(
            "text-red-600 hover:text-black bg-gray-100 p-1 w-6/12 text-center rounded-lg mt-1 mb-1 inline ml-2 text-xs"
          )}
        >
          {props.text7}
        </p>
      </div>
      <p
        className={cn(
          "text-red-600 hover:text-black bg-gray-100 p-1 w-4/12 text-center rounded-lg mt-1 mb-1 text-lg"
        )}
      >
        {props.text8}
      </p>
      <p
        className={cn(
          "text-red-600 hover:text-black bg-gray-100 p-1 w-6/12 text-center rounded-lg mt-1 mb-1 text-3xl"
        )}
      >
        {props.text9}
      </p>
      <p
        className={cn(
          "text-red-600 hover:text-black bg-gray-100 p-1 w-5/12 text-center rounded-lg mt-1 mb-1 text-xs"
        )}
      >
        {props.text10}
      </p>
    </div>
  );
}

export default PopularItems;
