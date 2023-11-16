import CSS from './styles.module.css';
import React from 'react';

const FriendlistItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li key={friend.id} className={CSS.item}>
          <img
            className={CSS.avatar}
            src={friend.avatar}
            alt={`${friend.name} avatar`}
            width="48"
          />
          <p className={CSS.name}>
            {friend.name}
            <span
              className={friend.isOnline ? CSS.statusOnline : CSS.statusOffline}
            ></span>
          </p>
        </li>
      ))}
    </>
  );
};

export default FriendlistItem;
