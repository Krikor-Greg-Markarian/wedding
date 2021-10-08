import cn from "classnames";
import AboutItems from "../src/components/AboutItems";
import axios from "axios";



export default function Home(props) {

  return (
    <div>
      <section>
        <div className={cn("grid md:grid-cols-2 gap-3 container")}>
          {props.posts_data.map((item, idx) => (
            <div key={idx} className={cn("col-span-1")}>
              <AboutItems
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                readMore={item.readMore}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/hello");

  return {
    props: {
      posts_data: response.data.about,
    }, // will be passed to the page component as props
  };
}
