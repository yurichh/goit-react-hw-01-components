import React from 'react';
import CSS from './styles.module.css';
import FriendlistItem from '../FriendlistItem/FriendlistItem';

const Friendlist = ({ friendlist }) => {
  return (
    <ul className={CSS.list}>
      {friendlist.map(friend => (
        <FriendlistItem
          id={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default Friendlist;
