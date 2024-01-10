import { Card, CardBody, Image } from '@nextui-org/react';
import logo from '../assets/Logo.png'

function Logo() {

    
    return ( 
      <>
    <Card className='rounded bg-black/20 mx-auto justify-center  my-4 '>
        <CardBody className='flex-col justify-center items-center bg-black/0 rounded-none z-0'>
        <Image className='w-[350px] h-[350px]' src={logo}/>
        </CardBody>
    </Card>
      </>
    )
  }
  
  export default Logo
  