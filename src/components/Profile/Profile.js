import p from './Profile.module.css';
import PropTypes from "prop-types";

const Profile = ({
    username  ,
    tag ,
    location ,
    avatar ,
    stats ,
  }) => {
    return (
        <div className={p.profile}>
        <div className={p.description}>
          <img
            src={avatar}
            alt={username}
            className={p.avatar}
          />
          <p className={p.name}>{username}</p>
          <p className={p.tag}>{tag}</p>
          <p className={p.location}>{location}</p>
        </div>
      
        <ul className={p.stats}>
          <li className={p.item}>
            <span className={p.label}>Followers</span>
            <span className={p.quantity}>{stats.followers}</span>
          </li>
          <li className={p.item}>
            <span className={p.label}>Views</span>
            <span className={p.quantity}>{stats.views}</span>
          </li>
          <li className={p.item}>
            <span className={p.label}>Likes</span>
            <span className={p.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  };
  
  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
      }),   
  };
  
  export default Profile;