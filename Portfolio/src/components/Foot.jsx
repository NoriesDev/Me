import Logo1 from '/Logo1.png';


function Foot() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black/0 text-white h-[200px]  w-full font-four">
      <div className="flex justify-center">
        <img src={Logo1} alt="Logo" className="object-cover w-[140px] h-[140px] mx-auto" />
      </div>
      <div className='text-center text-white my-2'>
        <h5>Privacy Policy</h5>
        <p>© 2024 Nora Martiny</p>
      </div>
    </footer>
  );
}

export default Foot;
