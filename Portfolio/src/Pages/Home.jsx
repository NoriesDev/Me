import Foot from "../components/Foot.jsx"
import Nav from '../components/Nav';
import AnimatedHeader from "../components/AnimationHeader.jsx"
import About1 from "../components/About1.jsx"
import Contact1 from "../components/Contact1.jsx"
import Project1 from "../components/Project1.jsx"
import LandingGallery from "../components/landingGallery.jsx"
import { useBackgroundContext } from "../Context/context.jsx";

function Home() {
  const { currentBg } = useBackgroundContext();
  const isDarkMode = currentBg === '/BG.png';


  return (
    <>
    <Nav />
    <div className="lg:h-[160vh] overflow-hidden">
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
   {isDarkMode && <LandingGallery />}
   </div>
   </div>
   </div>
   <Foot />

    </>
  )
}

export default Home
