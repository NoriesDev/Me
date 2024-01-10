import { Card, CardBody } from '@nextui-org/react';
import Animation from "./Animation.jsx";


function Animation3() {

    
    return (
      <>
    <Card className='rounded w-[95vw] lg:w-[55vw]  h-[20vh] bg-black/0 mx-auto justify-center '>
        <CardBody className='flex-col justify-center bg-black/0 rounded-none'>

            <Animation texts={[
              "Check my Linkedin Profile..",
              "Join my Discord Server...",
              "You would like to see my code? Feel free to look around on my GitHub Profile..",
              "Don't miss a thing and join my Instagram Fam!",
              "Follow along my journey via TikTok",
            ]}
            speed={100} 
             />
        </CardBody>
    </Card>
      </>
    )
  }
  
  export default Animation3
  