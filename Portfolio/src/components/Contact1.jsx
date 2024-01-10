
import { Card, CardBody, Link, Button } from "@nextui-org/react";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Contact1() {
const navigate = useNavigate();

const handleContact = () => {
    navigate('/contact')
}

  return (
    <>
    <Card className="bg-black/0 justify-content-center mx-auto w-[585px] my-8 items-center justify-center font-four rounded">
    <h3 className="font-bold text-beige text-xl ">Join me on:</h3>
<CardBody className="flex-row gap-8 lg:gap-12 justify-center items-center mx-auto text-center text-white">
  <div className="flex">
<Link className="font-bold text-white text-xl" href="https://www.linkedin.com/in/nora-martiny/">
<FaLinkedin className="w-[35px] h-[35px] hover:text-rosa" /></Link>
</div>
<div className="flex">
<Link className="font-bold text-white text-xl"  href="https://discord.com/channels/1192823087767506964/1192823087767506966">
<FaDiscord className="w-[35px] h-[35px] hover:text-rosa"/></Link>
</div>
<div className="flex">
<Link className="font-bold text-white text-xl"  href="https://github.com/NoriesDev">
<FaGithub className="w-[35px] h-[35px] hover:text-rosa" /></Link>
</div>
<div className="flex">
<Link className="font-bold text-white text-xl"  href="https://www.instagram.com/nm.development?igsh=MXcwMjAzZHV5bmw3MA%3D%3D&utm_source=qr">
<FaInstagramSquare className="w-[35px] h-[35px] hover:text-rosa" />
</Link>
</div>
<div className="flex">
<Link className="font-bold text-white text-xl"  href="https://www.tiktok.com/@nm.development">
<FaTiktok className="w-[35px] h-[35px]  hover:text-rosa" /></Link>
</div>
</CardBody>
<Button className="font-four text-sm hover:bg-rosa/50 bg-white/20 text-white hover:text-beige font-bold  mx-auto mt-4 block lg:hidden" onClick={handleContact}>Contact</Button>
</Card>
    </>
  )
}

export default Contact1;