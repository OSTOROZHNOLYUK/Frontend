import style from "./Header.module.scss";
import Logo from "../Logo";
import MenuButton from "../Buttons/MenuButton/MenuButton";
export default function Header (){
  return (
    <div className={style.header + " " + "container" }>
      <Logo name="logo-main-orange"/>
      <MenuButton/>

      {/* h1 для примера, потом удалить */}
      <h1>alert</h1>
    </div>
  );
}