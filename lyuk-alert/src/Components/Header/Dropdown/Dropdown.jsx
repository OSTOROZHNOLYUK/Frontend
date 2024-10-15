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
    {/* <div style={{ backgroundColor: '#F86724', padding: '20px' }}>
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
    </div> */}
        <div style={{ backgroundColor: '#F86724', color: 'white', padding: '20px' }}>
      <ul>
        {items.map((item, index) => (
          <li className="title" key={index} onClick={() => toggleItem(index)} style={{ cursor: 'pointer' }}>
            {item.title}
            {activeIndex === index && <span> &darr;</span>}
            {activeIndex === index && (
            <div style={{ marginLeft: '20px', marginTop: '5px' }}>
             {item.content.map((line, idx) => (
              <div key={idx}><strong>{line}</strong></div>
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




