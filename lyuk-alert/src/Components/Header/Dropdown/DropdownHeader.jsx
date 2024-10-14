import Logo from "../../Logo";
import './dropdownHeader.scss';
// import style from "./dropdownHeader.scss";
import Exitbutton from "../../Buttons/DropdownButton/ExitButton";
 import { Link } from "react-router-dom";

export default function HeaderDropdown (){

  return (
    <div className="headerDrop" >
      <Logo name="logo-main-white"/>
      <Link to={"/"}>
      <Exitbutton/>
      </Link>
    </div>
  );
}