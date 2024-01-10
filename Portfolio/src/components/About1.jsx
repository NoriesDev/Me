
import { Card, CardHeader, Button } from "@nextui-org/react";
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
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { SiExpress } from "react-icons/si";
import { SiNextui } from "react-icons/si";

const About1 = () => {
    const navigate = useNavigate()
    const [copied, setCopied] = useState(false);
    const emailAddress = 'nora.martiny.dev@gmail.com';
  
    const handleCopyEmail = () => {
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };
  


    const handleAbout = () => {
        navigate('/about');
      };
    return (
        <>
            <Card className="flex lg:flex-row bg-black/10 z-0 flex lg:w-[30vw] h-[585px] mt-8 justify-center justify-content-center mx-auto rounded">

                <CardHeader className="flex-row text-center justify-center mx-auto items-center ">
                    <div className="flex items-center xl:gap-12">
                    <div className="flex-row mx-4">
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
                    <div className="text-center text-white font-four sm-hidden lg-block text-lg font-bold">

                        </div>
                    </div>
                    <div className="flex-row font-four text-sm">
                        <h3 className="text-beige my-8 text-lg font-bold">Junior Full Stack Web <br/> & App Developer</h3>
                        <p className="text-white mx-2 mt-12 mb-12 w-[300px] mx-auto text-center">Passionate Coder | Creative Thinking | Problem Solver | Globetrotter | Photographer | Artist | Nature Lover</p>
                        <p className="text-white my-2 mx-0 lg:mx-4">Nora Martiny, 28(f)</p>

                    <p className="text-white mx-2 lg:mx-8">25899 Niebüll</p>
                    <p className="text-white mt-2 mb-8 mx-2 lg:mx-8">Germany</p>
                    <h3 className="text-white mt-12 text-lg font-bold">Email:</h3>
                    <div className="flex text-white text-center mx-auto itmes-center" onClick={handleCopyEmail}>
                        <p className="text-white my-2 cursor-pointer text-center mx-auto">{emailAddress}</p>
                    </div>
                    {copied && <p className="text-green-500 text-xs">Email copied to clipboard!</p>}
                    {!copied && (
                        <p className="text-white cursor-pointer text-xs" onClick={handleCopyEmail}>
                        Copy email address
                        </p>
                    )}
                    <Button onClick={handleAbout} className="font-four font-bold text-sm hover:bg-rosa/50 bg-white/20 text-white hover:text-beige mt-12 mx-auto">About Me</Button>

                    </div>
                </CardHeader>
            </Card>
        </>
    );
};

export default About1;