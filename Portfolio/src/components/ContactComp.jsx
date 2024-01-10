
import { Card, CardBody, Link, CardHeader, CardFooter } from "@nextui-org/react";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useState } from 'react';


function ContactComp() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'nora.martiny.dev@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };


  return (
    <>
    <Card className="bg-black/20 justify-content-center mx-auto my-4 w-[370px] items-center justify-center font-four px-8 rounded">
      <CardHeader className="text-center mx-auto justify-center ">
        <h3 className="font-bold text-beige text-xl mt-8">Or find me on</h3>
      </CardHeader>
<CardBody className="flex-col gap-8 justify-center items-center mx-auto text-center text-white">
  <div className="flex gap-36">
<Link className="font-bold text-white  hover:text-rosa  text-sm" href="https://www.linkedin.com/in/nora-martiny/">Linkedin</Link>
<FaLinkedin className="w-[30px] h-[30px] hover:text-rosa " />
</div>
<div className="flex gap-36">
<Link className="font-bold text-white  hover:text-rosa  text-sm"  href="https://discord.com/channels/1192823087767506964/1192823087767506966">Discord</Link>
<FaDiscord className="w-[30px] h-[30px] hover:text-rosa "/>
</div>
<div className="flex gap-40">
<Link className="font-bold text-white   hover:text-rosa text-sm"  href="https://github.com/NoriesDev">GitHub</Link>
<FaGithub className="w-[30px] h-[30px] hover:text-rosa " />
</div>
<div className="flex gap-32">
<Link className="font-bold text-white   hover:text-rosa text-sm"  href="https://www.instagram.com/nm.development?igsh=MXcwMjAzZHV5bmw3MA%3D%3D&utm_source=qr">Instagram</Link>
<FaInstagramSquare className="w-[30px] h-[30px] hover:text-rosa " />
</div>
<div className="flex gap-36">
<Link className="font-bold text-white  hover:text-rosa  text-sm"  href="https://www.tiktok.com/@nm.development">TikTok</Link>
<FaTiktok className="w-[30px] h-[30px]  hover:text-rosa " />
</div>
<div className="flex text-white gap-40" onClick={handleCopyEmail}>
        <p className="font-bold text-white  hover:text-rosa  text-sm mt-2 cursor-pointer">Mail</p>
        <IoIosMail className="w-[30px] h-[30px] cursor-pointer hover:text-rosa " />
      </div>
      {copied && <p className="text-beige text-xs">E-mail copied to clipboard!</p>}
</CardBody>
<CardFooter className="flex-col text-center mx-auto justify-center mb-4">

    </CardFooter>

</Card>

    </>
  )
}

export default ContactComp;