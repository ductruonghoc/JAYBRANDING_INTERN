import Category from "./category";
import Collection from "./collection";
import Header from "./header";
import ThumbNail from "./thumbnail";
export default function Gallery() {
  return(
    <div className="w-full">
      <Header></Header>
      <ThumbNail></ThumbNail>
      <Category></Category>
      <Collection></Collection>
    </div>
  );
}