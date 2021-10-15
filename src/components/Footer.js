import React from "react";
import cn from "classnames";
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaVimeoV,
} from "react-icons/fa";
import Link from "next/link";

function Footer(props) {
  return (
    <div className={cn("bg-black py-24")}>
      <div className={cn("container mx-auto")}>
        <div className={cn("flex justify-center items-center")}>
          <p className={cn("text-white text-lg font-bold pb-4")}>
            {props.GroomBrideName}
          </p>
        </div>

        <div className={cn("pb-4 flex justify-center items-center")}>
          <div className={cn("inline ")}>
            <FaTwitter className={cn("inline text-white text-2xl ")} />
          </div>
          <div className={cn("inline pl-4")}>
            <FaFacebookF className={cn("inline text-white text-2xl")} />
          </div>
          <div className={cn("inline pl-4")}>
            <FaGooglePlusG className={cn("inline text-white text-2xl")} />
          </div>
          <div className={cn("inline pl-4")}>
            <FaVimeoV className={cn("inline text-white text-2xl")} />
          </div>
        </div>

        <div className={cn("pb-4 flex justify-center items-center")}>
          <li className={cn("inline")}>
            <Link href="">
              <a
                className={cn(
                  "text-red-600 text-sm border-dotted border-b-2 border-red-600"
                )}
                href="/"
              >
                {props.home}
              </a>
            </Link>
          </li>
          <li className={cn("inline")}>
            <Link href="">
              <a className={cn("text-red-600 text-sm pl-6")} href="photos">
                {props.photos}
              </a>
            </Link>
          </li>
          <li className={cn("inline")}>
            <Link href="">
              <a className={cn("text-red-600 text-sm pl-6")} href="journal">
                {props.journal}
              </a>
            </Link>
          </li>
          <li className={cn("inline")}>
            <Link href="">
              <a className={cn("text-red-600 text-sm pl-6")} href="/">
                {props.rsvp}
              </a>
            </Link>
          </li>
          <li className={cn("inline")}>
            <Link href="">
              <a className={cn("text-red-600 text-sm pl-6")} href="/">
                {props.contact}
              </a>
            </Link>
          </li>
        </div>
        <div className={cn("flex justify-center items-center pt-4")}>
          <p className={cn("inline text-sm text-gray-500")}>
            {props.marriageInfo}
          </p>

          <span className={cn("inline text-red-600 pl-1")}>
            {" "}
            <a href=""> {props.sindevothemes}</a>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
