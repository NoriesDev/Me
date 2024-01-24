import Foot from "../components/Foot.jsx"
import Nav from "../components/Nav.jsx"
import AboutContent from "../components/AboutContent.jsx"
import Me from "../components/LandingAbout.jsx";



function About() {


  return (
    <>
   <Nav />

   <div className="text-white font-four text-5xl text-center font-bold my-12">
    <p>ABOUT</p>
   </div>
   <Me />
   <AboutContent />
   <Foot />
    </>
  )
}

export default About
