import Logo from "../../Logo";
import style from "../Header.module.scss";
import Exitbutton from "../../Buttons/DropdownButton/ExitButton";
 import { Link } from "react-router-dom";

export default function HeaderDropdown (){

  return (
    <div className={style.header + " " + "container" }>
      <Logo name="logo-white"/>
      <Link to={"/"}>
      <Exitbutton/>
      </Link>
    </div>
  );
}