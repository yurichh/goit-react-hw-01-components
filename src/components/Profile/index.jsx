import React from 'react';
import CSS from './styles.module.css';

const Profile = props => {
  return (
    <div className={CSS.profile}>
      <div className={CSS.description}>
        <img src={props.avatar} alt={props.username} className={CSS.avatar} />
        <p className={CSS.name}>{props.username}</p>
        <p className={CSS.tag}>@{props.tag}</p>
        <p className={CSS.location}>{props.location}</p>
      </div>

      <ul className={CSS.stats}>
        <li>
          <span className={CSS.label}>Followers</span>
          <span className={CSS.quantity}>{props.stats.followers}</span>
        </li>
        <li>
          <span className={CSS.label}>Views</span>
          <span className={CSS.quantity}>{props.stats.views}</span>
        </li>
        <li>
          <span className={CSS.label}>Likes</span>
          <span className={CSS.quantity}>{props.stats.likes} ♥</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
