import PropTypes from 'prop-types';
import f from './FriendListItem.module.css';

const FriendListItem = ({
    avatar,
    name,
    isOnline,
}) => {
return (
<li className={f.item}>
    {isOnline ? (<div className={f.isOnline}></div>) : 
    (<div className={f.isOffline}></div>)
    }
  <img className={f.avatar} src={avatar} alt={name} width="48" />
  <p className={f.name}>{name}</p>
</li>
);
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
    };
    
    export default FriendListItem;

