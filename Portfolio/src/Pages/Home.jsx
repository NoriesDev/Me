import Foot from "../components/Foot.jsx"
import Nav from "../components/Nav.jsx"
import AnimatedHeader from "../components/AnimationHeader.jsx"
import About1 from "../components/About1.jsx"
import Contact1 from "../components/Contact1.jsx"
import Project1 from "../components/Project1.jsx"
import LandingGallery from "../components/landingGallery.jsx"


function Home() {


  return (
    <>
   <Nav />
   <AnimatedHeader />
   <div className="lg:flex gap-8 justify-center mx-auto">
   <div className="flex">
   <About1 />
   </div>
   <div className="flex">
   <Project1 />
   </div>
   </div>
   <div className=" gap-8 justify-center mx-auto">
   <div className="flex">
   <Contact1 />
   </div>
   <div className="flex">
    <LandingGallery />
   </div>
   </div>
   <Foot />
    </>
  )
}

export default Home
