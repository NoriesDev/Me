import { Card,  Image,  CardHeader } from "@nextui-org/react";
import bgm from '../assets/bgm.png';
import bgm1 from '../assets/bgm1.png';


function BigGallery() {

  return (
    <>
   <Card className="flex justify-center justify-content-center items-center mx-auto px-8 my-8 rounded  bg-black/10">
   <CardHeader className="z-[2] text-beige text-xl font-four font-bold text-center mx-auto">
  <h3 className="my-4">My Digital Art Gallery</h3>
</CardHeader>
    <div className="flex gap-8">
<Image src={bgm} className=" z-[1] relative rounded  w-auto h-[500px] object-cover my-2" />
<Image src={bgm1} className=" z-[1] relative rounded  w-auto  h-[500px] object-cover my-2" />
</div>
   </Card>
    </>
  )
}

export default BigGallery