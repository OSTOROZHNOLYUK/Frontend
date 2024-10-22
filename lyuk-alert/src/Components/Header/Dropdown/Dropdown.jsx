import React, { useState } from "react";
import HeaderDropdown from "./DropdownHeader";
import { Link } from "react-router-dom";
const Dropdown = () => {
  // const [activeIndex, setActiveIndex] = useState(null);

  // const items = [
  //   { title: 'Оставить заявку', content: ['Оставить заявку' ], link:["/application"]},
  //   { title: 'Открытые люки в моем городе', content: ['Открытые люки в моем городе' ] },
  //   { title: 'О проекте', content: ['История создания проекта', ' статистика', 'результаты' ] },
  //   { title: 'Как помочь', content: ['Как помочь' ] },
  //   { title: 'Полезные ресурсы', content: ['Полезные ресурсы' ] },
  //   { title: 'Новости', content: ['Новости'] },
  //   { title: 'Контакты',content: ['Контакты']},
  // ];

  // const toggleItem = (index) => {
  //   if (activeIndex === index) {
  //     setActiveIndex(null);
  //   } else {
  //     setActiveIndex(index);
  //   }
  // };
  // const handleToggle = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  return (
    <div style={{ height: "100vh" }}>
      <HeaderDropdown />
      <div className="dropdown container">
        <ul className="dropdown-ul">
          <Link to={"/application"}>
            <li className="dropdown-li"><h2>Оставить заявку</h2></li>
          </Link>
          <Link to={"/map"}>
            <li className="dropdown-li"><h2>Открытые люки <br /> в моем городе</h2></li>
          </Link>
          <Link to={"/news"}>
            <li className="dropdown-li"><h2>Как помочь</h2></li>
          </Link>
          <Link to={"/news"}>
            <li className="dropdown-li"><h2>Новости</h2></li>
          </Link>
        </ul>
      </div>
      {/* <div className="dropdown container" style={{ backgroundColor: '#F86724', color: 'white', padding: '20px', height: '100%' }}>
      <ul>
        {items.map((item, index) => (
          <li className="dropdown-title" key={index} onClick={() => toggleItem(index)} style={{ cursor: 'pointer' }}>
            <div>
            {item.title}
            {activeIndex === index && <span> &darr;</span>}
            </div>
            {activeIndex === index && (
            <div style={{ marginLeft: '20px', marginTop: '5px' }}>
             {item.content.map((line, idx, link) => (
              <div key={idx}>
                <Link to {...link}>{line}</Link>
              </div>
            ))}
            </div>
            )}
          </li>
        ))}
      </ul>
    </div> */}
    </div>
  );
};

export default Dropdown;
