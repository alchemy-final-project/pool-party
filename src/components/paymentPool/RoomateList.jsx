import React from 'react';
import PropTypes from 'prop-types';
import styles from './RoomateList.css';
import beachball_balloon from '../../images/beachball_balloon.png';

const RoomateList = ({ roomates, transactions }) => {
  console.log(transactions);
  const roomateElements = transactions.map(transactions => (
    <div key={transactions.id} className={styles.container}>
      <img src={beachball_balloon} alt="beachball" />
      <li key={transactions.id} >
        {transactions.name}'s Monthly Cost Is
      </li >
      <li
        key={transactions.id}
        style={{ color: 'magenta', fontSize: '30px', fontWeight: 'bold' }}>
                ${transactions.monthly_cost}
      </li>
      <li>Paid? {transactions.payment_confirmed === true 
        ? 'Payments Processed' 
        : transactions.payment_confirmed != null
          ? 'In Queue'
          : 'NO'}
      </li>
    </div >
  ));

  return (
    
    <ul className={styles.RoomateList} style={{ marginTop: '300px', minHeight: '300px' }}
      data-testid="roomates">
      <li className={styles.container}>Roommate Payment Status</li>
      {roomateElements}
    </ul>
    
  );
};

RoomateList.propTypes = {
  roomates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      monthlyCost: PropTypes.number.isRequired
    }).isRequired
<<<<<<< HEAD
  ).isRequired,
  transactions: PropTypes.array
=======
  ).isRequired
>>>>>>> c81f4afd038f54865bd5fa2983c7dae3f72a2032
};

export default RoomateList;
