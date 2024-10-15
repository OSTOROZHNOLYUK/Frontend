import React, { useState } from 'react';
import HeaderDropdown from './DropdownHeader';

const Dropdown = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    { title: 'Оставить заявку', content: ['История создания проекта', ' статистика', 'результаты' ]},
    { title: 'Открытые люки в моем городе', content: ['История создания проекта', ' статистика', 'результаты' ] },
    { title: 'О проекте', content: ['История создания проекта', ' статистика', 'результаты' ] },
    { title: 'Как помочь', content: ['История создания проекта', ' статистика', 'результаты' ] },
    { title: 'Полезные ресурсы', content: ['История создания проекта', ' статистика', 'результаты' ] },
    { title: 'Новости', content: ['История создания проекта', ' статистика', 'результаты' ] },
    { title: 'Контакты',content: ['История создания проекта', ' статистика', 'результаты' ]},
  ];

  const toggleItem = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  // const handleToggle = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  return (
    <>
    <HeaderDropdown/>
        <div style={{ backgroundColor: '#F86724', color: 'white', padding: '20px' }}>
      <ul>
        {items.map((item, index) => (
          <li className="title" key={index} onClick={() => toggleItem(index)} style={{ cursor: 'pointer' }}>
            {item.title}
            {activeIndex === index && <span> &darr;</span>}
            {activeIndex === index && (
            <div style={{ marginLeft: '20px', marginTop: '5px' }}>
             {item.content.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
            </div>
            )}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Dropdown;




