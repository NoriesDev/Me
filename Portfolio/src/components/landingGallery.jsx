import { Card,  Image, Button, CardHeader } from "@nextui-org/react";
import {useNavigate} from 'react-router-dom'
import bgm from '/gal1.png';
import bgm1 from '/gal2.png';
import bgm3 from '/gal4.png';


function LandingGallery() {
    const navigate = useNavigate()    
      const handleG = () => {
        navigate('/gallery');
      };
    

  return (
    <>
   <Card className="flex justify-center items-center mx-auto px-8 my-8 rounded bg-black/10">
      <CardHeader className="z-[2] text-beige text-xl font-four font-bold text-center mx-auto">
        <h3 className="my-4">Digital art gallery</h3>
      </CardHeader>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col lg:flex-row">
          <div className="flex lg:w-1/2">
            <Image src={bgm1} className="z-[1] relative rounded w-[250px] h-[500px] lg:h-auto object-cover my-2 mx-auto" />
          </div>
          <div className="flex lg:w-1/2 flex-col justify-center mx-auto gap-8">
            <Image src={bgm} className="z-[1] relative rounded w-[200px] h-[200px] lg:h-auto object-cover my-2 mx-auto" />
            <Image src={bgm3} className="z-[1] relative rounded w-[200px] h-[200px] lg:h-auto object-cover my-2" />
          </div>

        </div>
      </div>
      <Button className="bg-white/20 text-white hover:bg-rosa/50 hover:text-beige font-four font-bold my-8" onClick={handleG}>Gallery</Button>
    </Card>
    </>
  )
}

export default LandingGallery