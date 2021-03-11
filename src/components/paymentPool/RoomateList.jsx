import React from 'react';
import PropTypes from 'prop-types';
import styles from './RoomateList.css';

const RoomateList = ({ roomates, transactions }) => {


  const roomateElements = transactions.map(transactions => (
    <div 
      key={transactions.id}
      className={styles.container}>
          {/* Indicator for paymentmade */}
        {true ? 'Paid up' : 'Needs to Pay'}
      <li>
        {transactions.name}
      </li >

      <li>
                ${transactions.monthlyCost}
      </li>

    </div>
  ));

  return <ul className={styles.RoomateList}
    data-testid="roomates">
    {roomateElements}
  </ul>;
};

RoomateList.propTypes = {
  roomates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      monthlyCost: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default RoomateList;
