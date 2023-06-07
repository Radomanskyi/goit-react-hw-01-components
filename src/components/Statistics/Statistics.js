import s from './Statistics.module.css';
import PropTypes from "prop-types";
import random from "./Random"

const Statistics = ({
  title,
  stats
}) => {
return (
  <section className={s.statistics}>
    {title && (<h2 className={s.title}>{title}</h2>)}
  <ul className={s.statList}>
  {stats.map(({ id, label, percentage }) => (<li key={id} className={s.item} style={{
        backgroundColor: random,
      }}><span className={s.label}>{label}</span><span className={s.percentage}>{percentage}{'%'}</span></li>))}
  </ul>
</section>
);
};

Statistics.propTypes = {
title: PropTypes.string,
id: PropTypes.number,
label: PropTypes.string,
percentage: PropTypes.number
};

export default Statistics;