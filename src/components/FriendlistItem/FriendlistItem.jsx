import CSS from './styles.module.css';
import React from 'react';

const FriendlistItem = ({ id, name, avatar, isOnline }) => {
  return (
    <li key={id} className={CSS.item}>
      <img
        className={CSS.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={CSS.name}>
        {name}
        <span
          className={isOnline ? CSS.statusOnline : CSS.statusOffline}
        ></span>
      </p>
    </li>
  );
};

export default FriendlistItem;
