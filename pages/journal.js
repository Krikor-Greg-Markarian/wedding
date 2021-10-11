import cn from "classnames";
import axios from "axios";
import NavbarTwo from "../src/components/NavbarTwo";
import JournalSection from "../src/components/JournalSection";
import AboutItems from "../src/components/AboutItems";

export default function Home(props) {
  return (
    <div>
      <div>
        <section className={cn("relative")}>
          <NavbarTwo
            homeNavbar={"Home"}
            theWeddingNavbar={"THE WEDDING"}
            journalNavbar={"JOURNAL"}
            photosNavbar={"PHOTOS"}
            rvspNavbar={"RVSP"}
            contactNavbar={"CONTACT"}
          />
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("absolute top-20 py-20 bg-white w-11/12 p-8")}>
              <div className={cn("flex justify-center items-center")}>
                <p className={cn("font-bold text-2xl")}>michale &amp; Sarah</p>
              </div>
              <div className={cn("flex justify-center items-center")}>
                <p className={cn("text-red-600")}>25 june 2021</p>
              </div>
              <p className={cn("text-gray-500 text-2xl")}>Journal</p>
              <div className={cn("border-2")}></div>
              <div className={cn("grid grid-cols-2")}>
                <div className={cn("col-span-1")}>
                  {props.journalSection.map((item, idx) => (
                    <JournalSection
                      date={item.date}
                      title={item.title}
                      posted={item.posted}
                      journal={item.journal}
                      imageUrl={item.imageUrl}
                      text={item.text}
                      ReadMoreButtonName={item.ReadMoreButtonName}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/posts");

  return {
    props: {
      journalSection: response.data.journalSection,
    }, // will be passed to the page component as props
  };
}
