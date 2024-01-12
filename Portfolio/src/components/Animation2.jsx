import { Card, CardBody } from '@nextui-org/react';
import Animation from "./Animation.jsx";


function Animation2() {

    
    return (
      <>
    <Card className='rounded w-[95vw] lg:w-[60vw] lg:my-20 h-[20vh] bg-black/0 mx-auto justify-center '>
        <CardBody className='flex-col justify-center bg-black/0 rounded-none'>

            <Animation texts={[
              "You've stumbled upon my little haven — a fusion of creativity, passion, and a sprinkle of coding marvels...",
              "I want to bring exceptional ideas to a global audience, steering phenomenal companies towards greater visibility and impactful marketing opportunities...",
            ]}
            speed={100} 
             />
        </CardBody>
    </Card>
      </>
    )
  }
  
  export default Animation2
  