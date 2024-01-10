import Logo1 from '../assets/Logo1.png';


function Foot() {

  return (
    <>
    <footer className="flex flex-col max-w-[100vw] overflow-hidden font-four">
      <div className="flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center bg-black/0 text-white absolute z-[100] w-full mt-4">
        <div className='flex justify-center '>
        <img src={Logo1} alt="Logo" className="object-cover w-[140px] h-[140px] mx-auto" />
        </div>
        <div className='text-center text-white lg:mb-8 my-4 ml-8'>
        <h5>Privacy Policy | © 2024 Design by Nora Martiny</h5>

      </div>
      </div>
      </footer>
    </>
  )
}

export default Foot;