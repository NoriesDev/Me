
import { Card, CardHeader } from "@nextui-org/react";
import { DiJavascript } from "react-icons/di";
import { TbFileTypeHtml } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { PiFileCssDuotone } from "react-icons/pi";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNextui } from "react-icons/si";



const Me = () => {

    
    return (
        <>
            <Card className="flex lg:flex-row bg-black/0 z-0 flex w-[95vw] my-8 justify-center mx-auto rounded">

                <CardHeader className="flex-col lg:flex-row text-center my-5 justify-center mx-auto items-center ">
                    <div className="flex items-center ">
                    <div className="flex-row my-4 justify-center xl:ml-44 items-center">
                    <p className="mb-4 w-[300px] text-center font-four text-lg font-bold text-beige"> Junior Full Stack Web & App Developer</p>
                    <div className="flex-row justify-center ml-32 items-center">
                    <p className="text-white my-2"><TbFileTypeHtml className="w-[35px] h-[35px]"/></p>
                    <p className="text-white"><PiFileCssDuotone className="w-[35px] h-[35px]"/></p>
                    <p className="text-white my-2"><FaBootstrap className="w-[35px] h-[35px]"/></p>
                    <p className="text-white"><SiTailwindcss className="w-[35px] h-[35px]"/></p>
                    <p className="text-white"><SiNextui className="w-[35px] h-[35px]"/></p>
                    <p className="text-white my-2"><DiJavascript className="w-[35px] h-[35px]"/></p>
                    <p className="text-white"><FaReact className="w-[35px] h-[35px]"/></p>
                    <p className="text-white my-2"><FaNode className="w-[35px] h-[35px]"/></p>
                    <p className="text-white my-2"><SiExpress className="w-[35px] h-[35px]"/></p>
                    <p className="text-white"><DiPostgresql className="w-[35px] h-[35px]"/></p>
                    <p className="text-white my-2"><SiMongodb className="w-[35px] h-[35px]"/></p>
                    <p className="text-white"><FaGit className="w-[35px] h-[35px]"/></p>
                    </div>
                    </div>
                    </div>
                    <div className="flex-row my-4 mx-0 xl:mx-48  font-four text-sm text-start">
                        <h3 className="text-white my-4 text-lg font-bold text-rosa/70">The fascination of programming:</h3>
                    <p className="text-white my-2 mx-0 lg:mx-8">The excitement of solving problems and the challenge of unravelling complex puzzles.</p>
                    <p className="text-white mx-2 lg:mx-8">The immersive and ever-evolving nature of the technology that allows for continuous learning.</p>
                    <p className="text-white my-2 mx-2 lg:mx-8">The limitless creativity it offers to create vibrant and engaging digital experiences.</p>
                    <h3 className="text-white my-4 text-lg font-bold text-rosa/70">My love of coding:</h3>
                    <p className="text-white mx-2 lg:mx-8">The feeling of complete immersion when coding, where the world fades away.</p>
                    <p className="text-white my-2 mx-2 lg:mx-8">The thrill of overcoming obstacles, cracking code and the incomparable sense of triumph.</p>
                    <h3 className="text-white my-4 text-lg font-bold text-rosa/70">Hopes for the future:</h3>
                    <p className="text-white mx-2 lg:mx-8">Explore and master new languages, frameworks and technologies beyond JavaScript.</p>
                    <p className="text-white my-2 mx-2 lg:mx-8">Bring big visions to a global audience, using coding skills to create impactful solutions..</p>
                    <p className="text-white mx-2 lg:mx-8">To help amazing companies achieve greater visibility and marketing opportunities through technical innovation.</p>
                    </div>
                </CardHeader>
            </Card>
        </>
    );
};

export default Me;