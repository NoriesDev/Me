import { Card, CardHeader,  Image, CardBody, Link  } from "@nextui-org/react";
import k1 from '../assets/ketano.png'
import k2 from '../assets/ketano1.png'
import { TbBrandWordpress } from "react-icons/tb";

import { TbWorldWww } from "react-icons/tb";


const KetanoBig = () => {

    return (
        <>
            <Card className=" bg-black/0 z-0 flex w-[95%] md:w-[70%] lg:w-[55%] my-12 justify-center items-center mx-auto ">

                <CardHeader className="flex-col  justify-center text-center bg-black/20 rounded ">
            <div className="mt-4">
            <p className="text-beige font-bold text-3xl font-four" >Ketano catering</p>
            <p className="text-white font-bold text-xl font-four">My very first website</p>
            </div>
            <div className="text-white font-four text-center mx-8 md:mx-16 lg:mx-28 xl:-mx-38 my-8">
                <p>Ketano Catering was the very first website I created over a year ago. Ketano is a catering service based in South Africa that serves delicious Mediterranean food with a South African twist. The website is an informative site that tells the vision of Ketano, it includes a blog section where the user can find current menus and previous events Ketano has catered for and all the ways to contact Ketano.</p>
            </div>
            <div className="flex my-4">
            <h3 className="text-white font-bold">TECH STACK:</h3>
            </div>
            <div className="flex mb-4">
<TbBrandWordpress  className="text-white text-6xl mx-2"/>
            </div>
            <div className="flex my-4 font-four">
                <TbWorldWww className="text-white text-3xl mx-2"/>
                <Link href="https://www.ketano.co.za/" className="text-rosa hover:text-beige text-xl mx-2">View Page</Link>
            </div>
            </CardHeader>
            <CardBody className="flex-col xl:flex-row gap-2 lg:gap-4 items-center justify-center mx-auto">
            <Image src={k1} className=" z-[1] relative rounded  h-[260px] w-[500px] object-cover my-2" />
            <Image src={k2} className=" z-[1] relative rounded  h-[260px] w-[500px] object-cover my-2" />

            </CardBody>
        </Card>
        </>
    );
};

export default KetanoBig;
