import React from 'react';
import CSS from './styles.module.css';
import { getRandomHexColor } from '../../utils/getRandomColor';
const Statistics = ({ title, items }) => {
  return (
    <section className={CSS.statistics}>
      {title && <h2 className={CSS.title}>{title}</h2>}
      <ul className={CSS.list}>
        {items.map(item => (
          <li
            className={CSS.item}
            style={{ backgroundColor: getRandomHexColor() }}
            key={item.id}
          >
            <span className={CSS.label}>{item.label}</span>
            <span className={CSS.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
