import Foot from "../components/Foot.jsx"
import Nav from "../components/Nav.jsx"
import ContactComp from "../components/ContactComp.jsx"
import Form from '../components/Form1.jsx'
import Logo from "../components/Logo.jsx"

function Contact() {


  return (
    <>
   <Nav />
   <div className="text-white font-four text-5xl text-center font-bold my-12">
    <p>CONTACT</p>
   </div>
   <div className="flex flex-col xl:flex-row my-12 mx-auto justify-center">
   <Form />
   <ContactComp />
   <Logo/>
   </div>
   <Foot />
    </>
  )
}

export default Contact
