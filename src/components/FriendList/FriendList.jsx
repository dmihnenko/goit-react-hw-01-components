import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendListItem.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.listItem}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
    friends: PropTypes.array,
    
};