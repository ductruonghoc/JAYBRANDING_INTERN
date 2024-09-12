import Category from "./category";
import Collection from "./collection";
import Header from "./header";
import ThumbNail from "./thumbnail";
import Footer from "./footer";
import Popup from "./popup";
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}
export default function Gallery() {
  return(
    <div className="relative w-full">
      <div
        className="relative w-full"></div>
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