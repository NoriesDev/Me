import { Card,  Image, Button, CardHeader } from "@nextui-org/react";
import {useNavigate} from 'react-router-dom'
import bgm from '../assets/bgm.png';
import bgm1 from '../assets/bgm1.png';


function LandingGallery() {
    const navigate = useNavigate()    
      const handleG = () => {
        navigate('/gallery');
      };
    

  return (
    <>
   <Card className="flex justify-center justify-content-center items-center mx-auto px-8 my-8 rounded  bg-black/10">
   <CardHeader className="z-[2] text-beige text-xl font-four font-bold text-center mx-auto">
  <h3 className="my-4">Digital art gallery</h3>
</CardHeader>
    <div className="flex gap-8">
<Image src={bgm} className=" z-[1] relative rounded  w-auto h-[200px] object-cover my-2" />
<Image src={bgm1} className=" z-[1] relative rounded  w-auto  h-[200px] object-cover my-2" />
</div>
<Button className="bg-white/20 text-white hover:bg-rosa/50 hover:text-beige font-four font-bold my-8" onClick={handleG}>Gallery</Button>
   </Card>
    </>
  )
}

export default LandingGallery