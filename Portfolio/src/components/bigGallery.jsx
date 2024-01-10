import { Card,  Image } from "@nextui-org/react";
import bgm from '/gal1.png';
import bgm1 from '/gal2.png';
import bgm2 from '/gal3.png';
import bgm3 from '/gal4.png';


function BigGallery() {

  return (
    <>
   <Card className="flex justify-center justify-content-center items-center mx-auto lg:px-8 my-8 rounded  bg-black/0">
<div className="flex flex-col lg:flex-row">
    <div className="flex gap-8 mx-auto">
<Image src={bgm1} className=" z-[1] relative rounded  w-auto h-[600px] lg:h-[92.5vh] object-cover my-4 mx-4 bg-black/10" />
</div>
<div className="flex-col mx-auto">
<Image src={bgm} className=" z-[1] relative rounded  w-auto h-[300px] lg:h-[400px] object-cover my-4  mx-4 bg-black/10" />
<Image src={bgm3} className=" z-[1] relative rounded  w-auto h-[300px]  lg:h-[400px] object-cover my-4 mx-4 bg-black/10" />

</div>

</div>
<div className="flex gap-8">
<Image src={bgm2} className=" z-[1] relative rounded  w-auto h-[300px] lg:h-[400px] object-cover my-4 bg-black/10" />
</div>
   </Card>
    </>
  )
}

export default BigGallery