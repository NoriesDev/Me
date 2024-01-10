import GHimg from "../assets/GH1.png"
import GH4img from '../assets/Gh4.png'
import { Card, CardHeader,  Image, CardBody,  Link } from "@nextui-org/react";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbBrandVite } from "react-icons/tb";
import { PiFileCssDuotone } from "react-icons/pi";
import { DiPostgresql } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { SiExpress } from "react-icons/si";


const GHbig = () => {

    return (
        <>
            <Card className=" bg-black/0 z-0 flex w-[95%] md:w-[70%] lg:w-[55%] py-8 my-12 justify-center items-center mx-auto ">

                <CardHeader className="flex-col  justify-center text-center bg-black/20 rounded ">
            <div className="mt-4">
            <p className="text-beige font-bold text-3xl font-four" >GlobeHackers</p>
            <p className="text-white font-bold text-xl font-four">Group Project: a travel guide </p>
            </div>
            <div className="text-white font-four text-center mx-8 md:mx-16 lg:mx-28 xl:-mx-38 my-8">
                <p>GlobeHackers is a travel guide that allows the user to read and write blog posts and the user can search for a destination and find all the articles that might be of interest. Developed over two sprints in collaboration with my amazing classmate Kimberly. We used Vite, React, Vanilla CSS and Contentful as our content management system to create a dynamic and responsive website. In the second sprint we modernised the site, moved the data from Contentful to SQL and built a backend.</p>
            </div>
            <div className="flex my-4">
            <h3 className="text-white font-bold">TECH STACK:</h3>
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
            <div className="flex my-4 font-four">
                <FaGithub className="text-white text-3xl mx-2"/>
                <Link href="https://github.com/NoriesDev/GlobeHackerFullStack" className="text-rosa hover:text-beige text-xl mx-2">View Code</Link>
                <TbWorldWww className="text-white text-3xl mx-2"/>
                <Link href="https://globehackersfrontend-alx6.onrender.com/" className="text-rosa hover:text-beige text-xl mx-2">View Page</Link>
            </div>
            </CardHeader>
            <CardBody className="flex-col xl:flex-row gap-2 lg:gap-4 items-center justify-center mx-auto">
            <Image src={GHimg} className=" z-[1] relative rounded  h-[260px] w-[500px] object-cover my-2" />
            <Image src={GH4img} className=" z-[1] relative rounded  h-[260px] w-[500px] object-cover my-2" />
            </CardBody>
        </Card>
        </>
    );
};

export default GHbig;