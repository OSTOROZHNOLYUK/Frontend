import style from "./Header.module.scss";
import Logo from "../Logo";
 import MenuButton from "../Buttons/MenuButton/MenuButton";
 import { Link } from "react-router-dom";

export default function Header (){

  return (
    <div className={style.header + " " + "container" }>
      <Link to={"/"}> <Logo name="logo-main-orange"/></Link>
      <Link to={"/Dropdown"}>
      <MenuButton/>
      </Link>
    </div>
  );
}