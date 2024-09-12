import Category from "./category";
import Collection from "./collection";
import Header from "./header";
import ThumbNail from "./thumbnail";
import Footer from "./footer";
export default function Gallery() {
  return(
    <div className="w-full">
      <Header></Header>
      <ThumbNail></ThumbNail>
      <Category></Category>
      <Collection></Collection>
      <Footer></Footer>
    </div>
  );
}