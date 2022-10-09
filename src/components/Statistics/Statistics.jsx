import PropTypes from 'prop-types';
import React from 'react';
export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <div>
        <p>Total: {total()}</p>
        <p>Positive feedback: {good === 0 ? '0%' : positivePercentage()}</p>
      </div>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
