import cn from "classnames";
import AboutItems from "../src/components/AboutItems";
import axios from "axios";
import Button from "../src/components/Button";
import WeddingItem from "../src/components/WeddingItem";
import BrideGroomItem from "../src/components/BrideGroomItem";
import NavbarImage from "../src/components/NavbarImage";
import Footer from "../src/components/Footer";
import JournalItem from "../src/components/JournalItem";

export default function Home(props) {
  return (
    <div>
      <section>
        <NavbarImage
          homeNavbar={"Home"}
          theWeddingNavbar={"THE WEDDING"}
          journalNavbar={"JOURNAL"}
          photosNavbar={"PHOTOS"}
          rvspNavbar={"RVSP"}
          contactNavbar={"CONTACT"}
          name={"michael & Sarah"}
          date={"25 june 2021"}
        />
      </section>

      <section className={cn("flex justify-center items-center py-12")}>
        <div className={cn("grid md:grid-cols-2 gap-3 container w-8/12")}>
          {props.posts_data.map((item, idx) => (
            <div key={idx} className={cn("col-span-1")}>
              <AboutItems
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </section>

      <section className={cn("pt-20 pb-20")}>
        <div className={cn("bg-green-100 py-24")}>
          <div className={cn("flex justify-center items-center")}>
            <Button
              className={cn(
                "bg-red-500 text-white w-36 text-sm text-center p-3"
              )}
              ButtonName={"RSV NOW"}
            />
          </div>
        </div>
      </section>

      <section className={cn("flex justify-center items-center py-8")}>
        <div className={cn("grid md:grid-cols-3 gap-7 w-8/12")}>
          {props.weddingItem.map((item, idx) => (
            <div key={idx} className={cn("col-span-1")}>
              <WeddingItem
                title={item.title}
                imageUrl={item.imageUrl}
                description={item.description}
                ReadMoreButtonName={item.ReadMoreButtonName}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className={cn("bg-gray-100 py-32 ")}>
          <div
            className={cn(
              "flex justify-center items-center font-bold text-2xl"
            )}
          >
            <p className={cn("pb-14")}>Bridesmaids and Groomsmen</p>
          </div>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("grid md:grid-cols-4 w-8/12 gap-3 pl-1")}>
              {props.brideGroomItem.map((item, idx) => (
                <div key={idx} className={cn("col-span-1")}>
                  <BrideGroomItem
                    imageUrl={item.imageUrl}
                    name={item.name}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={cn("flex justify-center py-24")}>
        <div className={cn("w-7/12 grid md:grid-cols-3 gap-3 pl-1")}>
          <div className={cn("font-bold text-2xl col-span-3")}>
            <p className={cn("text-center pb-12")}>Journal</p>
          </div>
          {props.journalItem.map((item, idx) => (
            <div key={idx} className={cn("col-span-1 text-center")}>
              <JournalItem
                date={item.date}
                description={item.description}
                byAdmin={item.byAdmin}
              />
            </div>
          ))}
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
  const response = await axios.get("http://localhost:3000/api/hello");

  return {
    props: {
      posts_data: response.data.about,
      weddingItem: response.data.weddingItem,
      brideGroomItem: response.data.brideGroomItem,
      journalItem: response.data.journalItem,
    }, // will be passed to the page component as props
  };
}
