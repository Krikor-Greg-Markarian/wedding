import cn from "classnames";
import axios from "axios";
import NavbarTwo from "../src/components/NavbarTwo";
import JournalSection from "../src/components/JournalSection";
import AboutHorizontal from "../src/components/AboutHorizontal";
import LatestItem from "../src/components/LatestItem";
import PopularItems from "../src/components/PopularItems";
import RecentItems from "../src/components/RecentItems";
import ArchivesItem from "../src/components/ArchivesItem";
import Footer from "../src/components/Footer";

export default function Home(props) {
  return (
    <div>
      <div>
        <section className={cn("relative")}>
          <NavbarTwo
            homeNavbar={"HOME"}
            theWeddingNavbar={"THE WEDDING"}
            journalNavbar={"JOURNAL"}
            photosNavbar={"PHOTOS"}
            rvspNavbar={"RVSP"}
            contactNavbar={"CONTACT"}
          />
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("absolute top-20 py-20 bg-white w-9/12")}>
              <div className={cn("p-8")}>
                <div className={cn("flex justify-center items-center")}>
                  <p className={cn("font-bold text-2xl")}>
                    michale &amp; Sarah
                  </p>
                </div>
                <div className={cn("flex justify-center items-center")}>
                  <p className={cn("text-red-600")}>25 june 2021</p>
                </div>
                <p className={cn("text-gray-500 text-2xl")}>Journal</p>
                <div className={cn("border-2")}></div>

                <div className={cn("grid md:grid-cols-2")}>
                  <div className={cn("col-span-1")}>
                    {props.journalSection.map((item, idx) => (
                      <JournalSection
                        key={idx}
                        date={item.date}
                        title={item.title}
                        posted={item.posted}
                        journal={item.journal}
                        imageUrl={item.imageUrl}
                        text={item.text}
                        ReadMoreButtonName={item.ReadMoreButtonName}
                        videoUrl={item.videoUrl}
                        isVideo={item.isVideo}
                      />
                    ))}
                  </div>

                  <section className={cn(" pl-24 w-11/12 pt-20")}>
                    <div className={cn("mb-12")}>
                      {props.about.map((item, idx) => (
                        <AboutHorizontal
                          key={idx}
                          imageUrlSara={item.imageUrlSara}
                          girlName={item.girlName}
                          text={item.text}
                        />
                      ))}
                    </div>

                    <p className={cn("font-bold pb-5")}>Latest Stories</p>
                    {props.latestItems.map((item, idx) => (
                      <LatestItem
                        key={idx}
                        imageUrl={item.imageUrl}
                        text={item.text}
                      />
                    ))}
                    <section className={cn("pt-28 ")}>
                      <p className={cn("font-bold pb-5")}>Popular Tags</p>
                      {props.popularItems.map((item, idx) => (
                        <PopularItems
                          key={idx}
                          text1={item.text1}
                          text2={item.text2}
                          text3={item.text3}
                          text4={item.text4}
                          text5={item.text5}
                          text6={item.text6}
                          text7={item.text7}
                          text8={item.text8}
                          text9={item.text9}
                          text10={item.text10}
                        />
                      ))}
                    </section>

                    <p className={cn("font-bold pb-5 pt-14")}>
                      Recent Comments
                    </p>
                    {props.recentItems.map((item, idx) => (
                      <RecentItems
                        key={idx}
                        text1={item.text1}
                        text2={item.text2}
                        text3={item.text3}
                        text4={item.text4}
                      />
                    ))}

                    <p className={cn("font-bold pb-5 pt-14")}>Archives</p>
                    {props.archivesItem.map((item, idx) => (
                      <ArchivesItem
                        key={idx}
                        date={item.date}
                        anotherDate={item.anotherDate}
                      />
                    ))}
                  </section>
                </div>
              </div>
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
      about: response.data.about,
      latestItems: response.data.latestItems,
      popularItems: response.data.popularItems,
      recentItems: response.data.recentItems,
      archivesItem: response.data.archivesItem,
    }, // will be passed to the page component as props
  };
}
