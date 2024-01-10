import GHimg from "/GH1.png"
import { Card, CardHeader,  Image, Button } from "@nextui-org/react";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { TbBrandVite } from "react-icons/tb";
import {useNavigate} from 'react-router-dom'
import { SiTailwindcss } from "react-icons/si";
import wren from '/wren1.png'
import { SiExpress } from "react-icons/si";
import { SiNextui } from "react-icons/si";
import { PiFileCssDuotone } from "react-icons/pi";
import { DiPostgresql } from "react-icons/di";

function Project1() {
    const navigate = useNavigate()    
      const handlePf = () => {
        navigate('/projects');
      };
    

  return (
    <>
   <div className="justify-center justify-content-center items-center mx-auto px-8 my-8 rounded  bg-black/10">
   <Card className=" h-[225px] z-0 flex mt-8 justify-center items-center mx-auto font-four mx-4 rounded">
<CardHeader className="flex-col z-[2] absolute justify-center text-center bg-black/50  w-[500px] h-[225px] rounded ">
<p className="text-beige font-bold text-3xl font-four" >GlobeHackers</p>
<p className="text-white font-bold text-xl font-four">A Travel Guide Group Project</p>

<div className="flex mt-4">
<h3 className="text-white font-bold my-1">TECH STACK:</h3>
</div>
<div className="flex mb-4">
            <PiFileCssDuotone className="text-white text-3xl mx-2"/>
            <DiJavascript className="text-white text-3xl mx-2"/>
            <FaReact className="text-white text-3xl mx-2"/>
             <FaNode className="text-white text-3xl mx-2"/>
             <SiExpress className="text-white text-3xl mx-2"/>
             <TbBrandVite className="text-white text-3xl mx-2"/>
             <DiPostgresql className="text-white text-3xl mx-2"/>
</div>
</CardHeader>
<Image src={GHimg} className=" z-[1] relative rounded  h-[225px] w-[500px] object-cover my-2" />
</Card>


<Card className="h-[225px] bg-black/0 z-0 flex mt-8 justify-center items-center mx-auto font-four mx-4 rounded">
<CardHeader className="flex-col z-[2] absolute justify-center text-center bg-black/50  w-[500px] h-[225px] rounded ">
<p className="text-beige font-bold text-3xl font-four" >Wren Creations</p>
            <p className="text-white font-bold text-xl font-four">My first Solo Full Stack Project</p>

            <div className="flex mt-4">
            <h3 className="text-white font-bold my-1">TECH STACK:</h3>
            </div>
            <div className="flex mb-4">
            <SiTailwindcss className="text-white text-3xl mx-2"/>
            <SiNextui className="text-white text-3xl mx-2"/>
            <DiJavascript className="text-white text-3xl mx-2"/>
            <FaReact className="text-white text-3xl mx-2"/>
             <FaNode className="text-white text-3xl mx-2"/>
             <SiExpress  className="text-white text-3xl mx-2"/>
             <TbBrandVite className="text-white text-3xl mx-2"/>
             <SiMongodb className="text-white text-3xl mx-2"/>
            </div>
            </CardHeader>

            <Image src={wren} className=" z-[1] relative rounded  h-[225px] w-[500px] object-cover my-2" />
</Card>

<Button onClick={handlePf} className="hover:bg-rosa/50 bg-white/20 text-white hover:text-beige font-bold w-[200px] mx-28 md:mx-40  my-4" >View Projects</Button>
   </div>
    </>
  )
}

export default Project1
