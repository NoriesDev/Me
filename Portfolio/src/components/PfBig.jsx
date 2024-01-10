import { Card, CardHeader,  Image, CardBody,  Link } from "@nextui-org/react";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbBrandVite } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import pfImg from '../assets/pf1.png'
import pfImg2 from '../assets/pf3.png'
import { SiExpress } from "react-icons/si";
import { SiNextui } from "react-icons/si";

const PfBig = () => {

    return (
        <>
            <Card className=" bg-black/0 z-0 flex w-[95%] md:w-[70%] lg:w-[55%] my-12 justify-center items-center mx-auto ">

                <CardHeader className="flex-col  justify-center text-center bg-black/20 rounded ">
            <div className="mt-4">
            <p className="text-beige font-bold text-3xl font-four" >PokeFight</p>
            <p className="text-white font-bold text-xl font-four">Group project: a card game</p>
            </div>
            <div className="text-white font-four text-center mx-8 md:mx-16 lg:mx-28 xl:-mx-38 my-8">
                <p>We developed a web application for a Pokemon card game, where you can build up your Pokemon collection by winning a battle and getting on the leaderboard. We used MongoDB, Mongoose, Express.js and Node.js to build the backend of the game, while we used Vite, Tailwind CSS and NextUI for the frontend. Time management made it difficult, but it was fun creating a game logic and overcoming the challenges in our project to deliver a fun little game after a two-week sprint as a team of three classmates, Mochi, Harun and myself, shout out to you guys, it was amazing working with you!  I want to show it off here even though it is still a work in progress, feel free to check out the code below.</p>
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
                <Link href="https://github.com/Mochibunn/PokeFight" className="text-rosa hover:text-beige text-xl mx-2">View Code</Link>
            </div>
            </CardHeader>
            <CardBody className="flex-col xl:flex-row gap-2 lg:gap-4 items-center justify-center mx-auto">
            <Image src={pfImg} className=" z-[1] relative rounded  h-[260px] w-[500px] object-cover my-2" />
            <Image src={pfImg2} className=" z-[1] relative rounded  h-[260px] w-[500px] object-cover my-2" />

            </CardBody>
        </Card>
        </>
    );
};

export default PfBig;