import style from "./Header.module.scss";
import Logo from "../Logo";
import Dropdown from "./Dropdown/Dropdown";
export default function Header (){
  return (
    <div className={style.header + " " + "container" }>
      <Logo name="logo-main-orange"/>
      <Dropdown/>
    </div>
  );
}