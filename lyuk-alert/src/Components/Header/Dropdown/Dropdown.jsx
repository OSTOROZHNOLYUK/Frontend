import React, { useState } from 'react';
import HeaderDropdown from './DropdownHeader';

const Dropdown = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    'Оставить заявку', 
    'Открытые люки в моем городе',
    'О проекте',
    'Как помочь',
    'Полезные ресурсы',
    'Новости',
    'Контакты',
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <HeaderDropdown/>
    <div style={{ backgroundColor: '#F86724', padding: '20px' }}>
      <ul style={{ listStyle: 'none', padding: 0, gap: 16}}>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleToggle(index)}
            style={{
              cursor: 'pointer',
              color: 'white',
              padding: '10px',
              borderBottom: '1px solid white',
            }}
          >
            {item}
            {activeIndex === index && (
              <span style={{ marginLeft: '10px' }}>&#8594;</span>
            )}
            {activeIndex === index && (
              <div style={{ marginTop: '10px', color: 'white' }}>
                Содержимое {item}
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