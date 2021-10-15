import cn from "classnames";
import axios from "axios";
import NavbarPhotos from "../src/components/NavbarPhotos";
import MichaelAndSarah from "../src/components/MichaelAndSarah";
import Link from "next/dist/client/link";
import Footer from "../src/components/Footer";
import OurPhotoGallery from "../src/components/OurPhotoGallery";

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

      <section>
        <MichaelAndSarah />
        <div className={cn("flex justify-center items-center")}>
          <li className={cn("inline text-white bg-red-500 text-sm p-1")}>
            <Link href="">
              <a href="">View All</a>
            </Link>
          </li>
          <li
            className={cn(
              "inline text-red-500 hover:bg-red-500 hover:text-white text-sm p-1 ml-2 transition duration-500 ease-in-out  "
            )}
          >
            <Link href="">
              <a href="">Bachelor Party</a>
            </Link>
          </li>
          <li
            className={cn(
              "inline text-red-500 hover:bg-red-500 hover:text-white text-sm p-1 ml-2 transition duration-500 ease-in-out  "
            )}
          >
            <Link href="">
              <a href="">Honeymoon</a>
            </Link>
          </li>
          <li
            className={cn(
              "inline text-red-500 hover:bg-red-500 hover:text-white text-sm p-1 ml-2 transition duration-500 ease-in-out  "
            )}
          >
            <Link href="">
              <a href="">Trash The Dress</a>
            </Link>
          </li>
          <li
            className={cn(
              "inline text-red-500 hover:bg-red-500 hover:text-white text-sm p-1 ml-2 transition duration-500 ease-in-out  "
            )}
          >
            <Link href="">
              <a href="">Wedding Day</a>
            </Link>
          </li>
          <li
            className={cn(
              "inline text-red-500 hover:bg-red-500 hover:text-white text-sm p-1 ml-2 transition duration-500 ease-in-out  "
            )}
          >
            <Link href="">
              <a href="">Wedding Party</a>
            </Link>
          </li>
        </div>
      </section>
      <section className={cn("p-9")}>
        <div className={cn("grid md:grid-cols-3 gap-8")}>
          {props.ourPhotoGallery.map((item, idx) => (
            <div className={cn("col-span-1")}>
              <OurPhotoGallery
                key={idx}
                imageUrl={item.imageUrl}
                title={item.title}
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
  const response = await axios.get("http://localhost:3000/api/photos");

  return {
    props: {
      journalSection: response.data.journalSection,
      ourPhotoGallery: response.data.ourPhotoGallery,
    }, // will be passed to the page component as props
  };
}
