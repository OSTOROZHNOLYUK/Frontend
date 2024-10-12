import Header from "./Components/Header/Header";
import Dropdown from "./Components/Header/Dropdown/Dropdown";
import {   Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/Dropdown' element={<Dropdown/>}/>
      </Routes>
    </div>
  );

}
