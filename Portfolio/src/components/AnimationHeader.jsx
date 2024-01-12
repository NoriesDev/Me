import { Card, CardBody, Image } from '@nextui-org/react';
import logo from '/Logo.png'

function AnimatedHeader() {

    
    return (
      <>
    <Card className='rounded w-[95vw] lg:w-[70vw] bg-black/0 mx-auto justify-center my-8 '>
        <CardBody className='flex-col justify-center items-center bg-black/0 rounded-none z-0'>
        <Image className='w-[300px] h-[300px] md:w-[500px] md:h-[500px]' src={logo}/>
        </CardBody>
    </Card>
      </>
    )
  }
  
  export default AnimatedHeader
  