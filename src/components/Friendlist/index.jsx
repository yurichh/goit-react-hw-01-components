import React from 'react';
import CSS from './styles.module.css';

const Friendlist = ({ friends }) => {
  return (
    <ul className={CSS.list}>
      {friends.map(friend => (
        <li key={friend.id} className={CSS.item}>
          <img
            className={CSS.avatar}
            src={friend.avatar}
            alt="{friend.name} avatar"
            width="48"
          />
          <p className={CSS.name}>
            {friend.name}
            {friend.isOnline ? (
              <span className={CSS.statusOnline}></span>
            ) : (
              <span className={CSS.statusOffline}></span>
            )}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Friendlist;
