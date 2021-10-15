import cn from "classnames";
import axios from "axios";
import NavbarPhotos from "../src/components/NavbarPhotos";
import Footer from "../src/components/Footer";
import ReadMoreButton from "../src/components/ReadMoreButton";
import LatestJournalStories from "../src/components/LatestJournalStories";
import { FaRegComment } from "react-icons/fa";
import RecentComment from "../src/components/RecentComment";
import Calendar from "react-calendar";

export default function Home(props) {
  return (
    <div>
      <NavbarPhotos
        homeNavbar={"HOME"}
        theWeddingNavbar={"THE WEDDING"}
        journalNavbar={"JOURNAL"}
        photosNavbar={"PHOTOS"}
        rvspNavbar={"RVSP"}
        contactNavbar={"CONTACT"}
      />

      <section className={cn("p-12")}>
        <div className={cn("flex justify-center items-center")}>
          <p className={cn("font-bold text-2xl")}>michale &amp; Sarah</p>
        </div>
        <div className={cn("flex justify-center items-center")}>
          <p className={cn("text-red-600 pt-12")}>25 june 2021</p>
        </div>
        <p className={cn("text-gray-500 font-normal text-2xl")}>
          Répondez S’il Vous Plaît
        </p>
        <div className={cn("border-2")}></div>
        <div className={cn("grid md:grid-cols-3")}>
          <div className={cn("col-span-2")}>
            <p className={cn("text-red-500 border-b-2 pt-12 pb-4")}>
              GET IN TOUCH
            </p>
            <div className={cn("pt-4")}>
              <label className={cn("text-sm font-bold ")} htmlFor="">
                Name <span className={cn("text-red-500")}>*</span>{" "}
              </label>

              <input
                className={cn(
                  "w-full h-10 p-3 bg-transparent border-2 focus:outline-none mt-3"
                )}
                type="text"
              />
            </div>
            <div>
              <label className={cn("text-sm font-bold ")} htmlFor="">
                Email <span className={cn("text-red-500")}>*</span>{" "}
              </label>

              <input
                className={cn(
                  "w-full h-10 p-3 bg-transparent border-2 focus:outline-none mt-3"
                )}
                type="text"
              />
            </div>
            <div>
              <label className={cn("text-sm font-bold ")} htmlFor="">
                Phone <span className={cn("text-red-500")}>*</span>{" "}
              </label>

              <input
                className={cn(
                  "w-full h-10 p-3 bg-transparent border-2 focus:outline-none mt-3"
                )}
                type="text"
              />
            </div>
            <div>
              <label className={cn("text-sm font-bold ")} htmlFor="">
                Message <span className={cn("text-red-500")}>*</span>{" "}
              </label>

              <textarea
                className={cn("bg-transparent border-2 mt-3 w-full focus:outline-none")}
                name=""
                id=""
                cols="103"
                rows="10"
              ></textarea>
            </div>
            <p className={cn("text-red-500 border-b-2 pt-12 pb-4")}>
              VERIFICATION
            </p>
            <div className={cn("pt-4")}>
              <label className={cn("text-sm font-bold ")} htmlFor="">
                Please enter any two digits{" "}
                <span className={cn("text-red-500")}>*</span>{" "}
              </label>

              <input
                className={cn(
                  "w-full h-10 p-3 bg-transparent border-2 focus:outline-none mt-3"
                )}
                type="text"
              />
              <p className={cn("text-sm")}>Example: 12</p>
              <div className={cn("flex justify-center items-center pt-4")}>
                <ReadMoreButton
                  className={cn("bg-red-500 text-center p-3 text-white w-3/12")}
                  ReadMoreButtonName={"SUBMIT"}
                />
              </div>
            </div>
          </div>
          <div className={cn("col-span-1 pl-20 w-11/12")}>
            <p className={cn("font-bold")}>Latest Journal Stories</p>
            {props.latestjournalstories.map((item, idx) => (
              <LatestJournalStories
                key={idx}
                imageURl={item.imageURl}
                text={item.text}
              />
            ))}
            <div>
              <p className={cn("font-bold pb-5 pt-14")}>Recent Comments</p>
              {props.recentItems.map((item, idx) => (
                <RecentComment
                  key={idx}
                  text1={item.text1}
                  text2={item.text2}
                  text3={item.text3}
                  text4={item.text4}
                />
              ))}
            </div>
            <div className={cn("pt-12")}>
              <Calendar />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer
          GroomBrideName={"WITH LOVE MICHAEL & SARAH"}
          home={"home"}
          photos={"photos"}
          journal={"journal"}
          rsvp={"RSVP"}
          contact={"Contact"}
          marriageInfo={"Marriage | Premium Wedding Wordpress Theme by"}
          sindevothemes={"sindevothemes"}
        />
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/rvsp");

  return {
    props: {
      latestjournalstories: response.data.latestjournalstories,
      recentItems: response.data.recentItems,
    }, // will be passed to the page component as props
  };
}
