import Foot from "../components/Foot.jsx"
import Nav from "../components/Nav.jsx"
import BigGallery from "../components/bigGallery.jsx"


function Gallery() {


  return (
    <>
   <Nav />
   <div className="flex">
    <BigGallery />
   </div>
   <Foot />
    </>
  )
}

export default Gallery
