import Footer from "./Components/Footer/Footer";
import Mainpage from "./Components/body/body";
import Dropdown from "./Components/Header/Dropdown/Dropdown";
import {   Route, Routes} from 'react-router-dom';
import Application from "./Components/application/application";
import Map from "./Components/map/map";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/Dropdown' element={<Dropdown/>}/>
        <Route path='/Application' element={<Application/>}/>
        <Route path='/Map' element={<Map/>}/>
      </Routes>
      <Footer/>
    </div>
  );

}
