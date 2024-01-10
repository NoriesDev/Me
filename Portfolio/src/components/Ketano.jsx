
import { Card, CardHeader,  Image, Button } from "@nextui-org/react";
import {useNavigate} from 'react-router-dom'
import k1 from '/ketano1.png'
import { TbBrandWordpress } from "react-icons/tb";


const Ketan = () => {
    const navigate = useNavigate()

    const handlePf = () => {
        navigate('/kc');
      };
    

    return (
        <>
            <Card className=" bg-black/0 z-0 flex my-20 px-2 justify-center items-center mx-auto font-four rounded">

                <CardHeader className="flex-col z-[2] absolute justify-center text-center bg-black/50  w-full h-full rounded ">
            <p className="text-beige font-bold text-3xl font-four" >Ketano Catering</p>
            <p className="text-white font-bold text-xl font-four">My first website</p>

            <div className="flex mt-2">
            <h3 className="text-white font-bold my-1">TECH STACK:</h3>
            </div>
            <div className="flex mb-4">
            <TbBrandWordpress  className="text-white text-4xl mx-2"/>

            </div>
            
            <Button onClick={handlePf} className="hover:bg-rosa/50 bg-white/20 text-white hover:text-beige hover:bg-rosa/50 font-bold w-[200px] mx-auto" >View more</Button>
            </CardHeader>

            <Image src={k1} className=" z-[1] relative rounded  h-[225px] w-[500px] object-cover my-2" />
          
        </Card>
        </>
    );
};

export default Ketan;