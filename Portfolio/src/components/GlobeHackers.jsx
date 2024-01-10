import GHimg from "../assets/GH1.png"
import { Card, CardHeader,  Image, Button } from "@nextui-org/react";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { TbBrandVite } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import {useNavigate} from 'react-router-dom'
import { PiFileCssDuotone } from "react-icons/pi";


const GlobeHacker = () => {
    const navigate = useNavigate()

    const handleGh = () => {
        navigate('/gh');
      };
    

    return (
        <>
            <Card className=" bg-black/0 z-0 flex my-20 px-2 justify-center items-center mx-auto font-four rounded">

                <CardHeader className="flex-col z-[2] absolute justify-center text-center bg-black/50  w-full h-full rounded ">
            <p className="text-beige font-bold text-3xl font-four" >GlobeHackers</p>
            <p className="text-white font-bold text-xl font-four">A Travel Guide</p>

            <div className="flex mt-2">
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
            
            <Button onClick={handleGh} className="hover:bg-rosa/50 bg-white/20 text-white font-bold w-[200px] mx-auto hover:text-beige hover:bg-rosa/50 " >View more</Button>
            </CardHeader>

            <Image src={GHimg} className=" z-[1] relative rounded  h-[225px] w-[500px] object-cover my-2" />
          
        </Card>
        </>
    );
};

export default GlobeHacker;