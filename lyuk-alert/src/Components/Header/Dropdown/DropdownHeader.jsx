// import Button from "../../Buttons/Button/Button";
import Logo from "../../Logo";
import './dropdownHeader.scss';

 import { Link } from "react-router-dom";

export default function HeaderDropdown (){
 
  return (
    <div className="headerDrop" >
      <Logo name="logo-main-white"/>
      <Link to={"/"}>
      <button className="imgbtn"></button>
      </Link>
    </div>
  );
}