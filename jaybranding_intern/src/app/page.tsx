import Category from "./category";
import Collection from "./collection";
import Header from "./header";
import ThumbNail from "./thumbnail";
import Footer from "./footer";
import Popup from "./popup";
export default function Gallery() {
  return(
    <div className="w-full relative">
      <div
        className="w-full relative"></div>
      <Header></Header>
      <ThumbNail></ThumbNail>
      <Category></Category>
      <Collection></Collection>
      <Footer></Footer>
      <div
        className="fixed top-0 w-full z-10 ">
          <Popup></Popup>
        </div>
    </div>
    
  );
}