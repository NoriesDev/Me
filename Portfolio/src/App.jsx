
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import GlobeHackers from './Pages/GlobeHacker';
import PokeFight from './Pages/PokeFight';
import WrenCreations from './Pages/WrenCreations';
import Ketano from './Pages/KetanoC';
import Gallery from './Pages/Gallery';



function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/gh' element={<GlobeHackers />} />
      <Route path='/pf' element={<PokeFight />} />
      <Route path='/wc' element={<WrenCreations />} />
      <Route path='/kc' element={<Ketano />} />
    </Routes>
  )
}

export default App
