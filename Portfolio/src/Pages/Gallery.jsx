import Foot from "../components/Foot.jsx"
import Nav from "../components/Nav.jsx"
import BigGallery from "../components/bigGallery.jsx"


function Gallery() {


  return (
    <>
   <Nav />
   <div className="text-white font-four text-5xl text-center font-bold my-12">
   <h1>DIGITAL ART</h1>
   </div>
   <div className="flex">
    <BigGallery />
   </div>
   <Foot />
    </>
  )
}

export default Gallery
