// import Button from "../../Buttons/Button/Button";
import Logo from "../../Logo";
import './dropdownHeader.scss';
 import { Link, useNavigate } from "react-router-dom";

export default function HeaderDropdown (){
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Возвращает на предыдущую страницу
  };
  return (
    <div className="headerDrop container" >
      <Logo name="logo-main-white"/>
      <button className="imgbtn" onClick={handleBack}></button>
    </div>
  );
}