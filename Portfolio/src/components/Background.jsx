import { useBackgroundContext } from '../Context/context';
import { FaLightbulb } from "react-icons/fa";


function Background() {
  const { currentBg, changeBackground } = useBackgroundContext();

  return (
    <>
    <div className="absolute z-[-50]">
      <div  className="relative z--40]">
      <img src={currentBg} alt="background image" className="w-full h-full object-cover bg-gradient-to-b" />

      </div>
    </div>
          <button  className="fixed top-20 w-[65px] h-[65px] right-4 px-4 py-2 bg-beige/50 hover:bg-rosa/50 hover:text-beige text-white rounded-full z-10" onClick={changeBackground}>
          <FaLightbulb className='text-3xl'/>
        </button>
        </>
  );
}


export default Background;
