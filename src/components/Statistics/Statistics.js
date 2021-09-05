import React from 'react';
import PropTypes from 'prop-types';
import s from './Statics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <p>good: {good}</p>
      </li>
      <li className={s.item}>
        <p>neutral: {neutral}</p>
      </li>
      <li className={s.item}>
        <p>bad: {bad}</p>
      </li>
      <li className={s.item}>
        <p>total: {total}</p>
      </li>
      <li className={s.item}>
        <p>positive feedback: {positiveFeedback} %</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
