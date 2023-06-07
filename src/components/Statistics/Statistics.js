import s from './Statistics.module.css';
import PropTypes from "prop-types";

const Statistics = () => {
return (
  <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
  {items.map(({ id, label, percentage }) => (<li key={id}><span>{label}</span><span>{percentage}</span></li>))}
  </ul>
</section>
);
};

export default Profile;