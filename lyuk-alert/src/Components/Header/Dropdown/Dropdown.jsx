import style from "./Dropdown.module.scss";
import Menu from "../../Buttons/MenuButton/MenuButton";
import Button from "../../Buttons/Button/Button";

import { useState } from "react";

export default function Dropdown() {
  const [dropdownState, setDropdownState] = useState({ open: false });

  const handleDropdownClick = () =>
    setDropdownState({ open: !dropdownState.open });

  return (
    <div className={style.dropdownBlock}>
      <Button type="button" onClick={handleDropdownClick}>
        <Menu name="menu-default" />
      </Button>
      {dropdownState.open && (
        <div className={style.dropdown}>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      )}
    </div>
  );
}
