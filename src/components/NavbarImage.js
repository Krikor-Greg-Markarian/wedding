import React from "react";
import cn from "classnames";
import Link from "next/link";

function NavbarImage(props) {
  return (
    <div>
      <div className={cn("weddingImageUrl")}>
        <div className={cn("flex justify-center items-center p-8")}>
          <li className={cn("inline text-red-600 text-sm")}>
            <Link href="/">
              <a href="">{props.homeNavbar}</a>
            </Link>
          </li>
          <li
            className={cn("inline text-white pl-10 text-sm hover:text-red-600")}
          >
            <Link href="thewedding">
              <a href="">{props.theWeddingNavbar}</a>
            </Link>
          </li>
          <li
            className={cn("inline text-white pl-10 text-sm hover:text-red-600")}
          >
            <Link href="journal">
              <a href="">{props.journalNavbar}</a>
            </Link>
          </li>
          <li
            className={cn(
              "inline text-white pl-10  text-sm hover:text-red-600"
            )}
          >
            <Link href="photos">
              <a href="">{props.photosNavbar}</a>
            </Link>
          </li>
          <li
            className={cn(
              "inline text-white pl-10  text-sm hover:text-red-600"
            )}
          >
            <Link href="rvsp">
              <a href="">{props.rvspNavbar}</a>
            </Link>
          </li>
          <li
            className={cn(
              "inline text-white pl-10  text-sm hover:text-red-600"
            )}
          >
            <Link href="/">
              <a href="">{props.contactNavbar}</a>
            </Link>
          </li>
        </div>
        <div className={cn("flex justify-center items-center")}>
          <p className={cn("text-white text-2xl")}>{props.name}</p>
        </div>
        <div className={cn("flex justify-center items-center italic")}>
          <p className={cn("text-red-600")}>{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarImage;
