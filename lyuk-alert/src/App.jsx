import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import  Mainpage from "./Components/body/body";
import Dropdown from "./Components/Header/Dropdown/Dropdown";
import {   Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/Dropdown' element={<Dropdown/>}/>
      </Routes>
      <Footer/>
    </div>
  );

}
