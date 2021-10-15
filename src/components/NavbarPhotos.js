import React from "react";
import cn from "classnames";
import Link from "next/link";

function NavbarPhotos(props) {
  return (
    <div className={cn("oliveleaves")}>
      <div className={cn("flex justify-center items-center pt-6")}>
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
          className={cn("inline text-white pl-10  text-sm hover:text-red-600")}
        >
          <Link href="/">
            <a href="">{props.photosNavbar}</a>
          </Link>
        </li>
        <li
          className={cn("inline text-white pl-10  text-sm hover:text-red-600")}
        >
          <Link href="rvsp">
            <a href="">{props.rvspNavbar}</a>
          </Link>
        </li>
        <li
          className={cn("inline text-white pl-10  text-sm hover:text-red-600")}
        >
          <Link href="/">
            <a href="">{props.contactNavbar}</a>
          </Link>
        </li>
      </div>
    </div>
  );
}

export default NavbarPhotos;
