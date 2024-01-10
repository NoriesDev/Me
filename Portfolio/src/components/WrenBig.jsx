import { Card, CardHeader,  Image, CardBody,  Link } from "@nextui-org/react";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbBrandVite } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import wren from '../assets/wren.png'
import wren1 from '../assets/wren1.png'
import { SiExpress } from "react-icons/si";
import { SiNextui } from "react-icons/si";

const WrenBig = () => {

    return (
        <>
            <Card className=" bg-black/0 z-0 flex w-[95%] md:w-[70%] lg:w-[55%] my-12 justify-center items-center mx-auto rounded">

                <CardHeader className="flex-col  justify-center text-center bg-black/20 rounded ">
            <div className="mt-4">
            <p className="text-beige font-bold text-3xl font-four" >WrenCreations</p>
            <p className="text-white font-bold text-xl font-four">First solo full stack project</p>
            </div>
            <div className="text-white font-four text-center mx-8 md:mx-16 lg:mx-28 xl:-mx-38 my-8">
                <p>Wren Creations is a website I am currently developing for my aunt's small handmade jewellery business. The platform showcases her passion for craftsmanship and offers users an insight into her artistry. Each piece is carefully crafted with love and reflects a blend of skill and dedication. The user can find videos, photos and text about her work, as well as all the links to her social media accounts. The user can also see all the rings and bracelets she makes, with detailed information and a link to the etsy shop where the user can place an order. It's a fun project and my first full stack solo, I'm still working on it but the source code is below...</p>
            </div>
            <div className="flex my-4">
            <h3 className="text-white font-bold">TECH STACK:</h3>
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
            <div className="flex my-4 font-four">
                <FaGithub className="text-white text-3xl mx-2"/>
                <Link href="https://github.com/NoriesDev/firstSolo" className="text-rosa hover:text-beige text-xl mx-2">View Code</Link>
            </div>
            </CardHeader>
            <CardBody className="flex-col xl:flex-row gap-2 lg:gap-4 items-center justify-center mx-auto">
            <Image src={wren} className=" z-[1] relative rounded  h-[260px] w-[500px] object-cover my-2" />
            <Image src={wren1} className=" z-[1] relative rounded  h-[260px] w-[500px] object-cover my-2" />

            </CardBody>
        </Card>
        </>
    );
};

export default WrenBig;