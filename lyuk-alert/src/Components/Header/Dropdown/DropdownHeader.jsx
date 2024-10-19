import Logo from "../../Logo";
import SvgSelector from "../../SvgSelector";
import "./dropdownHeader.scss";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderDropdown() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Возвращает на предыдущую страницу
  };
  return (
    <div className="headerDrop container">
      <Link to={"/"}> <Logo name="logo-main-white"/></Link>
      <button onClick={handleBack}>
        <SvgSelector name="menu-close"/>
      </button>
    </div>
  );
}
