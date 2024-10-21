import Mainpage from "./Components/body/body";
import Dropdown from "./Components/Header/Dropdown/Dropdown";
import {   Route, Routes} from 'react-router-dom';
import Application from "./Components/application/application";
import Map from "./Components/map/map";
import News from "./Components/news/news"
import Thanks from "./Components/application/thanks";
import EmailSubscriptionPage from "./Components/application/email";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/Dropdown' element={<Dropdown/>}/>
        <Route path='/Application' element={<Application/>}/>
        <Route path='/Map' element={<Map/>}/>
        <Route path='/News' element={<News/>}/>
        <Route path='/thanks' element={<Thanks/>}/>
        <Route path='/email' element={<EmailSubscriptionPage/>}/>
      </Routes>
    </div>
  );

}
