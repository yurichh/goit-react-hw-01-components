import React from 'react';
import CSS from './styles.module.css';
import FriendlistItem from '../FriendlistItem/FriendlistItem';

const Friendlist = ({ friendlist }) => {
  return (
    <ul className={CSS.list}>
      <FriendlistItem friends={friendlist} />
    </ul>
  );
};

export default Friendlist;
