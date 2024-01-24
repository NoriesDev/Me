
import Pokefight from "./pokefight.jsx";
import GlobeHacker from "./GlobeHackers.jsx";
import Wren from "./Wren.jsx";
import Ketan from "./Ketano.jsx";


function ProjectCollect() {


  return (
    <>

   <div className="text-white text-5xl font-bold font-four text-center">
    <h3 className="my-12">PROJECTS</h3>
   </div>
   <div className="w-[90%] xl:w-[70%] mx-auto">
   <div className="flex flex-col lg:flex-row">
   <Pokefight />
   <GlobeHacker />
   </div>
   <div className="flex flex-col lg:flex-row">
   <Wren />
   <Ketan />
   </div>
   </div>
    </>
  )
}

export default ProjectCollect
