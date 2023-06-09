import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import fl from './FriendList.module.css';

function FriendList({ friends }) {
    return (
      <ul className={fl.friendList}>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    );
  }

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ),
  };
  
  export default FriendList;