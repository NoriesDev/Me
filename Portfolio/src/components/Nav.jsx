import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, Image } from "@nextui-org/react";
import Logo from '/Logo1.png';
import {useNavigate} from 'react-router-dom'




function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate()

  const handleAbout = () => {
      navigate('/about');
    };
    const handleContact = () => {
      navigate('/contact');
    };
    const handleProject = () => {
      navigate('/projects');
    };
    const handleHome = () => {
      navigate('/');
    };
  
    const handleG = () => {
      navigate('/gallery');
    };

    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-two/20 text-white  sticky top-0 z-10 font-four">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
          <Image  alt="Album cover"
              className="object-cover w-[80px] h-[80px] mb-2 mt-6 mr-12 rounded-none"
              src={Logo} />
            <p onClick={handleHome} className="font-bold text-inherit   md:hidden lg:block  hover:text-rosa/50">Nora Martiny</p>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex lg:gap-8 xl:gap-12 " justify="center">
          <NavbarItem  >
            <Button onClick={handleHome} 
            variant="flat"  className="bg-white/10 text-white hover:text-beige hover:bg-rosa/20">
              Home
            </Button>
          </NavbarItem>
          <NavbarItem >
            <Button onClick={handleAbout} 
            variant="flat"  className="bg-white/10 text-white hover:text-beige hover:bg-rosa/20">
              About
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button onClick={handleProject}
            variant="flat"  className="bg-white/10 text-white hover:text-beige hover:bg-rosa/20">
            Projects
            </Button>
          </NavbarItem>
          <NavbarItem>
          <Button onClick={handleG}
            variant="flat"  className="bg-white/10 text-white hover:text-beige hover:bg-rosa/20">
            Gallery
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button onClick={handleContact} variant="flat" className="bg-white/10 text-white hover:text-beige hover:bg-rosa/20">
            Contact
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="inline-block flex flex-wrap gap-2 bg-black/20 w-[30%] mb-48">

    <NavbarMenuItem >
      <Button onClick={handleHome} 
      variant="flat"  className="bg-white/10 text-white hover:text-beige hover:bg-rosa/20">
        Home
      </Button>
    </NavbarMenuItem>
    <NavbarItem >
            <Button onClick={handleAbout} 
            variant="flat"  className="bg-white/10 text-white hover:text-beige hover:bg-rosa/20">
              About
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button onClick={handleProject}
            variant="flat"  className="bg-white/10 text-white hover:text-beige hover:bg-rosa/20">
            Projects
            </Button>
          </NavbarItem>
          <NavbarItem>
          <Button onClick={handleG}
            variant="flat"  className="bg-white/10 text-white hover:text-beige hover:bg-rosa/20">
            Gallery
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button onClick={handleContact} variant="flat" className="bg-white/10 text-white hover:text-beige hover:bg-rosa/20">
            Contact
            </Button>
          </NavbarItem>
</NavbarMenu>

      </Navbar>
    );
  
  }
  
  export default Nav
  




