import React from 'react';
import PropTypes from 'prop-types';
import styles from './DateDropdowns.css';

function DateDropdowns({ onRentYearChange, onRentMonthChange }) {

  const years = ['2021', '2022'];
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const yearsHtml = years.map(year =>
    <option key={year} value={year}>{year}</option>
  );

  const monthsHtml = months.map(month =>
    <option key={month} value={month}>{month}</option>
  );

  return (
    <div>
      <label className={styles.label}>Month
        <select onChange={(event) => onRentMonthChange(event.target.value)}>
          {monthsHtml}
        </select>
      </label>
      <label className={styles.label}>Years
        <select onChange={(event) => onRentYearChange(event.target.value)}>
          {yearsHtml}
        </select>
      </label>
    </div>
  );
}

DateDropdowns.propTypes = {
  onRentYearChange: PropTypes.func.isRequired,
  onRentMonthChange: PropTypes.func.isRequired
};

export default DateDropdowns;
